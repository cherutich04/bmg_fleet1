import type { Metadata } from "next"
import { SummaryCards } from "@/components/dashboard/summary-cards"
import { MapAndAlerts } from "@/components/dashboard/map-and-alerts"
import { GraphicalReports } from "@/components/dashboard/graphical-reports"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HomeIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard | BMG Fleet Management",
  description: "Overview of fleet operations, alerts, financial summaries, and daily activities",
}

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <HomeIcon className="h-4 w-4 mr-1" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-2xl font-bold">Dashboard</h1>

      <SummaryCards />
      <MapAndAlerts />
      <GraphicalReports />
    </div>
  )
}

