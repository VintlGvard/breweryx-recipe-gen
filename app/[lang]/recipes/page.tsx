import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/lib/content";
import { LOCALES } from "@/lib/content";
import { ALL_RECIPES, getDisplayName } from "@/lib/recipes";
import { itemListJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  if (!LOCALES.includes(lang)) return {};
  
  const title = lang === "ru" ? "Готовые рецепты BreweryX — YAML-конфиги" : "Ready-Made BreweryX Recipes — YAML Configs";
  const description = lang === "ru"
    ? "Каталог готовых YAML-рецептов для плагина BreweryX в Minecraft: пиво, виски, медовуха, зелья. Скачайте и используйте на своём сервере."
    : "Catalog of ready YAML recipes for the BreweryX Minecraft plugin: beer, whiskey, mead, potions. Download and use on your server.";
  
  return {
    title,
    description,
    keywords: lang === "ru"
      ? ["рецепты breweryx", "готовые рецепты breweryx", "breweryx yaml", "рецепты пива майнкрафт", "breweryx рецепты скачать"]
      : ["breweryx recipes", "ready breweryx recipes", "breweryx yaml", "minecraft beer recipes", "breweryx recipes download"],
    alternates: {
      canonical: `/${lang}/recipes`,
      languages: {
        ru: "/ru/recipes",
        en: "/en/recipes",
        "x-default": "/ru/recipes",
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}/recipes`,
      siteName: "BreweryX Recipe Generator",
      title,
      description,
      locale: lang === "ru" ? "ru_RU" : "en_US",
      alternateLocale: [lang === "ru" ? "en_US" : "ru_RU"],
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd(lang, items, `/${lang}/recipes`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, [
        { name: lang === "ru" ? "Главная" : "Home", url: `/${lang}` },
        { name: lang === "ru" ? "Рецепты" : "Recipes", url: `/${lang}/recipes` },
      ], `/${lang}/recipes`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(lang === "ru" ? [
        { q: "Как использовать готовые рецепты BreweryX?", a: "Скопируйте YAML-конфиг рецепта в файл plugins/BreweryX/recipes.yml (или добавьте в конец, если файл уже есть) и выполните команду перезагрузки плагина. Подробнее — в официальном руководстве." },
        { q: "Можно ли изменить готовые рецепты?", a: "Да, все рецепты можно открыть в генераторе и изменить любые параметры: ингредиенты, время варки, сложность, эффекты и т.д." },
        { q: "Какие типы напитков есть в каталоге?", a: "В каталоге представлены пиво, виски, медовуха, зелья, ром, джин, сидр, стаут, портер, IPA, лагер, эль и многие другие типы напитков." },
        { q: "Совместимы ли рецепты с разными версиями Minecraft?", a: "Да, все рецепты используют стандартный формат BreweryX и совместимы со всеми поддерживаемыми версиями Minecraft (1.8–1.21+)." },
        { q: "Где найти больше рецептов BreweryX?", a: "Вы можете создать собственные рецепты с помощью нашего генератора или найти готовые рецепты в официальном репозитории BreweryX на GitHub." },
      ] : [
        { q: "How to use ready BreweryX recipes?", a: "Copy the YAML recipe config into the plugins/BreweryX/recipes.yml file (or append it if the file already exists) and run the plugin reload command. See the official guide for details." },
        { q: "Can I modify ready recipes?", a: "Yes, all recipes can be opened in the generator and any parameters can be changed: ingredients, cooking time, difficulty, effects, etc." },
        { q: "What types of drinks are in the catalog?", a: "The catalog includes beer, whiskey, mead, potions, rum, gin, cider, stout, porter, IPA, lager, ale and many other types of drinks." },
        { q: "Are recipes compatible with different Minecraft versions?", a: "Yes, all recipes use the standard BreweryX format and are compatible with all supported Minecraft versions (1.8–1.21+)." },
        { q: "Where to find more BreweryX recipes?", a: "You can create your own recipes using our generator or find ready recipes in the official BreweryX repository on GitHub." },
      ], `/${lang}/recipes`)) }} />

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
