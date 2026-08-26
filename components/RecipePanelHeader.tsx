"use client";

import { formFromRecord, getDisplayName } from "@/lib/recipes";
import { TRANSLATIONS, type Lang } from "@/lib/i18n";
import type { RecipesState, ToastType } from "./types";

interface RecipePanelHeaderProps {
  t: (key: string) => string;
  lang: Lang;
  setImportOpen: (v: boolean) => void;
  examplesOpen: boolean;
  setExamplesOpen: (v: boolean) => void;
  randomExamples: Array<Record<string, unknown>>;
  setState: React.Dispatch<React.SetStateAction<RecipesState | null>>;
  showToast: (msg: string, type: ToastType) => void;
}

export default function RecipePanelHeader({
  t,
  lang,
  setImportOpen,
  examplesOpen,
  setExamplesOpen,
  randomExamples,
  setState,
  showToast,
}: RecipePanelHeaderProps) {
  return (
    <div className="panel-head flex-wrap justify-between">
      <div className="flex items-baseline gap-2">
        <span className="panel-index">01</span>
        <h2 className="text-base font-semibold">{t("recipe_params")}</h2>
      </div>
      <div className="flex gap-2 relative">
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => setImportOpen(true)}
        >
          {t("import_btn")}
        </button>
        <div className="relative">
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => setExamplesOpen(!examplesOpen)}
          >
            {t("examples_btn")}
          </button>
          {examplesOpen && (
            <div className="dropdown-menu right-0 top-full mt-1">
              {randomExamples.map((ex, i) => (
                <button
                  key={i}
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    setExamplesOpen(false);
                    const form = formFromRecord(ex);
                    setState((prev) => {
                      if (!prev) return prev;
                      const recipes = { ...prev.recipes };
                      recipes[form.recipe_id] = form;
                      return { recipes, current: form.recipe_id };
                    });
                    const msg = TRANSLATIONS[lang].example_loaded.replace("{name}", getDisplayName(ex, lang));
                    showToast(msg, "success");
                  }}
                >
                  {getDisplayName(ex, lang, String(ex.recipe_id))}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}