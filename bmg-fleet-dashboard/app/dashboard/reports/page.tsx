import type { Metadata } from "next"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HomeIcon } from "lucide-react"
import { ReportsSummary } from "@/components/dashboard/reports-summary"
import { ReportsFilter } from "@/components/dashboard/reports-filter"
import { ReportsCharts } from "@/components/dashboard/reports-charts"

export const metadata: Metadata = {
  title: "Reports | BMG Fleet Management",
  description: "View and analyze fleet performance reports",
}

export default function ReportsPage() {
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
          <BreadcrumbLink href="/dashboard/reports">Reports</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-2xl font-bold">Reports</h1>

      <ReportsSummary />
      <ReportsFilter />
      <ReportsCharts />
    </div>
  )
}

