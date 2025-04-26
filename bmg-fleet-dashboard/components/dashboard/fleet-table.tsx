"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MoreHorizontal, Eye, Pencil, Trash2, Search, Plus, Download } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample fleet data with Kenyan context
const vehicles = [
  {
    id: 1,
    regNumber: "KCA 476M",
    make: "Toyota",
    model: "Hilux",
    year: 2020,
    fuelType: "Diesel",
    driver: "John Kamau",
    status: "active",
    lastService: "10/04/2023",
    efficiency: 7.2,
  },
  {
    id: 2,
    regNumber: "KBZ 123A",
    make: "Isuzu",
    model: "D-Max",
    year: 2019,
    fuelType: "Diesel",
    driver: "Ali Hassan",
    status: "active",
    lastService: "05/04/2023",
    efficiency: 6.8,
  },
  {
    id: 3,
    regNumber: "KDG 789P",
    make: "Mitsubishi",
    model: "Pajero",
    year: 2021,
    fuelType: "Diesel",
    driver: "Peter Odhiambo",
    status: "active",
    lastService: "28/03/2023",
    efficiency: 7.5,
  },
  {
    id: 4,
    regNumber: "KBJ 456Q",
    make: "Toyota",
    model: "Land Cruiser",
    year: 2018,
    fuelType: "Diesel",
    driver: "David Maina",
    status: "maintenance",
    lastService: "22/03/2023",
    efficiency: 7.0,
  },
  {
    id: 5,
    regNumber: "KCF 321R",
    make: "Nissan",
    model: "Navara",
    year: 2020,
    fuelType: "Diesel",
    driver: "Samuel Kipchoge",
    status: "maintenance",
    lastService: "15/03/2023",
    efficiency: 6.9,
  },
  {
    id: 6,
    regNumber: "KDJ 654S",
    make: "Toyota",
    model: "Hiace",
    year: 2019,
    fuelType: "Diesel",
    driver: "Daniel Mutua",
    status: "active",
    lastService: "08/03/2023",
    efficiency: 7.3,
  },
  {
    id: 7,
    regNumber: "KBH 987T",
    make: "Ford",
    model: "Ranger",
    year: 2021,
    fuelType: "Diesel",
    driver: "James Wanjiku",
    status: "inactive",
    lastService: "01/03/2023",
    efficiency: 7.1,
  },
]

const statusColors = {
  active: "bg-green-100 text-green-800 border-green-200",
  maintenance: "bg-amber-100 text-amber-800 border-amber-200",
  inactive: "bg-gray-100 text-gray-800 border-gray-200",
}

export function FleetTable() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(vehicles.length / itemsPerPage)

  const paginatedVehicles = vehicles.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Fleet Vehicles</CardTitle>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search vehicles..." className="pl-8 w-[200px]" />
          </div>
          <Button className="bg-[#1E40AF]">
            <Plus className="h-4 w-4 mr-1" />
            Add Vehicle
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reg Number</TableHead>
                <TableHead>Make/Model</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Fuel Type</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Service</TableHead>
                <TableHead>Efficiency</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedVehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.regNumber}</TableCell>
                  <TableCell>
                    {vehicle.make} {vehicle.model}
                  </TableCell>
                  <TableCell>{vehicle.year}</TableCell>
                  <TableCell>{vehicle.fuelType}</TableCell>
                  <TableCell>{vehicle.driver}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusColors[vehicle.status as keyof typeof statusColors]}>
                      {vehicle.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{vehicle.lastService}</TableCell>
                  <TableCell>{vehicle.efficiency} km/l</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center text-rose-500">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">
            Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, vehicles.length)} of{" "}
            {vehicles.length} entries
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

