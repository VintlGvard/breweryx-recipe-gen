import type { RecipeForm } from "@/lib/recipes";

export type Status = "waiting" | "generating" | "ok" | "error";
export type ToastType = "success" | "warning" | "danger" | "info";

export interface RecipesState {
  recipes: Record<string, RecipeForm>;
  current: string;
}