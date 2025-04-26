"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompanySettings } from "@/components/dashboard/settings/company-settings"
import { UserSettings } from "@/components/dashboard/settings/user-settings"
import { NotificationSettings } from "@/components/dashboard/settings/notification-settings"
import { IntegrationSettings } from "@/components/dashboard/settings/integration-settings"
import { BillingSettings } from "@/components/dashboard/settings/billing-settings"

export function SettingsTabs() {
  return (
    <Card>
      <CardContent className="p-6">
        <Tabs defaultValue="company" className="space-y-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="company">
            <CompanySettings />
          </TabsContent>
          <TabsContent value="users">
            <UserSettings />
          </TabsContent>
          <TabsContent value="notifications">
            <NotificationSettings />
          </TabsContent>
          <TabsContent value="integrations">
            <IntegrationSettings />
          </TabsContent>
          <TabsContent value="billing">
            <BillingSettings />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

