import { Home, LinkIcon, Settings } from "lucide-react";
import Link from "next/link";

import { Doto } from "next/font/google";
import { cn } from "@/lib/utils";

const doto = Doto({
  subsets: ["latin"],
  weight: ["900"],
});

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/app/dashboard",
    icon: Home,
  },
  {
    title: "Links",
    url: "/app/links",
    icon: LinkIcon,
  },
  {
    title: "Settings",
    url: "/app/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="px-6 py-4">
          <Link
            href="/"
            className={cn(
              doto.className,
              "text-2xl text-foreground transition-colors hover:text-foreground/80"
            )}
          >
            shrtlnk
          </Link>
        </SidebarGroup>
        <SidebarGroup className="px-4">
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
