"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";
import { getDashboardRoute } from "@/constants/routes";
import type { UserRole } from "@/types/auth.types";

interface RoleGuardProps {
  children: React.ReactNode;
  requiredRoles: UserRole[];
  redirectOnUnauthorized?: boolean;
  loadingComponent?: React.ReactNode;
}

/**
 * Composant de protection basé sur les rôles
 *
 * Bloque l'accès aux utilisateurs non autorisés et les redirige
 * vers leur dashboard approprié
 */
export function RoleGuard({
  children,
  requiredRoles,
  redirectOnUnauthorized = true,
  loadingComponent,
}: RoleGuardProps) {
  const userRole = useUserRole();
  const router = useRouter();

  const hasAccess = userRole && requiredRoles.includes(userRole);

  useEffect(() => {
    if (userRole && !hasAccess && redirectOnUnauthorized) {
      // Log security warning
      console.warn(
        `🛡️ SECURITY: User with role "${userRole}" attempted to access page requiring roles: ${requiredRoles.join(", ")}`
      );

      // Redirect to appropriate dashboard
      const dashboardRoute = getDashboardRoute(userRole);
      router.replace(dashboardRoute);
    }
  }, [userRole, hasAccess, redirectOnUnauthorized, requiredRoles, router]);

  // Show loading while checking role
  if (!userRole) {
    return (
      loadingComponent || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Verifying permissions...</p>
          </div>
        </div>
      )
    );
  }

  // Don't render if no access
  if (!hasAccess) {
    return null;
  }

  return <>{children}</>;
}

/**
 * Guard pour Super Admin uniquement
 */
export function SuperAdminGuard({ children }: { children: React.ReactNode }) {
  return <RoleGuard requiredRoles={["super_admin" as UserRole]}>{children}</RoleGuard>;
}

/**
 * Guard pour Admin + Super Admin
 */
export function AdminGuard({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard requiredRoles={["admin" as UserRole, "super_admin" as UserRole]}>
      {children}
    </RoleGuard>
  );
}

/**
 * Guard pour Agent uniquement
 */
export function AgentGuard({ children }: { children: React.ReactNode }) {
  return <RoleGuard requiredRoles={["agent" as UserRole]}>{children}</RoleGuard>;
}
