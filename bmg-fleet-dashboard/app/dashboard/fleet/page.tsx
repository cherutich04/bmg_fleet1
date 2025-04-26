import type { Metadata } from "next"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HomeIcon } from "lucide-react"
import { FleetSummary } from "@/components/dashboard/fleet-summary"
import { FleetTable } from "@/components/dashboard/fleet-table"
import { FleetStatus } from "@/components/dashboard/fleet-status"

export const metadata: Metadata = {
  title: "Fleet | BMG Fleet Management",
  description: "Manage and monitor fleet vehicles",
}

export default function FleetPage() {
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
          <BreadcrumbLink href="/dashboard/fleet">Fleet</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-2xl font-bold">Fleet</h1>

      <FleetSummary />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FleetTable />
        </div>
        <div>
          <FleetStatus />
        </div>
      </div>
    </div>
  )
}

