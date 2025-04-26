import type { Metadata } from "next"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HomeIcon } from "lucide-react"
import { DriversSummary } from "@/components/dashboard/drivers-summary"
import { DriversTable } from "@/components/dashboard/drivers-table"
import { DriversPerformance } from "@/components/dashboard/drivers-performance"

export const metadata: Metadata = {
  title: "Drivers | BMG Fleet Management",
  description: "Manage and monitor fleet drivers",
}

export default function DriversPage() {
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
          <BreadcrumbLink href="/dashboard/drivers">Drivers</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-2xl font-bold">Drivers</h1>

      <DriversSummary />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DriversTable />
        </div>
        <div>
          <DriversPerformance />
        </div>
      </div>
    </div>
  )
}

