"use server"

import bcrypt from "bcrypt"
import { redirect } from "next/navigation"
import { z } from "zod"

import { prisma } from "@/lib/prisma"

const signupSchema = z
  .object({
    name: z.string().min(1, "Name is required").max(255),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  })

export async function signup(formData: FormData): Promise<never> {
  const parsed = signupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm-password"),
  })

  if (!parsed.success) {
    return redirect("/signup?error=invalid")
  }

  const { name, email, password } = parsed.data

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return redirect("/signup?error=invalid")
  }

  const hashedPassword = await bcrypt.hash(password, 12)

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  return redirect("/login?signup=success")
}
