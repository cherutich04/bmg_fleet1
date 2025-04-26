"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer } from "@/components/ui/chart"
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Cell, Tooltip } from "recharts"
import { CreditCard, Fuel, PenToolIcon as Tool, TrendingUp } from "lucide-react"

const expenseData = [
  { name: "Fuel", value: 5200, color: "#3b82f6" },
  { name: "Maintenance", value: 2800, color: "#ef4444" },
  { name: "Tolls", value: 1200, color: "#f59e0b" },
  { name: "Insurance", value: 3500, color: "#10b981" },
  { name: "Other", value: 800, color: "#6366f1" },
]

const monthlyData = [
  { month: "Jan", fuel: 4800, maintenance: 2200, tolls: 1100, insurance: 3500, other: 700 },
  { month: "Feb", fuel: 5100, maintenance: 2500, tolls: 1200, insurance: 3500, other: 750 },
  { month: "Mar", fuel: 5200, maintenance: 2800, tolls: 1200, insurance: 3500, other: 800 },
  { month: "Apr", fuel: 5200, maintenance: 2800, tolls: 1200, insurance: 3500, other: 800 },
]

export function ExpensesSummary() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("breakdown")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const totalExpenses = expenseData.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Expense Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="breakdown" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-end mb-4">
            <TabsList>
              <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
              <TabsTrigger value="trends">Monthly Trends</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="breakdown" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-mono">${totalExpenses.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">Current month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Fuel</CardTitle>
                  <Fuel className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-mono">${expenseData[0].value.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {Math.round((expenseData[0].value / totalExpenses) * 100)}% of total
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
                  <Tool className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-mono">${expenseData[1].value.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {Math.round((expenseData[1].value / totalExpenses) * 100)}% of total
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Change</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500 font-mono">+2.4%</div>
                  <p className="text-xs text-muted-foreground mt-1">vs. last month</p>
                </CardContent>
              </Card>
            </div>

            {loading ? (
              <div className="h-[300px] w-full animate-pulse rounded bg-muted"></div>
            ) : (
              <div className="h-[300px]">
                <ChartContainer config={{}}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={expenseData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `$${value}`} />
                      <Tooltip
                        formatter={(value: number) => [`$${value}`, undefined]}
                        labelFormatter={(label) => `${label}`}
                      />
                      <Bar dataKey="value" name="Amount">
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            )}
          </TabsContent>

          <TabsContent value="trends">
            {loading ? (
              <div className="h-[400px] w-full animate-pulse rounded bg-muted"></div>
            ) : (
              <div className="h-[400px]">
                <ChartContainer config={{}}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={monthlyData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={(value) => `$${value}`} />
                      <Tooltip
                        formatter={(value: number) => [`$${value}`, undefined]}
                        labelFormatter={(label) => `${label}`}
                      />
                      <Legend />
                      <Bar dataKey="fuel" name="Fuel" fill="#3b82f6" />
                      <Bar dataKey="maintenance" name="Maintenance" fill="#ef4444" />
                      <Bar dataKey="tolls" name="Tolls" fill="#f59e0b" />
                      <Bar dataKey="insurance" name="Insurance" fill="#10b981" />
                      <Bar dataKey="other" name="Other" fill="#6366f1" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

