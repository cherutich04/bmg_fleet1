"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MoreHorizontal, Pencil, Trash2, UserPlus } from "lucide-react"

// Sample users data with Kenyan context
const users = [
  {
    id: 1,
    name: "John Mwangi",
    email: "john.mwangi@bmgfleet.co.ke",
    role: "Admin",
    status: "active",
    lastActive: "Today at 10:30 AM",
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    email: "sarah.wanjiku@bmgfleet.co.ke",
    role: "Manager",
    status: "active",
    lastActive: "Today at 9:15 AM",
  },
  {
    id: 3,
    name: "David Omondi",
    email: "david.omondi@bmgfleet.co.ke",
    role: "Finance Officer",
    status: "active",
    lastActive: "Yesterday at 4:45 PM",
  },
  {
    id: 4,
    name: "Mary Akinyi",
    email: "mary.akinyi@bmgfleet.co.ke",
    role: "Dispatcher",
    status: "active",
    lastActive: "Today at 11:20 AM",
  },
  {
    id: 5,
    name: "James Kiprop",
    email: "james.kiprop@bmgfleet.co.ke",
    role: "Maintenance Manager",
    status: "inactive",
    lastActive: "3 days ago",
  },
]

const statusColors = {
  active: "bg-green-100 text-green-800 border-green-200",
  inactive: "bg-gray-100 text-gray-800 border-gray-200",
  pending: "bg-amber-100 text-amber-800 border-amber-200",
}

export function UserSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">User Management</h3>
        <p className="text-sm text-muted-foreground">Manage user accounts and permissions.</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search users..." className="pl-8 w-full sm:w-[300px]" />
        </div>
        <Button className="bg-[#1E40AF]">
          <UserPlus className="h-4 w-4 mr-1" />
          Add User
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`/placeholder.svg?height=32&width=32&text=${user.name.charAt(0)}`}
                        alt={user.name}
                      />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={statusColors[user.status as keyof typeof statusColors]}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.lastActive}</TableCell>
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
    </div>
  )
}

