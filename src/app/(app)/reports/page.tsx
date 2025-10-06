"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";

/**
 * Reports Router - Redirects to role-specific reports page
 *
 * Available for: Admin, Super Admin
 * Routes: /reports/admin, /reports/super_admin
 */
export default function ReportsPage() {
  const userRole = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (userRole) {
      switch (userRole) {
        case "admin":
          router.replace("/reports/admin");
          break;
        case "super_admin":
          router.replace("/reports/super_admin");
          break;
        default:
          // Redirect unauthorized users to dashboard
          router.replace("/dashboard");
      }
    }
  }, [userRole, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to reports...</p>
      </div>
    </div>
  );
}
