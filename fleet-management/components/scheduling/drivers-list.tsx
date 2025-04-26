"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const drivers = [
  { id: 1, name: "John Smith", status: "active", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Sarah Johnson", status: "active", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Mike Davis", status: "break", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Lisa Brown", status: "active", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "David Wilson", status: "off", avatar: "/placeholder.svg?height=40&width=40" },
]

export function DriversList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDrivers = drivers.filter((driver) => driver.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "break":
        return "bg-amber-500"
      case "off":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center">
          <User className="mr-2 h-4 w-4" />
          Drivers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search drivers..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          {filteredDrivers.map((driver) => (
            <div
              key={driver.id}
              className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={driver.avatar} alt={driver.name} />
                  <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{driver.name}</span>
              </div>
              <div className="flex items-center">
                <span className={`h-2 w-2 rounded-full ${getStatusColor(driver.status)}`}></span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

