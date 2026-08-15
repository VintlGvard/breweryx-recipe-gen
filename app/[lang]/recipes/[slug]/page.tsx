import { notFound } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/content";
import { LOCALES, RECIPES_CONTENT } from "@/lib/content";
import { ALL_RECIPES, COLORS, WOOD_TYPES, generateYaml, formFromRecord, getDisplayName, getItemLabel } from "@/lib/recipes";
import { breadcrumbJsonLd } from "@/lib/seo";

function getRecipeColor(slug: string): string {
  if (slug.includes("potion")) return "err";
  if (slug.includes("mead")) return "warn";
  return "accent";
}

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    ALL_RECIPES.map((ex) => ({ lang, slug: String(ex.recipe_id) }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  const content = RECIPES_CONTENT[lang]?.[slug];
  if (!content) return {};
  return {
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
  };
}

export default async function RecipeDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  if (!LOCALES.includes(lang)) notFound();

  const ex = ALL_RECIPES.find((e) => String(e.recipe_id) === slug);
  if (!ex) notFound();

  const content = RECIPES_CONTENT[lang]?.[slug];
  const colorKey = getRecipeColor(slug);

  const form = formFromRecord(ex);
  let yamlText = "";
  try {
    const result = generateYaml([form]);
    yamlText = result.yaml;
  } catch {
  }

  const displayName = getDisplayName(ex, lang, slug);

  const ingredients = String(ex.ingredients ?? "")
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [item, amount] = line.split("/");
      return `${getItemLabel(item, lang)} ×${amount}`;
    })
    .join(", ");

  const colorRaw = String(ex.color ?? "");
  const colorName = lang === "ru"
    ? (COLORS[colorRaw]?.ru ?? colorRaw)
    : (COLORS[colorRaw]?.en ?? colorRaw);

  const woodVal = Number(ex.wood ?? 0);
  const barrelName = woodVal > 0
    ? lang === "ru"
      ? (WOOD_TYPES[String(woodVal)]?.ru ?? `Тип ${woodVal}`)
      : (WOOD_TYPES[String(woodVal)]?.en ?? `Type ${woodVal}`)
    : lang === "ru" ? "Любая" : "Any";

  const ageVal = Number(ex.age ?? 0);
  const distillRuns = Number(ex.distillruns ?? 0);

  const dynamicParams: Array<{ label: string; value: string }> = [
    { label: "ID", value: slug },
    { label: lang === "ru" ? "Ингредиенты" : "Ingredients", value: ingredients },
  ];

  if (distillRuns > 0) {
    dynamicParams.push({
      label: lang === "ru" ? "Дистилляция" : "Distillation",
      value: `${distillRuns} ${lang === "ru" ? "перегонки" : "runs"}`,
    });
  }

  if (woodVal > 0) {
    dynamicParams.push({
      label: lang === "ru" ? "Бочка" : "Barrel",
      value: barrelName + (ageVal > 0 ? `, ${ageVal} ${lang === "ru" ? "дн." : "days"}` : ""),
    });
  }

  dynamicParams.push(
    { label: lang === "ru" ? "Время варки" : "Cooking time", value: `${ex.cookingtime} ${lang === "ru" ? "мин" : "min"}` },
    { label: lang === "ru" ? "Сложность" : "Difficulty", value: String(ex.difficulty) },
    { label: lang === "ru" ? "Алкоголь" : "Alcohol", value: `${ex.alcohol}%` },
    { label: lang === "ru" ? "Цвет" : "Color", value: colorName },
  );

  const effectsRaw = String(ex.effects ?? "");
  if (effectsRaw) {
    const effects = effectsRaw.split("\n").filter(Boolean).map((e) => e.split("/")[0]).join(", ");
    dynamicParams.push({ label: lang === "ru" ? "Эффекты" : "Effects", value: effects });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, [
        { name: lang === "ru" ? "Главная" : "Home", url: `/${lang}` },
        { name: lang === "ru" ? "Рецепты" : "Recipes", url: `/${lang}/recipes` },
        { name: String(displayName), url: `/${lang}/recipes/${slug}` },
      ])) }} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="breadcrumb slide-in">
          <Link href={`/${lang}`}>{lang === "ru" ? "Главная" : "Home"}</Link>
          <span className="sep">→</span>
          <Link href={`/${lang}/recipes`}>{lang === "ru" ? "Рецепты" : "Recipes"}</Link>
          <span className="sep">→</span>
          <span>{displayName}</span>
        </nav>

        <div className="page-header fadeUp">
          <h1>{displayName}</h1>
        </div>

        {content?.intro && content.intro.length > 0 && (
          <details className="collapse-section mb-6 fadeUp stagger-1" open>
            <summary>
              {lang === "ru" ? "О рецепте" : "About this recipe"}
            </summary>
            <div className="collapse-body">
              {content.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </details>
        )}

        <section className="mb-6">
          <h2 className="section-label fadeUp stagger-2">
            {lang === "ru" ? "Параметры рецепта" : "Recipe Parameters"}
          </h2>
          <div className="param-grid-compact">
            {dynamicParams.map((row, i) => (
              <div
                key={i}
                className={`recipe-param-card fadeUp stagger-${Math.min(i + 2, 6)}`}
                data-color={colorKey}
              >
                <div className="recipe-param-card-label">{row.label}</div>
                <div className="recipe-param-card-value">{row.value}</div>
              </div>
            ))}
          </div>
        </section>

        <details className="collapse-section mb-6 fadeUp stagger-3" open>
          <summary>
            YAML
            <span className="stat-mono ml-auto font-normal">
              {yamlText.split("\n").length} lines
            </span>
          </summary>
          <div className="collapse-body">
            <pre className="yaml-preview overflow-x-auto">{yamlText}</pre>
          </div>
        </details>

        {content?.installSteps && (
          <details className="collapse-section mb-6 fadeUp stagger-4">
            <summary>
              {lang === "ru" ? "Как установить на сервер" : "How to install on server"}
            </summary>
            <div className="collapse-body">
              {content.installSteps.map((step, i) => (
                <div key={i} className="install-step">
                  <span className="install-step-num">{i + 1}</span>
                  <span className="install-step-text">{step}</span>
                </div>
              ))}
            </div>
          </details>
        )}

        <hr className="section-divider" />

        <div className="fadeUp stagger-5 flex flex-wrap gap-2">
          <Link
            href={`/${lang}?load=${slug}`}
            className="btn btn-primary"
          >
            {lang === "ru" ? "Открыть в генераторе" : "Open in generator"}
          </Link>
          <Link href={`/${lang}/recipes`} className="btn btn-outline">
            {lang === "ru" ? "Все рецепты" : "All recipes"}
          </Link>
        </div>
      </div>
    </>
  );
}
