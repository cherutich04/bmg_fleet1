"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

// Sample maintenance history data - Kenyan context
const maintenanceHistory = [
  {
    id: 1,
    vehicle: "KCA 476M",
    service: "Oil Change & Filter",
    date: "10/04/2023",
    cost: 8500,
    location: "Toyota Kenya, Uhuru Highway",
    status: "completed",
  },
  {
    id: 2,
    vehicle: "KBZ 123A",
    service: "Brake Replacement",
    date: "05/04/2023",
    cost: 35000,
    location: "AutoXpress, Westlands",
    status: "completed",
  },
  {
    id: 3,
    vehicle: "KDG 789P",
    service: "Tire Replacement",
    date: "28/03/2023",
    cost: 48000,
    location: "Kingsway Tyres, Lusaka Road",
    status: "completed",
  },
  {
    id: 4,
    vehicle: "KBJ 456Q",
    service: "Battery Replacement",
    date: "22/03/2023",
    cost: 18000,
    location: "DT Dobie, Lusaka Road",
    status: "completed",
  },
  {
    id: 5,
    vehicle: "KCF 321R",
    service: "Full Service",
    date: "15/03/2023",
    cost: 45000,
    location: "CMC Motors, Nairobi",
    status: "completed",
  },
  {
    id: 6,
    vehicle: "KCA 476M",
    service: "Wheel Alignment",
    date: "08/03/2023",
    cost: 5000,
    location: "Toyota Kenya, Uhuru Highway",
    status: "completed",
  },
  {
    id: 7,
    vehicle: "KBZ 123A",
    service: "Air Filter Replacement",
    date: "01/03/2023",
    cost: 3500,
    location: "AutoXpress, Westlands",
    status: "completed",
  },
]

const statusColors = {
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
  overdue: "bg-rose-100 text-rose-800 border-rose-200",
  completed: "bg-green-100 text-green-800 border-green-200",
}

export function MaintenanceHistory() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(maintenanceHistory.length / itemsPerPage)

  const paginatedHistory = maintenanceHistory.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Maintenance History</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search services..." className="pl-8" />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Vehicles</SelectItem>
              <SelectItem value="KCA476M">KCA 476M</SelectItem>
              <SelectItem value="KBZ123A">KBZ 123A</SelectItem>
              <SelectItem value="KDG789P">KDG 789P</SelectItem>
              <SelectItem value="KBJ456Q">KBJ 456Q</SelectItem>
              <SelectItem value="KCF321R">KCF 321R</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {paginatedHistory.map((item) => (
            <div key={item.id} className="flex flex-col p-3 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{item.service}</h3>
                  <p className="text-sm text-muted-foreground">{item.vehicle}</p>
                </div>
                <Badge variant="outline" className={statusColors[item.status as keyof typeof statusColors]}>
                  {item.status}
                </Badge>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>{item.date}</p>
                <p>{item.location}</p>
                <p className="font-medium text-foreground">Kshs {item.cost.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">
            Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, maintenanceHistory.length)} of{" "}
            {maintenanceHistory.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => setPage(page - 1)} disabled={page === 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

