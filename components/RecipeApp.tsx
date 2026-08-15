"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ChipInput from "@/components/ChipInput";
import {
  DEFAULT_FORM,
  ALL_RECIPES,
  getRandomRecipes,
  EFFECTS,
  ITEMS,
  COLORS,
  WOOD_TYPES,
  generateYaml,
  formsFromYaml,
  ValidationError,
  cloneForm,
  formFromRecord,
  getDisplayName,
  linesOf,
  type RecipeForm,
} from "@/lib/recipes";
import { COLOR_MAP, TRANSLATIONS, type Lang } from "@/lib/i18n";

type Status = "waiting" | "generating" | "ok" | "error";
type ToastType = "success" | "warning" | "danger" | "info";

interface RecipesState {
  recipes: Record<string, RecipeForm>;
  current: string;
}

const COLOR_CODES: [string, string, string][] = [
  ["&0", "#000000", "Black"],
  ["&1", "#0000AA", "Dark Blue"],
  ["&2", "#00AA00", "Dark Green"],
  ["&3", "#00AAAA", "Dark Aqua"],
  ["&4", "#AA0000", "Dark Red"],
  ["&5", "#AA00AA", "Dark Purple"],
  ["&6", "#FFAA00", "Gold"],
  ["&7", "#AAAAAA", "Gray"],
  ["&8", "#555555", "Dark Gray"],
  ["&9", "#5555FF", "Blue"],
  ["&a", "#55FF55", "Green"],
  ["&b", "#55FFFF", "Aqua"],
  ["&c", "#FF5555", "Red"],
  ["&d", "#FF55FF", "Pink"],
  ["&e", "#FFFF55", "Yellow"],
  ["&f", "#FFFFFF", "White"],
];

