"use client"

import { Button } from "@/components/ui/button"
import { CreditCard, Plus } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function ExpensesHeader() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-2 lg:hidden">
          <SidebarTrigger />
        </div>
        <div className="flex items-center">
          <CreditCard className="mr-2 h-5 w-5" />
          <h1 className="text-2xl font-bold">Expenses</h1>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Expense
          </Button>
        </div>
      </div>
    </div>
  )
}

