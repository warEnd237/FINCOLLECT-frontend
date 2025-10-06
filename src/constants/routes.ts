/**
 * Application routes - Updated for (app) router structure
 */
export const ROUTES = {
  // Public routes
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",

  // Super Admin routes
  SUPER_ADMIN: {
    DASHBOARD: "/dashboard/super_admin",
    USERS: "/users/super_admin",
    DEPARTMENTS: "/departments/super_admin",
    REPORTS: "/reports/super_admin",
    ANALYTICS: "/analytics/super_admin",
    SETTINGS: "/settings/super_admin",
  },

  // Admin routes
  ADMIN: {
    DASHBOARD: "/dashboard/admin",
    USERS: "/users/admin",
    DEPARTMENTS: "/departments/admin",
    CONTACTS: "/contacts/admin",
    REPORTS: "/reports/admin",
    SETTINGS: "/settings/admin",
  },

  // Agent routes
  AGENT: {
    DASHBOARD: "/dashboard/agent",
    TASKS: "/tasks/agent",
    CONTACTS: "/contacts/agent",
    PROFILE: "/settings/agent",
  },
} as const;

/**
 * Get dashboard route based on user role
 */
export function getDashboardRoute(role: string): string {
  switch (role) {
    case "super_admin":
      return ROUTES.SUPER_ADMIN.DASHBOARD;
    case "admin":
      return ROUTES.ADMIN.DASHBOARD;
    case "agent":
      return ROUTES.AGENT.DASHBOARD;
    default:
      return ROUTES.LOGIN;
  }
}
