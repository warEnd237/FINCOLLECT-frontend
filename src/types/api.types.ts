/**
 * Standard API response wrapper
 */
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}

/**
 * API error response
 */
export interface ApiError {
  message: string;
  code: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
