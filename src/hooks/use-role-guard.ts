import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/hooks/use-auth";
import { getDashboardRoute } from "@/constants/routes";
import type { UserRole } from "@/types/auth.types";

/**
 * Hook pour protéger une page selon le rôle utilisateur
 *
 * @param requiredRoles - Rôles autorisés à accéder à cette page
 * @param redirectOnUnauthorized - Si true, redirige automatiquement vers le dashboard approprié
 */
export function useRoleGuard(requiredRoles: UserRole[], redirectOnUnauthorized: boolean = true) {
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

  return {
    hasAccess,
    userRole,
    isLoading: !userRole,
  };
}

/**
 * Hook spécialisé pour les pages Super Admin uniquement
 */
export function useSuperAdminGuard() {
  return useRoleGuard(["super_admin" as UserRole]);
}

/**
 * Hook spécialisé pour les pages Admin + Super Admin
 */
export function useAdminGuard() {
  return useRoleGuard(["admin" as UserRole, "super_admin" as UserRole]);
}

/**
 * Hook pour retourner directement les valeurs (compatible avec le pattern existant)
 */
export function useRoleAccess(requiredRoles: UserRole[]) {
  const userRole = useUserRole();
  const hasAccess = userRole && requiredRoles.includes(userRole);

  return {
    hasAccess,
    userRole,
    isLoading: !userRole,
  };
}

/**
 * Hook spécialisé pour les pages Agent uniquement
 */
export function useAgentGuard() {
  return useRoleGuard(["agent" as UserRole]);
}
