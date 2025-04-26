"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"

// Sample maintenance schedule data - Kenyan context
const maintenanceSchedule = [
  {
    id: 1,
    vehicle: "KCA 476M",
    service: "Oil Change & Filter",
    date: new Date(2023, 3, 20), // April 20, 2023
    location: "Toyota Kenya, Uhuru Highway",
    status: "upcoming",
  },
  {
    id: 2,
    vehicle: "KBZ 123A",
    service: "Brake Inspection",
    date: new Date(2023, 3, 22), // April 22, 2023
    location: "AutoXpress, Westlands",
    status: "upcoming",
  },
  {
    id: 3,
    vehicle: "KDG 789P",
    service: "Tire Rotation",
    date: new Date(2023, 3, 25), // April 25, 2023
    location: "Kingsway Tyres, Lusaka Road",
    status: "upcoming",
  },
  {
    id: 4,
    vehicle: "KBJ 456Q",
    service: "Full Service",
    date: new Date(2023, 3, 28), // April 28, 2023
    location: "DT Dobie, Lusaka Road",
    status: "upcoming",
  },
  {
    id: 5,
    vehicle: "KCF 321R",
    service: "Air Conditioning Service",
    date: new Date(2023, 4, 2), // May 2, 2023
    location: "CMC Motors, Nairobi",
    status: "upcoming",
  },
]

const statusColors = {
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
  overdue: "bg-rose-100 text-rose-800 border-rose-200",
  completed: "bg-green-100 text-green-800 border-green-200",
}

export function MaintenanceSchedule() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Maintenance Schedule</CardTitle>
        <Button size="sm" className="bg-[#1E40AF]">
          <Plus className="h-4 w-4 mr-1" />
          Add Service
        </Button>
      </CardHeader>
      <CardContent className="flex-1">
        <Tabs defaultValue="list">
          <TabsList className="mb-4">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="space-y-4">
            {maintenanceSchedule.map((item) => (
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
                  <p>{item.date.toLocaleDateString("en-GB")}</p>
                  <p>{item.location}</p>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="calendar">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            <div className="mt-4">
              <h3 className="font-medium">Services on {date?.toLocaleDateString("en-GB")}</h3>
              <div className="mt-2">
                {maintenanceSchedule.filter(
                  (item) =>
                    date &&
                    item.date.getDate() === date.getDate() &&
                    item.date.getMonth() === date.getMonth() &&
                    item.date.getFullYear() === date.getFullYear(),
                ).length > 0 ? (
                  maintenanceSchedule
                    .filter(
                      (item) =>
                        date &&
                        item.date.getDate() === date.getDate() &&
                        item.date.getMonth() === date.getMonth() &&
                        item.date.getFullYear() === date.getFullYear(),
                    )
                    .map((item) => (
                      <div key={item.id} className="p-2 border rounded-lg mb-2">
                        <p className="font-medium">{item.service}</p>
                        <p className="text-sm text-muted-foreground">{item.vehicle}</p>
                        <p className="text-sm text-muted-foreground">{item.location}</p>
                      </div>
                    ))
                ) : (
                  <p className="text-sm text-muted-foreground">No services scheduled for this date.</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

