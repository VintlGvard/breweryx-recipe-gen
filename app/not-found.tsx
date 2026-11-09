import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero-section">
      <h1 className="fadeUp">404: Страница не найдена / Page not found</h1>
      <p className="hero-subtitle fadeUp stagger-1">
        Такой страницы не существует. This page does not exist.
      </p>
      <div className="hero-cta fadeUp stagger-2">
        <Link href="/ru" className="btn btn-primary btn-lg">
          На главную
        </Link>
        <Link href="/en" className="btn btn-outline">
          Home
        </Link>
      </div>
    </section>
  );
}
