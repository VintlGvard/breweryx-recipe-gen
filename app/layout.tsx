import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BreweryX Recipe Generator",
    template: "%s | BreweryX Recipe Generator",
  },
  authors: [{ name: "VintlGvard", url: "https://vintlgvard.com" }],
  creator: "VintlGvard",
  applicationName: "BreweryX Recipe Generator",
  generator: "Next.js",
  category: "tools",
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
    { media: "(prefers-color-scheme: light)", color: "#f2f1ed" },
    { media: "(prefers-color-scheme: dark)", color: "#171614" },
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
    <html lang="ru" suppressHydrationWarning>
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
