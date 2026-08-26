import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/lib/content";
import { LOCALES, LANDING } from "@/lib/content";
import { faqJsonLd, howToJsonLd, webSiteJsonLd, sitelinksSearchboxJsonLd } from "@/lib/seo";
import { ALL_RECIPES, getDisplayName } from "@/lib/recipes";
import RecipeApp from "@/components/RecipeApp";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  if (!LOCALES.includes(lang)) return {};
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
          alt: c.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: ["/og.png"],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  if (!LOCALES.includes(lang)) notFound();

  const c = LANDING[lang]!;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd(lang)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSearchboxJsonLd(lang)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd(lang, c.howtoSteps, `/${lang}`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faq, `/${lang}`)) }} />

      <div className="max-w-6xl mx-auto px-4">
        <section className="hero-section">
          <h1 className="fadeUp">
            {c.heroH1.split("BreweryX").map((part, i) =>
              i === 0 ? <span key={i}>{part}</span> : <span key={i}><span className="accent-dot">BreweryX</span>{part}</span>
            )}
          </h1>
          <p className="hero-subtitle fadeUp stagger-1">{c.heroSubtitle}</p>
          <div className="hero-cta fadeUp stagger-2">
            <a href="#generator" className="btn btn-primary btn-lg">
              {lang === "ru" ? "Начать генерацию" : "Start generating"}
            </a>
            <Link href={`/${lang}/guide`} className="btn btn-outline">
              {lang === "ru" ? "Справочник" : "Guide"}
            </Link>
            <Link href={`/${lang}/recipes`} className="btn btn-outline">
              {lang === "ru" ? "Готовые рецепты" : "Recipes"}
            </Link>
          </div>
        </section>

        <hr className="section-divider fade-in stagger-3" />

        <details className="collapse-section mb-8 fadeUp stagger-3">
          <summary>
            {lang === "ru" ? "Что такое BreweryX и как им пользоваться" : "What is BreweryX and how to use it"}
          </summary>
          <div className="collapse-body">
            <h3 className="collapse-heading">{c.introTitle}</h3>
            {c.introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h3 className="collapse-heading">{c.howtoTitle}</h3>
            <ol className="step-list">
              {c.howtoSteps.map((step, i) => (
                <li key={i} className="step-item">
                  <span className="step-num">{i + 1}</span>
                  <div className="step-content">
                    <strong>{step.title}</strong>
                    <span className="text-muted text-sm">{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="collapse-heading">{c.featuresTitle}</h3>
            <div className="feature-grid">
              {c.features.map((f, i) => (
                <div key={i} className="feature-card fadeUp" style={{ animationDelay: `${Math.min(0.05 + i * 0.04, 0.35)}s` }}>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>

            <h3 className="collapse-heading">{c.examplesTitle}</h3>
            <p className="text-muted text-sm mb-3">{c.examplesText}</p>
            <div className="example-grid">
              {ALL_RECIPES.slice(0, 8).map((ex, i) => {
                const id = String(ex.recipe_id);
                return (
                  <Link
                    key={id}
                    href={`/${lang}/recipes/${id}`}
                    className="example-card fadeUp"
                    style={{ animationDelay: `${Math.min(0.05 + i * 0.04, 0.35)}s` }}
                  >
                    <div className="example-card-name">{getDisplayName(ex, lang, id)}</div>
                    <div className="example-card-link">
                      {lang === "ru" ? "Открыть →" : "Open →"}
                    </div>
                  </Link>
                );
              })}
            </div>

            <h3 className="collapse-heading">{c.faqTitle}</h3>
            <div className="flex flex-col gap-2">
              {c.faq.map((item, i) => (
                <details key={i} className="faq-item fadeUp" style={{ animationDelay: `${Math.min(0.05 + i * 0.04, 0.3)}s` }}>
                  <summary>{item.q}</summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href={`/${lang}/guide`} className="btn btn-outline">
                {lang === "ru" ? "Полный справочник формата рецептов →" : "Full recipe format reference →"}
              </Link>
            </div>
          </div>
        </details>

        <hr className="section-divider fade-in stagger-4" />

        <section id="generator" className="mb-8 scroll-mt-8">
          <div className="page-header fadeUp stagger-5 text-center">
            <h2>{c.genTitle}</h2>
            <p className="max-w-[560px] mx-auto">{c.genSubtitle}</p>
          </div>
          <div className="scale-in stagger-6">
            <RecipeApp lang={lang} />
          </div>
        </section>
      </div>
    </>
  );
}
