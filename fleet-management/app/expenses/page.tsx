import { ExpensesHeader } from "@/components/expenses/expenses-header"
import { ExpensesTable } from "@/components/expenses/expenses-table"
import { ExpensesSummary } from "@/components/expenses/expenses-summary"
import { ExpenseFilters } from "@/components/expenses/expense-filters"

export default function Expenses() {
  return (
    <div className="flex flex-col min-h-screen">
      <ExpensesHeader />
      <div className="flex-1 p-6 space-y-6">
        <ExpensesSummary />
        <ExpenseFilters />
        <ExpensesTable />
      </div>
    </div>
  )
}

