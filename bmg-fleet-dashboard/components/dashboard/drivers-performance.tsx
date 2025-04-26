"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Sample driver performance data - Kenyan context
const performanceData = [
  { metric: "Safety Score", value: 92 },
  { metric: "Fuel Efficiency", value: 85 },
  { metric: "Timeliness", value: 88 },
  { metric: "Vehicle Care", value: 90 },
  { metric: "Customer Rating", value: 95 },
]

// Top drivers by different metrics
const topDrivers = [
  { name: "John Kamau", metric: "Overall", score: 92, vehicle: "KCA 476M" },
  { name: "Ali Hassan", metric: "Fuel Efficiency", score: 94, vehicle: "KBZ 123A" },
  { name: "Peter Odhiambo", metric: "Safety", score: 96, vehicle: "KDG 789P" },
  { name: "David Maina", metric: "Timeliness", score: 95, vehicle: "KBJ 456Q" },
]

export function DriversPerformance() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Driver Performance</CardTitle>
        <Select defaultValue="john">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Driver" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="john">John Kamau</SelectItem>
            <SelectItem value="ali">Ali Hassan</SelectItem>
            <SelectItem value="peter">Peter Odhiambo</SelectItem>
            <SelectItem value="david">David Maina</SelectItem>
            <SelectItem value="samuel">Samuel Kipchoge</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={performanceData}
              layout="vertical"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="metric" type="category" width={100} />
              <Tooltip formatter={(value) => [`${value}%`, "Score"]} />
              <Bar
                dataKey="value"
                fill="#0EA5E9"
                radius={[0, 4, 4, 0]}
                label={{
                  position: "right",
                  formatter: (value: number) => `${value}%`,
                  fill: "#6B7280",
                  fontSize: 12,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-3">Top Performing Drivers</h3>
          <div className="space-y-3">
            {topDrivers.map((driver, index) => (
              <div key={index} className="flex items-center p-2 border rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{driver.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {driver.vehicle} • {driver.metric}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{driver.score}%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

