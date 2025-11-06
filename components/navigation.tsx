"use client";

import Link from "next/link";
import { Doto } from "next/font/google";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const doto = Doto({
  subsets: ["latin"],
  weight: ["900"],
});

const navActions = [
  { label: "GitHub", href: "https://github.com/hugo-bastien/shrtlnk" },
  { label: "Docs", href: "/docs" },
  { label: "Dashboard", href: "/app/dashboard" },
];

export default function Navigation() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-20 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full items-center justify-center px-6">
        <div className="flex w-full items-center justify-between gap-6">
          <Link
            href="/"
            className={cn(
              doto.className,
              "text-2xl text-foreground transition-colors hover:text-foreground/80"
            )}
          >
            shrtlnk
          </Link>
          <NavigationMenu
            className={cn("ml-auto justify-end", isMobile ? "hidden sm:flex" : "")}
          >
            <NavigationMenuList className="gap-2 justify-end">
              {navActions.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href} className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
