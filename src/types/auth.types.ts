/**
 * User roles in the system
 */

export enum UserRole {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  AGENT = "agent",
}

/**
 * User information
 */
export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  avatar?: string;
}

/**
 * Authentication tokens
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

/**
 * Login request payload
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * Login response from API
 */
export interface LoginResponse {
  user: User;
  tokens: AuthTokens;
}

/**
 * Auth state
 */
export interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
