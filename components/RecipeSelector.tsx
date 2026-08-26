"use client";

import type { RecipesState } from "./types";

interface RecipeSelectorProps {
  state: RecipesState;
  setState: React.Dispatch<React.SetStateAction<RecipesState | null>>;
  t: (key: string) => string;
  onAdd: () => void;
  onRemove: () => void;
}

export default function RecipeSelector({
  state,
  setState,
  t,
  onAdd,
  onRemove,
}: RecipeSelectorProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-4" role="group" aria-label={t("recipe")}>
      <span className="text-sm">{t("recipe")}</span>
      <select
        className="select"
        style={{ maxWidth: "200px" }}
        value={state.current}
        onChange={(e) => setState((p) => (p ? { ...p, current: e.target.value } : p))}
        aria-label={t("recipe")}
      >
        {Object.keys(state.recipes).map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="btn btn-outline btn-sm"
        title={t("add_recipe")}
        aria-label={t("add_recipe")}
        onClick={onAdd}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        title={t("remove_recipe")}
        aria-label={t("remove_recipe")}
        onClick={onRemove}
      >
        &minus;
      </button>
    </div>
  );
}