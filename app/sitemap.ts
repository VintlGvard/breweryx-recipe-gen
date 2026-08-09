import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const RECIPES = [
  "golden_beer",
  "thunder_whiskey",
  "health_potion",
  "hot_chocolate",
  "fire_mead",
];

const LOCALES = ["ru", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    entries.push({
      url: `${SITE_URL}/${lang}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    });

    entries.push({
      url: `${SITE_URL}/${lang}/guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });

    entries.push({
      url: `${SITE_URL}/${lang}/recipes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });

    for (const slug of RECIPES) {
      entries.push({
        url: `${SITE_URL}/${lang}/recipes/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
