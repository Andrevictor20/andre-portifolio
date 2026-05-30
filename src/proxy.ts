import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/auth";
export async function proxy(request: NextRequest) {
  const session = request.cookies.get("admin-session")?.value;
  if (request.nextUrl.pathname.startsWith("/admin") && request.nextUrl.pathname !== "/admin/login") {
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    const parsed = await decrypt(session);
    if (!parsed) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }
  if (request.nextUrl.pathname === "/admin/login" && session) {
    const parsed = await decrypt(session);
    if (parsed) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/admin/:path*"],
};
