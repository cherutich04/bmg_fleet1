"use client"

import { useState, useEffect } from "react"
import { Car, Truck, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sparkline } from "@/components/ui/sparkline"

export function FleetMetrics() {
  const [loading, setLoading] = useState(true)
  const [metrics, setMetrics] = useState({
    activeVehicles: 0,
    totalVehicles: 0,
    maintenanceAlerts: 0,
    fuelEfficiency: 0,
    fuelTrend: [] as number[],
    dailyRevenue: 0,
    complianceStatus: "green", // green, yellow, red
  })

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setMetrics({
        activeVehicles: 42,
        totalVehicles: 50,
        maintenanceAlerts: 3,
        fuelEfficiency: 78,
        fuelTrend: [65, 68, 75, 72, 78, 76, 78],
        dailyRevenue: 12450,
        complianceStatus: "green",
      })
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Vehicles</CardTitle>
          <Car className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <div className="h-6 w-24 animate-pulse rounded bg-muted"></div>
              <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold font-mono">
                {metrics.activeVehicles}/{metrics.totalVehicles}
              </div>
              <Progress value={(metrics.activeVehicles / metrics.totalVehicles) * 100} className="h-2 mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {Math.round((metrics.activeVehicles / metrics.totalVehicles) * 100)}% fleet utilization
              </p>
            </>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Maintenance Alerts</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <div className="h-6 w-16 animate-pulse rounded bg-muted"></div>
              <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold font-mono">{metrics.maintenanceAlerts}</div>
              <div className="flex items-center mt-2">
                <span
                  className={`h-3 w-3 rounded-full ${metrics.maintenanceAlerts > 0 ? "bg-[#F59E0B]" : "bg-[#10B981]"}`}
                ></span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {metrics.maintenanceAlerts > 0
                    ? `${metrics.maintenanceAlerts} vehicles need attention`
                    : "All vehicles operational"}
                </span>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Fuel Efficiency</CardTitle>
          <Truck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <div className="h-6 w-16 animate-pulse rounded bg-muted"></div>
              <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold font-mono">{metrics.fuelEfficiency}%</div>
              <div className="h-10 mt-2">
                <Sparkline data={metrics.fuelTrend} color="#0EA5E9" width={100} height={30} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {metrics.fuelEfficiency >= 75 ? "Good" : "Needs improvement"}
              </p>
            </>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
          <div className="flex space-x-1">
            <div
              className={`h-3 w-3 rounded-full ${metrics.complianceStatus === "green" ? "bg-[#10B981]" : "bg-gray-300"}`}
            ></div>
            <div
              className={`h-3 w-3 rounded-full ${metrics.complianceStatus === "yellow" ? "bg-[#F59E0B]" : "bg-gray-300"}`}
            ></div>
            <div
              className={`h-3 w-3 rounded-full ${metrics.complianceStatus === "red" ? "bg-[#EF4444]" : "bg-gray-300"}`}
            ></div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <div className="h-6 w-24 animate-pulse rounded bg-muted"></div>
              <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold font-mono">
                {metrics.complianceStatus === "green"
                  ? "Compliant"
                  : metrics.complianceStatus === "yellow"
                    ? "Warning"
                    : "Alert"}
              </div>
              <div className="flex items-center mt-2">
                <span
                  className={`h-3 w-3 rounded-full ${
                    metrics.complianceStatus === "green"
                      ? "bg-[#10B981]"
                      : metrics.complianceStatus === "yellow"
                        ? "bg-[#F59E0B]"
                        : "bg-[#EF4444]"
                  }`}
                ></span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {metrics.complianceStatus === "green"
                    ? "All systems normal"
                    : metrics.complianceStatus === "yellow"
                      ? "Attention needed"
                      : "Critical issues"}
                </span>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

