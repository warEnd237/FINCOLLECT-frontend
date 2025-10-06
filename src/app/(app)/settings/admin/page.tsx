"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Building2, Save, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Admin Settings Page
 *
 * Role: Admin
 * Features: Department settings, user management, notifications, security
 */
export default function AdminSettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    departmentUpdates: true,
    userActivities: true,
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground font-heading">Admin Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage department settings and administrative preferences
        </p>
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
              <Input id="fullName" defaultValue="Admin User" placeholder="Enter your full name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="admin@fincollect.com"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+1-555-0456" placeholder="Enter your phone number" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Administrator" disabled className="bg-muted" />
            </div>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Save Profile
            </Button>
          </CardContent>
        </Card>

        {/* Department Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Department Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="departmentName">Department Name</Label>
              <Input
                id="departmentName"
                defaultValue="Collections Department"
                placeholder="Enter department name"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="maxUsers">Maximum Users</Label>
              <Input id="maxUsers" type="number" defaultValue="50" placeholder="Enter max users" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Auto-assign new cases</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically assign new cases to agents
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Require approval for high-value cases</Label>
                <p className="text-sm text-muted-foreground">
                  Cases over $10K require admin approval
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Save Department Settings
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

            <div className="flex items-center justify-between">
              <Label htmlFor="sessionTimeout" className="text-sm font-medium">
                Session Timeout
              </Label>
              <Badge variant="outline">8 hours</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Enhanced security for admin access</p>
              </div>
              <Badge variant="destructive">Required</Badge>
            </div>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Update Security
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
                <p className="text-sm text-muted-foreground">Department updates and alerts</p>
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
                <Label htmlFor="departmentUpdates">Department Updates</Label>
                <p className="text-sm text-muted-foreground">Team performance and changes</p>
              </div>
              <Switch
                id="departmentUpdates"
                checked={notifications.departmentUpdates}
                onCheckedChange={(checked: boolean) =>
                  setNotifications((prev) => ({
                    ...prev,
                    departmentUpdates: checked,
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="userActivities">User Activities</Label>
                <p className="text-sm text-muted-foreground">New users and role changes</p>
              </div>
              <Switch
                id="userActivities"
                checked={notifications.userActivities}
                onCheckedChange={(checked: boolean) =>
                  setNotifications((prev) => ({
                    ...prev,
                    userActivities: checked,
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Appearance</Label>
                <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
              </div>
              <ThemeToggle />
            </div>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Save Preferences
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
