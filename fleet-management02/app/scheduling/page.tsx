import { SchedulingHeader } from "@/components/scheduling/scheduling-header"
import { SchedulingCalendar } from "@/components/scheduling/scheduling-calendar"
import { DriversList } from "@/components/scheduling/drivers-list"
import { VehiclesList } from "@/components/scheduling/vehicles-list"
import { TaskDetails } from "@/components/scheduling/task-details"

export default function Scheduling() {
  return (
    <div className="flex flex-col min-h-screen">
      <SchedulingHeader />
      <div className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <DriversList />
            <VehiclesList />
          </div>
          <div className="lg:col-span-3 space-y-6">
            <SchedulingCalendar />
            <TaskDetails />
          </div>
        </div>
      </div>
    </div>
  )
}

