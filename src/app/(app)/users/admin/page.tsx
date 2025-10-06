"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus, Search, Filter, Edit, Trash2, Shield } from "lucide-react";

/**
 * Admin Users Management Page
 *
 * Role: Admin
 * Features: Manage department users, create agents, assign roles
 */
export default function AdminUsersPage() {
  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john@fincollect.com",
      role: "agent",
      department: "Collections",
      status: "active",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@fincollect.com",
      role: "agent",
      department: "Collections",
      status: "active",
      lastLogin: "1 day ago",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@fincollect.com",
      role: "agent",
      department: "Customer Service",
      status: "inactive",
      lastLogin: "1 week ago",
    },
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa@fincollect.com",
      role: "agent",
      department: "Legal",
      status: "active",
      lastLogin: "5 minutes ago",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david@fincollect.com",
      role: "agent",
      department: "Collections",
      status: "active",
      lastLogin: "3 hours ago",
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "default";
      case "agent":
        return "secondary";
      default:
        return "outline";
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
          <h1 className="text-3xl font-bold text-foreground font-heading">Users Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage department users and their permissions
          </p>
        </div>
        <Button className="gap-2">
          <UserPlus className="w-4 h-4" />
          Add User
        </Button>
      </div>

      {/* User Statistics */}
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
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
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

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {users.filter((u) => u.role === "agent").length}
                </p>
                <p className="text-sm text-muted-foreground">Agents</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Departments</p>
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
              <Input placeholder="Search users by name, email, or department..." className="pl-9" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Department Users</CardTitle>
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
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>{user.email}</span>
                      <span>Department: {user.department}</span>
                      <span>Last login: {user.lastLogin}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={getRoleColor(user.role)}>{user.role}</Badge>
                  <Badge variant={getStatusColor(user.status)}>{user.status}</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Edit className="w-3 h-3" />
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </Button>
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
