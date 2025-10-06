"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UserCircle, Plus, Search, Filter, Phone, Mail, Edit, MessageSquare } from "lucide-react";

/**
 * Agent Contacts Management Page
 *
 * Role: Agent
 * Features: Personal contact list, communication history, contact management
 */
export default function AgentContactsPage() {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      company: "ABC Corp",
      email: "john@abc.com",
      phone: "+1-555-0123",
      status: "active",
      priority: "high",
      lastContact: "2 hours ago",
      notes: "Promised payment by Friday",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      company: "XYZ Ltd",
      email: "sarah@xyz.com",
      phone: "+1-555-0124",
      status: "responded",
      priority: "medium",
      lastContact: "1 day ago",
      notes: "Requested payment plan",
    },
    {
      id: 3,
      name: "Mike Brown",
      company: "Tech Inc",
      email: "mike@tech.com",
      phone: "+1-555-0125",
      status: "no-response",
      priority: "high",
      lastContact: "1 week ago",
      notes: "Multiple attempts made",
    },
    {
      id: 4,
      name: "Lisa Chen",
      company: "Finance Co",
      email: "lisa@finance.com",
      phone: "+1-555-0126",
      status: "completed",
      priority: "low",
      lastContact: "3 days ago",
      notes: "Payment received",
    },
    {
      id: 5,
      name: "David Johnson",
      company: "Services LLC",
      email: "david@services.com",
      phone: "+1-555-0127",
      status: "pending",
      priority: "medium",
      lastContact: "5 hours ago",
      notes: "Follow up needed",
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
          <h1 className="text-3xl font-bold text-foreground font-heading">My Contacts</h1>
          <p className="text-muted-foreground mt-1">
            Manage your contact list and communication history
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Contact
        </Button>
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
                <p className="text-sm text-muted-foreground">Active Contacts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {contacts.filter((c) => c.priority === "high").length}
                </p>
                <p className="text-sm text-muted-foreground">High Priority</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {contacts.filter((c) => c.status === "completed").length}
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
                placeholder="Search contacts by name, company, email, or phone..."
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

      {/* Contacts List */}
      <Card>
        <CardHeader>
          <CardTitle>Contact List</CardTitle>
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
                      <span>Last contact: {contact.lastContact}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{contact.notes}</p>
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
                      <MessageSquare className="w-3 h-3" />
                      Notes
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
