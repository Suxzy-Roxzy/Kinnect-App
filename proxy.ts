import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const protectedRoot = ["/dashboard", "/profile", "/settings", "/admin"];
const publicRoot = ["/", "/login", "/register", "/about", "/contact"];

export function proxy(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoot.includes(currentPath);
  const isPublicRoute = publicRoot.includes(currentPath);

  const cookie = req.cookies.get("session")?.value;
}



