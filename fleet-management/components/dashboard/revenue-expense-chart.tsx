"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const weeklyData = [
  { name: "Mon", revenue: 4000, expenses: 2400 },
  { name: "Tue", revenue: 3000, expenses: 1398 },
  { name: "Wed", revenue: 2000, expenses: 9800 },
  { name: "Thu", revenue: 2780, expenses: 3908 },
  { name: "Fri", revenue: 1890, expenses: 4800 },
  { name: "Sat", revenue: 2390, expenses: 3800 },
  { name: "Sun", revenue: 3490, expenses: 4300 },
]

const monthlyData = [
  { name: "Jan", revenue: 24000, expenses: 12400 },
  { name: "Feb", revenue: 23000, expenses: 11398 },
  { name: "Mar", revenue: 32000, expenses: 19800 },
  { name: "Apr", revenue: 27800, expenses: 13908 },
  { name: "May", revenue: 18900, expenses: 14800 },
  { name: "Jun", revenue: 23900, expenses: 13800 },
]

export function RevenueExpenseChart() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("weekly")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const data = activeTab === "weekly" ? weeklyData : monthlyData

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Revenue vs Expenses</CardTitle>
        <Tabs defaultValue="weekly" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="h-8">
            <TabsTrigger value="weekly" className="text-xs">
              Weekly
            </TabsTrigger>
            <TabsTrigger value="monthly" className="text-xs">
              Monthly
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-[200px] w-full animate-pulse rounded bg-muted"></div>
        ) : (
          <div className="h-[200px]">
            <ChartContainer>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip
                    formatter={(value: number) => [`$${value}`, undefined]}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    stroke="hsl(var(--destructive))"
                    fillOpacity={1}
                    fill="url(#colorExpenses)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

