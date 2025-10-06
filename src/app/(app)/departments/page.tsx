"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";

/**
 * Departments Router - Redirects to role-specific departments page
 *
 * Available for: Admin, Super Admin
 * Routes: /departments/admin, /departments/super_admin
 */
export default function DepartmentsPage() {
  const userRole = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (userRole) {
      switch (userRole) {
        case "admin":
          router.replace("/departments/admin");
          break;
        case "super_admin":
          router.replace("/departments/super_admin");
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
        <p className="text-muted-foreground">Redirecting to departments management...</p>
      </div>
    </div>
  );
}
