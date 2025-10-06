"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";

/**
 * Dashboard Router - Redirects to role-specific dashboard
 *
 * Routes users to their appropriate dashboard based on role:
 * - agent -> /dashboard/agent
 * - admin -> /dashboard/admin
 * - super_admin -> /dashboard/super_admin
 */
export default function DashboardPage() {
  const userRole = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (userRole) {
      switch (userRole) {
        case "agent":
          router.replace("/dashboard/agent");
          break;
        case "admin":
          router.replace("/dashboard/admin");
          break;
        case "super_admin":
          router.replace("/dashboard/super_admin");
          break;
        default:
          router.replace("/dashboard/agent");
      }
    }
  }, [userRole, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to your dashboard...</p>
      </div>
    </div>
  );
}
