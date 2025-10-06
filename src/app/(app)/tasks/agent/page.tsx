"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Plus, Search, Clock, CheckCircle, AlertCircle, Filter } from "lucide-react";

/**
 * Agent Tasks Page
 *
 * Role: Agent only
 * Features: Task management, create tasks, update status, filter and search
 */
export default function AgentTasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Contact John Doe - Payment Overdue",
      priority: "high",
      status: "pending",
      dueDate: "Today",
      client: "ABC Corp",
      assignedTime: "2 hours ago",
    },
    {
      id: 2,
      title: "Review payment plan for Sarah Wilson",
      priority: "medium",
      status: "in-progress",
      dueDate: "Tomorrow",
      client: "XYZ Ltd",
      assignedTime: "5 hours ago",
    },
    {
      id: 3,
      title: "Send final notice to Mike Brown",
      priority: "high",
      status: "completed",
      dueDate: "Yesterday",
      client: "123 Inc",
      assignedTime: "1 day ago",
    },
    {
      id: 4,
      title: "Update account status - Lisa Chen",
      priority: "low",
      status: "pending",
      dueDate: "Jan 18",
      client: "DEF Corp",
      assignedTime: "3 days ago",
    },
    {
      id: 5,
      title: "Schedule follow-up call with David",
      priority: "medium",
      status: "pending",
      dueDate: "Jan 17",
      client: "GHI Ltd",
      assignedTime: "1 week ago",
    },
    {
      id: 6,
      title: "Process payment confirmation",
      priority: "medium",
      status: "completed",
      dueDate: "Jan 15",
      client: "JKL Corp",
      assignedTime: "2 weeks ago",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-blue-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "in-progress":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-heading">My Tasks</h1>
          <p className="text-muted-foreground mt-1">
            Manage your collection tasks and daily activities
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Task
        </Button>
      </div>

      {/* Task Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{tasks.length}</p>
                <p className="text-sm text-muted-foreground">Total Tasks</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {tasks.filter((t) => t.status === "pending").length}
                </p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {tasks.filter((t) => t.status === "in-progress").length}
                </p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {tasks.filter((t) => t.status === "completed").length}
                </p>
                <p className="text-sm text-muted-foreground">Completed</p>
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
                placeholder="Search tasks by title, client, or description..."
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tasks List */}
      <Card>
        <CardHeader>
          <CardTitle>All Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {getStatusIcon(task.status)}
                  <div className="flex-1">
                    <h3 className="font-medium">{task.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>Client: {task.client}</span>
                      <span>Due: {task.dueDate}</span>
                      <span>Assigned: {task.assignedTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  <Badge variant={getStatusColor(task.status)}>
                    {task.status.replace("-", " ")}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
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
