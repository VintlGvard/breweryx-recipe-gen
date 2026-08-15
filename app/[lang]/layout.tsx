import type { Metadata } from "next";
import type { Locale } from "@/lib/content";
import { LOCALES, LANDING } from "@/lib/content";
import LangSetter from "./lang-setter";
import TopBar from "@/components/TopBar";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = LANDING[lang];
  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ru: "/ru",
        en: "/en",
        "x-default": "/ru",
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: "BreweryX Recipe Generator",
      title: c.meta.title,
      description: c.meta.description,
      locale: lang === "ru" ? "ru_RU" : "en_US",
      alternateLocale: [lang === "ru" ? "en_US" : "ru_RU"],
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
      title: c.meta.title,
      description: c.meta.description,
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
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;

  return (
    <>
      <LangSetter lang={lang} />
      <TopBar lang={lang} />
      {children}
      <footer className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>BreweryX Recipe Generator</h4>
            <div className="footer-links">
              <a href={`/${lang}`}>{lang === "ru" ? "Главная" : "Home"}</a>
              <a href={`/${lang}/guide`}>{lang === "ru" ? "Справочник" : "Guide"}</a>
              <a href={`/${lang}/recipes`}>{lang === "ru" ? "Рецепты" : "Recipes"}</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>BreweryX</h4>
            <div className="footer-links">
              <a
                href="https://breweryx.breweryteam.dev"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                breweryx.breweryteam.dev
              </a>
              <a
                href="https://github.com/BreweryTeam/BreweryX"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{lang === "ru" ? "Проект" : "Project"}</h4>
            <div className="footer-links">
              <a
                href="https://github.com/VintlGvard/breweryx-recipe-gen"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {lang === "ru" ? "Версия 2.0" : "Version 2.0"}
              </a>
              <a
                href="https://vintlgvard.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                VintlGvard
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copy">© VintlGvard — BreweryX Recipe Generator</div>
      </footer>
    </>
  );
}
