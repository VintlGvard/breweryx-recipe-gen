import yaml from "js-yaml";
import data from "../data.json";
import recipesData from "../recipes.json";

export interface LangLabel {
  ru: string;
  en: string;
}

export interface ItemEntry {
  name: string;
  displayName: string;
  name_ru: string;
}

export interface RecipeForm {
  recipe_id: string;
  name: string;
  lore: string;
  ingredients: string;
  effects: string;
  cookingtime: number | string;
  distillruns: number | string;
  distilltime: number | string;
  wood: number | string;
  age: number | string;
  color: string;
  difficulty: number | string;
  alcohol: number | string;
  glint: string;
  custommodeldata: string;
  drinktitle: string;
  drinksubtitle: string;
  drinkmessage: string;
  servercommands: string;
  playercommands: string;
}

export const ITEMS = data.items as ItemEntry[];
export const COLORS = data.colors as Record<string, LangLabel>;
export const WOOD_TYPES = data.wood_types as Record<string, LangLabel>;
export const EFFECTS = data.effects as ItemEntry[];
export const ALL_RECIPES = recipesData as Array<Record<string, unknown>>;

export function getRandomRecipes(count: number): Array<Record<string, unknown>> {
  const pool = [...ALL_RECIPES];
  const result: Array<Record<string, unknown>> = [];
  const n = Math.min(count, pool.length);
  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i));
    [pool[i], pool[j]] = [pool[j], pool[i]];
    result.push(pool[i]);
  }
  return result;
}

const KNOWN_ITEMS = new Set(ITEMS.map((item) => item.name));
const RECIPE_ID_RE = /^[a-zA-Z0-9_]+$/;

export const DEFAULT_FORM: RecipeForm = {
  recipe_id: "my_beer",
  name: "&6Крафтовое Пиво",
  lore: "Вкусное пиво\nОсвежающее",
  ingredients: "WHEAT/6\nWATER_BUCKET/1",
  effects: "",
  cookingtime: 5,
  distillruns: 0,
  distilltime: "",
  wood: 0,
  age: 0,
  color: "WHITE",
  difficulty: 6,
  alcohol: "",
  glint: "false",
  custommodeldata: "",
  drinktitle: "",
  drinksubtitle: "",
  drinkmessage: "",
  servercommands: "",
  playercommands: "",
};

export function cloneForm(form: RecipeForm): RecipeForm {
  return { ...form };
}

export function formFromRecord(rec: Record<string, unknown>): RecipeForm {
  const form = { ...DEFAULT_FORM };
  for (const key of Object.keys(DEFAULT_FORM) as (keyof RecipeForm)[]) {
    if (rec[key] != null) {
      (form as unknown as Record<string, unknown>)[key] = rec[key];
    }
  }
  return form;
}

export function getDisplayName(rec: Record<string, unknown>, lang: string, fallback?: string): string {
  return String(
    (lang === "ru" ? rec.displayName_ru : rec.displayName) ?? rec.displayName ?? fallback ?? rec.recipe_id
  );
}

export class ValidationError extends Error {
  field: string | null;

  constructor(message: string, field: string | null = null) {
    super(message);
    this.field = field;
  }
}

const SQ_OPEN = "\u0001";
const SQ_CLOSE = "\u0002";

function quoted(text: string): string {
  return SQ_OPEN + text + SQ_CLOSE;
}

