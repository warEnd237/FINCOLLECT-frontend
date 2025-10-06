import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, AuthTokens } from "@/types/auth.types";
import { AUTH_CONFIG } from "@/constants/config";

interface AuthStore {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;

  // Actions
  setUser: (user: User | null) => void;
  setTokens: (tokens: AuthTokens | null) => void;
  setLoading: (loading: boolean) => void;
  login: (user: User, tokens: AuthTokens) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      tokens: null,
      isAuthenticated: false,
      isLoading: false,
      isInitialized: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),

      setTokens: (tokens) => set({ tokens }),

      setLoading: (isLoading) => set({ isLoading }),

      login: (user, tokens) => {
        const expirationTime = Date.now() + 24 * 60 * 60 * 1000; // 24h from now

        // Store tokens in localStorage avec timestamp d'expiration
        localStorage.setItem(AUTH_CONFIG.tokenKey, tokens.accessToken);
        localStorage.setItem(AUTH_CONFIG.refreshTokenKey, tokens.refreshToken);
        localStorage.setItem(AUTH_CONFIG.userKey, JSON.stringify(user));
        localStorage.setItem("auth_expiration", expirationTime.toString());

        // Also store in cookies for middleware access (24h)
        document.cookie = `fincollect_token=${tokens.accessToken}; path=/; max-age=86400; SameSite=Lax; Secure=${window.location.protocol === "https:"}`;

        set({
          user,
          tokens,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      logout: () => {
        // Clear localStorage
        localStorage.removeItem(AUTH_CONFIG.tokenKey);
        localStorage.removeItem(AUTH_CONFIG.refreshTokenKey);
        localStorage.removeItem(AUTH_CONFIG.userKey);
        localStorage.removeItem("auth_expiration");

        // Clear cookies
        document.cookie = "fincollect_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        set({
          user: null,
          tokens: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      // Initialize from localStorage
      initialize: () => {
        if (typeof window === "undefined") return;

        try {
          const userStr = localStorage.getItem(AUTH_CONFIG.userKey);
          const accessToken = localStorage.getItem(AUTH_CONFIG.tokenKey);
          const refreshToken = localStorage.getItem(AUTH_CONFIG.refreshTokenKey);
          const expirationStr = localStorage.getItem("auth_expiration");

          if (userStr && accessToken && refreshToken && expirationStr) {
            const expiration = parseInt(expirationStr);
            const now = Date.now();

            // Vérifier si le token n'a pas expiré
            if (now < expiration) {
              const user = JSON.parse(userStr);

              // S'assurer que le cookie est défini
              document.cookie = `fincollect_token=${accessToken}; path=/; max-age=86400; SameSite=Lax`;

              set({
                user,
                tokens: { accessToken, refreshToken },
                isAuthenticated: true,
                isLoading: false,
                isInitialized: true,
              });
            } else {
              // Token expiré, nettoyer le localStorage
              localStorage.removeItem(AUTH_CONFIG.tokenKey);
              localStorage.removeItem(AUTH_CONFIG.refreshTokenKey);
              localStorage.removeItem(AUTH_CONFIG.userKey);
              localStorage.removeItem("auth_expiration");
              document.cookie = "fincollect_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

              set({
                user: null,
                tokens: null,
                isAuthenticated: false,
                isLoading: false,
                isInitialized: true,
              });
            }
          } else {
            set({ isInitialized: true });
          }
        } catch (error) {
          // En cas d'erreur, nettoyer et déconnecter
          localStorage.removeItem(AUTH_CONFIG.tokenKey);
          localStorage.removeItem(AUTH_CONFIG.refreshTokenKey);
          localStorage.removeItem(AUTH_CONFIG.userKey);
          localStorage.removeItem("auth_expiration");
          set({ isInitialized: true });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
