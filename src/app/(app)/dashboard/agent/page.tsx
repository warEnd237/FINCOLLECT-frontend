"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ClipboardList,
  Users,
  Phone,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

/**
 * Agent Dashboard
 *
 * Role: Agent
 * Features: Task overview, contact management, daily activities, performance metrics
 */
export default function AgentDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground font-heading">Welcome back, Agent!</h1>
        <p className="text-muted-foreground mt-1">
          {"Here's your daily overview and pending tasks"}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Active Tasks</p>
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
                <p className="text-2xl font-bold">34</p>
                <p className="text-sm text-muted-foreground">Contacts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Calls Today</p>
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
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5" />
              Today&apos;s Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  task: "Contact John Doe",
                  priority: "high",
                  status: "pending",
                },
                {
                  task: "Review payment plan",
                  priority: "medium",
                  status: "in-progress",
                },
                {
                  task: "Send follow-up email",
                  priority: "low",
                  status: "completed",
                },
                {
                  task: "Update account status",
                  priority: "medium",
                  status: "pending",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {item.status === "completed" ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : item.status === "in-progress" ? (
                      <Clock className="w-4 h-4 text-blue-600" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    )}
                    <span className="font-medium">{item.task}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        item.priority === "high"
                          ? "destructive"
                          : item.priority === "medium"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {item.priority}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Recent Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Sarah Johnson",
                  company: "ABC Corp",
                  status: "responded",
                  lastContact: "2 hours ago",
                },
                {
                  name: "Mike Wilson",
                  company: "XYZ Ltd",
                  status: "pending",
                  lastContact: "1 day ago",
                },
                {
                  name: "Lisa Chen",
                  company: "Tech Inc",
                  status: "completed",
                  lastContact: "3 days ago",
                },
                {
                  name: "David Brown",
                  company: "Finance Co",
                  status: "no-response",
                  lastContact: "1 week ago",
                },
              ].map((contact, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.company}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        contact.status === "completed"
                          ? "default"
                          : contact.status === "responded"
                            ? "secondary"
                            : contact.status === "pending"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {contact.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{contact.lastContact}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
