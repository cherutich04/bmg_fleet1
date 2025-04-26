import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, TrendingUp, Fuel, Clock, MapPin } from "lucide-react"

export function ReportsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-blue-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Distance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600 mr-2" />
              <div className="text-2xl font-bold">24,580 km</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+12.3%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-emerald-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Fuel Consumption</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Fuel className="h-8 w-8 text-emerald-600 mr-2" />
              <div className="text-2xl font-bold">3,420 L</div>
            </div>
            <div className="flex items-center text-rose-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+8.7%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-amber-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Driving Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-amber-600 mr-2" />
              <div className="text-2xl font-bold">1,245 hrs</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+5.2%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sky-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Efficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BarChart2 className="h-8 w-8 text-sky-600 mr-2" />
              <div className="text-2xl font-bold">7.2 km/l</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+0.3</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

