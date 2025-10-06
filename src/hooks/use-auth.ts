import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { mockLogin, mockLogout, mockGetCurrentUser } from "@/lib/mock-api";
import type { User, UserRole } from "@/types/auth.types";
import { getDashboardRoute } from "@/constants/routes";
import { AUTH_CONFIG } from "@/constants/config";

/**
 * Hook for login mutation
 */
export function useLogin() {
  const router = useRouter();
  const { login: storeLogin } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mockLogin,
    onSuccess: (response) => {
      // Store user and tokens
      storeLogin(response.data.user, response.data.tokens);

      // Invalidate and refetch user query
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });

      // Redirect to appropriate dashboard with a small delay to ensure state is updated
      const dashboardRoute = getDashboardRoute(response.data.user.role);
      setTimeout(() => {
        router.push(dashboardRoute);
      }, 100);
    },
  });
}

/**
 * Hook for logout mutation
 */
export function useLogout() {
  const router = useRouter();
  const { logout: storeLogout } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mockLogout,
    onSuccess: () => {
      // Clear store
      storeLogout();

      // Clear all queries
      queryClient.clear();

      // Redirect to login
      router.push("/login");
    },
  });
}

/**
 * Hook to get current user
 */
export function useCurrentUser() {
  const { user, isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const token = localStorage.getItem(AUTH_CONFIG.tokenKey);
      if (!token) {
        throw new Error("No token found");
      }
      const response = await mockGetCurrentUser(token);
      return response.data;
    },
    enabled: isAuthenticated && !!user,
    initialData: user || undefined,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Hook to check if user is authenticated
 */
export function useIsAuthenticated() {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated;
}

/**
 * Hook to check if auth is initialized (prevents premature redirects)
 */
export function useAuthInitialized() {
  const { isInitialized } = useAuthStore();
  return isInitialized;
}

/**
 * Hook to get current user role
 */
export function useUserRole() {
  const { user } = useAuthStore();
  return user?.role || null;
}
