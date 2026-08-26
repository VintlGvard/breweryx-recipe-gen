import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  const h = await headers();
  const acceptLang = h.get("accept-language") || "";
  const preferred = acceptLang.split(",")[0]?.trim().toLowerCase() || "";

  if (preferred.startsWith("ru")) {
    redirect("/ru");
  }
  redirect("/en");
}