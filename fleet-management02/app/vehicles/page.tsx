import { VehiclesHeader } from "@/components/vehicles/vehicles-header"
import { VehiclesTable } from "@/components/vehicles/vehicles-table"
import { VehicleFilters } from "@/components/vehicles/vehicle-filters"

export default function Vehicles() {
  return (
    <div className="flex flex-col min-h-screen">
      <VehiclesHeader />
      <div className="flex-1 p-6 space-y-6">
        <VehicleFilters />
        <VehiclesTable />
      </div>
    </div>
  )
}

