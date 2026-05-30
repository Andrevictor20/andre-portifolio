"use server";
import { cookies } from "next/headers";
import { encrypt } from "@/lib/auth";
import { redirect } from "next/navigation";
export async function login(state: any, formData: FormData) {
  const password = formData.get("password") as string;
  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: "Senha incorreta" };
  }
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day
  const session = await encrypt({ admin: true, expires });
  const cookieStore = await cookies();
  cookieStore.set("admin-session", session, { expires, httpOnly: true, secure: true });
  redirect("/admin");
}
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin-session");
  redirect("/admin/login");
}