const FORMAT_CODES: [string, string][] = [
  ["&l", "Bold"],
  ["&o", "Italic"],
  ["&n", "Underline"],
  ["&m", "Strike"],
  ["&k", "Magic"],
  ["&r", "Reset"],
];

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

  const statusBadge: Record<Status, { cls: string; key: string }> = {
    waiting: { cls: "badge-secondary", key: "status_waiting" },
    generating: { cls: "badge-warning", key: "status_generating" },
    ok: { cls: "badge-success", key: "status_ok" },
    error: { cls: "badge-danger", key: "status_error" },
  };

  if (!state || !form) {
    return <div className="p-8 text-center text-muted">Loading...</div>;
  }

  const recipeIds = Object.keys(state.recipes);
  const isCustomColor = form.color.startsWith("#");

  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="card">
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
                  onClick={() => setExamplesOpen((v) => !v)}
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
                          showToast(msg);
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

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm">{t("recipe")}</span>
            <select
              className="select"
              style={{ maxWidth: "200px" }}
              value={state.current}
              onChange={(e) => setState((p) => (p ? { ...p, current: e.target.value } : p))}
            >
              {recipeIds.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              title={t("add_recipe")}
              onClick={handleAddRecipe}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              title={t("remove_recipe")}
              onClick={handleRemoveRecipe}
            >
              &minus;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="label" htmlFor="f-recipe-id" title={t("recipe_id_tooltip")}>
                {t("recipe_id")} <span className="req">*</span>
              </label>
              <input
                id="f-recipe-id"
                type="text"
                className={"input" + (errorField === "recipe_id" ? " invalid" : "")}
                placeholder={t("ph_recipe_id")}
                value={form.recipe_id}
                onChange={(e) => handleRecipeIdChange(e.target.value)}
              />
              {errorField === "recipe_id" && <div className="field-error">{errorMsg}</div>}
            </div>
            <div>
              <label className="label" htmlFor="f-name" title={t("name_tooltip")}>
                {t("name")} <span className="req">*</span>
              </label>
              <input
                id="f-name"
                type="text"
                className={"input" + (errorField === "name" ? " invalid" : "")}
                value={form.name}
                onChange={(e) => setForm({ name: e.target.value })}
              />
              {errorField === "name" && <div className="field-error">{errorMsg}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="label" htmlFor="f-lore">{t("lore")}</label>
            <textarea
              id="f-lore"
              className="textarea"
              rows={2}
              value={form.lore}
              onChange={(e) => setForm({ lore: e.target.value })}
            />
          </div>

          <div className="guide-box mb-3">
            <button
              type="button"
              className="guide-toggle"
              onClick={() => setColorGuideOpen((v) => !v)}
            >
              <span className={"guide-arrow" + (colorGuideOpen ? " open" : "")}>&#9656;</span>
              {t("color_guide")}
            </button>
            {colorGuideOpen && (
              <div className="mt-2">
                <p className="text-muted mb-2">{t("color_guide_desc")}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {COLOR_CODES.map(([code, hex, name]) => (
                    <span
                      key={code}
                      className="tag"
                      title={name}
                      style={{ borderLeft: `4px solid ${hex}` }}
                    >
                      <code>{code}</code>
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  {FORMAT_CODES.map(([code, name]) => (
                    <span key={code} className="tag">
                      <code>{code}</code>&nbsp;{name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="label" htmlFor="f-ingredients">
              {t("ingredients")} <span className="req">*</span>
            </label>
            <ChipInput
              data={ITEMS}
              inputId="f-ingredients"
              lines={linesOf(String(form.ingredients ?? ""))}
              lang={lang}
              t={t}
              searchPlaceholder={t("item_search")}
              duplicateKey="duplicate_ingredient"
              extras={[{ key: "amount", placeholder: "×", min: 1, max: 999, def: "1", width: "70px" }]}
              chipLabel={(parts) => (
                <>
                  {parts[0]} ×{parts[1] ?? "1"}
                </>
              )}
              onChange={(lines) => setForm({ ingredients: lines.join("\n") })}
              onToast={showToast}
            />
            {errorField === "ingredients" && <div className="field-error">{errorMsg}</div>}
            {warnings.length > 0 && (
              <div className="field-warning">
                {t("unknown_items_warning")}: {warnings.join("; ")}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="label" htmlFor="f-cookingtime">
                {t("cookingtime")} <span className="req">*</span>
              </label>
              <input
                id="f-cookingtime"
                type="number"
                className={"input" + (errorField === "cookingtime" ? " invalid" : "")}
                min={1}
                required
                value={form.cookingtime}
                onChange={(e) => setForm({ cookingtime: e.target.value })}
              />
              {errorField === "cookingtime" && <div className="field-error">{errorMsg}</div>}
            </div>
            <div>
              <label className="label" htmlFor="f-difficulty">
                {t("difficulty")} <span className="req">*</span>
              </label>
              <input
                id="f-difficulty"
                type="number"
                className={"input" + (errorField === "difficulty" ? " invalid" : "")}
                min={1}
                max={10}
                required
                value={form.difficulty}
                onChange={(e) => setForm({ difficulty: e.target.value })}
              />
              {errorField === "difficulty" && <div className="field-error">{errorMsg}</div>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            <div>
              <label className="label" htmlFor="f-distillruns">{t("distillruns")}</label>
              <input
                id="f-distillruns"
                type="number"
                className="input"
                min={0}
                value={form.distillruns}
                onChange={(e) => setForm({ distillruns: e.target.value })}
              />
            </div>
            <div>
              <label className="label" htmlFor="f-wood">{t("wood")}</label>
              <select
                id="f-wood"
                className="select"
                value={form.wood}
                onChange={(e) => setForm({ wood: e.target.value })}
              >
                {Object.entries(WOOD_TYPES).map(([value, label]) => (
                  <option key={value} value={value}>
                    {lang === "ru" ? label.ru : label.en}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label" htmlFor="f-age">{t("age")}</label>
              <input
                id="f-age"
                type="number"
                className="input"
                min={0}
                value={form.age}
                onChange={(e) => setForm({ age: e.target.value })}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="label" htmlFor="f-color">{t("color")}</label>
            <div className="flex items-center gap-2 mb-2">
              <select
                id="f-color"
                className="select"
                value={isCustomColor ? "__custom__" : form.color}
                onChange={(e) => {
                  if (e.target.value !== "__custom__") setForm({ color: e.target.value });
                }}
              >
                {isCustomColor && <option value="__custom__">{form.color}</option>}
                {Object.entries(COLORS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {lang === "ru" ? label.ru : label.en}
                  </option>
                ))}
              </select>
              <span className="color-swatch" style={{ background: swatchColor }} />
            </div>
            <div className="flex items-center gap-2">
              <input
                id="f-custom-color"
                type="text"
                className="input"
                placeholder={t("ph_customcolor")}
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    applyCustomColor();
                  }
                }}
              />
              <input
                type="color"
                title={t("palette")}
                className="input"
                style={{ width: "48px", padding: "2px", height: "36px" }}
                value={swatchColor.length === 7 ? swatchColor : "#FFFFFF"}
                onChange={(e) => {
                  const hex = e.target.value.toUpperCase();
                  setForm({ color: hex });
                }}
              />
              <button type="button" className="btn btn-outline" onClick={applyCustomColor}>
                OK
              </button>
            </div>
          </div>

          <details className="collapse-section mb-3">
            <summary>{t("extra_params")}</summary>
            <div className="collapse-body">

          <div className="mb-3">
            <label className="label" htmlFor="f-effects">{t("effect_label")}</label>
            <ChipInput
              data={EFFECTS}
              inputId="f-effects"
              lines={linesOf(String(form.effects ?? ""))}
              lang={lang}
              t={t}
              searchPlaceholder={t("effect_search")}
              duplicateKey="duplicate_effect"
              extras={[
                { key: "level", placeholder: t("ph_level"), min: 0, max: 255, def: "1", width: "55px" },
                { key: "duration", placeholder: t("ph_seconds"), min: 0, max: 999999, def: "30", width: "70px" },
              ]}
              chipLabel={(parts) => (
                <>
                  {parts[0]} {parts[1] ?? "1"} · {parts[2] ?? "30"}
                  {t("sec_suffix")}
                </>
              )}
              onChange={(lines) => setForm({ effects: lines.join("\n") })}
              onToast={showToast}
            />
            {errorField === "effects" && <div className="field-error">{errorMsg}</div>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            <div>
              <label className="label" htmlFor="f-alcohol">{t("alcohol")}</label>
              <input
                id="f-alcohol"
                type="number"
                className="input"
                min={0}
                max={100}
                placeholder={t("ph_alcohol")}
                value={form.alcohol}
                onChange={(e) => setForm({ alcohol: e.target.value })}
              />
            </div>
            <div>
              <label className="label" htmlFor="f-glint">{t("glint")}</label>
              <select
                id="f-glint"
                className="select"
                value={form.glint}
                onChange={(e) => setForm({ glint: e.target.value })}
              >
                <option value="false">{t("glint_no")}</option>
                <option value="true">{t("glint_yes")}</option>
              </select>
            </div>
            <div>
              <label className="label" htmlFor="f-distilltime">{t("distilltime")}</label>
              <input
                id="f-distilltime"
                type="number"
                className="input"
                min={0}
                placeholder={t("ph_distilltime")}
                value={form.distilltime}
                onChange={(e) => setForm({ distilltime: e.target.value })}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="label" htmlFor="f-cmd" title={t("cmd_tooltip")}>
              {t("custommodeldata")}
            </label>
            <input
              id="f-cmd"
              type="text"
              className="input"
              placeholder={t("ph_cmd")}
              value={form.custommodeldata}
              onChange={(e) => setForm({ custommodeldata: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="label" htmlFor="f-drinktitle">{t("drinktitle")}</label>
              <input
                id="f-drinktitle"
                type="text"
                className="input"
                placeholder={t("ph_drinktitle")}
                value={form.drinktitle}
                onChange={(e) => setForm({ drinktitle: e.target.value })}
              />
            </div>
            <div>
              <label className="label" htmlFor="f-drinksubtitle">{t("drinksubtitle")}</label>
              <input
                id="f-drinksubtitle"
                type="text"
                className="input"
                placeholder={t("ph_drinksubtitle")}
                value={form.drinksubtitle}
                onChange={(e) => setForm({ drinksubtitle: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="label" htmlFor="f-drinkmessage">{t("drinkmessage")}</label>
            <input
              id="f-drinkmessage"
              type="text"
              className="input"
              placeholder={t("ph_drinkmessage")}
              value={form.drinkmessage}
              onChange={(e) => setForm({ drinkmessage: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="label" htmlFor="f-servercommands">{t("servercommands")}</label>
              <textarea
                id="f-servercommands"
                className="textarea"
                rows={2}
                placeholder={t("command_placeholder")}
                value={form.servercommands}
                onChange={(e) => setForm({ servercommands: e.target.value })}
              />
            </div>
            <div>
              <label className="label" htmlFor="f-playercommands">{t("playercommands")}</label>
              <textarea
                id="f-playercommands"
                className="textarea"
                rows={2}
                placeholder={t("playercommand_placeholder")}
                value={form.playercommands}
                onChange={(e) => setForm({ playercommands: e.target.value })}
              />
            </div>
          </div>

            </div>
          </details>

          <div className="guide-box mb-4">
            <button
              type="button"
              className="guide-toggle"
              onClick={() => setQualityOpen((v) => !v)}
            >
              <span className={"guide-arrow" + (qualityOpen ? " open" : "")}>&#9656;</span>
              {t("quality")}
            </button>
            {qualityOpen && (
              <div className="mt-2 text-muted">
                <p className="mb-1">{t("quality_desc")}</p>
                <ul className="list-disc pl-5 mb-1">
                  <li>{t("q_name")}</li>
                  <li>{t("q_lore")}</li>
                  <li>{t("q_cmd")}</li>
                  <li>{t("q_effects")}</li>
                </ul>
                <a
                  href="https://breweryx.breweryteam.dev/docs/for-server-owners/config/recipes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {t("quality_wiki")}
                </a>
              </div>
            )}
          </div>

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

        <div className="card lg:sticky lg:top-16">
          <div className="panel-head flex-wrap justify-between">
            <div className="flex items-baseline gap-2">
              <span className="panel-index">02</span>
              <h2 className="text-base font-semibold">{t("yaml_title")}</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className={"badge " + statusBadge[status].cls}>
                {t(statusBadge[status].key)}
              </span>
              {yamlStats && <span className="stat-mono">{yamlStats}</span>}
            </div>
          </div>
          <div className="yaml-preview mb-3">
            {yamlText ? (
              yamlText
            ) : (
              <span className="placeholder">{t("empty_preview")}</span>
            )}
          </div>
          {status === "error" && errorMsg && !errorField && (
            <div className="field-error mb-2">{errorMsg}</div>
          )}
          <div className="flex flex-wrap gap-2 relative">
            <button
              type="button"
              className="btn btn-primary"
              disabled={!yamlText}
              onClick={handleCopy}
            >
              {t("copy")}
            </button>
            <div className="relative">
              <button
                type="button"
                className="btn btn-outline"
                disabled={!yamlText}
                onClick={() => {
                  if (recipeIds.length > 1) {
                    setDownloadOpen((v) => !v);
                  } else {
                    downloadYaml(Object.values(state.recipes), state.current);
                  }
                }}
              >
                {t("download")}
              </button>
              {downloadOpen && (
                <div className="dropdown-menu top-full mt-1">
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() =>
                      downloadYaml(Object.values(state.recipes), state.current)
                    }
                  >
                    {t("download_all")}
                  </button>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() =>
                      downloadYaml([state.recipes[state.current]], state.current)
                    }
                  >
                    {t("download_current")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {importOpen && (
        <div className="modal-backdrop" onClick={() => setImportOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-2">{t("import_title")}</h3>
            <p className="text-muted text-sm mb-2">{t("import_desc")}</p>
            <textarea
              className="textarea font-mono"
              rows={10}
              placeholder={t("ph_import")}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-3">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setImportOpen(false)}
              >
                {t("cancel")}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={importBusy}
                onClick={handleImport}
              >
                {importBusy ? t("importing") : t("import_confirm")}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className={"toast-box toast-" + toast.type}>{toast.msg}</div>}
    </div>
  );
}
