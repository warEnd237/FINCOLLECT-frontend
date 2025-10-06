"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";

/**
 * Tasks Router - Redirects to role-specific tasks page
 *
 * Available for: Agent only
 * Routes: /tasks/agent
 */
export default function TasksPage() {
  const userRole = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (userRole) {
      if (userRole === "agent") {
        router.replace("/tasks/agent");
      } else {
        // Redirect non-agents to dashboard
        router.replace("/dashboard");
      }
    }
  }, [userRole, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  );
}
