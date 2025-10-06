"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Building2, Plus, Search, Users, Edit, Settings, TrendingUp } from "lucide-react";

/**
 * Admin Departments Management Page
 *
 * Role: Admin
 * Features: Manage organization departments, assign staff, monitor performance
 */
export default function AdminDepartmentsPage() {
  const departments = [
    {
      id: 1,
      name: "Collections",
      description: "Debt collection and recovery",
      members: 12,
      manager: "Sarah Johnson",
      status: "active",
      performance: 95,
    },
    {
      id: 2,
      name: "Legal",
      description: "Legal affairs and compliance",
      members: 8,
      manager: "Michael Brown",
      status: "active",
      performance: 92,
    },
    {
      id: 3,
      name: "Customer Service",
      description: "Customer support and relations",
      members: 15,
      manager: "Lisa Chen",
      status: "active",
      performance: 88,
    },
    {
      id: 4,
      name: "Finance",
      description: "Financial operations",
      members: 6,
      manager: "David Wilson",
      status: "active",
      performance: 91,
    },
    {
      id: 5,
      name: "IT Support",
      description: "Technical support and maintenance",
      members: 4,
      manager: "Emma Davis",
      status: "inactive",
      performance: 78,
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "active" ? "default" : "destructive";
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return "default";
    if (performance >= 80) return "secondary";
    return "destructive";
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-heading">
            Departments Management
          </h1>
          <p className="text-muted-foreground mt-1">Manage organizational departments and teams</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Department
        </Button>
      </div>

      {/* Department Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{departments.length}</p>
                <p className="text-sm text-muted-foreground">Total Departments</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {departments.filter((d) => d.status === "active").length}
                </p>
                <p className="text-sm text-muted-foreground">Active Departments</p>
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
                  {departments.reduce((sum, d) => sum + d.members, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Staff</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-muted-foreground">Avg Performance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search departments by name, manager, or description..."
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* Departments Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{dept.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Manager:</span>
                  <span className="font-medium">{dept.manager}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Staff:</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{dept.members} members</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Performance:</span>
                  <Badge variant={getPerformanceColor(dept.performance)}>{dept.performance}%</Badge>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Badge variant={getStatusColor(dept.status)}>{dept.status}</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Users className="w-3 h-3" />
                      Staff
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Edit className="w-3 h-3" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Settings className="w-3 h-3" />
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
