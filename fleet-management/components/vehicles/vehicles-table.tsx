"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

const vehicles = [
  {
    id: "FL-001",
    type: "Delivery Van",
    status: "active",
    driver: "John Smith",
    location: "New York, NY",
    lastMaintenance: "Mar 15, 2025",
    fuelLevel: 75,
  },
  {
    id: "FL-002",
    type: "Truck",
    status: "active",
    driver: "Sarah Johnson",
    location: "Brooklyn, NY",
    lastMaintenance: "Feb 28, 2025",
    fuelLevel: 45,
  },
  {
    id: "FL-003",
    type: "Cargo Van",
    status: "maintenance",
    driver: "Unassigned",
    location: "Service Center",
    lastMaintenance: "Apr 2, 2025",
    fuelLevel: 30,
  },
  {
    id: "FL-004",
    type: "Delivery Van",
    status: "active",
    driver: "Lisa Brown",
    location: "Queens, NY",
    lastMaintenance: "Mar 20, 2025",
    fuelLevel: 90,
  },
  {
    id: "FL-005",
    type: "Truck",
    status: "idle",
    driver: "Unassigned",
    location: "Depot",
    lastMaintenance: "Mar 10, 2025",
    fuelLevel: 100,
  },
]

export function VehiclesTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "idle":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Idle
          </Badge>
        )
      case "maintenance":
        return <Badge variant="destructive">Maintenance</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getFuelLevelColor = (level: number) => {
    if (level > 70) return "bg-green-500"
    if (level > 30) return "bg-amber-500"
    return "bg-red-500"
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Last Maintenance</TableHead>
            <TableHead>Fuel Level</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell className="font-medium">{vehicle.id}</TableCell>
              <TableCell>{vehicle.type}</TableCell>
              <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
              <TableCell>{vehicle.driver}</TableCell>
              <TableCell>{vehicle.location}</TableCell>
              <TableCell>{vehicle.lastMaintenance}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-16 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getFuelLevelColor(vehicle.fuelLevel)}`}
                      style={{ width: `${vehicle.fuelLevel}%` }}
                    />
                  </div>
                  <span className="text-xs">{vehicle.fuelLevel}%</span>
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Vehicle</DropdownMenuItem>
                    <DropdownMenuItem>Schedule Maintenance</DropdownMenuItem>
                    <DropdownMenuItem>Assign Driver</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

