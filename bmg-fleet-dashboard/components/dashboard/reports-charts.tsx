"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Sample data for fuel consumption by vehicle - Kenyan context
const fuelData = [
  { vehicle: "KCA 476M", consumption: 450, efficiency: 7.2, distance: 3240 },
  { vehicle: "KBZ 123A", consumption: 520, efficiency: 6.8, distance: 3536 },
  { vehicle: "KDG 789P", consumption: 380, efficiency: 7.5, distance: 2850 },
  { vehicle: "KBJ 456Q", consumption: 420, efficiency: 7.0, distance: 2940 },
  { vehicle: "KCF 321R", consumption: 480, efficiency: 6.9, distance: 3312 },
  { vehicle: "KDJ 654S", consumption: 410, efficiency: 7.3, distance: 2993 },
  { vehicle: "KBH 987T", consumption: 440, efficiency: 7.1, distance: 3124 },
]

// Sample data for monthly distance trend
const distanceData = [
  { month: "Jan", distance: 18500, fuel: 2570 },
  { month: "Feb", distance: 17200, fuel: 2430 },
  { month: "Mar", distance: 19800, fuel: 2750 },
  { month: "Apr", distance: 24580, fuel: 3420 },
  { month: "May", distance: 22300, fuel: 3100 },
  { month: "Jun", distance: 21500, fuel: 2980 },
]

// Sample data for expense breakdown
const expenseData = [
  { name: "Fuel", value: 580000, color: "#0EA5E9" },
  { name: "Maintenance", value: 320000, color: "#F59E0B" },
  { name: "Insurance", value: 180000, color: "#10B981" },
  { name: "Tolls & Parking", value: 80000, color: "#F43F5E" },
  { name: "Other", value: 80000, color: "#8B5CF6" },
]

export function ReportsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Monthly Distance Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={distanceData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip
                formatter={(value, name) => {
                  if (name === "fuel") return [`${value} L`, "Fuel Consumption"]
                  return [`${value} km`, "Distance"]
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="distance"
                stroke="#1E40AF"
                activeDot={{ r: 8 }}
                name="Distance (km)"
              />
              <Line yAxisId="right" type="monotone" dataKey="fuel" stroke="#F59E0B" name="Fuel (L)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vehicle Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="efficiency">
            <TabsList className="mb-4">
              <TabsTrigger value="efficiency">Efficiency (km/l)</TabsTrigger>
              <TabsTrigger value="consumption">Fuel Consumption (L)</TabsTrigger>
              <TabsTrigger value="distance">Distance (km)</TabsTrigger>
            </TabsList>
            <TabsContent value="efficiency">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={fuelData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="vehicle" type="category" width={80} />
                  <Tooltip formatter={(value) => [`${value} km/l`, "Efficiency"]} />
                  <Legend />
                  <Bar dataKey="efficiency" fill="#10B981" name="Efficiency (km/l)" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="consumption">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={fuelData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="vehicle" type="category" width={80} />
                  <Tooltip formatter={(value) => [`${value} L`, "Consumption"]} />
                  <Legend />
                  <Bar dataKey="consumption" fill="#F59E0B" name="Consumption (L)" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="distance">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={fuelData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="vehicle" type="category" width={80} />
                  <Tooltip formatter={(value) => [`${value} km`, "Distance"]} />
                  <Legend />
                  <Bar dataKey="distance" fill="#0EA5E9" name="Distance (km)" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expense Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`Kshs ${value.toLocaleString()}`, "Amount"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Driver Performance Ranking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "John Kamau", vehicle: "KCA 476M", score: 92, efficiency: 7.8, distance: 3240 },
              { name: "Ali Hassan", vehicle: "KBZ 123A", score: 88, efficiency: 7.2, distance: 2980 },
              { name: "Peter Odhiambo", vehicle: "KDG 789P", score: 85, efficiency: 7.0, distance: 2850 },
              { name: "David Maina", vehicle: "KBJ 456Q", score: 82, efficiency: 6.8, distance: 2740 },
              { name: "Samuel Kipchoge", vehicle: "KCF 321R", score: 80, efficiency: 6.7, distance: 2650 },
            ].map((driver, index) => (
              <div key={index} className="flex items-center p-3 border rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{driver.name}</p>
                      <p className="text-sm text-muted-foreground">{driver.vehicle}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{driver.score}/100</p>
                      <p className="text-sm text-muted-foreground">{driver.efficiency} km/l</p>
                    </div>
                  </div>
                  <div className="mt-2 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${driver.score}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

