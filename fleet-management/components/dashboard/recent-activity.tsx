"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, CheckCircle2, Clock, CreditCard, FileText, Wrench } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "delivery",
    title: "Delivery completed",
    description: "John Smith completed delivery #D-4582",
    time: "10 minutes ago",
    icon: CheckCircle2,
  },
  {
    id: 2,
    type: "maintenance",
    title: "Maintenance scheduled",
    description: "Vehicle FL-238 scheduled for oil change",
    time: "1 hour ago",
    icon: Wrench,
  },
  {
    id: 3,
    type: "expense",
    title: "Expense submitted",
    description: "Sarah Johnson submitted fuel expense of $78.50",
    time: "2 hours ago",
    icon: CreditCard,
  },
  {
    id: 4,
    type: "assignment",
    title: "Vehicle assigned",
    description: "Vehicle FL-112 assigned to Mike Davis",
    time: "3 hours ago",
    icon: Car,
  },
  {
    id: 5,
    type: "report",
    title: "Report generated",
    description: "Monthly expense report for April 2025 is ready",
    time: "5 hours ago",
    icon: FileText,
  },
]

export function RecentActivity() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const getIconColor = (type: string) => {
    switch (type) {
      case "delivery":
        return "text-green-500"
      case "maintenance":
        return "text-amber-500"
      case "expense":
        return "text-blue-500"
      case "assignment":
        return "text-purple-500"
      case "report":
        return "text-gray-500"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="h-10 w-10 animate-pulse rounded-full bg-muted"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-5 w-1/3 animate-pulse rounded bg-muted"></div>
                  <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={`rounded-full p-2 bg-muted ${getIconColor(activity.type)}`}>
                  <activity.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{activity.title}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

