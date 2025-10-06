"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";

/**
 * Users Router - Redirects to role-specific users page
 *
 * Available for: Admin, Super Admin
 * Routes: /users/admin, /users/super_admin
 */
export default function UsersPage() {
  const userRole = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (userRole) {
      switch (userRole) {
        case "admin":
          router.replace("/users/admin");
          break;
        case "super_admin":
          router.replace("/users/super_admin");
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
        <p className="text-muted-foreground">Redirecting to users management...</p>
      </div>
    </div>
  );
}
