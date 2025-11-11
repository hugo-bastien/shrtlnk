import { Home, LinkIcon, Settings, ChevronUp, User, UserPen, LogOut } from "lucide-react";
import Logo from "@/components/logo";

import { auth } from "@/auth";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

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
];

const footerItems = [
  {
    title: "Account",
    url: "/app/account",
    icon: UserPen,
  },
  {
    title: "Settings",
    url: "/app/settings",
    icon: Settings,
  },
  {
    title: "Sign out",
    url: "/signout",
    icon: LogOut,
  }
];

export default async function AppSidebar() {
  const session = await auth();
  const fullName = session?.user?.name?.trim() ?? "";
  const nameParts = fullName ? fullName.split(/\s+/) : [];
  const [firstName, ...rest] = nameParts;
  const lastName = rest.join(" ");
  const displayName =
    [firstName, lastName].filter(Boolean).join(" ") ||
    session?.user?.name ||
    session?.user?.email?.split("@")[0] ||
    "User";

  return (
    <Sidebar>
      <SidebarHeader className="px-6 py-4">
        <Logo />
      </SidebarHeader>
      <SidebarGroup className="px-4">
        <SidebarContent>
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
        </SidebarContent>
      </SidebarGroup>
      <SidebarFooter className="mt-auto px-4 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="group">
                  <User /> {displayName}
                  <ChevronUp className="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="start" style={{ width: "var(--radix-popper-anchor-width)" }}>
                {footerItems.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
