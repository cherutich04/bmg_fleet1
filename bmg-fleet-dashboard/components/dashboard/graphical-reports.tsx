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
} from "recharts"

// Sample data for the line chart - Kenyan context with Kshs
const mileageData = [
  { date: "01/04", mileage: 120, cost: 12000 },
  { date: "02/04", mileage: 150, cost: 15000 },
  { date: "03/04", mileage: 180, cost: 18000 },
  { date: "04/04", mileage: 170, cost: 17000 },
  { date: "05/04", mileage: 160, cost: 16000 },
  { date: "06/04", mileage: 190, cost: 19000 },
  { date: "07/04", mileage: 220, cost: 22000 },
  { date: "08/04", mileage: 200, cost: 20000 },
  { date: "09/04", mileage: 240, cost: 24000 },
  { date: "10/04", mileage: 230, cost: 23000 },
  { date: "11/04", mileage: 210, cost: 21000 },
  { date: "12/04", mileage: 250, cost: 25000 },
  { date: "13/04", mileage: 270, cost: 27000 },
  { date: "14/04", mileage: 260, cost: 26000 },
]

// Sample data for the driver efficiency - Kenyan counties
const driverEfficiencyData = [
  { county: "Nairobi", efficiency: 8.2, revenue: 45000, topDriver: "John Kamau" },
  { county: "Mombasa", efficiency: 7.8, revenue: 42000, topDriver: "Ali Hassan" },
  { county: "Kisumu", efficiency: 7.5, revenue: 38000, topDriver: "Peter Odhiambo" },
  { county: "Nakuru", efficiency: 8.0, revenue: 40000, topDriver: "David Maina" },
  { county: "Eldoret", efficiency: 7.9, revenue: 39000, topDriver: "Samuel Kipchoge" },
  { county: "Machakos", efficiency: 7.6, revenue: 37000, topDriver: "Daniel Mutua" },
]

export function GraphicalReports() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Mileage vs Fuel Cost (Last 14 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={mileageData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip
                formatter={(value, name) => {
                  if (name === "cost") return [`Kshs ${value}`, "Fuel Cost"]
                  return [value, "Mileage (km)"]
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="mileage"
                stroke="#0EA5E9"
                activeDot={{ r: 8 }}
                name="Mileage (km)"
              />
              <Line yAxisId="right" type="monotone" dataKey="cost" stroke="#F59E0B" name="Fuel Cost" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Driver Efficiency by County</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="efficiency">
            <TabsList className="mb-4">
              <TabsTrigger value="efficiency">Efficiency (km/l)</TabsTrigger>
              <TabsTrigger value="revenue">Revenue (Kshs)</TabsTrigger>
            </TabsList>
            <TabsContent value="efficiency">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={driverEfficiencyData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="county" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [`${value} km/l`, "Efficiency"]}
                    labelFormatter={(label) => `County: ${label}`}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-white p-2 border rounded shadow-sm">
                            <p className="font-bold">{`County: ${label}`}</p>
                            <p>{`Efficiency: ${data.efficiency} km/l`}</p>
                            <p>{`Top Driver: ${data.topDriver}`}</p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Legend />
                  <Bar dataKey="efficiency" fill="#10B981" name="Efficiency (km/l)" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="revenue">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={driverEfficiencyData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="county" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => [`Kshs ${value}`, "Revenue"]}
                    labelFormatter={(label) => `County: ${label}`}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-white p-2 border rounded shadow-sm">
                            <p className="font-bold">{`County: ${label}`}</p>
                            <p>{`Revenue: Kshs ${data.revenue}`}</p>
                            <p>{`Top Driver: ${data.topDriver}`}</p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Legend />
                  <Bar dataKey="revenue" fill="#1E40AF" name="Revenue (Kshs)" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

