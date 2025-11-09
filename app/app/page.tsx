import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppIndex() {
  const session = await auth()

  if (session) {
    redirect("/app/dashboard")
  }

  redirect("/login")
}