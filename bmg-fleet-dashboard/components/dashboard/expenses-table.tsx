"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample expenses data with Kenyan context
const expenses = [
  {
    id: "EXP-001",
    date: "12/04/2023",
    vehicle: "KCA 476M",
    driver: "John Kamau",
    type: "Fuel",
    location: "Shell, Mombasa Road",
    amount: 12500,
    status: "approved",
  },
  {
    id: "EXP-002",
    date: "11/04/2023",
    vehicle: "KBZ 123A",
    driver: "Ali Hassan",
    type: "Maintenance",
    location: "AutoXpress, Westlands",
    amount: 35000,
    status: "approved",
  },
  {
    id: "EXP-003",
    date: "10/04/2023",
    vehicle: "KDG 789P",
    driver: "Peter Odhiambo",
    type: "Tolls",
    location: "Thika Road",
    amount: 500,
    status: "approved",
  },
  {
    id: "EXP-004",
    date: "09/04/2023",
    vehicle: "KBJ 456Q",
    driver: "David Maina",
    type: "Fuel",
    location: "Total, Ngong Road",
    amount: 8000,
    status: "approved",
  },
  {
    id: "EXP-005",
    date: "08/04/2023",
    vehicle: "KCF 321R",
    driver: "Samuel Kipchoge",
    type: "Maintenance",
    location: "Toyota Kenya, Uhuru Highway",
    amount: 45000,
    status: "pending",
  },
  {
    id: "EXP-006",
    date: "07/04/2023",
    vehicle: "KCA 476M",
    driver: "John Kamau",
    type: "Parking",
    location: "CBD, Nairobi",
    amount: 200,
    status: "approved",
  },
  {
    id: "EXP-007",
    date: "06/04/2023",
    vehicle: "KBZ 123A",
    driver: "Ali Hassan",
    type: "Fuel",
    location: "Rubis, Kiambu Road",
    amount: 10000,
    status: "approved",
  },
  {
    id: "EXP-008",
    date: "05/04/2023",
    vehicle: "KDG 789P",
    driver: "Peter Odhiambo",
    type: "Insurance",
    location: "Jubilee Insurance",
    amount: 25000,
    status: "pending",
  },
]

const statusColors = {
  approved: "bg-green-100 text-green-800 border-green-200",
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  rejected: "bg-rose-100 text-rose-800 border-rose-200",
}

export function ExpensesTable() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(expenses.length / itemsPerPage)

  const paginatedExpenses = expenses.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Recent Expenses</h2>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedExpenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell className="font-medium">{expense.id}</TableCell>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.vehicle}</TableCell>
                <TableCell>{expense.driver}</TableCell>
                <TableCell>{expense.type}</TableCell>
                <TableCell>{expense.location}</TableCell>
                <TableCell className="text-right">Kshs {expense.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={statusColors[expense.status as keyof typeof statusColors]}>
                    {expense.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="flex items-center">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center">
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center text-rose-500">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between p-4 border-t">
        <div className="text-sm text-muted-foreground">
          Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, expenses.length)} of{" "}
          {expenses.length} entries
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => setPage(page - 1)} disabled={page === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

