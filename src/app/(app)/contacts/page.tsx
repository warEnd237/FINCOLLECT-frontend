"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";

/**
 * Contacts Router - Redirects to role-specific contacts page
 *
 * Available for: Agent, Admin
 * Routes: /contacts/agent, /contacts/admin
 */
export default function ContactsPage() {
  const userRole = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (userRole) {
      switch (userRole) {
        case "agent":
          router.replace("/contacts/agent");
          break;
        case "admin":
          router.replace("/contacts/admin");
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
        <p className="text-muted-foreground">Redirecting to contacts management...</p>
      </div>
    </div>
  );
}
