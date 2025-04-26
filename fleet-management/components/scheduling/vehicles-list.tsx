"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Car, Search } from "lucide-react"

const vehicles = [
  { id: "FL-001", type: "Delivery Van", status: "active" },
  { id: "FL-002", type: "Truck", status: "active" },
  { id: "FL-003", type: "Cargo Van", status: "maintenance" },
  { id: "FL-004", type: "Delivery Van", status: "active" },
  { id: "FL-005", type: "Truck", status: "idle" },
]

export function VehiclesList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "idle":
        return "bg-amber-500"
      case "maintenance":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center">
          <Car className="mr-2 h-4 w-4" />
          Vehicles
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search vehicles..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer"
            >
              <div>
                <div className="font-medium text-sm">{vehicle.id}</div>
                <div className="text-xs text-muted-foreground">{vehicle.type}</div>
              </div>
              <div className="flex items-center">
                <span className={`h-2 w-2 rounded-full ${getStatusColor(vehicle.status)}`}></span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

