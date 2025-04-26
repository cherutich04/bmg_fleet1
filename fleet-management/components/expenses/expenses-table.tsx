"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

const expenses = [
  {
    id: "EXP-001",
    date: "Apr 3, 2025",
    category: "Fuel",
    amount: 78.5,
    vehicle: "FL-001",
    driver: "John Smith",
    status: "approved",
  },
  {
    id: "EXP-002",
    date: "Apr 2, 2025",
    category: "Maintenance",
    amount: 350.0,
    vehicle: "FL-003",
    driver: "Mike Davis",
    status: "approved",
  },
  {
    id: "EXP-003",
    date: "Apr 2, 2025",
    category: "Tolls",
    amount: 15.75,
    vehicle: "FL-002",
    driver: "Sarah Johnson",
    status: "pending",
  },
  {
    id: "EXP-004",
    date: "Apr 1, 2025",
    category: "Fuel",
    amount: 65.25,
    vehicle: "FL-004",
    driver: "Lisa Brown",
    status: "approved",
  },
  {
    id: "EXP-005",
    date: "Mar 31, 2025",
    category: "Other",
    amount: 42.0,
    vehicle: "FL-001",
    driver: "John Smith",
    status: "rejected",
  },
]

export function ExpensesTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Pending
          </Badge>
        )
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Vehicle</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="font-medium">{expense.id}</TableCell>
              <TableCell>{expense.date}</TableCell>
              <TableCell className={getCategoryColor(expense.category)}>{expense.category}</TableCell>
              <TableCell>${expense.amount.toFixed(2)}</TableCell>
              <TableCell>{expense.vehicle}</TableCell>
              <TableCell>{expense.driver}</TableCell>
              <TableCell>{getStatusBadge(expense.status)}</TableCell>
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
                    <DropdownMenuItem>View Details</DropdownMenuItem>
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

