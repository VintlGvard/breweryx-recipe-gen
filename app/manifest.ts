import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BreweryX Recipe Generator",
    short_name: "BreweryX Gen",
    description:
      "Онлайн-генератор YAML-рецептов для плагина BreweryX (Minecraft).",
    start_url: "/ru",
    display: "standalone",
    background_color: "#f2f1ed",
    theme_color: "#f2f1ed",
    lang: "ru",
    categories: ["utilities", "productivity"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
