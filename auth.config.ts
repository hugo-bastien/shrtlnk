import type { NextAuthConfig } from "next-auth"

const publicRoutes = [
  "/login",
  "/signup",
  "/about",
  "/terms",
  "/privacy",
  "/api/auth/(.*)",
]

function isPublicRoute(pathname: string) {
  return publicRoutes.some((route) => {
    if (route.endsWith("/*")) {
      const base = route.slice(0, -2)
      return pathname === base || pathname.startsWith(`${base}/`)
    }
    return pathname === route
  })
}

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const pathname = nextUrl.pathname

      if (isPublicRoute(pathname)) {
        if (pathname === "/login" && isLoggedIn) {
          return Response.redirect(new URL("/app/dashboard", nextUrl))
        }
        return true
      }

      if (pathname.startsWith("/app")) {
        return isLoggedIn
      }

      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig
