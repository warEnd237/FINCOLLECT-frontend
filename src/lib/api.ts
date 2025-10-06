import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { API_CONFIG, AUTH_CONFIG } from "@/constants/config";
import type { ApiError, ApiResponse } from "@/types/api.types";

/**
 * Axios instance with base configuration
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: API_CONFIG.headers,
});

/**
 * Request interceptor to add auth token
 */
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem(AUTH_CONFIG.tokenKey);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor to handle errors and refresh token
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError<ApiError>) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // Handle 401 Unauthorized
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh token
        const refreshToken = localStorage.getItem(AUTH_CONFIG.refreshTokenKey);

        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // Call refresh endpoint (mock for now)
        const { data } = await axios.post(`${API_CONFIG.baseURL}/auth/refresh`, {
          refreshToken,
        });

        // Store new tokens
        localStorage.setItem(AUTH_CONFIG.tokenKey, data.accessToken);
        localStorage.setItem(AUTH_CONFIG.refreshTokenKey, data.refreshToken);

        // Retry original request
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh failed, logout user
        localStorage.removeItem(AUTH_CONFIG.tokenKey);
        localStorage.removeItem(AUTH_CONFIG.refreshTokenKey);
        localStorage.removeItem(AUTH_CONFIG.userKey);

        // Redirect to login
        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

/**
 * Generic API request wrapper
 */
export async function apiRequest<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient.request<ApiResponse<T>>(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiError = error.response?.data as ApiError;
      throw (
        apiError || {
          message: error.message,
          code: "NETWORK_ERROR",
          statusCode: error.response?.status || 500,
        }
      );
    }
    throw error;
  }
}

/**
 * HTTP methods
 */
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    apiRequest<T>({ ...config, method: "GET", url }),

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiRequest<T>({ ...config, method: "POST", url, data }),

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiRequest<T>({ ...config, method: "PUT", url, data }),

  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiRequest<T>({ ...config, method: "PATCH", url, data }),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    apiRequest<T>({ ...config, method: "DELETE", url }),
};
