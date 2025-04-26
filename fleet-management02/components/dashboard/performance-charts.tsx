"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
} from "recharts"

const mileageCostData = [
  { month: "Jan", mileage: 12500, cost: 4200 },
  { month: "Feb", mileage: 11800, cost: 3900 },
  { month: "Mar", mileage: 13200, cost: 4500 },
  { month: "Apr", mileage: 14500, cost: 5100 },
  { month: "May", mileage: 15200, cost: 5400 },
  { month: "Jun", mileage: 16000, cost: 5800 },
]

const driverEfficiencyData = [
  { name: "John S.", efficiency: 92, fuelUsage: 85, timeManagement: 88, safety: 95 },
  { name: "Sarah J.", efficiency: 88, fuelUsage: 92, timeManagement: 85, safety: 90 },
  { name: "Mike D.", efficiency: 78, fuelUsage: 75, timeManagement: 80, safety: 85 },
  { name: "Lisa B.", efficiency: 95, fuelUsage: 90, timeManagement: 92, safety: 98 },
  { name: "David W.", efficiency: 85, fuelUsage: 88, timeManagement: 82, safety: 87 },
]

export function PerformanceCharts() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("mileage-cost")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Performance Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="mileage-cost" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-end mb-4">
            <TabsList>
              <TabsTrigger value="mileage-cost">Mileage vs. Cost</TabsTrigger>
              <TabsTrigger value="driver-efficiency">Driver Efficiency</TabsTrigger>
            </TabsList>
          </div>

          {loading ? (
            <div className="h-[300px] w-full animate-pulse rounded bg-muted"></div>
          ) : (
            <>
              <TabsContent value="mileage-cost" className="mt-0">
                <div className="h-[300px]">
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={mileageCostData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" tickFormatter={(value) => `${value} mi`} />
                        <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `$${value}`} />
                        <Tooltip
                          formatter={(value: number, name: string) => {
                            if (name === "mileage") return [`${value} mi`, "Mileage"]
                            if (name === "cost") return [`$${value}`, "Cost"]
                            return [value, name]
                          }}
                        />
                        <Legend />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="mileage"
                          stroke="#1E40AF"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="cost"
                          stroke="#10B981"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </TabsContent>

              <TabsContent value="driver-efficiency" className="mt-0">
                <div className="h-[300px]">
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={driverEfficiencyData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `${value}%`} />
                        <Tooltip formatter={(value: number) => [`${value}%`, undefined]} />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="efficiency"
                          stackId="1"
                          stroke="#1E40AF"
                          fill="#1E40AF"
                          fillOpacity={0.6}
                        />
                        <Area
                          type="monotone"
                          dataKey="fuelUsage"
                          stackId="2"
                          stroke="#10B981"
                          fill="#10B981"
                          fillOpacity={0.6}
                        />
                        <Area
                          type="monotone"
                          dataKey="timeManagement"
                          stackId="3"
                          stroke="#F59E0B"
                          fill="#F59E0B"
                          fillOpacity={0.6}
                        />
                        <Area
                          type="monotone"
                          dataKey="safety"
                          stackId="4"
                          stroke="#EF4444"
                          fill="#EF4444"
                          fillOpacity={0.6}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </CardContent>
    </Card>
  )
}

