import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BreweryX Recipe Generator — YAML-конфиги рецептов для Minecraft",
    template: "%s | BreweryX Recipe Generator",
  },
  description:
    "Бесплатный онлайн-генератор YAML-рецептов для плагина BreweryX (Minecraft). " +
    "Ингредиенты, дистилляция, выдержка в бочках, эффекты зелий, цвета и цветовые коды — " +
    "с живым предпросмотром, импортом и скачиванием готового конфига.",
  keywords: [
    "BreweryX",
    "Brewery",
    "Minecraft",
    "рецепты",
    "генератор рецептов",
    "YAML",
    "конфиг",
    "plugin",
    "recipe generator",
    "brewing",
    "Spigot",
    "Paper",
  ],
  authors: [{ name: "BreweryX Recipe Generator" }],
  creator: "BreweryX Recipe Generator",
  applicationName: "BreweryX Recipe Generator",
  generator: "Next.js",
  category: "tools",
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "BreweryX Recipe Generator",
    title: "BreweryX Recipe Generator — YAML-конфиги рецептов для Minecraft",
    description:
      "Онлайн-генератор рецептов для плагина BreweryX: ингредиенты, дистилляция, " +
      "выдержка, эффекты и живой предпросмотр YAML.",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "BreweryX Recipe Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BreweryX Recipe Generator",
    description:
      "Онлайн-генератор YAML-рецептов для плагина BreweryX (Minecraft) с живым предпросмотром.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#12100d" },
  ],
};

const jsonLd = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
