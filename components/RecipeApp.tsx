"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  DEFAULT_FORM,
  ALL_RECIPES,
  getRandomRecipes,
  generateYaml,
  formsFromYaml,
  ValidationError,
  cloneForm,
  formFromRecord,
  getDisplayName,
  type RecipeForm,
} from "@/lib/recipes";
import { COLOR_MAP, TRANSLATIONS, type Lang } from "@/lib/i18n";
import type { Status, ToastType, RecipesState } from "./types";
import Toast from "@/components/Toast";
import ImportModal from "@/components/ImportModal";
import RecipeSelector from "@/components/RecipeSelector";
import RecipeFormFields from "@/components/RecipeFormFields";
import YamlPreviewPanel from "@/components/YamlPreviewPanel";
import RecipePanelHeader from "@/components/RecipePanelHeader";

function newRecipeState(): RecipesState {
  const form =
    ALL_RECIPES.length > 0
      ? formFromRecord(ALL_RECIPES[Math.floor(Math.random() * ALL_RECIPES.length)])
      : cloneForm(DEFAULT_FORM);
  return { recipes: { [form.recipe_id]: form }, current: form.recipe_id };
}

function nextRecipeId(existing: string[]): string {
  let n = 1;
  while (existing.includes(`recipe_${n}`)) n++;
  return `recipe_${n}`;
}

