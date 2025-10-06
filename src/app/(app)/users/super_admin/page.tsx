"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Edit,
  Trash2,
  Shield,
  Crown,
  Settings,
} from "lucide-react";

/**
 * Super Admin Users Management Page
 *
 * Role: Super Admin
 * Features: Global user management, system admins, organization control
 */
export default function SuperAdminUsersPage() {
  const users = [
    {
      id: 1,
      name: "Emma Davis",
      email: "emma@fincollect.com",
      role: "super_admin",
      organization: "FinCollect HQ",
      status: "active",
      lastLogin: "1 hour ago",
    },
    {
      id: 2,
      name: "Robert Johnson",
      email: "robert@fincollect.com",
      role: "admin",
      organization: "East Coast",
      status: "active",
      lastLogin: "30 minutes ago",
    },
    {
      id: 3,
      name: "Maria Garcia",
      email: "maria@fincollect.com",
      role: "admin",
      organization: "West Coast",
      status: "active",
      lastLogin: "2 hours ago",
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james@fincollect.com",
      role: "admin",
      organization: "Central Region",
      status: "inactive",
      lastLogin: "1 week ago",
    },
    {
      id: 5,
      name: "Jennifer Brown",
      email: "jennifer@fincollect.com",
      role: "admin",
      organization: "East Coast",
      status: "active",
      lastLogin: "5 hours ago",
    },
    {
      id: 6,
      name: "Michael Lee",
      email: "michael@fincollect.com",
      role: "agent",
      organization: "East Coast",
      status: "active",
      lastLogin: "10 minutes ago",
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "super_admin":
        return "destructive";
      case "admin":
        return "default";
      case "agent":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "super_admin":
        return <Crown className="w-4 h-4" />;
      case "admin":
        return <Shield className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active" ? "default" : "destructive";
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-heading">
            Global Users Management
          </h1>
          <p className="text-muted-foreground mt-1">Manage all system users across organizations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Settings className="w-4 h-4" />
            System Settings
          </Button>
          <Button className="gap-2">
            <UserPlus className="w-4 h-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Global Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{users.length}</p>
                <p className="text-sm text-muted-foreground">Total Users</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {users.filter((u) => u.role === "super_admin").length}
                </p>
                <p className="text-sm text-muted-foreground">Super Admins</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {users.filter((u) => u.role === "admin").length}
                </p>
                <p className="text-sm text-muted-foreground">Admins</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {users.filter((u) => u.status === "active").length}
                </p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search users globally by name, email, role, or organization..."
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Global Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>System Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    {getRoleIcon(user.role)}
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center gap-2">
                      {user.name}
                      {user.role === "super_admin" && <Crown className="w-4 h-4 text-yellow-600" />}
                    </h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>{user.email}</span>
                      <span>Organization: {user.organization}</span>
                      <span>Last login: {user.lastLogin}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={getRoleColor(user.role)} className="gap-1">
                    {getRoleIcon(user.role)}
                    {user.role.replace("_", " ")}
                  </Badge>
                  <Badge variant={getStatusColor(user.status)}>{user.status}</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Edit className="w-3 h-3" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Settings className="w-3 h-3" />
                      Permissions
                    </Button>
                    {user.role !== "super_admin" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
