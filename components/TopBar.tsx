"use client";

import { useEffect, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";

const COOKIE = "brewery_theme";

function readCookie(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  try {
    const stored = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${COOKIE}=`))
      ?.split("=")[1];
    return stored === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

// ── external theme store ──
let _theme: "light" | "dark" = "light";
const _listeners = new Set<() => void>();

function subscribeTheme(cb: () => void) {
  _listeners.add(cb);
  return () => { _listeners.delete(cb); };
}

function themeSnapshot() { return _theme; }
function themeServerSnapshot(): "light" | "dark" { return "light"; }

export default function TopBar({ lang }: { lang: string }) {
  const theme = useSyncExternalStore(subscribeTheme, themeSnapshot, themeServerSnapshot);

  // Initialize from cookie on mount (external store — no setState)
  useEffect(() => {
    _theme = readCookie();
    document.documentElement.dataset.theme = _theme;
    _listeners.forEach((fn) => fn());
  }, []);

  const toggleTheme = useCallback(() => {
    const next = _theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.cookie = `${COOKIE}=${next}; path=/; max-age=31536000`;
    try { localStorage.setItem(COOKIE, next); } catch {}
    _theme = next;
    _listeners.forEach((fn) => fn());
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
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
