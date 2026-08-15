import type { Locale } from "./content";
import { SITE_URL } from "./site";

export function webSiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BreweryX Recipe Generator",
    url: SITE_URL,
    description:
      locale === "ru"
        ? "Бесплатный онлайн-генератор YAML-рецептов для плагина BreweryX (Minecraft)."
        : "Free online YAML recipe generator for the BreweryX Minecraft plugin.",
    inLanguage: locale === "ru" ? "ru" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/${locale}/recipes?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function webApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BreweryX Recipe Generator",
    url: SITE_URL,
    description:
      "Онлайн-генератор YAML-рецептов для плагина BreweryX (Minecraft).",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    inLanguage: ["ru", "en"],
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

export function howToJsonLd(locale: Locale, steps: { title: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
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

export function breadcrumbJsonLd(locale: Locale, items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function itemListJsonLd(locale: Locale, items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ru" ? "Рецепты BreweryX" : "BreweryX Recipes",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${item.url}`,
      name: item.name,
    })),
  };
}
