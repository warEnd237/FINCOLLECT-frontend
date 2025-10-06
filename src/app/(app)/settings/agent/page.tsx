"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Palette, Save, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Agent Settings Page
 *
 * Role: Agent
 * Features: Profile settings, notifications, security, preferences
 */
export default function AgentSettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    taskReminders: true,
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground font-heading">Profile Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your personal settings and preferences</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" defaultValue="John Smith" placeholder="Enter your full name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="john.smith@fincollect.com"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+1-555-0123" placeholder="Enter your phone number" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" defaultValue="Collections" disabled className="bg-muted" />
            </div>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Save Profile
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter current password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" placeholder="Enter new password" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="twoFactor" className="text-sm font-medium">
                Two-Factor Authentication
              </Label>
              <Badge variant="outline">Not Enabled</Badge>
            </div>

            <Button variant="outline" className="w-full">
              Enable 2FA
            </Button>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotif">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <Switch
                id="emailNotif"
                checked={notifications.email}
                onCheckedChange={(checked: boolean) =>
                  setNotifications((prev) => ({ ...prev, email: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="pushNotif">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive browser notifications</p>
              </div>
              <Switch
                id="pushNotif"
                checked={notifications.push}
                onCheckedChange={(checked: boolean) =>
                  setNotifications((prev) => ({ ...prev, push: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="smsNotif">SMS Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
              </div>
              <Switch
                id="smsNotif"
                checked={notifications.sms}
                onCheckedChange={(checked: boolean) =>
                  setNotifications((prev) => ({ ...prev, sms: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="taskReminders">Task Reminders</Label>
                <p className="text-sm text-muted-foreground">Get reminders for upcoming tasks</p>
              </div>
              <Switch
                id="taskReminders"
                checked={notifications.taskReminders}
                onCheckedChange={(checked: boolean) =>
                  setNotifications((prev) => ({
                    ...prev,
                    taskReminders: checked,
                  }))
                }
              />
            </div>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Save Preferences
            </Button>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Appearance Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Theme</Label>
                <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
              </div>
              <ThemeToggle />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="language">Language</Label>
              <Input id="language" defaultValue="English (US)" disabled className="bg-muted" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input
                id="timezone"
                defaultValue="UTC-5 (Eastern Time)"
                disabled
                className="bg-muted"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Compact View</Label>
                <p className="text-sm text-muted-foreground">Use compact layout for lists</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