export default function RecipeApp({ lang }: { lang: Lang }) {
  const [state, setState] = useState<RecipesState | null>(null);
  const [yamlText, setYamlText] = useState("");
  const [status, setStatus] = useState<Status>("waiting");
  const [errorField, setErrorField] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [warnings, setWarnings] = useState<string[]>([]);
  const [toast, setToast] = useState<{ msg: string; type: ToastType } | null>(null);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [importBusy, setImportBusy] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [colorGuideOpen, setColorGuideOpen] = useState(false);
  const [qualityOpen, setQualityOpen] = useState(false);
  const [customColor, setCustomColor] = useState("");

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restoredToastShown = useRef(false);
  const stateRef = useRef<RecipesState | null>(null);
  useEffect(() => { stateRef.current = state; }, [state]);

  const t = useCallback(
    (key: string) => TRANSLATIONS[lang][key] ?? key,
    [lang]
  );

  const showToast = useCallback((msg: string, type: ToastType = "success") => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, type });
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  useEffect(() => {
    const init = () => {
      const loadId = new URLSearchParams(window.location.search).get("load");

      if (loadId) {
        const ex = ALL_RECIPES.find((e) => String(e.recipe_id) === loadId);
        if (ex) {
          const form = formFromRecord(ex);
          setState({ recipes: { [form.recipe_id]: form }, current: form.recipe_id });
          const name = getDisplayName(ex, lang);
          toastTimer.current = setTimeout(
            () => showToast(TRANSLATIONS[lang].example_loaded.replace("{name}", name)),
            300
          );
          window.history.replaceState({}, "", window.location.pathname);
          return;
        }
      }

      let restored: RecipesState | null = null;
      try {
        const raw = localStorage.getItem("brewery_recipes");
        if (raw) {
          const parsed = JSON.parse(raw) as RecipesState;
          if (
            parsed &&
            parsed.recipes &&
            typeof parsed.recipes === "object" &&
            parsed.current &&
            parsed.recipes[parsed.current]
          ) {
            restored = {
              recipes: Object.fromEntries(
                Object.entries(parsed.recipes).map(([id, form]) => [
                  id,
                  { ...cloneForm(DEFAULT_FORM), ...form },
                ])
              ),
              current: parsed.current,
            };
          }
        }
      } catch {
        restored = null;
      }

      if (restored) {
        setState(restored);
        if (!restoredToastShown.current) {
          restoredToastShown.current = true;
          showToast(TRANSLATIONS[lang].restored_toast, "info");
        }
      } else {
        setState(newRecipeState());
      }
    };
    const id = setTimeout(init, 0);
    return () => clearTimeout(id);
  }, [lang, showToast]);

  useEffect(() => {
    if (!state) return;
    const id = setTimeout(() => {
      try {
        localStorage.setItem("brewery_recipes", JSON.stringify(state));
      } catch {}
    }, 400);
    return () => clearTimeout(id);
  }, [state]);

  useEffect(
    () => () => {
      const last = stateRef.current;
      if (last) {
        try {
          localStorage.setItem("brewery_recipes", JSON.stringify(last));
        } catch {}
      }
    },
    []
  );

  const form = state ? state.recipes[state.current] : null;

  const setForm = useCallback(
    (patch: Partial<RecipeForm>) => {
      setState((prev) => {
        if (!prev) return prev;
        const current = prev.recipes[prev.current];
        return {
          ...prev,
          recipes: { ...prev.recipes, [prev.current]: { ...current, ...patch } },
        };
      });
    },
    []
  );

  const generate = useCallback(async (recipes: RecipeForm[]) => {
    setStatus("generating");
    try {
      const { yaml, warnings } = generateYaml(recipes);
      setYamlText(yaml);
      setWarnings(warnings);
      setErrorField(null);
      setErrorMsg("");
      setStatus("ok");
      return true;
    } catch (e) {
      setErrorField(e instanceof ValidationError ? e.field : null);
      setErrorMsg(e instanceof Error ? e.message : String(e));
      setWarnings([]);
      setStatus("error");
      return false;
    }
  }, []);

  useEffect(() => {
    if (!state) return;
    const current = state.recipes[state.current];
    if (!current.recipe_id || !current.name) return;
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      generate(Object.values(state.recipes));
    }, 500);
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [state, generate]);

  const handleGenerate = useCallback(() => {
    if (!state) return;
    const current = state.recipes[state.current];
    if (!current.recipe_id || !current.name) {
      showToast(t("fill_id_name"), "warning");
      return;
    }
    generate(Object.values(state.recipes)).then((ok) => {
      if (ok) showToast(t("yaml_ready"), "success");
    });
  }, [state, generate, showToast, t]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (importOpen) {
        if (e.key === "Escape") setImportOpen(false);
        return;
      }
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        handleGenerate();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleGenerate, importOpen]);

  function handleReset() {
    if (!state) return;
    if (Object.keys(state.recipes).length > 1) {
      if (!window.confirm(t("confirm_reset_multi"))) return;
    }
    const form = cloneForm(DEFAULT_FORM);
    setState((prev) => {
      if (!prev) return prev;
      const recipes = { ...prev.recipes };
      delete recipes[prev.current];
      recipes[form.recipe_id] = form;
      return { recipes, current: form.recipe_id };
    });
    setYamlText("");
    setStatus("waiting");
    setErrorField(null);
    setErrorMsg("");
    setWarnings([]);
    showToast(t("form_reset"), "success");
  }

  function handleAddRecipe() {
    setState((prev) => {
      if (!prev) return prev;
      const id = nextRecipeId(Object.keys(prev.recipes));
      const form = { ...cloneForm(DEFAULT_FORM), recipe_id: id };
      return { recipes: { ...prev.recipes, [id]: form }, current: id };
    });
    showToast(t("recipe_added"), "success");
  }

  function handleRemoveRecipe() {
    if (!state) return;
    const ids = Object.keys(state.recipes);
    if (ids.length <= 1) {
      showToast(t("cant_delete_last"), "warning");
      return;
    }
    if (!window.confirm(t("confirm_delete_recipe").replace("{id}", state.current))) return;
    setState((prev) => {
      if (!prev) return prev;
      const recipes = { ...prev.recipes };
      delete recipes[prev.current];
      return { recipes, current: Object.keys(recipes)[0] };
    });
    showToast(t("recipe_removed"), "success");
  }

  function handleRecipeIdChange(value: string) {
    setState((prev) => {
      if (!prev) return prev;
      const oldId = prev.current;
      if (value === oldId) return prev;
      if (value && value in prev.recipes) {
        showToast(t("duplicate_recipe_id").replace("{id}", value), "warning");
        return prev;
      }
      const recipes: Record<string, RecipeForm> = {};
      for (const [id, f] of Object.entries(prev.recipes)) {
        if (id === oldId) {
          recipes[value] = { ...f, recipe_id: value };
        } else {
          recipes[id] = f;
        }
      }
      return { recipes, current: value };
    });
  }

  async function handleCopy() {
    if (!yamlText) return;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(yamlText);
        showToast(t("copied"), "success");
        return;
      } catch {}
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = yamlText;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      ta.style.pointerEvents = "none";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      if (ok) {
        showToast(t("copied"), "success");
        return;
      }
    } catch {}
    showToast(t("copy_error"), "danger");
  }

  function downloadYaml(recipes: RecipeForm[], recipeId: string) {
    setDownloadOpen(false);
    try {
      const { yaml } = generateYaml(recipes);
      const blob = new Blob([yaml], { type: "text/yaml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${recipeId}.yml`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      showToast(e instanceof Error ? e.message : t("download_error"), "danger");
    }
  }

  function handleDownload(mode: string) {
    if (!state) return;
    if (mode === "current") {
      downloadYaml([state.recipes[state.current]], state.current);
    } else {
      downloadYaml(Object.values(state.recipes), state.current);
    }
  }

  function handleImport() {
    if (!importText.trim()) {
      showToast(t("import_prompt"), "warning");
      return;
    }
    setImportBusy(true);
    try {
      const imported = formsFromYaml(importText);
      setState((prev) => {
        if (!prev) return prev;
        const recipes = { ...prev.recipes };
        for (const form of imported) {
          recipes[form.recipe_id] = { ...cloneForm(DEFAULT_FORM), ...form };
        }
        return { recipes, current: imported[0].recipe_id };
      });
      setImportOpen(false);
      setImportText("");
      showToast(t("import_success"), "success");
    } catch (e) {
      showToast(
        `${t("import_error")}${e instanceof Error ? ": " + e.message : ""}`,
        "danger"
      );
    } finally {
      setImportBusy(false);
    }
  }

  function applyCustomColor() {
    const raw = customColor.trim();
    let hex = "";
    const hexMatch = raw.match(/^#?([0-9a-fA-F]{6})$/);
    const rgbMatch = raw.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
    if (hexMatch) {
      hex = "#" + hexMatch[1].toUpperCase();
    } else if (rgbMatch) {
      const [r, g, b] = [rgbMatch[1], rgbMatch[2], rgbMatch[3]].map((v) =>
        Math.min(255, parseInt(v, 10))
      );
      hex =
        "#" +
        [r, g, b].map((v) => v.toString(16).toUpperCase().padStart(2, "0")).join("");
    } else {
      showToast(t("invalid_format"), "danger");
      return;
    }
    setForm({ color: hex });
    setCustomColor("");
    showToast(t("color_set").replace("{hex}", hex), "success");
  }

  const swatchColor = useMemo(() => {
    if (!form) return "#FFFFFF";
    const c = form.color;
    if (c.startsWith("#")) return c;
    return COLOR_MAP[c] ?? "#FFFFFF";
  }, [form]);

  const yamlStats = useMemo(() => {
    if (!yamlText) return "";
    return `${yamlText.split("\n").length} l, ${yamlText.length} ch`;
  }, [yamlText]);

  const randomExamples = useMemo(
    () => (examplesOpen ? getRandomRecipes(5) : []),
    [examplesOpen]
  );

  if (!state || !form) {
    return <div className="p-8 text-center text-muted">{t("loading")}</div>;
  }

  const recipeIds = Object.keys(state.recipes);

  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="card">
          <RecipePanelHeader
            t={t}
            lang={lang}
            setImportOpen={setImportOpen}
            examplesOpen={examplesOpen}
            setExamplesOpen={setExamplesOpen}
            randomExamples={randomExamples}
            setState={setState}
            showToast={showToast}
          />

          <RecipeSelector
            state={state}
            setState={setState}
            t={t}
            onAdd={handleAddRecipe}
            onRemove={handleRemoveRecipe}
          />

          <RecipeFormFields
            form={form}
            setForm={setForm}
            t={t}
            lang={lang}
            errorField={errorField}
            errorMsg={errorMsg}
            warnings={warnings}
            showToast={showToast}
            swatchColor={swatchColor}
            customColor={customColor}
            setCustomColor={setCustomColor}
            applyCustomColor={applyCustomColor}
            colorGuideOpen={colorGuideOpen}
            setColorGuideOpen={setColorGuideOpen}
            qualityOpen={qualityOpen}
            setQualityOpen={setQualityOpen}
            handleRecipeIdChange={handleRecipeIdChange}
          />

          <div className="flex flex-wrap items-center gap-2">
            <button type="button" className="btn btn-primary btn-lg" onClick={handleGenerate}>
              {t("generate")}
            </button>
            <button type="button" className="btn btn-outline" onClick={handleReset}>
              {t("reset")}
            </button>
            <span className="stat-mono ml-auto">{t("ctrl_enter")}</span>
          </div>
        </div>

        <YamlPreviewPanel
          status={status}
          yamlText={yamlText}
          yamlStats={yamlStats}
          t={t}
          errorField={errorField}
          errorMsg={errorMsg}
          onCopy={handleCopy}
          downloadOpen={downloadOpen}
          setDownloadOpen={setDownloadOpen}
          recipeIds={recipeIds}
          downloadYaml={handleDownload}
        />
      </div>

      <ImportModal
        open={importOpen}
        onClose={() => setImportOpen(false)}
        text={importText}
        onTextChange={setImportText}
        busy={importBusy}
        onImport={handleImport}
        t={t}
      />

      <Toast toast={toast} />
    </div>
  );
}