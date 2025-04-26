import { ExpensesHeader } from "@/components/expenses/expenses-header"
import { ExpensesTable } from "@/components/expenses/expenses-table"
import { ExpensesSummary } from "@/components/expenses/expenses-summary"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Expenses() {
  return (
    <div className="flex flex-col min-h-screen">
      <ExpensesHeader />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <ExpensesSummary />
          </div>
          <div className="lg:col-span-3">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Expense Approval Center</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="list" className="w-full">
                  <div className="border-b px-6 py-2">
                    <TabsList>
                      <TabsTrigger value="list">All Expenses</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="approved">Approved</TabsTrigger>
                      <TabsTrigger value="rejected">Rejected</TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="list" className="mt-0">
                    <ExpensesTable />
                  </TabsContent>
                  <TabsContent value="pending" className="mt-0">
                    <div className="p-6 text-center text-muted-foreground">
                      <p>Pending expenses will appear here</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="approved" className="mt-0">
                    <div className="p-6 text-center text-muted-foreground">
                      <p>Approved expenses will appear here</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="rejected" className="mt-0">
                    <div className="p-6 text-center text-muted-foreground">
                      <p>Rejected expenses will appear here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

