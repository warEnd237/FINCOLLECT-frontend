/**
 * Application configuration
 */
export const APP_CONFIG = {
  name: "FinCollect",
  description: "Financial Collection Management System",
  version: "1.0.0",
} as const;

/**
 * API configuration
 */
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "/api/v1",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
} as const;

/**
 * Auth configuration
 */
export const AUTH_CONFIG = {
  tokenKey: "fincollect_token",
  refreshTokenKey: "fincollect_refresh_token",
  userKey: "fincollect_user",
} as const;

/**
 * Storage keys
 */
export const STORAGE_KEYS = {
  THEME: "fincollect_theme",
  SIDEBAR_COLLAPSED: "fincollect_sidebar_collapsed",
} as const;
