import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { UserRole } from "@/types/auth.types";

// Public routes that don't require authentication
const publicRoutes = ["/login", "/signup", "/forgot-password"];

// Role-based route access control
const roleRoutes: Record<UserRole, string[]> = {
  super_admin: [
    "/dashboard/super_admin",
    "/users/super_admin",
    "/departments/super_admin",
    "/reports/super_admin",
    "/analytics/super_admin",
    "/settings/super_admin",
  ],
  admin: [
    "/dashboard/admin",
    "/users/admin",
    "/departments/admin",
    "/contacts/admin",
    "/reports/admin",
    "/settings/admin",
  ],
  agent: ["/dashboard/agent", "/tasks/agent", "/contacts/agent", "/settings/agent"],
};

// Function to get user role from token
function getUserRoleFromToken(token: string): UserRole | null {
  try {
    // Extract user ID from token format: mock_token_{userId}_{timestamp}
    const parts = token.split("_");
    if (parts.length >= 3) {
      const userId = parts[2];
      // Map user IDs to roles based on our mock data
      switch (userId) {
        case "1": // superadmin
          return "super_admin" as UserRole;
        case "2": // admin
          return "admin" as UserRole;
        case "3": // agent
          return "agent" as UserRole;
        default:
          return null;
      }
    }
  } catch {
    // If token parsing fails, return null
  }
  return null;
}

// Function to get dashboard route based on user role from token
function getDashboardRouteFromToken(token: string): string {
  const role = getUserRoleFromToken(token);
  switch (role) {
    case "super_admin":
      return "/dashboard/super_admin";
    case "admin":
      return "/dashboard/admin";
    case "agent":
      return "/dashboard/agent";
    default:
      return "/dashboard/agent";
  }
}

// Function to check if user has access to the requested route
function hasRouteAccess(token: string, pathname: string): boolean {
  const userRole = getUserRoleFromToken(token);
  if (!userRole) return false;

  // Check if the route is in the allowed routes for this role
  const allowedRoutes = roleRoutes[userRole];

  // Check direct route match or parent route match
  return allowedRoutes.some(
    (route) =>
      pathname === route ||
      pathname.startsWith(route + "/") ||
      pathname === "/dashboard" ||
      pathname === "/users" ||
      pathname === "/departments" ||
      pathname === "/tasks" ||
      pathname === "/contacts" ||
      pathname === "/reports" ||
      pathname === "/analytics" ||
      pathname === "/settings"
  );
}

// Role-based route access (for future use)
// const roleRoutes = {
//   super_admin: ["/super-admin"],
//   admin: ["/admin"],
//   agent: ["/agent"],
// };

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("fincollect_token");

  // Allow static files and API routes
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  // Allow public routes mais pas si on a un token valide
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    // Si on a un token et qu'on essaie d'accéder au login, rediriger vers dashboard approprié
    if (token?.value && pathname === "/login") {
      const dashboardRoute = getDashboardRouteFromToken(token.value);
      return NextResponse.redirect(new URL(dashboardRoute, request.url));
    }
    return NextResponse.next();
  }

  // If no token and trying to access protected route, redirect to login
  if (!token?.value && pathname !== "/" && !publicRoutes.includes(pathname)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If token exists and user is on homepage, redirect to appropriate dashboard
  if (token?.value && pathname === "/") {
    const dashboardRoute = getDashboardRouteFromToken(token.value);
    return NextResponse.redirect(new URL(dashboardRoute, request.url));
  }

  // SECURITY: Check role-based access for protected routes
  if (token?.value && !hasRouteAccess(token.value, pathname)) {
    // User doesn't have access to this route, redirect to their appropriate dashboard
    const dashboardRoute = getDashboardRouteFromToken(token.value);
    const userRole = getUserRoleFromToken(token.value);

    console.warn(
      `🛡️ SECURITY: User with role "${userRole}" attempted to access unauthorized route: ${pathname}`
    );

    return NextResponse.redirect(new URL(dashboardRoute, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*|public).*)",
  ],
};
