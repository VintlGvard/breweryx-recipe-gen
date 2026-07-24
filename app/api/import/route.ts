import { NextRequest, NextResponse } from "next/server";
import { formFromYaml, ValidationError } from "@/lib/recipes";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body?.yaml) {
      return NextResponse.json({ success: false, error: "Нет YAML-данных." });
    }
    return NextResponse.json({ success: true, form: formFromYaml(body.yaml) });
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({ success: false, error: e.message });
    }
    return NextResponse.json({ success: false, error: `Ошибка парсинга: ${e}` });
  }
}
