"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, RefreshCw } from "lucide-react"

// Mock data for the map
const vehicleData = [
  { id: "FL-001", lat: 40.7128, lng: -74.006, status: "active", type: "Delivery Van", driver: "John Smith" },
  { id: "FL-002", lat: 40.7218, lng: -73.996, status: "idle", type: "Truck", driver: "Sarah Johnson" },
  { id: "FL-003", lat: 40.7048, lng: -74.016, status: "maintenance", type: "Cargo Van", driver: "Mike Davis" },
  { id: "FL-004", lat: 40.7158, lng: -74.026, status: "active", type: "Delivery Van", driver: "Lisa Brown" },
  { id: "FL-005", lat: 40.7228, lng: -73.986, status: "active", type: "Truck", driver: "David Wilson" },
]

export function FleetHealthMap() {
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<(typeof vehicleData)[0] | null>(null)
  const [activeTab, setActiveTab] = useState("all")
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }

  const filteredVehicles = activeTab === "all" ? vehicleData : vehicleData.filter((v) => v.status === activeTab)

  return (
    <Card className="bg-white h-[500px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Fleet Health Map</CardTitle>
          <p className="text-sm text-muted-foreground">Real-time location and status of all vehicles</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleRefresh} disabled={refreshing || loading}>
            {refreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border-b px-6 py-2">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All Vehicles</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="idle">Idle</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 relative">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-card/50">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : null}
            <div
              ref={mapContainerRef}
              className="h-[400px] bg-muted rounded-bl-lg"
              style={{
                backgroundImage: "url('/placeholder.svg?height=400&width=600')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Map would be rendered here with Leaflet/Google Maps */}
              {/* Simulating vehicle markers */}
              <div className="relative h-full w-full">
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className={`absolute h-3 w-3 rounded-full cursor-pointer status-${vehicle.status}`}
                    style={{
                      top: `${(1 - (vehicle.lat - 40.7) / 0.03) * 100}%`,
                      left: `${((vehicle.lng + 74.03) / 0.06) * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => setSelectedVehicle(vehicle)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="border-l p-4">
            <h3 className="font-medium mb-4">Vehicle Details</h3>
            {selectedVehicle ? (
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold">{selectedVehicle.id}</h4>
                  <div className="flex items-center mt-1">
                    <Badge className={`status-${selectedVehicle.status} mr-2`}>
                      {selectedVehicle.status.charAt(0).toUpperCase() + selectedVehicle.status.slice(1)}
                    </Badge>
                    <span className="text-sm">{selectedVehicle.type}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Driver</p>
                    <p className="font-medium">{selectedVehicle.driver}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Current Location</p>
                    <p className="font-medium font-mono">
                      {selectedVehicle.lat.toFixed(4)}, {selectedVehicle.lng.toFixed(4)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Updated</p>
                    <p className="font-medium">2 minutes ago</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[300px] text-center text-muted-foreground">
                <p>Select a vehicle on the map to view details</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

