"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Globe,
  DollarSign,
  BarChart3,
  PieChart,
  Crown,
} from "lucide-react";

/**
 * Super Admin Reports Page
 *
 * Role: Super Admin
 * Features: Global reports, cross-organization analytics, system-wide insights
 */
export default function SuperAdminReportsPage() {
  const globalReports = [
    {
      id: 1,
      name: "Global Performance Dashboard",
      type: "performance",
      description: "Cross-organization performance metrics and KPIs",
      lastGenerated: "1 hour ago",
      size: "4.2 MB",
      status: "ready",
      organization: "All",
    },
    {
      id: 2,
      name: "System-Wide Financial Report",
      type: "financial",
      description: "Consolidated revenue and collection analytics",
      lastGenerated: "2 hours ago",
      size: "3.8 MB",
      status: "ready",
      organization: "All",
    },
    {
      id: 3,
      name: "User Activity Analytics",
      type: "activity",
      description: "Global user engagement and system usage",
      lastGenerated: "3 hours ago",
      size: "2.1 MB",
      status: "ready",
      organization: "All",
    },
    {
      id: 4,
      name: "Security Audit Report",
      type: "security",
      description: "System security events and compliance",
      lastGenerated: "6 hours ago",
      size: "1.5 MB",
      status: "ready",
      organization: "All",
    },
    {
      id: 5,
      name: "Cross-Organization Comparison",
      type: "comparison",
      description: "Performance analysis across all regions",
      lastGenerated: "1 day ago",
      size: "5.7 MB",
      status: "ready",
      organization: "All",
    },
    {
      id: 6,
      name: "Infrastructure Health Report",
      type: "infrastructure",
      description: "System performance and resource usage",
      lastGenerated: "Processing...",
      size: "N/A",
      status: "processing",
      organization: "All",
    },
  ];

  const quickStats = [
    {
      label: "Global Reports",
      value: "47",
      icon: FileText,
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Organizations",
      value: "4",
      icon: Globe,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "System Uptime",
      value: "99.9%",
      icon: TrendingUp,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Total Revenue",
      value: "$8.4M",
      icon: DollarSign,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const organizationReports = [
    {
      name: "East Coast",
      reports: 12,
      lastUpdate: "2 hours ago",
      performance: 96.2,
    },
    {
      name: "West Coast",
      reports: 8,
      lastUpdate: "1 hour ago",
      performance: 94.8,
    },
    {
      name: "Central Region",
      reports: 6,
      lastUpdate: "3 hours ago",
      performance: 91.5,
    },
    {
      name: "Headquarters",
      reports: 21,
      lastUpdate: "30 minutes ago",
      performance: 98.1,
    },
  ];

  const getReportTypeColor = (type: string) => {
    switch (type) {
      case "performance":
        return "default";
      case "financial":
        return "secondary";
      case "security":
        return "destructive";
      case "infrastructure":
        return "outline";
      default:
        return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready":
        return "default";
      case "processing":
        return "secondary";
      case "error":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-heading flex items-center gap-2">
            <Crown className="w-8 h-8 text-yellow-600" />
            Global Reports
          </h1>
          <p className="text-muted-foreground mt-1">
            System-wide reports and cross-organization analytics
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Schedule Global Report
          </Button>
          <Button className="gap-2">
            <FileText className="w-4 h-4" />
            Generate Custom Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Organization Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Organization Reports Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {organizationReports.map((org, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{org.name}</h3>
                  <Badge variant="outline">{org.reports} reports</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Last update: {org.lastUpdate}</p>
                  <p>Performance: {org.performance}%</p>
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-3">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Categories */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Performance Reports</CardTitle>
                <p className="text-sm text-muted-foreground">Global performance metrics</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="default">15 Reports</Badge>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Financial Reports</CardTitle>
                <p className="text-sm text-muted-foreground">Revenue and financial analytics</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">12 Reports</Badge>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <CardTitle className="text-lg">System Reports</CardTitle>
                <p className="text-sm text-muted-foreground">Infrastructure and security</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="destructive">8 Reports</Badge>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Global Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Global Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {globalReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{report.name}</h3>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                      <span>Generated: {report.lastGenerated}</span>
                      <span>Size: {report.size}</span>
                      <span>Scope: {report.organization}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={getReportTypeColor(report.type)}>{report.type}</Badge>
                  <Badge variant={getStatusColor(report.status)}>{report.status}</Badge>
                  <div className="flex gap-2">
                    {report.status === "ready" && (
                      <>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Download className="w-3 h-3" />
                          Download
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <PieChart className="w-3 h-3" />
                          Analyze
                        </Button>
                      </>
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
