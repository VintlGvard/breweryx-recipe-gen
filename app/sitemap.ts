import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/content";
import { ALL_RECIPES } from "@/lib/recipes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    // Главная страница — обновляется чаще
    entries.push({
      url: `${SITE_URL}/${lang}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    });

    // Справочник — обновляется редко
    entries.push({
      url: `${SITE_URL}/${lang}/guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });

    // Каталог рецептов — обновляется средне
    entries.push({
      url: `${SITE_URL}/${lang}/recipes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // Отдельные рецепты — обновляются редко
    for (const recipe of ALL_RECIPES) {
      entries.push({
        url: `${SITE_URL}/${lang}/recipes/${String(recipe.recipe_id)}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
