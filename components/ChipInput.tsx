"use client";

import { useMemo, useRef, useState } from "react";
import type { ItemEntry } from "@/lib/recipes";
import type { Lang } from "@/lib/i18n";

interface ChipInputProps {
  data: ItemEntry[];
  lines: string[];
  lang: Lang;
  t: (key: string) => string;
  searchPlaceholder: string;
  duplicateKey: string;
  inputId?: string;
  extras: { key: string; placeholder: string; min: number; max: number; def: string; width: string }[];
  chipLabel: (parts: string[]) => React.ReactNode;
  onChange: (lines: string[]) => void;
  onToast: (msg: string, type: "success" | "warning" | "danger") => void;
}

export default function ChipInput({
  data,
  lines,
  lang,
  t,
  searchPlaceholder,
  duplicateKey,
  inputId,
  extras,
  chipLabel,
  onChange,
  onToast,
}: ChipInputProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [extraValues, setExtraValues] = useState<string[]>(extras.map((e) => e.def));
  const inputRef = useRef<HTMLInputElement>(null);

  const { searchIndex, exactMap } = useMemo(() => {
    const index = data.map((it) => ({
      item: it,
      hay: `${it.name} ${it.displayName} ${it.name_ru}`.toLowerCase(),
    }));
    const map = new Map<string, string>();
    for (const it of data) {
      for (const key of [it.name, it.displayName, it.name_ru]) {
        if (key) map.set(key.toLowerCase(), it.name);
      }
    }
    return { searchIndex: index, exactMap: map };
  }, [data]);

  const results = useMemo(() => {
    const lower = query.toLowerCase().trim();
    if (!lower) return [];
    return searchIndex.filter((entry) => entry.hay.includes(lower)).slice(0, 200).map((e) => e.item);
  }, [query, searchIndex]);

  function lookupId(text: string): string {
    return exactMap.get(text.toLowerCase().trim()) ?? text.toUpperCase().trim();
  }

  function add(value?: string) {
    const raw = (value ?? query).trim();
    if (!raw) return;
    const id = lookupId(raw);
    if (lines.some((line) => line.split("/")[0] === id)) {
      onToast(t(duplicateKey).replace("{id}", id), "warning");
      setQuery("");
      setOpen(false);
      return;
    }
    onChange([...lines, [id, ...extraValues].join("/")]);
    setQuery("");
    setOpen(false);
    setExtraValues(extras.map((e) => e.def));
    inputRef.current?.focus();
  }

  function remove(index: number) {
    onChange(lines.filter((_, i) => i !== index));
  }

  function edit(index: number) {
    const parts = lines[index].split("/");
    remove(index);
    setQuery(parts[0]);
    setExtraValues(extras.map((e, i) => parts[i + 1] ?? e.def));
    setOpen(true);
    inputRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || !results.length) {
      if (e.key === "Enter" || e.key === "Tab") {
        e.preventDefault();
        add();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      add(activeIndex >= 0 ? results[activeIndex].name : undefined);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div>
      <div className="tag-container" onClick={() => inputRef.current?.focus()}>
        {lines.map((line, index) => (
          <span key={line + index} className="tag">
            <button type="button" className="tag-text" onClick={() => edit(index)}>
              {chipLabel(line.split("/"))}
            </button>
            <button type="button" className="tag-remove" onClick={() => remove(index)}>
              ×
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-1">
        <div className="relative flex-grow">
          <input
            ref={inputRef}
            id={inputId}
            type="text"
            className="input w-full"
            value={query}
            placeholder={searchPlaceholder}
            autoComplete="off"
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setActiveIndex(-1);
            }}
            onKeyDown={onKeyDown}
            onBlur={() => setTimeout(() => setOpen(false), 200)}
          />
          {open && query.trim() && (
            <div className="search-dropdown">
              {results.length === 0 ? (
                <div className="sd-empty">{t("no_results")}</div>
              ) : (
                results.map((it, index) => (
                  <div
                    key={it.name}
                    className={"sd-item" + (index === activeIndex ? " active" : "")}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      add(it.name);
                    }}
                  >
                    <span className="sd-name">
                      {lang === "ru" ? it.name_ru || it.displayName : it.displayName}
                    </span>
                    <span className="sd-label">{it.name}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        {extras.map((extra, index) => (
          <input
            key={extra.key}
            type="number"
            className="input"
            style={{ maxWidth: extra.width }}
            min={extra.min}
            max={extra.max}
            placeholder={extra.placeholder}
            value={extraValues[index]}
            onChange={(e) =>
              setExtraValues((values) => values.map((v, i) => (i === index ? e.target.value : v)))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                add();
              }
            }}
          />
        ))}
        <button type="button" className="btn btn-outline" onClick={() => add()}>
          +
        </button>
      </div>
    </div>
  );
}
