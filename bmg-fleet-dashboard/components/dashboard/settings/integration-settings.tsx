"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, MapPin, MessageSquare, LinkIcon } from "lucide-react"

export function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Integrations</h3>
        <p className="text-sm text-muted-foreground">
          Connect with third-party services and APIs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-[#1E40AF]" />
                <CardTitle>M-Pesa Integration</CardTitle>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                Connected
              </Badge>
            </div>
            <CardDescription>
              Process payments via M-Pesa
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mpesa-shortcode">Business Shortcode</Label>
                  <Input id="mpesa-shortcode" defaultValue="123456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mpesa-key">Consumer Key</Label>
                  <Input id="mpesa-key" type="password" defaultValue="••••••••••••••••" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="mpesa-enabled" className="font-medium">Enable M-Pesa Payments</Label>
                  <p className="text-sm text-muted-foreground">Allow payments via M-Pesa.</p>
                </div>
                <Switch id="mpesa-enabled" defaultChecked />
              </div>
              
              <Button variant="outline" className="w-full">Reconnect</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#1E40AF]" />
                <CardTitle>Google Maps API</CardTitle>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                Connected
              </Badge>
            </div>
            <CardDescription>
              Track vehicles and optimize routes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="google-api-key">API Key</Label>
                <Input id="google-api-key" type="password" defaultValue="••••••••••••••••" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="maps-enabled" className="font-medium">Enable Maps Integration</Label>
                  <p className="text-sm text-muted-foreground">Show live vehicle tracking on maps.</p>
                </div>
                <Switch id="maps-enabled" defaultChecked />
              </div>
              
              <Button variant="outline" className="w-full">Reconnect</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-[#1E40AF]" />
                <CardTitle>Africa's Talking SMS</CardTitle>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                Connected
              </Badge>
            </div>
            <CardDescription>
              Send SMS notifications and alerts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sms-username">Username</Label>
                  <Input id="sms-username" defaultValue="bmgfleet" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sms-key">API Key</Label>
                  <Input id="sms-key" type="password" defaultValue="••••••••••••••••" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-enabled" className="font-medium">Enable SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send SMS alerts to drivers and managers.</p>
                </div>
                <Switch id="sms-enabled" defaultChecked />
              </div>
              
              <Button variant="outline" className="w-full">Reconnect</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-[#1E40AF]" />
                <CardTitle>NTSA API Integration</CardTitle>
              </div>
              <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                Not Connected
              </Badge>
            </div>
            <CardDescription>
              Verify vehicle and driver compliance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2\

