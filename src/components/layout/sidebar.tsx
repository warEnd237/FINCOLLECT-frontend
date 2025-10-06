"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useUserRole } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";
import {
  LayoutDashboard,
  Users,
  Building2,
  FileText,
  Settings,
  ClipboardList,
  UserCircle,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { type UserRole } from "@/types/auth.types";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/ui/logo";

interface NavItem {
  label: string;
  getHref: (_role: UserRole) => string;
  icon: LucideIcon;
  roles: UserRole[];
}

const navigationItems: NavItem[] = [
  {
    label: "Dashboard",
    getHref: (role: UserRole) => {
      switch (role) {
        case "super_admin":
          return ROUTES.SUPER_ADMIN.DASHBOARD;
        case "admin":
          return ROUTES.ADMIN.DASHBOARD;
        case "agent":
          return ROUTES.AGENT.DASHBOARD;
        default:
          return ROUTES.AGENT.DASHBOARD;
      }
    },
    icon: LayoutDashboard,
    roles: ["super_admin" as UserRole, "admin" as UserRole, "agent" as UserRole],
  },
  {
    label: "Users",
    getHref: (role: UserRole) => {
      switch (role) {
        case "super_admin":
          return ROUTES.SUPER_ADMIN.USERS;
        case "admin":
          return ROUTES.ADMIN.USERS;
        default:
          return ROUTES.ADMIN.USERS;
      }
    },
    icon: Users,
    roles: ["super_admin" as UserRole, "admin" as UserRole],
  },
  {
    label: "Departments",
    getHref: (role: UserRole) => {
      switch (role) {
        case "super_admin":
          return ROUTES.SUPER_ADMIN.DEPARTMENTS;
        case "admin":
          return ROUTES.ADMIN.DEPARTMENTS;
        default:
          return ROUTES.ADMIN.DEPARTMENTS;
      }
    },
    icon: Building2,
    roles: ["super_admin" as UserRole, "admin" as UserRole],
  },
  {
    label: "Tasks",
    getHref: (role: UserRole) => {
      return ROUTES.AGENT.TASKS;
    },
    icon: ClipboardList,
    roles: ["agent" as UserRole],
  },
  {
    label: "Contacts",
    getHref: (role: UserRole) => {
      switch (role) {
        case "agent":
          return ROUTES.AGENT.CONTACTS;
        case "admin":
          return ROUTES.ADMIN.CONTACTS;
        default:
          return ROUTES.AGENT.CONTACTS;
      }
    },
    icon: UserCircle,
    roles: ["agent" as UserRole, "admin" as UserRole],
  },
  {
    label: "Reports",
    getHref: (role: UserRole) => {
      switch (role) {
        case "super_admin":
          return ROUTES.SUPER_ADMIN.REPORTS;
        case "admin":
          return ROUTES.ADMIN.REPORTS;
        default:
          return ROUTES.ADMIN.REPORTS;
      }
    },
    icon: FileText,
    roles: ["super_admin" as UserRole, "admin" as UserRole],
  },
  {
    label: "Analytics",
    getHref: (role: UserRole) => {
      return ROUTES.SUPER_ADMIN.ANALYTICS;
    },
    icon: BarChart3,
    roles: ["super_admin" as UserRole],
  },
  {
    label: "Settings",
    getHref: (role: UserRole) => {
      switch (role) {
        case "super_admin":
          return ROUTES.SUPER_ADMIN.SETTINGS;
        case "admin":
          return ROUTES.ADMIN.SETTINGS;
        case "agent":
          return ROUTES.AGENT.PROFILE;
        default:
          return ROUTES.AGENT.PROFILE;
      }
    },
    icon: Settings,
    roles: ["super_admin", "admin", "agent"] as UserRole[],
  },
];

/**
 * Sidebar moderne avec shadcn/ui Sidebar component
 *
 * ✅ shadcn/ui Sidebar avec gestion responsive
 * ✅ Design tokens pour espacement et typographie
 * ✅ Navigation basée sur rôles utilisateur
 * ✅ Thème-aware avec variables CSS unifiées
 */
export function AppSidebar() {
  const pathname = usePathname();
  const userRole = useUserRole();

  // Filter nav items based on user role
  const filteredNavItems = navigationItems.filter((item) =>
    userRole ? item.roles.includes(userRole) : false
  );

  return (
    <Sidebar variant="sidebar" className="font-sans">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link
          href="/"
          className="flex items-center px-4 py-3 hover:bg-sidebar-accent rounded-md transition-colors"
        >
          <Logo size="md" showText={true} className="text-sidebar-foreground" />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredNavItems.map((item) => {
                const href = userRole ? item.getHref(userRole) : "#";
                const isActive = pathname === href || pathname.startsWith(href + "/");
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        "w-full justify-start gap-3 px-3 py-2.5 transition-all duration-200",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      <Link href={href}>
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="text-xs text-muted-foreground text-center">© 2024 FinCollect</div>
      </SidebarFooter>
    </Sidebar>
  );
}

// Wrapper component pour inclure le provider
export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="flex items-center p-4 lg:hidden">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}

// Export de compatibilité pour les anciens imports
export { AppSidebar as Sidebar };
