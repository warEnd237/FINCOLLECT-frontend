"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  PieChart,
} from "lucide-react";

/**
 * Admin Reports Page
 *
 * Role: Admin
 * Features: Department reports, team performance, financial summaries
 */
export default function AdminReportsPage() {
  const reports = [
    {
      id: 1,
      name: "Monthly Performance Report",
      type: "performance",
      description: "Team and department performance metrics",
      lastGenerated: "2 hours ago",
      size: "2.4 MB",
      status: "ready",
    },
    {
      id: 2,
      name: "Financial Summary Q4",
      type: "financial",
      description: "Quarterly financial analysis and recovery rates",
      lastGenerated: "1 day ago",
      size: "1.8 MB",
      status: "ready",
    },
    {
      id: 3,
      name: "Agent Activity Report",
      type: "activity",
      description: "Individual agent performance and activities",
      lastGenerated: "5 hours ago",
      size: "3.2 MB",
      status: "ready",
    },
    {
      id: 4,
      name: "Customer Satisfaction Survey",
      type: "survey",
      description: "Customer feedback and satisfaction metrics",
      lastGenerated: "3 days ago",
      size: "892 KB",
      status: "ready",
    },
    {
      id: 5,
      name: "Department Comparison",
      type: "comparison",
      description: "Cross-department performance analysis",
      lastGenerated: "1 week ago",
      size: "1.5 MB",
      status: "ready",
    },
    {
      id: 6,
      name: "Collection Efficiency Report",
      type: "efficiency",
      description: "Collection rates and efficiency metrics",
      lastGenerated: "Processing...",
      size: "N/A",
      status: "processing",
    },
  ];

  const quickStats = [
    {
      label: "Total Reports",
      value: "24",
      icon: FileText,
      color: "bg-primary/10 text-primary",
    },
    {
      label: "This Month",
      value: "8",
      icon: Calendar,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Team Performance",
      value: "92%",
      icon: TrendingUp,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Recovery Rate",
      value: "$1.2M",
      icon: DollarSign,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const getReportTypeColor = (type: string) => {
    switch (type) {
      case "performance":
        return "default";
      case "financial":
        return "secondary";
      case "activity":
        return "outline";
      case "survey":
        return "outline";
      case "comparison":
        return "secondary";
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
          <h1 className="text-3xl font-bold text-foreground font-heading">Department Reports</h1>
          <p className="text-muted-foreground mt-1">
            Generate and manage department performance reports
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Schedule Report
          </Button>
          <Button className="gap-2">
            <FileText className="w-4 h-4" />
            Generate Report
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
                <p className="text-sm text-muted-foreground">Team and individual metrics</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="default">8 Reports</Badge>
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
                <p className="text-sm text-muted-foreground">Revenue and collection data</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">5 Reports</Badge>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Team Reports</CardTitle>
                <p className="text-sm text-muted-foreground">Agent activity and productivity</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="outline">11 Reports</Badge>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
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
                          View
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