export function linesOf(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseIngredients(text: string): { items: string[]; warnings: string[] } {
  const items: string[] = [];
  const warnings: string[] = [];
  for (const line of linesOf(text)) {
    if (!line.includes("/")) {
      throw new ValidationError(
        `Неверный формат ингредиента: "${line}". Нужно МАТЕРИАЛ/КОЛИЧЕСТВО`,
        "ingredients"
      );
    }
    const name = line.split("/")[0].trim();
    if (!KNOWN_ITEMS.has(name)) {
      warnings.push(`Неизвестный предмет: "${name}" (может не работать в BreweryX)`);
    }
    items.push(line);
  }
  return { items, warnings };
}

function parseEffects(text: string): string[] {
  const result: string[] = [];
  for (const line of linesOf(text)) {
    if (line.split("/").length !== 3) {
      throw new ValidationError(
        `Неверный формат эффекта: "${line}". Нужно НАЗВАНИЕ/УРОВЕНЬ/ДЛИТЕЛЬНОСТЬ`,
        "effects"
      );
    }
    result.push(line);
  }
  return result;
}

function validateForm(form: RecipeForm): void {
  if (!form.recipe_id) {
    throw new ValidationError("ID рецепта не может быть пустым.", "recipe_id");
  }
  if (!RECIPE_ID_RE.test(form.recipe_id)) {
    throw new ValidationError(
      "ID рецепта: только латиница, цифры и нижнее подчёркивание.",
      "recipe_id"
    );
  }
  if (!form.name) {
    throw new ValidationError("Название рецепта не может быть пустым.", "name");
  }
  if (form.cookingtime === "" || form.cookingtime == null) {
    throw new ValidationError("Время варки не может быть пустым.", "cookingtime");
  }
  const cookingtime = Number(form.cookingtime);
  if (!Number.isFinite(cookingtime) || cookingtime < 1) {
    throw new ValidationError("Время варки должно быть числом не меньше 1.", "cookingtime");
  }
  if (form.difficulty === "" || form.difficulty == null) {
    throw new ValidationError("Сложность не может быть пустой.", "difficulty");
  }
  const difficulty = Number(form.difficulty);
  if (!Number.isFinite(difficulty) || difficulty < 1 || difficulty > 10) {
    throw new ValidationError("Сложность должна быть от 1 до 10.", "difficulty");
  }
}

type RecipeValue = string | string[] | number | boolean;

function buildRecipe(form: RecipeForm): {
  recipe: Record<string, RecipeValue>;
  warnings: string[];
} {
  const { items, warnings } = parseIngredients(String(form.ingredients ?? ""));

  const r: Record<string, RecipeValue> = {
    name: quoted(form.name),
    lore: linesOf(String(form.lore ?? "")).map(quoted),
    ingredients: items,
    cookingtime: Number(form.cookingtime),
  };

  for (const key of ["distillruns", "wood", "age"] as const) {
    const value = Number(form[key]) || 0;
    if (value > 0) r[key] = value;
  }

  if (form.distilltime !== "" && form.distilltime != null) {
    r.distilltime = Number(form.distilltime) || 0;
  }

  r.color = form.color;
  r.difficulty = Number(form.difficulty);

  if (form.alcohol !== "" && form.alcohol != null) {
    r.alcohol = Number(form.alcohol) || 0;
  }
  if (form.glint === "true") r.glint = true;

  const effects = parseEffects(String(form.effects ?? ""));
  if (effects.length) r.effects = effects;

  if (form.custommodeldata) r.customModelData = form.custommodeldata;

  for (const key of ["drinktitle", "drinksubtitle", "drinkmessage"] as const) {
    if (form[key]) r[key] = quoted(form[key]);
  }

  for (const key of ["servercommands", "playercommands"] as const) {
    const commands = linesOf(String(form[key] ?? ""));
    if (commands.length) r[key] = commands.map(quoted);
  }

  return { recipe: r, warnings };
}

function dumpYaml(recipes: Record<string, Record<string, RecipeValue>>): string {
  const dumped = yaml
    .dump(recipes, { lineWidth: -1, noRefs: true, sortKeys: false })
    .replace(
      /(["']?)(?:\u0001|\\x01)([\s\S]*?)(?:\u0002|\\x02)\1/g,
      (_m, _q, text: string) => {
        const unescaped = text.replace(/\\(["\\])/g, "$1");
        return "'" + unescaped.replace(/'/g, "''") + "'";
      }
    );
  return "  " + dumped.trimEnd().replace(/\n/g, "\n  ");
}

export function generateYaml(forms: RecipeForm[]): {
  yaml: string;
  recipeId: string;
  warnings: string[];
} {
  if (!forms.length) throw new ValidationError("Нет данных рецепта.");

  const allRecipes: Record<string, Record<string, RecipeValue>> = {};
  const allWarnings: string[] = [];

  for (const form of forms) {
    validateForm(form);
    const { recipe, warnings } = buildRecipe(form);
    allRecipes[form.recipe_id] = recipe;
    allWarnings.push(...warnings);
  }

  return {
    yaml: dumpYaml(allRecipes),
    recipeId: forms[0].recipe_id,
    warnings: allWarnings,
  };
}

export function formFromYaml(yamlText: string): RecipeForm {
  const parsed = yaml.load(yamlText);
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new ValidationError("YAML должен быть словарём (объектом)");
  }

  const entries = Object.entries(parsed as Record<string, unknown>);
  if (!entries.length) throw new ValidationError("YAML пуст");

  const [recipeId, raw] = entries[0];
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    throw new ValidationError(`Рецепт "${recipeId}" должен быть объектом`);
  }
  const d = raw as Record<string, unknown>;

  const asText = (value: unknown): string =>
    value == null ? "" : String(value).replace(/\u00a7/g, "&");

  const asLines = (value: unknown): string =>
    Array.isArray(value) ? value.map(String).join("\n") : "";

  return {
    recipe_id: recipeId,
    name: asText(d.name ?? ""),
    lore: Array.isArray(d.lore) ? d.lore.filter(Boolean).map(asText).join("\n") : "",
    ingredients: asLines(d.ingredients),
    effects: asLines(d.effects),
    cookingtime: (d.cookingtime as number) ?? 5,
    distillruns: (d.distillruns as number) ?? 0,
    distilltime: (d.distilltime as number | string) ?? "",
    wood: (d.wood as number) ?? 0,
    age: (d.age as number) ?? 0,
    color: (d.color as string) ?? "WHITE",
    difficulty: (d.difficulty as number) ?? 3,
    alcohol: (d.alcohol as number | string) ?? "",
    glint: d.glint ? "true" : "false",
    custommodeldata: d.customModelData == null ? "" : String(d.customModelData),
    drinktitle: asText(d.drinktitle ?? ""),
    drinksubtitle: asText(d.drinksubtitle ?? ""),
    drinkmessage: asText(d.drinkmessage ?? ""),
    servercommands: asLines(d.servercommands),
    playercommands: asLines(d.playercommands),
  };
}
