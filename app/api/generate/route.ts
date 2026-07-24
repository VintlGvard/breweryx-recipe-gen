import { NextRequest, NextResponse } from "next/server";
import { generateYaml, RecipeForm, ValidationError } from "@/lib/recipes";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const forms = (body.recipes ?? []) as RecipeForm[];
    const { yaml, recipeId, warnings } = generateYaml(forms);
    return NextResponse.json({ success: true, yaml, recipe_id: recipeId, warnings });
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({ success: false, error: e.message, field: e.field });
    }
    return NextResponse.json({ success: false, error: `Ошибка: ${e}` });
  }
}
