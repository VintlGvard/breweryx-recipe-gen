import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.yaml || !body?.recipe_id) {
    return NextResponse.json({ success: false, error: "Нет данных для скачивания." }, { status: 400 });
  }
  return new NextResponse(body.yaml, {
    headers: {
      "Content-Type": "text/yaml; charset=utf-8",
      "Content-Disposition": `attachment; filename="${body.recipe_id}.yml"`,
    },
  });
}
