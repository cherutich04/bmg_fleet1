"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Package, Truck, User, X } from "lucide-react"

export function TaskDetails() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium flex items-center">
          <Package className="mr-2 h-4 w-4" />
          Task Details
        </CardTitle>
        <Button variant="ghost" size="icon">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold">Delivery #D-4582</h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge>Delivery</Badge>
              <span className="text-sm text-muted-foreground">High Priority</span>
            </div>
          </div>

          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-sm text-muted-foreground">April 4, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Time</p>
                      <p className="text-sm text-muted-foreground">10:30 AM - 11:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <User className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Driver</p>
                      <p className="text-sm text-muted-foreground">John Smith</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Truck className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Vehicle</p>
                      <p className="text-sm text-muted-foreground">FL-001 (Delivery Van)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Pickup Location</p>
                      <p className="text-sm text-muted-foreground">123 Main St, New York, NY</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Delivery Location</p>
                      <p className="text-sm text-muted-foreground">456 Park Ave, New York, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Notes</p>
                <p className="text-sm text-muted-foreground">
                  Customer requested delivery before noon. Call 30 minutes before arrival.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline">Edit</Button>
                <Button>Complete Task</Button>
              </div>
            </TabsContent>
            <TabsContent value="history">
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">April 3, 2025 - 2:30 PM</p>
                  <p className="text-sm">Task created by Admin User</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">April 3, 2025 - 3:15 PM</p>
                  <p className="text-sm">Assigned to John Smith</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">April 3, 2025 - 3:20 PM</p>
                  <p className="text-sm">Vehicle FL-001 assigned</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}

