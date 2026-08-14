import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./lib/jwt";

// export function proxy(req: NextRequest) {
//   const currentPath = req.nextUrl.pathname;
//   const isProtectedRoute = protectedRoot.includes(currentPath);
//   const isPublicRoute = publicRoot.includes(currentPath);

//   const cookie = req.cookies.get("session")?.value;
//     // Allow unauthenticated access to public or auth routes
//   if (publicRoot.includes(currentPath) || protectedRoot.includes(currentPath)) {
//     return NextResponse.next();
// }

// import type { NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode";
// import { COOKIE_NAME } from "./data/constant";
// import {JwtPayload} from "./utils/auth";

const protectedRoutes = [
  "/login",
  "/register",
  "/verify-email",
  "/forgot-password",
  "/reset-password",
  "/verify-2FA",
];
const publicRoutes = ["/", "/login", "/register", "/about", "/contact"];

// interface JwtPayload {
//   userId: string;
//   iat: number;
//   exp: number;
// }

// fullauth_token

export function proxy(req: NextRequest) {
  const authToken = req.cookies.get("session")?.value;
  const currentPath = req.nextUrl.pathname;

  // If token exists
  if (authToken) {
    const decodedToken = verifyJwt<string>(authToken);

    if (!decodedToken) {
      // Token is invalid or expired, redirect to login
      const res = NextResponse.redirect(new URL("/login", req.url));
      res.cookies.delete("session");
      return res;
    }
    // if User is already logged in and trying to access login or register page, redirect to dashboard
    if (protectedRoutes.includes(currentPath)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  }

  // Allow unauthenticated access to public or auth routes
  if (
    publicRoutes.includes(currentPath) ||
    protectedRoutes.includes(currentPath)
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", req.url));
  // If not authenticated and accessing protected routes
  // const loginUrl = new URL("/login", req.url);
  // loginUrl.searchParams.set("redirect", currentPath);
  // return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!.*\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
