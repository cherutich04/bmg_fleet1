import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Clock, BarChart2, TrendingUp, TrendingDown } from "lucide-react"

export function DriversSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-blue-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-2" />
              <div className="text-2xl font-bold">24</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+2</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-emerald-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Active Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-emerald-600 mr-2" />
              <div className="text-2xl font-bold">18</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+1</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-amber-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Driving Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-amber-600 mr-2" />
              <div className="text-2xl font-bold">6.5 hrs</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span className="text-sm">-0.2</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sky-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BarChart2 className="h-8 w-8 text-sky-600 mr-2" />
              <div className="text-2xl font-bold">85%</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+2.3%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

