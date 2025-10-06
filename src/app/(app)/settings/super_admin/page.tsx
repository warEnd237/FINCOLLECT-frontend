"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Database, Crown, Save, Eye, EyeOff, Server } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Super Admin Settings Page
 *
 * Role: Super Admin
 * Features: System settings, global configuration, security, infrastructure
 */
export default function SuperAdminSettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: true,
    systemAlerts: true,
    securityAlerts: true,
    backupReports: true,
  });

  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    autoBackup: true,
    debugMode: false,
    apiLogging: true,
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground font-heading flex items-center gap-2">
          <Crown className="w-8 h-8 text-yellow-600" />
          Super Admin Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          Global system configuration and administrative controls
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
              <Input id="fullName" defaultValue="Super Admin" placeholder="Enter your full name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="superadmin@fincollect.com"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+1-555-0001" placeholder="Enter your phone number" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-yellow-600" />
                <Input id="role" defaultValue="Super Administrator" disabled className="bg-muted" />
              </div>
            </div>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Save Profile
            </Button>
          </CardContent>
        </Card>

        {/* System Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5" />
              System Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Maintenance Mode</Label>
                <p className="text-sm text-muted-foreground">Temporarily disable system access</p>
              </div>
              <Switch
                checked={systemSettings.maintenanceMode}
                onCheckedChange={(checked: boolean) =>
                  setSystemSettings((prev) => ({
                    ...prev,
                    maintenanceMode: checked,
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Automatic Backups</Label>
                <p className="text-sm text-muted-foreground">Daily system backups at 2 AM</p>
              </div>
              <Switch
                checked={systemSettings.autoBackup}
                onCheckedChange={(checked: boolean) =>
                  setSystemSettings((prev) => ({
                    ...prev,
                    autoBackup: checked,
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Debug Mode</Label>
                <p className="text-sm text-muted-foreground">Enable detailed error logging</p>
              </div>
              <Switch
                checked={systemSettings.debugMode}
                onCheckedChange={(checked: boolean) =>
                  setSystemSettings((prev) => ({ ...prev, debugMode: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>API Request Logging</Label>
                <p className="text-sm text-muted-foreground">Log all API requests for audit</p>
              </div>
              <Switch
                checked={systemSettings.apiLogging}
                onCheckedChange={(checked: boolean) =>
                  setSystemSettings((prev) => ({
                    ...prev,
                    apiLogging: checked,
                  }))
                }
              />
            </div>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Save System Config
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
              <Input
                id="newPassword"
                type="password"
                placeholder="Enter new password (min 12 chars)"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Session Timeout</Label>
              <Badge variant="outline">4 hours</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Multi-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Hardware key + TOTP required</p>
              </div>
              <Badge variant="default">Active</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>IP Whitelist</Label>
                <p className="text-sm text-muted-foreground">Restrict access by IP address</p>
              </div>
              <Badge variant="secondary">3 IPs</Badge>
            </div>

            <Button className="w-full gap-2">
              <Save className="w-4 h-4" />
              Update Security
            </Button>
          </CardContent>
        </Card>

        {/* Global Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Global Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="systemAlerts">System Alerts</Label>
                <p className="text-sm text-muted-foreground">Critical system events</p>
              </div>
              <Switch
                id="systemAlerts"
                checked={notifications.systemAlerts}
                onCheckedChange={(checked: boolean) =>
                  setNotifications((prev) => ({
                    ...prev,
                    systemAlerts: checked,
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="securityAlerts">Security Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Failed logins and intrusion attempts
                </p>
              </div>
              <Switch
                id="securityAlerts"
                checked={notifications.securityAlerts}
                onCheckedChange={(checked: boolean) =>
                  setNotifications((prev) => ({
                    ...prev,
                    securityAlerts: checked,
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="backupReports">Backup Reports</Label>
                <p className="text-sm text-muted-foreground">Daily backup status reports</p>
              </div>
              <Switch
                id="backupReports"
                checked={notifications.backupReports}
                onCheckedChange={(checked: boolean) =>
                  setNotifications((prev) => ({
                    ...prev,
                    backupReports: checked,
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Appearance</Label>
                <p className="text-sm text-muted-foreground">System-wide theme preference</p>
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

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Database</p>
                <p className="text-sm text-muted-foreground">Primary DB</p>
              </div>
              <Badge variant="default">Online</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">API Gateway</p>
                <p className="text-sm text-muted-foreground">Load Balancer</p>
              </div>
              <Badge variant="default">Healthy</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Backup System</p>
                <p className="text-sm text-muted-foreground">Last: 2h ago</p>
              </div>
              <Badge variant="default">Active</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
