"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Fuel, BlocksIcon as BarrierBlock, Calendar } from "lucide-react"

// Alert types with their respective icons and colors
const alertTypes = {
  maintenance: { icon: AlertTriangle, color: "bg-amber-100 text-amber-800" },
  fuel: { icon: Fuel, color: "bg-emerald-100 text-emerald-800" },
  route: { icon: BarrierBlock, color: "bg-rose-100 text-rose-800" },
  schedule: { icon: Calendar, color: "bg-blue-100 text-blue-800" },
}

// Sample alerts data - Kenyan context
const alerts = [
  {
    id: 1,
    type: "maintenance",
    title: "Brake pad replacement needed",
    vehicle: "KCA 476M",
    time: "10 minutes ago",
    severity: "critical",
  },
  {
    id: 2,
    type: "fuel",
    title: "Unusual fuel consumption",
    vehicle: "KBZ 123A",
    time: "25 minutes ago",
    severity: "high",
  },
  {
    id: 3,
    type: "route",
    title: "Route deviation detected",
    vehicle: "KDG 789P",
    time: "45 minutes ago",
    severity: "medium",
    location: "Mombasa Road",
  },
  {
    id: 4,
    type: "schedule",
    title: "Delivery deadline approaching",
    vehicle: "KBJ 456Q",
    time: "1 hour ago",
    severity: "low",
    location: "Thika Road",
  },
  {
    id: 5,
    type: "maintenance",
    title: "Oil change due",
    vehicle: "KCF 321R",
    time: "2 hours ago",
    severity: "medium",
  },
]

// Severity badge colors
const severityColors = {
  critical: "bg-rose-100 text-rose-800 border-rose-200",
  high: "bg-amber-100 text-amber-800 border-amber-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  low: "bg-blue-100 text-blue-800 border-blue-200",
}

export function MapAndAlerts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      <Card className="lg:col-span-5">
        <CardHeader>
          <CardTitle>Fleet Map</CardTitle>
        </CardHeader>
        <CardContent className="p-0 h-[400px] relative">
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743782!2d36.70730744863284!3d-1.3028617999999908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1712356789012!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
        </CardHeader>
        <CardContent className="px-2">
          <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
            {alerts.map((alert) => {
              const AlertIcon = alertTypes[alert.type as keyof typeof alertTypes].icon
              const alertColor = alertTypes[alert.type as keyof typeof alertTypes].color
              const severityColor = severityColors[alert.severity as keyof typeof severityColors]

              return (
                <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg border bg-card">
                  <div className={`p-2 rounded-full ${alertColor}`}>
                    <AlertIcon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">{alert.title}</p>
                      <Badge variant="outline" className={severityColor}>
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{alert.vehicle}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                    {alert.location && <p className="text-xs text-muted-foreground">{alert.location}</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

