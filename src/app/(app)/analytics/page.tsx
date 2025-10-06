"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";

/**
 * Analytics Router - Redirects to role-specific analytics page
 *
 * Available for: Super Admin only
 * Routes: /analytics/super_admin
 */
export default function AnalyticsPage() {
  const userRole = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (userRole) {
      if (userRole === "super_admin") {
        router.replace("/analytics/super_admin");
      } else {
        // Redirect unauthorized users to dashboard
        router.replace("/dashboard");
      }
    }
  }, [userRole, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to analytics...</p>
      </div>
    </div>
  );
}
