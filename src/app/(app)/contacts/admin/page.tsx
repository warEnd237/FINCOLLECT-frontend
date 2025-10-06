"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  UserCircle,
  Plus,
  Search,
  Filter,
  Phone,
  Mail,
  Edit,
  Users,
  TrendingUp,
} from "lucide-react";

/**
 * Admin Contacts Management Page
 *
 * Role: Admin
 * Features: Department-wide contact management, agent oversight, bulk operations
 */
export default function AdminContactsPage() {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      company: "ABC Corp",
      email: "john@abc.com",
      phone: "+1-555-0123",
      agent: "Sarah Johnson",
      status: "active",
      priority: "high",
      lastContact: "2 hours ago",
      value: "$15,000",
    },
    {
      id: 2,
      name: "Emily Wilson",
      company: "XYZ Ltd",
      email: "emily@xyz.com",
      phone: "+1-555-0124",
      agent: "Mike Brown",
      status: "responded",
      priority: "medium",
      lastContact: "1 day ago",
      value: "$8,500",
    },
    {
      id: 3,
      name: "Robert Chen",
      company: "Tech Inc",
      email: "robert@tech.com",
      phone: "+1-555-0125",
      agent: "Lisa Davis",
      status: "no-response",
      priority: "high",
      lastContact: "1 week ago",
      value: "$22,000",
    },
    {
      id: 4,
      name: "Maria Garcia",
      company: "Finance Co",
      email: "maria@finance.com",
      phone: "+1-555-0126",
      agent: "David Wilson",
      status: "completed",
      priority: "low",
      lastContact: "3 days ago",
      value: "$5,200",
    },
    {
      id: 5,
      name: "James Taylor",
      company: "Services LLC",
      email: "james@services.com",
      phone: "+1-555-0127",
      agent: "Sarah Johnson",
      status: "pending",
      priority: "medium",
      lastContact: "5 hours ago",
      value: "$12,800",
    },
    {
      id: 6,
      name: "Linda Rodriguez",
      company: "Retail Corp",
      email: "linda@retail.com",
      phone: "+1-555-0128",
      agent: "Mike Brown",
      status: "active",
      priority: "high",
      lastContact: "30 minutes ago",
      value: "$18,600",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "responded":
        return "secondary";
      case "active":
        return "outline";
      case "pending":
        return "outline";
      default:
        return "destructive";
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
          <h1 className="text-3xl font-bold text-foreground font-heading">Department Contacts</h1>
          <p className="text-muted-foreground mt-1">
            Manage and oversee all department contact activities
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            Analytics
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Contact
          </Button>
        </div>
      </div>

      {/* Contact Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{contacts.length}</p>
                <p className="text-sm text-muted-foreground">Total Contacts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {contacts.filter((c) => c.status === "active" || c.status === "responded").length}
                </p>
                <p className="text-sm text-muted-foreground">Active Cases</p>
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
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Active Agents</p>
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
                <p className="text-2xl font-bold">$82.1K</p>
                <p className="text-sm text-muted-foreground">Total Value</p>
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
                placeholder="Search contacts by name, company, agent, or value..."
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </Button>
            <Button variant="outline" className="gap-2">
              <Users className="w-4 h-4" />
              Assign Bulk
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Department Contact List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{contact.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>{contact.company}</span>
                      <span>{contact.email}</span>
                      <span>{contact.phone}</span>
                      <span>Agent: {contact.agent}</span>
                      <span>Value: {contact.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Last contact: {contact.lastContact}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={getPriorityColor(contact.priority)}>{contact.priority}</Badge>
                  <Badge variant={getStatusColor(contact.status)}>
                    {contact.status.replace("-", " ")}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Phone className="w-3 h-3" />
                      Call
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Mail className="w-3 h-3" />
                      Email
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Users className="w-3 h-3" />
                      Reassign
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Edit className="w-3 h-3" />
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
