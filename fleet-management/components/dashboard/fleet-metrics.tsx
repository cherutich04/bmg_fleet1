"use client"

import { useState, useEffect } from "react"
import { Car, Truck, AlertTriangle, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function FleetMetrics() {
  const [loading, setLoading] = useState(true)
  const [metrics, setMetrics] = useState({
    activeVehicles: 0,
    totalVehicles: 0,
    maintenanceAlerts: 0,
    fuelEfficiency: 0,
    dailyRevenue: 0,
  })

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setMetrics({
        activeVehicles: 42,
        totalVehicles: 50,
        maintenanceAlerts: 3,
        fuelEfficiency: 78,
        dailyRevenue: 12450,
      })
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
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
              <div className="text-2xl font-bold">
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

      <Card>
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
              <div className="text-2xl font-bold">{metrics.maintenanceAlerts}</div>
              <div className="flex items-center mt-2">
                <span
                  className={`h-3 w-3 rounded-full ${metrics.maintenanceAlerts > 0 ? "bg-amber-500" : "bg-green-500"}`}
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

      <Card>
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
              <div className="text-2xl font-bold">{metrics.fuelEfficiency}%</div>
              <Progress value={metrics.fuelEfficiency} className="h-2 mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {metrics.fuelEfficiency >= 75 ? "Good" : "Needs improvement"}
              </p>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Daily Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <div className="h-6 w-24 animate-pulse rounded bg-muted"></div>
              <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold">${metrics.dailyRevenue.toLocaleString()}</div>
              <div className="flex items-center mt-2">
                <span className="text-green-500 text-xs">↑ 12%</span>
                <span className="ml-2 text-xs text-muted-foreground">from yesterday</span>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

