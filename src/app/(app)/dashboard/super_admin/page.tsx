"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, BarChart3, Shield, Database, Activity, Settings } from "lucide-react";
import { useRoleAccess } from "@/hooks/use-role-guard";
import type { UserRole } from "@/types/auth.types";
/**
 * Super Admin Dashboard
 *
 * Role: Super Admin
 * Features: System overview, global analytics, security monitoring, system management
 */
export default function SuperAdminDashboardPage() {
  // 🛡️ SECURITY: Verify user has Super Admin access
  const { hasAccess, isLoading } = useRoleAccess(["super_admin" as UserRole]);

  // Show loading while checking permissions
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verifying permissions...</p>
        </div>
      </div>
    );
  }

  // Don't render if no access (middleware should have redirected, but double-check)
  if (!hasAccess) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground font-heading">Super Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          System overview, global analytics, and administrative controls
        </p>
      </div>

      {/* System Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Organizations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">127</p>
                <p className="text-sm text-muted-foreground">Total Users</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">99.8%</p>
                <p className="text-sm text-muted-foreground">System Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Security Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  service: "Database",
                  status: "healthy",
                  uptime: "99.9%",
                  response: "12ms",
                },
                {
                  service: "API Gateway",
                  status: "healthy",
                  uptime: "99.8%",
                  response: "45ms",
                },
                {
                  service: "Authentication",
                  status: "healthy",
                  uptime: "100%",
                  response: "8ms",
                },
                {
                  service: "File Storage",
                  status: "warning",
                  uptime: "98.5%",
                  response: "120ms",
                },
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        service.status === "healthy"
                          ? "bg-green-500"
                          : service.status === "warning"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    />
                    <div>
                      <p className="font-medium">{service.service}</p>
                      <p className="text-sm text-muted-foreground">Uptime: {service.uptime}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{service.response}</p>
                    <Badge variant={service.status === "healthy" ? "default" : "secondary"}>
                      {service.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Global Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Global Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  metric: "Total Revenue",
                  value: "$2.4M",
                  change: "+12.5%",
                  trend: "up",
                },
                {
                  metric: "Active Cases",
                  value: "1,234",
                  change: "+8.2%",
                  trend: "up",
                },
                {
                  metric: "Success Rate",
                  value: "94.2%",
                  change: "+2.1%",
                  trend: "up",
                },
                {
                  metric: "Customer Satisfaction",
                  value: "4.8/5",
                  change: "+0.3",
                  trend: "up",
                },
              ].map((metric, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{metric.metric}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={metric.trend === "up" ? "default" : "destructive"}>
                      {metric.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Administration Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            System Administration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button className="gap-2 h-auto p-4 flex-col">
              <Database className="w-6 h-6" />
              <span>Database</span>
              <span className="text-xs">Manage & Monitor</span>
            </Button>
            <Button variant="outline" className="gap-2 h-auto p-4 flex-col">
              <Shield className="w-6 h-6" />
              <span>Security</span>
              <span className="text-xs">Logs & Alerts</span>
            </Button>
            <Button variant="outline" className="gap-2 h-auto p-4 flex-col">
              <Users className="w-6 h-6" />
              <span>User Management</span>
              <span className="text-xs">Global Users</span>
            </Button>
            <Button variant="outline" className="gap-2 h-auto p-4 flex-col">
              <Settings className="w-6 h-6" />
              <span>System Config</span>
              <span className="text-xs">Global Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
