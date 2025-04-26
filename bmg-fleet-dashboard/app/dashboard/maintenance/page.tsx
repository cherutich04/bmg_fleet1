import type { Metadata } from "next"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HomeIcon } from "lucide-react"
import { MaintenanceSummary } from "@/components/dashboard/maintenance-summary"
import { MaintenanceSchedule } from "@/components/dashboard/maintenance-schedule"
import { MaintenanceHistory } from "@/components/dashboard/maintenance-history"

export const metadata: Metadata = {
  title: "Maintenance | BMG Fleet Management",
  description: "Track and manage vehicle maintenance",
}

export default function MaintenancePage() {
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
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard/maintenance">Maintenance</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-2xl font-bold">Maintenance</h1>

      <MaintenanceSummary />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MaintenanceSchedule />
        <MaintenanceHistory />
      </div>
    </div>
  )
}

