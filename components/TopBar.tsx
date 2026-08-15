"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

const COOKIE = "brewery_theme";

type Theme = "light" | "dark";

function readStoredTheme(): Theme {
  try {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${COOKIE}=`))
      ?.split("=")[1];
    const stored = cookie ?? localStorage.getItem(COOKIE);
    return stored === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

let theme: Theme = "light";
const listeners = new Set<() => void>();

function setTheme(next: Theme) {
  theme = next;
  document.documentElement.dataset.theme = next;
  listeners.forEach((fn) => fn());
}

function subscribeTheme(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function themeSnapshot(): Theme {
  return theme;
}

function themeServerSnapshot(): Theme {
  return "light";
}

export default function TopBar({ lang }: { lang: string }) {
  const current = useSyncExternalStore(subscribeTheme, themeSnapshot, themeServerSnapshot);

  useEffect(() => {
    setTheme(readStoredTheme());
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.cookie = `${COOKIE}=${next}; path=/; max-age=31536000`;
    try {
      localStorage.setItem(COOKIE, next);
    } catch {}
    setTheme(next);
  }, []);

  return (
    <nav className="topbar">
      <div className="topbar-inner">
        <Link href={`/${lang}`} className="topbar-brand">
          BreweryX<span className="topbar-brand-sub">Recipe Generator</span>
        </Link>
        <div className="topbar-actions">
          <Link
            href={`/${lang}/guide`}
            className="topbar-btn topbar-btn-nav"
          >
            {lang === "ru" ? "Справочник" : "Guide"}
          </Link>
          <Link
            href={`/${lang}/recipes`}
            className="topbar-btn topbar-btn-nav"
          >
            {lang === "ru" ? "Рецепты" : "Recipes"}
          </Link>
          <span className="topbar-sep" />
          <Link
            href={lang === "ru" ? "/en" : "/ru"}
            className="topbar-btn topbar-btn-pill"
            title={lang === "ru" ? "Switch to English" : "Переключить на русский"}
          >
            {lang === "ru" ? "EN" : "RU"}
          </Link>
          <button
            type="button"
            className="topbar-btn topbar-btn-pill"
            title={lang === "ru" ? "Сменить тему" : "Toggle theme"}
            onClick={toggleTheme}
          >
            {current === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
