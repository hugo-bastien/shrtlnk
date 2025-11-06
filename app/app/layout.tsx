import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import AppHeader from "@/components/app-header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-6">
        <AppHeader className="px-4" />
        <div className="flex-1 px-4">{children}</div>
      </main>
    </SidebarProvider>
  )
}
