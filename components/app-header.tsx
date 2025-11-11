"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export default function AppHeader({
  className,
}: {
  className?: string
}) {
  const pathname = usePathname()

  const pageName = useMemo(() => {
    if (!pathname || pathname === "/") {
      return "Home"
    }

    const segments = pathname.split("/").filter(Boolean)
    const lastSegment = segments[segments.length - 1] ?? "dashboard"
    const words = lastSegment.replace(/-/g, " ").split(" ")

    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }, [pathname])

  return (
    <header
      className={cn(
        "flex items-center gap-3 border-b border-border/60 h-16 p-6 backdrop-blur",
        className
      )}
    >
      <SidebarTrigger />
      <span className="text-lg font-semibold">{pageName}</span>
    </header>
  )
}
