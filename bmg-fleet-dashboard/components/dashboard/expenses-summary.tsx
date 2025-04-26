import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, TrendingDown, Fuel, PenToolIcon as Tool, Receipt } from "lucide-react"

export function ExpensesSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-blue-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses (MTD)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-600 mr-2" />
              <div className="text-2xl font-bold">Kshs 1.24M</div>
            </div>
            <div className="flex items-center text-rose-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+8.2%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-emerald-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Fuel Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Fuel className="h-8 w-8 text-emerald-600 mr-2" />
              <div className="text-2xl font-bold">Kshs 580K</div>
            </div>
            <div className="flex items-center text-rose-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+12.3%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-amber-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Maintenance Costs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Tool className="h-8 w-8 text-amber-600 mr-2" />
              <div className="text-2xl font-bold">Kshs 320K</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span className="text-sm">-3.5%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sky-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Other Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Receipt className="h-8 w-8 text-sky-600 mr-2" />
              <div className="text-2xl font-bold">Kshs 340K</div>
            </div>
            <div className="flex items-center text-rose-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+5.7%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

