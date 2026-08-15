import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/content";
import { ALL_RECIPES } from "@/lib/recipes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    entries.push(
      {
        url: `${SITE_URL}/${lang}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: `${SITE_URL}/${lang}/guide`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${SITE_URL}/${lang}/recipes`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      }
    );

    for (const recipe of ALL_RECIPES) {
      entries.push({
        url: `${SITE_URL}/${lang}/recipes/${String(recipe.recipe_id)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
