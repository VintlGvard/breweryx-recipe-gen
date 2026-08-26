import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/lib/content";
import { LOCALES, GUIDE } from "@/lib/content";
import { breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  if (!LOCALES.includes(lang)) return {};
  const g = GUIDE[lang];
  return {
    title: g.meta.title,
    description: g.meta.description,
    keywords: g.meta.keywords,
    alternates: {
      canonical: `/${lang}/guide`,
      languages: {
        ru: "/ru/guide",
        en: "/en/guide",
        "x-default": "/ru/guide",
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}/guide`,
      siteName: "BreweryX Recipe Generator",
      title: g.meta.title,
      description: g.meta.description,
      locale: lang === "ru" ? "ru_RU" : "en_US",
      alternateLocale: [lang === "ru" ? "en_US" : "ru_RU"],
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: g.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: g.meta.title,
      description: g.meta.description,
      images: ["/og.png"],
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  if (!LOCALES.includes(lang)) notFound();

  const g = GUIDE[lang]!;

  const tocItems = g.sections.map((s, i) => ({
    id: `section-${i}`,
    label: s.heading,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, [
        { name: lang === "ru" ? "Главная" : "Home", url: `/${lang}` },
        { name: lang === "ru" ? "Справочник" : "Guide", url: `/${lang}/guide` },
      ], `/${lang}/guide`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(lang, {
        title: g.meta.title,
        description: g.meta.description,
        url: `/${lang}/guide`,
        sections: g.sections.map(s => s.heading),
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(lang === "ru" ? [
        { q: "Что такое BreweryX?", a: "BreweryX — это плагин для Minecraft (Spigot, Paper и Folia), который добавляет в игру полноценное пивоварение: брожение ингредиентов в котле, дистилляцию крепких напитков, выдержку в бочках из разных пород дерева и употребление готовых напитков с эффектами и опьянением." },
        { q: "Какой формат у рецептов BreweryX?", a: "Рецепт — это YAML-запись с ключами name, lore, ingredients, cookingtime, distillruns, wood, age, color, difficulty и опциональными alcohol, effects, customModelData и командами." },
        { q: "Какие ингредиенты можно использовать?", a: "Любые ванильные предметы Minecraft в формате МАТЕРИАЛ/КОЛИЧЕСТВО, например WHEAT/6 или WATER_BUCKET/1, а также предметы с CustomModelData из плагинов вроде ItemsAdder." },
        { q: "Что значат цветовые коды вроде &6?", a: "Это стандартные коды форматирования Minecraft: &6 — золотой, &c — красный, &l — жирный и так далее. Генератор поддерживает их в названиях, описаниях и надписях, а также HEX-цвета для новых версий." },
        { q: "Как работает качество напитка в BreweryX?", a: "Качество (плохое/среднее/хорошее) зависит от точности варки: чем выше difficulty, тем сложнее сварить хороший напиток. Можно задать разные надписи, эффекты и CustomModelData для каждого уровня качества." },
      ] : [
        { q: "What is BreweryX?", a: "BreweryX is a Minecraft plugin (Spigot, Paper, and Folia) that adds full brewing to the game: fermenting ingredients in a cauldron, distilling strong spirits, aging in barrels made from different wood types, and consuming finished drinks with effects and intoxication." },
        { q: "What is the format for BreweryX recipes?", a: "A recipe is a YAML entry with keys name, lore, ingredients, cookingtime, distillruns, wood, age, color, difficulty and optional alcohol, effects, customModelData and commands." },
        { q: "Which ingredients can I use?", a: "Any vanilla Minecraft item in the MATERIAL/AMOUNT format, e.g. WHEAT/6 or WATER_BUCKET/1, as well as items with CustomModelData from plugins like ItemsAdder." },
        { q: "What do color codes like &6 mean?", a: "These are standard Minecraft formatting codes: &6 is gold, &c is red, &l is bold, and so on. The generator supports them in names, lore, and display names, plus HEX colors for newer versions." },
        { q: "How does drink quality work in BreweryX?", a: "Quality (poor/average/good) depends on brewing precision: the higher the difficulty, the harder it is to make a good drink. You can set different display names, lore, effects, and CustomModelData for each quality level." },
      ], `/${lang}/guide`)) }} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="breadcrumb slide-in">
          <Link href={`/${lang}`}>{lang === "ru" ? "Главная" : "Home"}</Link>
          <span className="sep">→</span>
          <span>{lang === "ru" ? "Справочник" : "Guide"}</span>
        </nav>

        <div className="page-header fadeUp">
          <h1>{g.meta.title}</h1>
        </div>

        <details className="collapse-section mb-6 fadeUp stagger-1" open>
          <summary>
            {lang === "ru" ? "Введение" : "Introduction"}
          </summary>
          <div className="collapse-body">
            {g.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>

        <div className="guide-toc fadeUp stagger-2">
          <div className="guide-toc-title">
            {lang === "ru" ? "Содержание" : "Contents"}
          </div>
          <ul className="guide-toc-list">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {g.sections.map((section, i) => (
          <section key={i} id={`section-${i}`} className="mb-8 fadeUp scroll-mt-6" style={{ animationDelay: `${Math.min(0.1 + i * 0.05, 0.5)}s` }}>
            <details className="collapse-section" open>
              <summary>{section.heading}</summary>
              <div className="collapse-body">
                {section.paragraphs?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.list && (
                  <dl className="grid gap-2 mt-3">
                    {section.list.map((item, j) => (
                      <div key={j} className="recipe-param-card">
                        <div className="recipe-param-card-label">{item.term}</div>
                        <div className="recipe-param-card-value">{item.def}</div>
                      </div>
                    ))}
                  </dl>
                )}
                {section.code && (
                  <pre className="yaml-preview my-3 overflow-x-auto">{section.code}</pre>
                )}
              </div>
            </details>
          </section>
        ))}

        <hr className="section-divider" />

        <div className="fadeUp stagger-3 flex flex-wrap gap-2">
          <Link href={`/${lang}`} className="btn btn-primary">
            {lang === "ru" ? "Открыть генератор" : "Open generator"}
          </Link>
          <Link href={`/${lang}/recipes`} className="btn btn-outline">
            {lang === "ru" ? "Готовые рецепты" : "Ready recipes"}
          </Link>
        </div>
      </div>
    </>
  );
}
