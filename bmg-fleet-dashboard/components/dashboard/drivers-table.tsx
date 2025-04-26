"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MoreHorizontal, Eye, Pencil, Trash2, Search, Plus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample drivers data with Kenyan context
const drivers = [
  {
    id: 1,
    name: "John Kamau",
    phone: "+254 712 345 678",
    license: "KEN/DL/2018/123456",
    vehicle: "KCA 476M",
    status: "active",
    performance: 92,
  },
  {
    id: 2,
    name: "Ali Hassan",
    phone: "+254 723 456 789",
    license: "KEN/DL/2019/234567",
    vehicle: "KBZ 123A",
    status: "active",
    performance: 88,
  },
  {
    id: 3,
    name: "Peter Odhiambo",
    phone: "+254 734 567 890",
    license: "KEN/DL/2017/345678",
    vehicle: "KDG 789P",
    status: "active",
    performance: 85,
  },
  {
    id: 4,
    name: "David Maina",
    phone: "+254 745 678 901",
    license: "KEN/DL/2020/456789",
    vehicle: "KBJ 456Q",
    status: "active",
    performance: 82,
  },
  {
    id: 5,
    name: "Samuel Kipchoge",
    phone: "+254 756 789 012",
    license: "KEN/DL/2019/567890",
    vehicle: "KCF 321R",
    status: "inactive",
    performance: 80,
  },
  {
    id: 6,
    name: "Daniel Mutua",
    phone: "+254 767 890 123",
    license: "KEN/DL/2018/678901",
    vehicle: "KDJ 654S",
    status: "active",
    performance: 78,
  },
  {
    id: 7,
    name: "James Wanjiku",
    phone: "+254 778 901 234",
    license: "KEN/DL/2021/789012",
    vehicle: "KBH 987T",
    status: "active",
    performance: 75,
  },
]

const statusColors = {
  active: "bg-green-100 text-green-800 border-green-200",
  inactive: "bg-gray-100 text-gray-800 border-gray-200",
  suspended: "bg-rose-100 text-rose-800 border-rose-200",
}

export function DriversTable() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(drivers.length / itemsPerPage)

  const paginatedDrivers = drivers.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Drivers</CardTitle>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search drivers..." className="pl-8 w-[200px]" />
          </div>
          <Button className="bg-[#1E40AF]">
            <Plus className="h-4 w-4 mr-1" />
            Add Driver
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>License</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell className="font-medium">{driver.name}</TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell>{driver.license}</TableCell>
                  <TableCell>{driver.vehicle}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusColors[driver.status as keyof typeof statusColors]}>
                      {driver.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            driver.performance >= 85
                              ? "bg-green-500"
                              : driver.performance >= 70
                                ? "bg-amber-500"
                                : "bg-rose-500"
                          }`}
                          style={{ width: `${driver.performance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{driver.performance}%</span>
                    </div>
                  </TableCell>
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
            Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, drivers.length)} of{" "}
            {drivers.length} entries
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

