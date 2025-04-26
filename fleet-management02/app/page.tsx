import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { FleetHealthMap } from "@/components/dashboard/fleet-health-map"
import { FleetMetrics } from "@/components/dashboard/fleet-metrics"
import { MaintenanceAlerts } from "@/components/dashboard/maintenance-alerts"
import { PerformanceCharts } from "@/components/dashboard/performance-charts"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6">
        <FleetMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FleetHealthMap />
          </div>
          <div>
            <MaintenanceAlerts />
          </div>
        </div>
        <PerformanceCharts />
      </div>
    </div>
  )
}

