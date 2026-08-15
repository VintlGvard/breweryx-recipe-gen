"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangNotFound() {
  const lang = usePathname()?.split("/")[1] === "en" ? "en" : "ru";

  return (
    <section className="hero-section">
      <p className="stat-mono">404</p>
      <h1 className="fadeUp">
        {lang === "ru" ? "Рецепт не найден" : "Recipe not found"}
      </h1>
      <p className="hero-subtitle fadeUp stagger-1">
        {lang === "ru"
          ? "Такого рецепта или страницы не существует. Возможно, он был переименован или ещё не добавлен в каталог."
          : "This recipe or page does not exist. It may have been renamed or is not yet in the catalog."}
      </p>
      <div className="hero-cta fadeUp stagger-2">
        <Link href={`/${lang}`} className="btn btn-primary btn-lg">
          {lang === "ru" ? "На главную" : "Go home"}
        </Link>
        <Link href={`/${lang}/recipes`} className="btn btn-outline">
          {lang === "ru" ? "Все рецепты" : "All recipes"}
        </Link>
      </div>
    </section>
  );
}
