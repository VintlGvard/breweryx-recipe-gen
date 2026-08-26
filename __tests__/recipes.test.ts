import { describe, it, expect } from "vitest";
import {
  generateYaml,
  formsFromYaml,
  formFromYaml,
  ValidationError,
  DEFAULT_FORM,
  cloneForm,
  formFromRecord,
  getDisplayName,
  getItemLabel,
  getRandomRecipes,
  ITEMS,
  COLORS,
  WOOD_TYPES,
  EFFECTS,
  ALL_RECIPES,
  type RecipeForm,
} from "@/lib/recipes";

describe("generateYaml", () => {
  it("returns non-empty yaml for valid form", () => {
    const result = generateYaml([cloneForm(DEFAULT_FORM)]);
    expect(result.yaml).toBeTruthy();
    expect(result.yaml.length).toBeGreaterThan(0);
  });

  it("contains key fields", () => {
    const result = generateYaml([cloneForm(DEFAULT_FORM)]);
    expect(result.yaml).toContain("my_beer");
    expect(result.yaml).toContain("cookingtime");
    expect(result.yaml).toContain("difficulty");
  });

  it("returns recipeId and empty warnings", () => {
    const result = generateYaml([cloneForm(DEFAULT_FORM)]);
    expect(result.recipeId).toBe("my_beer");
    expect(result.warnings).toEqual([]);
  });
});

describe("formsFromYaml", () => {
  it("roundtrip parse", () => {
    const form = cloneForm(DEFAULT_FORM);
    const { yaml } = generateYaml([form]);
    const parsed = formsFromYaml(yaml);
    expect(parsed).toHaveLength(1);
    expect(parsed[0].recipe_id).toBe(form.recipe_id);
    expect(parsed[0].name).toBe(form.name);
    expect(parsed[0].cookingtime).toBe(form.cookingtime);
  });

  it("formFromYaml returns first recipe", () => {
    const { yaml } = generateYaml([cloneForm(DEFAULT_FORM)]);
    const form = formFromYaml(yaml);
    expect(form.recipe_id).toBe("my_beer");
  });

  it("throws on empty yaml", () => {
    expect(() => formsFromYaml("")).toThrow(ValidationError);
  });
});

describe("validation", () => {
  it("catches empty recipe_id", () => {
    const invalid = cloneForm(DEFAULT_FORM);
    invalid.recipe_id = "";
    expect(() => generateYaml([invalid])).toThrow(ValidationError);
  });

  it("catches empty ingredients", () => {
    const invalid = cloneForm(DEFAULT_FORM);
    invalid.ingredients = "";
    expect(() => generateYaml([invalid])).toThrow(ValidationError);
  });

  it("catches invalid recipe_id format", () => {
    const invalid = cloneForm(DEFAULT_FORM);
    invalid.recipe_id = "invalid id";
    expect(() => generateYaml([invalid])).toThrow(ValidationError);
  });
});

describe("data", () => {
  it("ITEMS and ALL_RECIPES are non-empty", () => {
    expect(ITEMS.length).toBeGreaterThan(0);
    expect(ALL_RECIPES.length).toBeGreaterThan(0);
  });

  it("EFFECTS, COLORS, WOOD_TYPES are non-empty", () => {
    expect(EFFECTS.length).toBeGreaterThan(0);
    expect(Object.keys(COLORS).length).toBeGreaterThan(0);
    expect(Object.keys(WOOD_TYPES).length).toBeGreaterThan(0);
  });
});

describe("exports", () => {
  it("exports main functions", () => {
    expect(typeof generateYaml).toBe("function");
    expect(typeof formsFromYaml).toBe("function");
    expect(typeof ValidationError).toBe("function");
    expect(typeof cloneForm).toBe("function");
  });

  it("getRandomRecipes returns requested count", () => {
    expect(getRandomRecipes(3)).toHaveLength(3);
  });
});
