"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, FileText } from "lucide-react"

const expenses = [
  {
    id: "EXP-001",
    date: "Apr 3, 2025",
    category: "Fuel",
    amount: 78.5,
    vehicle: "FL-001",
    driver: "John Smith",
    status: "approved",
    receipt: true,
  },
  {
    id: "EXP-002",
    date: "Apr 2, 2025",
    category: "Maintenance",
    amount: 350.0,
    vehicle: "FL-003",
    driver: "Mike Davis",
    status: "approved",
    receipt: true,
  },
  {
    id: "EXP-003",
    date: "Apr 2, 2025",
    category: "Tolls",
    amount: 15.75,
    vehicle: "FL-002",
    driver: "Sarah Johnson",
    status: "pending",
    receipt: false,
  },
  {
    id: "EXP-004",
    date: "Apr 1, 2025",
    category: "Fuel",
    amount: 65.25,
    vehicle: "FL-004",
    driver: "Lisa Brown",
    status: "approved",
    receipt: true,
  },
  {
    id: "EXP-005",
    date: "Mar 31, 2025",
    category: "Other",
    amount: 42.0,
    vehicle: "FL-001",
    driver: "John Smith",
    status: "rejected",
    receipt: true,
  },
]

export function ExpensesTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]))
  }

  const toggleAllRows = () => {
    setSelectedRows((prev) => (prev.length === expenses.length ? [] : expenses.map((expense) => expense.id)))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="badge-approved">Approved</Badge>
      case "pending":
        return <Badge className="badge-pending">Pending</Badge>
      case "rejected":
        return <Badge className="badge-rejected">Rejected</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Fuel":
        return "text-blue-500"
      case "Maintenance":
        return "text-red-500"
      case "Tolls":
        return "text-amber-500"
      case "Insurance":
        return "text-green-500"
      default:
        return "text-purple-500"
    }
  }

  return (
    <div className="bg-white rounded-md border data-grid">
      <div className="p-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <span className="font-medium">
            {selectedRows.length > 0 ? `${selectedRows.length} selected` : "All Expenses"}
          </span>
        </div>
        {selectedRows.length > 0 && (
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Approve Selected
            </Button>
            <Button variant="outline" size="sm">
              Reject Selected
            </Button>
            <Button variant="outline" size="sm">
              Export Selected
            </Button>
          </div>
        )}
      </div>
      <Table>
        <TableHeader className="data-grid-header">
          <TableRow>
            <TableHead className="w-[40px]">
              <Checkbox
                checked={selectedRows.length === expenses.length && expenses.length > 0}
                onCheckedChange={toggleAllRows}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Vehicle</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Receipt</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow
              key={expense.id}
              className={`data-grid-row ${selectedRows.includes(expense.id) ? "selected" : ""}`}
            >
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(expense.id)}
                  onCheckedChange={() => toggleRow(expense.id)}
                  aria-label={`Select expense ${expense.id}`}
                />
              </TableCell>
              <TableCell className="font-medium">{expense.id}</TableCell>
              <TableCell>{expense.date}</TableCell>
              <TableCell className={getCategoryColor(expense.category)}>{expense.category}</TableCell>
              <TableCell className="font-mono">${expense.amount.toFixed(2)}</TableCell>
              <TableCell>{expense.vehicle}</TableCell>
              <TableCell>{expense.driver}</TableCell>
              <TableCell>{getStatusBadge(expense.status)}</TableCell>
              <TableCell>
                {expense.receipt ? (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <FileText className="h-4 w-4" />
                  </Button>
                ) : (
                  <span className="text-muted-foreground text-sm">None</span>
                )}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>Edit Expense</DropdownMenuItem>
                    <DropdownMenuItem>Approve</DropdownMenuItem>
                    <DropdownMenuItem>Reject</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

