import { notFound } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/content";
import { LOCALES } from "@/lib/content";
import { ALL_RECIPES, getDisplayName } from "@/lib/recipes";
import { itemListJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  return {
    title: lang === "ru" ? "Готовые рецепты BreweryX — YAML-конфиги" : "Ready-Made BreweryX Recipes — YAML Configs",
    description: lang === "ru"
      ? "Каталог готовых YAML-рецептов для плагина BreweryX в Minecraft: пиво, виски, медовуха, зелья. Скачайте и используйте на своём сервере."
      : "Catalog of ready YAML recipes for the BreweryX Minecraft plugin: beer, whiskey, mead, potions. Download and use on your server.",
  };
}

export default async function RecipesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  if (!LOCALES.includes(lang)) notFound();

  const items = ALL_RECIPES.map((ex) => ({
    name: getDisplayName(ex, lang),
    url: `/${lang}/recipes/${String(ex.recipe_id)}`,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd(lang, items)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, [
        { name: lang === "ru" ? "Главная" : "Home", url: `/${lang}` },
        { name: lang === "ru" ? "Рецепты" : "Recipes", url: `/${lang}/recipes` },
      ])) }} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="breadcrumb slide-in">
          <Link href={`/${lang}`}>{lang === "ru" ? "Главная" : "Home"}</Link>
          <span className="sep">→</span>
          <span>{lang === "ru" ? "Рецепты" : "Recipes"}</span>
        </nav>

        <div className="page-header fadeUp">
          <h1>{lang === "ru" ? "Готовые рецепты BreweryX" : "Ready-Made BreweryX Recipes"}</h1>
          <p>
            {lang === "ru"
              ? "Каждый рецепт можно открыть в генераторе для редактирования или скачать готовый YAML-конфиг."
              : "Each recipe can be opened in the generator for editing or downloaded as a ready YAML config."}
          </p>
        </div>

        <div className="example-grid">
          {ALL_RECIPES.map((ex, i) => {
            const id = String(ex.recipe_id);
            return (
              <Link
                key={id}
                href={`/${lang}/recipes/${id}`}
                className="example-card fadeUp"
                style={{ animationDelay: `${Math.min(0.05 + i * 0.05, 0.4)}s` }}
              >
                <div className="example-card-name">{getDisplayName(ex, lang, id)}</div>
                <div className="example-card-link">
                  {lang === "ru" ? "Открыть →" : "Open →"}
                </div>
              </Link>
            );
          })}
        </div>

        <hr className="section-divider" />

        <div className="fadeUp stagger-4 flex flex-wrap gap-2">
          <Link href={`/${lang}`} className="btn btn-primary">
            {lang === "ru" ? "Открыть генератор" : "Open generator"}
          </Link>
          <Link href={`/${lang}/guide`} className="btn btn-outline">
            {lang === "ru" ? "Справочник" : "Guide"}
          </Link>
        </div>
      </div>
    </>
  );
}
