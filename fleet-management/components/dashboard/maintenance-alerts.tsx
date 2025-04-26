"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench } from "lucide-react"

const alerts = [
  {
    id: 1,
    vehicleId: "FL-238",
    issue: "Oil change required",
    priority: "high",
    dueDate: "Today",
  },
  {
    id: 2,
    vehicleId: "FL-112",
    issue: "Brake inspection needed",
    priority: "medium",
    dueDate: "Tomorrow",
  },
  {
    id: 3,
    vehicleId: "FL-305",
    issue: "Tire rotation",
    priority: "low",
    dueDate: "In 3 days",
  },
]

export function MaintenanceAlerts() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">
          <div className="flex items-center">
            <Wrench className="mr-2 h-4 w-4" />
            Maintenance Alerts
          </div>
        </CardTitle>
        <Badge variant="destructive" className="h-5">
          {alerts.length}
        </Badge>
      </CardHeader>
      <CardContent className="px-0">
        {loading ? (
          <div className="space-y-4 p-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-5 w-24 animate-pulse rounded bg-muted"></div>
                <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between border-b px-6 py-4 last:border-0">
                <div className="space-y-1">
                  <div className="flex items-center">
                    <Badge
                      variant={
                        alert.priority === "high" ? "destructive" : alert.priority === "medium" ? "default" : "outline"
                      }
                      className="mr-2"
                    >
                      {alert.priority}
                    </Badge>
                    <span className="font-medium">{alert.vehicleId}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.issue}</p>
                  <p className="text-xs text-muted-foreground">Due: {alert.dueDate}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <div className="p-4 text-center">
              <Button variant="outline" size="sm">
                View All Maintenance
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

