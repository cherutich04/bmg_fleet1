"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
      </div>

      <Tabs defaultValue="email" className="space-y-4">
        <TabsList>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="sms" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            SMS
          </TabsTrigger>
          <TabsTrigger value="push" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Push
          </TabsTrigger>
          <TabsTrigger value="in-app" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            In-App
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-maintenance" className="font-medium">
                    Maintenance Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive alerts when vehicles need maintenance.</p>
                </div>
                <Switch id="email-maintenance" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-fuel" className="font-medium">
                    Fuel Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive alerts for unusual fuel consumption.</p>
                </div>
                <Switch id="email-fuel" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-route" className="font-medium">
                    Route Deviations
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts when vehicles deviate from planned routes.
                  </p>
                </div>
                <Switch id="email-route" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-reports" className="font-medium">
                    Daily Reports
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive daily summary reports.</p>
                </div>
                <Switch id="email-reports" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-billing" className="font-medium">
                    Billing Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive notifications about billing and payments.</p>
                </div>
                <Switch id="email-billing" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sms">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-maintenance" className="font-medium">
                    Maintenance Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive SMS alerts when vehicles need maintenance.</p>
                </div>
                <Switch id="sms-maintenance" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-fuel" className="font-medium">
                    Fuel Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive SMS alerts for unusual fuel consumption.</p>
                </div>
                <Switch id="sms-fuel" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-route" className="font-medium">
                    Route Deviations
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive SMS alerts when vehicles deviate from planned routes.
                  </p>
                </div>
                <Switch id="sms-route" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-emergency" className="font-medium">
                    Emergency Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive SMS alerts for emergency situations.</p>
                </div>
                <Switch id="sms-emergency" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="push">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-maintenance" className="font-medium">
                    Maintenance Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications when vehicles need maintenance.
                  </p>
                </div>
                <Switch id="push-maintenance" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-fuel" className="font-medium">
                    Fuel Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications for unusual fuel consumption.
                  </p>
                </div>
                <Switch id="push-fuel" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-route" className="font-medium">
                    Route Deviations
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications when vehicles deviate from planned routes.
                  </p>
                </div>
                <Switch id="push-route" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-reports" className="font-medium">
                    Daily Reports
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications for daily summary reports.</p>
                </div>
                <Switch id="push-reports" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-app">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="in-app-maintenance" className="font-medium">
                    Maintenance Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app notifications when vehicles need maintenance.
                  </p>
                </div>
                <Switch id="in-app-maintenance" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="in-app-fuel" className="font-medium">
                    Fuel Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app notifications for unusual fuel consumption.
                  </p>
                </div>
                <Switch id="in-app-fuel" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="in-app-route" className="font-medium">
                    Route Deviations
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app notifications when vehicles deviate from planned routes.
                  </p>
                </div>
                <Switch id="in-app-route" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="in-app-reports" className="font-medium">
                    Daily Reports
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app notifications for daily summary reports.
                  </p>
                </div>
                <Switch id="in-app-reports" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="in-app-system" className="font-medium">
                    System Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app notifications about system updates and maintenance.
                  </p>
                </div>
                <Switch id="in-app-system" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button className="bg-[#1E40AF]">Save Preferences</Button>
      </div>
    </div>
  )
}

