"use client";

import ChipInput from "@/components/ChipInput";
import {
  ITEMS,
  EFFECTS,
  COLORS,
  WOOD_TYPES,
  linesOf,
  type RecipeForm,
} from "@/lib/recipes";
import type { Lang } from "@/lib/i18n";
import type { ToastType } from "./types";

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

interface RecipeFormFieldsProps {
  form: RecipeForm;
  setForm: (patch: Partial<RecipeForm>) => void;
  t: (key: string) => string;
  lang: Lang;
  errorField: string | null;
  errorMsg: string;
  warnings: string[];
  showToast: (msg: string, type: ToastType) => void;
  swatchColor: string;
  customColor: string;
  setCustomColor: (v: string) => void;
  applyCustomColor: () => void;
  colorGuideOpen: boolean;
  setColorGuideOpen: (v: boolean) => void;
  qualityOpen: boolean;
  setQualityOpen: (v: boolean) => void;
  handleRecipeIdChange: (newId: string) => void;
}

export default function RecipeFormFields({
  form,
  setForm,
  t,
  lang,
  errorField,
  errorMsg,
  warnings,
  showToast,
  swatchColor,
  customColor,
  setCustomColor,
  applyCustomColor,
  colorGuideOpen,
  setColorGuideOpen,
  qualityOpen,
  setQualityOpen,
  handleRecipeIdChange,
}: RecipeFormFieldsProps) {
  const isCustomColor = form.color.startsWith("#");

  return (
    <>
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
          onClick={() => setColorGuideOpen(!colorGuideOpen)}
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
          onClick={() => setQualityOpen(!qualityOpen)}
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
    </>
  );
}