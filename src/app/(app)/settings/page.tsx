"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";

/**
 * Settings Router - Redirects to role-specific settings page
 *
 * Available for: All roles
 * Routes: /settings/agent, /settings/admin, /settings/super_admin
 */
export default function SettingsPage() {
  const userRole = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (userRole) {
      switch (userRole) {
        case "agent":
          router.replace("/settings/agent");
          break;
        case "admin":
          router.replace("/settings/admin");
          break;
        case "super_admin":
          router.replace("/settings/super_admin");
          break;
        default:
          router.replace("/dashboard");
      }
    }
  }, [userRole, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to settings...</p>
      </div>
    </div>
  );
}
