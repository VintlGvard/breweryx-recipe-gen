import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/content";
import { ALL_RECIPES } from "@/lib/recipes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    entries.push({
      url: `${SITE_URL}/${lang}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          ru: `${SITE_URL}/ru`,
          en: `${SITE_URL}/en`,
        },
      },
    });

    entries.push({
      url: `${SITE_URL}/${lang}/guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${SITE_URL}/ru/guide`,
          en: `${SITE_URL}/en/guide`,
        },
      },
    });

    entries.push({
      url: `${SITE_URL}/${lang}/recipes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${SITE_URL}/ru/recipes`,
          en: `${SITE_URL}/en/recipes`,
        },
      },
    });

    for (const recipe of ALL_RECIPES) {
      const id = String(recipe.recipe_id);
      entries.push({
        url: `${SITE_URL}/${lang}/recipes/${id}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.7,
        alternates: {
          languages: {
            ru: `${SITE_URL}/ru/recipes/${id}`,
            en: `${SITE_URL}/en/recipes/${id}`,
          },
        },
      });
    }
  }

  return entries;
}
