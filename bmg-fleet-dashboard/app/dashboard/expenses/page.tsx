import type { Metadata } from "next"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HomeIcon } from "lucide-react"
import { ExpensesTable } from "@/components/dashboard/expenses-table"
import { ExpensesFilter } from "@/components/dashboard/expenses-filter"
import { ExpensesSummary } from "@/components/dashboard/expenses-summary"

export const metadata: Metadata = {
  title: "Expenses | BMG Fleet Management",
  description: "Track and manage fleet expenses",
}

export default function ExpensesPage() {
  return (
    <div className="p-6 space-y-6">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <HomeIcon className="h-4 w-4 mr-1" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard/expenses">Expenses</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-2xl font-bold">Expenses</h1>

      <ExpensesSummary />
      <ExpensesFilter />
      <ExpensesTable />
    </div>
  )
}

