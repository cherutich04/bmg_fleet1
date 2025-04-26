"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Home,
  DollarSign,
  BarChart2,
  PenToolIcon as Tool,
  Users,
  Car,
  Settings,
  ShieldCheck,
  LogOut,
} from "lucide-react"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: DollarSign, label: "Expenses", href: "/dashboard/expenses" },
  { icon: BarChart2, label: "Reports", href: "/dashboard/reports" },
  { icon: Tool, label: "Maintenance", href: "/dashboard/maintenance" },
  { icon: Users, label: "Drivers", href: "/dashboard/drivers" },
  { icon: Car, label: "Fleet", href: "/dashboard/fleet" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: ShieldCheck, label: "Roles", href: "/dashboard/roles" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="flex items-center justify-center py-4">
        <Link href="/dashboard" className="flex items-center">
          <Car className="h-6 w-6 text-sky-600" />
          <span className="ml-2 text-lg font-bold">BMG Fleet</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                <Link href={item.href} className="flex items-center">
                  <item.icon className="h-5 w-5" />
                  <span className="ml-2">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-rose-500 hover:text-rose-600">
              <LogOut className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

