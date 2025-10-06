"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Globe,
  DollarSign,
  Users,
  Activity,
  PieChart,
  LineChart,
  Target,
  Calendar,
  Download,
} from "lucide-react";

/**
 * Super Admin Analytics Page
 *
 * Role: Super Admin only
 * Features: Global analytics, cross-organization insights, system-wide metrics
 */
export default function SuperAdminAnalyticsPage() {
  const globalMetrics = [
    {
      label: "Global Revenue",
      value: "$4.2M",
      change: "+12.5%",
      trend: "up",
      period: "This Quarter",
    },
    {
      label: "Total Collections",
      value: "$3.8M",
      change: "+8.2%",
      trend: "up",
      period: "This Month",
    },
    {
      label: "Success Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      period: "Global Average",
    },
    {
      label: "Active Cases",
      value: "2,847",
      change: "-3.2%",
      trend: "down",
      period: "System Wide",
    },
  ];

  const organizationPerformance = [
    {
      name: "East Coast",
      revenue: "$1.8M",
      cases: 1234,
      successRate: 96.2,
      growth: "+15.2%",
    },
    {
      name: "West Coast",
      revenue: "$1.4M",
      cases: 892,
      successRate: 94.8,
      growth: "+12.1%",
    },
    {
      name: "Central Region",
      revenue: "$1.0M",
      cases: 721,
      successRate: 91.5,
      growth: "+8.7%",
    },
    {
      name: "Headquarters",
      revenue: "$0.8M",
      cases: 445,
      successRate: 98.1,
      growth: "+22.3%",
    },
  ];

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <TrendingUp className="w-4 h-4 text-green-600" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-600" />
    );
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-heading">Global Analytics</h1>
          <p className="text-muted-foreground mt-1">
            System-wide analytics and cross-organization insights
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Date Range
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </Button>
          <Button className="gap-2">
            <Target className="w-4 h-4" />
            Custom Report
          </Button>
        </div>
      </div>

      {/* Global KPIs */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {globalMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.period}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {getTrendIcon(metric.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Dashboard Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="w-5 h-5" />
              Revenue Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Revenue trend chart would display here</p>
                <p className="text-sm text-muted-foreground">
                  Interactive chart with drill-down capabilities
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Performance Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
              <div className="text-center">
                <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Performance distribution chart</p>
                <p className="text-sm text-muted-foreground">
                  Organization-wise performance breakdown
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Organization Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Organization Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {organizationPerformance.map((org, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{org.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>Revenue: {org.revenue}</span>
                      <span>Cases: {org.cases}</span>
                      <span>Success Rate: {org.successRate}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default" className="gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {org.growth}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <BarChart3 className="w-3 h-3" />
                      Details
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Target className="w-3 h-3" />
                      Drill Down
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Health Metrics */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">API Response Time</span>
                <Badge variant="default">45ms</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Database Performance</span>
                <Badge variant="default">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">System Uptime</span>
                <Badge variant="default">99.9%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Sessions</span>
                <Badge variant="secondary">127</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              User Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Daily Active Users</span>
                <Badge variant="default">89</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Peak Concurrent Users</span>
                <Badge variant="secondary">34</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Avg Session Duration</span>
                <Badge variant="outline">4h 23m</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Login Success Rate</span>
                <Badge variant="default">98.7%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Financial KPIs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Monthly Recurring Revenue</span>
                <Badge variant="default">$1.4M</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Cost per Acquisition</span>
                <Badge variant="secondary">$124</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Customer Lifetime Value</span>
                <Badge variant="outline">$8,450</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">ROI</span>
                <Badge variant="default">234%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
