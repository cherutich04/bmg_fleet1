"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

export function DashboardHeader() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Format the date in Kenyan format (DD/MM/YYYY)
  const formattedDate = date ? format(date, "dd/MM/yyyy") : ""

  // Format the time in East African Time (EAT)
  const formattedTime = date ? format(date, "HH:mm") : ""

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Profile" />
              <AvatarFallback>MN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Mwangi</p>
              <p className="text-sm text-muted-foreground">Admin</p>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#1E40AF] hidden md:block">BMG FLEET MANAGEMENT APP</h1>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{formattedDate}</span>
                <span>{formattedTime}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

