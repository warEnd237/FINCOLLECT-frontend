"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Building2, Plus, Search, Users, Settings, TrendingUp, Globe, Crown } from "lucide-react";

/**
 * Super Admin Departments Management Page
 *
 * Role: Super Admin
 * Features: Global department management across organizations
 */
export default function SuperAdminDepartmentsPage() {
  const departments = [
    {
      id: 1,
      name: "Collections",
      organization: "East Coast",
      description: "Primary debt collection",
      members: 25,
      manager: "Sarah Johnson",
      status: "active",
      performance: 95,
    },
    {
      id: 2,
      name: "Collections",
      organization: "West Coast",
      description: "Primary debt collection",
      members: 18,
      manager: "Michael Davis",
      status: "active",
      performance: 92,
    },
    {
      id: 3,
      name: "Legal Affairs",
      organization: "HQ",
      description: "Global legal compliance",
      members: 12,
      manager: "Jennifer Wilson",
      status: "active",
      performance: 98,
    },
    {
      id: 4,
      name: "Customer Service",
      organization: "East Coast",
      description: "Customer relations",
      members: 20,
      manager: "David Brown",
      status: "active",
      performance: 88,
    },
    {
      id: 5,
      name: "IT Operations",
      organization: "HQ",
      description: "System administration",
      members: 8,
      manager: "Emma Chen",
      status: "active",
      performance: 94,
    },
    {
      id: 6,
      name: "Finance",
      organization: "Central",
      description: "Financial operations",
      members: 15,
      manager: "Robert Garcia",
      status: "active",
      performance: 91,
    },
    {
      id: 7,
      name: "Human Resources",
      organization: "HQ",
      description: "Global HR operations",
      members: 6,
      manager: "Lisa Martinez",
      status: "active",
      performance: 89,
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "active" ? "default" : "destructive";
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 95) return "default";
    if (performance >= 90) return "secondary";
    if (performance >= 85) return "outline";
    return "destructive";
  };

  const getOrganizationIcon = (org: string) => {
    return org === "HQ" ? <Crown className="w-4 h-4" /> : <Globe className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-heading">
            Global Departments Management
          </h1>
          <p className="text-muted-foreground mt-1">Manage departments across all organizations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Settings className="w-4 h-4" />
            Global Settings
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Department
          </Button>
        </div>
      </div>

      {/* Global Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{departments.length}</p>
                <p className="text-sm text-muted-foreground">Global Departments</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Organizations</p>
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
                <p className="text-2xl font-bold">92%</p>
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
              placeholder="Search departments globally by name, organization, or manager..."
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* Global Departments Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {dept.name}
                    {getOrganizationIcon(dept.organization)}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{dept.description}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {dept.organization}
                  </Badge>
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
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="gap-1 text-xs">
                      <Users className="w-3 h-3" />
                      Staff
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1 text-xs">
                      <TrendingUp className="w-3 h-3" />
                      Analytics
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1 text-xs">
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
