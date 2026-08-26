import type { Locale } from "./content";
import { SITE_URL } from "./site";

export function webSiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "BreweryX Recipe Generator",
    url: SITE_URL,
    description:
      locale === "ru"
        ? "Бесплатный онлайн-генератор YAML-рецептов для плагина BreweryX (Minecraft)."
        : "Free online YAML recipe generator for the BreweryX Minecraft plugin.",
    inLanguage: locale === "ru" ? "ru" : "en",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function webApplicationJsonLd(locale?: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${SITE_URL}/#webapp`,
    name: "BreweryX Recipe Generator",
    url: SITE_URL,
    description:
      locale === "en"
        ? "Online YAML recipe generator for the BreweryX Minecraft plugin."
        : "Онлайн-генератор YAML-рецептов для плагина BreweryX (Minecraft).",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    inLanguage: locale ? [locale] : ["ru", "en"],
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[], url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": url ? `${SITE_URL}${url}/#faq` : undefined,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function howToJsonLd(locale: Locale, steps: { title: string; text: string }[], url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": url ? `${SITE_URL}${url}/#howto` : undefined,
    name:
      locale === "ru"
        ? "Как создать рецепт BreweryX за 4 шага"
        : "How to create a BreweryX recipe in 4 steps",
    description:
      locale === "ru"
        ? "Пошаговая инструкция по созданию YAML-рецепта для плагина BreweryX в Minecraft."
        : "Step-by-step guide to creating a YAML recipe for the BreweryX Minecraft plugin.",
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.text,
    })),
  };
}

export function breadcrumbJsonLd(locale: Locale, items: { name: string; url: string }[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": pageUrl ? `${SITE_URL}${pageUrl}/#breadcrumb` : undefined,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function itemListJsonLd(locale: Locale, items: { name: string; url: string }[], url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": url ? `${SITE_URL}${url}/#itemlist` : undefined,
    name: locale === "ru" ? "Рецепты BreweryX" : "BreweryX Recipes",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${item.url}`,
      name: item.name,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "BreweryX Recipe Generator",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon-512.png`,
    },
    description:
      "Free online YAML recipe generator for the BreweryX Minecraft plugin. / Бесплатный онлайн-генератор YAML-рецептов для плагина BreweryX (Minecraft).",
    sameAs: [
      "https://github.com/VintlGvard/breweryx-recipe-gen",
      "https://breweryx.breweryteam.dev",
      "https://github.com/BreweryTeam/BreweryX",
    ],
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "VintlGvard",
      url: "https://vintlgvard.com",
      knowsAbout: [
        "Minecraft plugin development",
        "BreweryX",
        "YAML configuration",
        "Minecraft brewing mechanics",
        "Spigot/Paper/Folia plugins",
      ],
    },
  };
}

export function productJsonLd(locale: Locale, recipe: {
  name: string;
  description: string;
  url: string;
  ingredients: string;
  cookingTime: number;
  difficulty: number;
  alcohol: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}${recipe.url}/#product`,
    name: recipe.name,
    description: recipe.description,
    url: `${SITE_URL}${recipe.url}`,
    image: `${SITE_URL}/og.png`,
    brand: {
      "@type": "Brand",
      name: "BreweryX",
    },
    category: "Minecraft Plugin Recipe",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: locale === "ru" ? "Ингредиенты" : "Ingredients",
        value: recipe.ingredients,
      },
      {
        "@type": "PropertyValue",
        name: locale === "ru" ? "Время варки" : "Cooking Time",
        value: `${recipe.cookingTime} ${locale === "ru" ? "мин" : "min"}`,
      },
      {
        "@type": "PropertyValue",
        name: locale === "ru" ? "Сложность" : "Difficulty",
        value: String(recipe.difficulty),
      },
      {
        "@type": "PropertyValue",
        name: locale === "ru" ? "Алкоголь" : "Alcohol",
        value: `${recipe.alcohol}%`,
      },
    ],
  };
}

export function articleJsonLd(locale: Locale, article: {
  title: string;
  description: string;
  url: string;
  sections: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${article.url}/#article`,
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    image: `${SITE_URL}/og.png`,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${article.url}`,
    },
    articleSection: article.sections.join(", "),
    inLanguage: locale === "ru" ? "ru" : "en",
  };
}

export function sitelinksSearchboxJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${locale}/recipes?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: locale === "ru" ? "ru" : "en",
  };
}
