"use server"

import { redirect } from "next/navigation"
import { AuthError } from "next-auth"

import { signIn } from "@/auth"

type AuthState = {
  error?: string
}

export async function authenticate(
  _prevState: AuthState | undefined,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get("email")
  const password = formData.get("password")

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Invalid form submission." }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/app/dashboard",
    })
    redirect("/app/dashboard")
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password." }
        default:
          return { error: "Something went wrong. Please try again." }
      }
    }
    throw error
  }
}
