import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Clock, PenToolIcon as Tool, TrendingUp, TrendingDown } from "lucide-react"

export function MaintenanceSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-blue-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Scheduled Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-600 mr-2" />
              <div className="text-2xl font-bold">12</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span className="text-sm">-2</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-amber-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Pending Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-amber-600 mr-2" />
              <div className="text-2xl font-bold">7</div>
            </div>
            <div className="flex items-center text-rose-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+2</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-emerald-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Completed Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-emerald-600 mr-2" />
              <div className="text-2xl font-bold">42</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+8</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sky-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Maintenance Cost (MTD)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Tool className="h-8 w-8 text-sky-600 mr-2" />
              <div className="text-2xl font-bold">Kshs 320K</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span className="text-sm">-3.5%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

