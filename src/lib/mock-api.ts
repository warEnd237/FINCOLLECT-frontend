import type { LoginRequest, LoginResponse, User, UserRole } from "@/types/auth.types";
import type { ApiResponse } from "@/types/api.types";

/**
 * Mock users database
 */
const MOCK_USERS: Record<string, { password: string; user: User }> = {
  "superadmin@fincollect.com": {
    password: "admin123",
    user: {
      id: "1",
      email: "superadmin@fincollect.com",
      fullName: "John Doe",
      role: "super_admin" as UserRole,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
  },
  "admin@fincollect.com": {
    password: "admin123",
    user: {
      id: "2",
      email: "admin@fincollect.com",
      fullName: "Jane Smith",
      role: "admin" as UserRole,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
  },
  "agent@fincollect.com": {
    password: "agent123",
    user: {
      id: "3",
      email: "agent@fincollect.com",
      fullName: "Bob Johnson",
      role: "agent" as UserRole,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    },
  },
};

/**
 * Generate mock JWT token
 */
function generateMockToken(userId: string): string {
  return `mock_token_${userId}_${Date.now()}`;
}

/**
 * Simulate API delay
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Mock login API call
 */
export async function mockLogin(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
  // Simulate network delay
  await delay(800);

  const userRecord = MOCK_USERS[credentials.email];

  if (!userRecord || userRecord.password !== credentials.password) {
    throw {
      message: "Invalid email or password",
      code: "INVALID_CREDENTIALS",
      statusCode: 401,
    };
  }

  const accessToken = generateMockToken(userRecord.user.id);
  const refreshToken = generateMockToken(`${userRecord.user.id}_refresh`);

  return {
    success: true,
    message: "Login successful",
    data: {
      user: userRecord.user,
      tokens: {
        accessToken,
        refreshToken,
      },
    },
  };
}

/**
 * Mock logout API call
 */
export async function mockLogout(): Promise<ApiResponse<null>> {
  await delay(300);

  return {
    success: true,
    message: "Logged out successfully",
    data: null,
  };
}

/**
 * Mock refresh token API call
 */
export async function mockRefreshToken(
  refreshToken: string
): Promise<ApiResponse<{ accessToken: string; refreshToken: string }>> {
  await delay(500);

  // Extract user ID from refresh token
  const userId = refreshToken.split("_")[2];

  if (!userId) {
    throw {
      message: "Invalid refresh token",
      code: "INVALID_TOKEN",
      statusCode: 401,
    };
  }

  return {
    success: true,
    data: {
      accessToken: generateMockToken(userId),
      refreshToken: generateMockToken(`${userId}_refresh`),
    },
  };
}

/**
 * Mock get current user API call
 */
export async function mockGetCurrentUser(token: string): Promise<ApiResponse<User>> {
  await delay(400);

  // Extract user ID from token
  const tokenParts = token.split("_");

  if (tokenParts.length < 3) {
    throw {
      message: "Invalid token format",
      code: "INVALID_TOKEN",
      statusCode: 401,
    };
  }

  const userId = tokenParts[2];

  // Find user by ID
  const userRecord = Object.values(MOCK_USERS).find((u) => u.user.id === userId);

  if (!userRecord) {
    throw {
      message: "User not found",
      code: "USER_NOT_FOUND",
      statusCode: 404,
    };
  }

  return {
    success: true,
    data: userRecord.user,
  };
}
