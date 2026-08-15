import { notFound } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/content";
import { LOCALES, GUIDE } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const g = GUIDE[lang];
  return {
    title: g.meta.title,
    description: g.meta.description,
    keywords: g.meta.keywords,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  if (!LOCALES.includes(lang)) notFound();

  const g = GUIDE[lang]!;

  const tocItems = g.sections.map((s, i) => ({
    id: `section-${i}`,
    label: s.heading,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, [
        { name: lang === "ru" ? "Главная" : "Home", url: `/${lang}` },
        { name: lang === "ru" ? "Справочник" : "Guide", url: `/${lang}/guide` },
      ])) }} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="breadcrumb slide-in">
          <Link href={`/${lang}`}>{lang === "ru" ? "Главная" : "Home"}</Link>
          <span className="sep">→</span>
          <span>{lang === "ru" ? "Справочник" : "Guide"}</span>
        </nav>

        <div className="page-header fadeUp">
          <h1>{g.meta.title}</h1>
        </div>

        <details className="collapse-section mb-6 fadeUp stagger-1" open>
          <summary>
            {lang === "ru" ? "Введение" : "Introduction"}
          </summary>
          <div className="collapse-body">
            {g.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>

        <div className="guide-toc fadeUp stagger-2">
          <div className="guide-toc-title">
            {lang === "ru" ? "Содержание" : "Contents"}
          </div>
          <ul className="guide-toc-list">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {g.sections.map((section, i) => (
          <section key={i} id={`section-${i}`} className="mb-8 fadeUp scroll-mt-6" style={{ animationDelay: `${Math.min(0.1 + i * 0.05, 0.5)}s` }}>
            <details className="collapse-section" open>
              <summary>{section.heading}</summary>
              <div className="collapse-body">
                {section.paragraphs?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.list && (
                  <dl className="grid gap-2 mt-3">
                    {section.list.map((item, j) => (
                      <div key={j} className="recipe-param-card">
                        <div className="recipe-param-card-label">{item.term}</div>
                        <div className="recipe-param-card-value">{item.def}</div>
                      </div>
                    ))}
                  </dl>
                )}
                {section.code && (
                  <pre className="yaml-preview my-3 overflow-x-auto">{section.code}</pre>
                )}
              </div>
            </details>
          </section>
        ))}

        <hr className="section-divider" />

        <div className="fadeUp stagger-3 flex flex-wrap gap-2">
          <Link href={`/${lang}`} className="btn btn-primary">
            {lang === "ru" ? "Открыть генератор" : "Open generator"}
          </Link>
          <Link href={`/${lang}/recipes`} className="btn btn-outline">
            {lang === "ru" ? "Готовые рецепты" : "Ready recipes"}
          </Link>
        </div>
      </div>
    </>
  );
}
