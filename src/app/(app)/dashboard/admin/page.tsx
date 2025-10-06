"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  AlertCircle,
  BarChart3,
  CheckCircle,
  FileText,
  Building2,
} from "lucide-react";
import { useRoleAccess } from "@/hooks/use-role-guard";
import type { UserRole } from "@/types/auth.types";
/**
 * Admin Dashboard
 *
 * Role: Admin
 * Features: Team overview, department management, system metrics, user management
 */
export default function AdminDashboardPage() {
  // 🛡️ SECURITY: Verify user has Admin access
  const { hasAccess, isLoading } = useRoleAccess(["admin" as UserRole, "super_admin" as UserRole]);

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

  // Don't render if no access
  if (!hasAccess) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground font-heading">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Manage your team, monitor performance, and oversee operations
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Departments</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">92%</p>
                <p className="text-sm text-muted-foreground">Team Performance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">Active Cases</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Team Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Team Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Collections Team",
                  performance: 95,
                  members: 8,
                  status: "excellent",
                },
                {
                  name: "Customer Service",
                  performance: 88,
                  members: 6,
                  status: "good",
                },
                {
                  name: "Legal Department",
                  performance: 92,
                  members: 4,
                  status: "excellent",
                },
                {
                  name: "Finance Team",
                  performance: 78,
                  members: 6,
                  status: "average",
                },
              ].map((team, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{team.name}</p>
                    <p className="text-sm text-muted-foreground">{team.members} members</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-medium">{team.performance}%</p>
                      <Badge
                        variant={
                          team.status === "excellent"
                            ? "default"
                            : team.status === "good"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {team.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "New user added",
                  user: "John Smith",
                  time: "5 minutes ago",
                  type: "success",
                },
                {
                  action: "Department updated",
                  user: "Sarah Johnson",
                  time: "1 hour ago",
                  type: "info",
                },
                {
                  action: "System backup completed",
                  user: "System",
                  time: "2 hours ago",
                  type: "success",
                },
                {
                  action: "Failed login attempt",
                  user: "Unknown",
                  time: "3 hours ago",
                  type: "warning",
                },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border rounded-lg">
                  {activity.type === "success" ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : activity.type === "warning" ? (
                    <AlertCircle className="w-4 h-4 text-yellow-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-blue-600" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">by {activity.user}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button className="gap-2">
              <Users className="w-4 h-4" />
              Manage Users
            </Button>
            <Button variant="outline" className="gap-2">
              <Building2 className="w-4 h-4" />
              Departments
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Reports
            </Button>
            <Button variant="outline" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
