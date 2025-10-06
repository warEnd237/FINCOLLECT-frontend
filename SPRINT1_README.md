# Sprint 1 - Foundations & Auth UI

## ✅ Completed Features

### US1.1 — Root Layout & UI Shell
- ✅ RootLayout with QueryClientProvider, ToastProvider, ThemeProvider
- ✅ Responsive Sidebar (desktop + mobile drawer)
- ✅ Topbar with search, theme toggle, notifications, and profile dropdown
- ✅ Footer component
- ✅ Full responsive design (mobile → desktop)

### US1.2 — Auth UI (Login/Logout)
- ✅ Login page with form validation (email/password)
- ✅ Mock API for authentication (`/src/lib/mock-api.ts`)
- ✅ Token storage (localStorage)
- ✅ Logout functionality with token cleanup
- ✅ Route protection middleware
- ✅ Error handling with toast notifications
- ✅ Unit tests for login form

### US1.3 — Theming / Tokens Integration
- ✅ `globals.css` with all design tokens as CSS variables
- ✅ Tailwind config mapped to design tokens
- ✅ Light/Dark theme toggle with Zustand
- ✅ Theme persistence in localStorage
- ✅ Smooth theme transitions

### US1.4 — Setup QA Minimal
- ✅ Vitest configuration for unit tests
- ✅ Sample test for Button component
- ✅ CI-ready structure (lint + test + build)

## 🏗️ Architecture Overview

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   └── layout.tsx            # Auth layout
│   ├── (dashboard)/
│   │   ├── super-admin/
│   │   │   └── dashboard/
│   │   │       └── page.tsx      # Super Admin dashboard
│   │   ├── admin/
│   │   │   └── dashboard/
│   │   │       └── page.tsx      # Admin dashboard
│   │   ├── agent/
│   │   │   └── dashboard/
│   │   │       └── page.tsx      # Agent dashboard
│   │   └── layout.tsx            # Dashboard layout with Header/Sidebar/Footer
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home/redirect page
│   └── globals.css               # Global styles + CSS variables
├── components/
│   ├── layout/
│   │   ├── header.tsx            # Top navigation bar
│   │   ├── sidebar.tsx           # Side navigation (responsive)
│   │   ├── footer.tsx            # Footer component
│   │   └── user-menu.tsx         # User dropdown menu
│   └── ui/
│       ├── button.tsx            # Button component with variants
│       ├── input.tsx             # Input component with validation
│       └── toast.tsx             # Toast notification component
├── providers/
│   ├── query-provider.tsx        # React Query provider
│   ├── toast-provider.tsx        # Toast context provider
│   └── theme-provider.tsx        # Theme provider
├── store/
│   ├── auth.store.ts             # Auth state (Zustand)
│   └── ui.store.ts               # UI state (theme, sidebar)
├── hooks/
│   └── use-auth.ts               # Auth hooks (login, logout, user)
├── lib/
│   ├── api.ts                    # Axios client with interceptors
│   ├── mock-api.ts               # Mock API for development
│   └── utils.ts                  # Utility functions
├── types/
│   ├── auth.types.ts             # Auth-related types
│   └── api.types.ts              # API response types
├── constants/
│   ├── routes.ts                 # Application routes
│   └── config.ts                 # App configuration
└── middleware.ts                 # Next.js middleware for auth
```

## 🔑 Demo Credentials

```
Super Admin:
Email: superadmin@fincollect.com
Password: admin123

Admin:
Email: admin@fincollect.com
Password: admin123

Agent:
Email: agent@fincollect.com
Password: agent123
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

4. **Login:**
   Use one of the demo credentials above

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run linter
pnpm lint

# Build for production
pnpm build
```

## 🎨 Design System

All design tokens are defined in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - CSS variables

### Color Palette
- **Brand:** Primary purple tones (#5e3fbe, #884dff, #9747ff)
- **Neutrals:** Grays from #000000 to #fafbfc
- **Feedback:** Success (#0bb783), Warning (#ffa800), Error (#b22234)
- **Teal/Cyan:** Accent colors for UI elements

### Typography
- **Heading Font:** Barlow (300-700 weights)
- **Body Font:** REM (400-700 weights)

## 📱 Responsive Design

- **Mobile:** < 768px (hamburger menu, stacked layout)
- **Tablet:** 768px - 1024px (collapsible sidebar)
- **Desktop:** > 1024px (full sidebar, optimized layout)

## 🔐 Authentication Flow

1. User enters credentials on `/auth/login`
2. Mock API validates credentials
3. On success:
   - Store user data in Zustand
   - Store tokens in localStorage
   - Redirect to role-based dashboard
4. On protected routes:
   - Middleware checks for token
   - Redirects to login if not authenticated

## 🎯 Role-Based Routing

- **Super Admin:** `/super-admin/*`
- **Admin:** `/admin/*`
- **Agent:** `/agent/*`

Each role has its own dashboard and feature set.

## 🔄 State Management

- **React Query:** Server state, API calls, caching
- **Zustand:** Client state (auth, UI, theme)
- **localStorage:** Persistence (tokens, user, theme, sidebar state)

## 📦 Mock API

All API calls are currently mocked in `src/lib/mock-api.ts`. When real APIs are ready:

1. Update `API_CONFIG.baseURL` in `src/constants/config.ts`
2. Replace mock functions with real API calls
3. Update types if needed

## ✨ Features Ready for Integration

- User authentication
- Role-based access control
- Responsive layout
- Theme switching
- Toast notifications
- Form validation
- Error handling
- Loading states

## 🚧 Next Steps (Sprint 2+)

- Add Storybook stories for components
- Implement E2E tests with Playwright
- Add more dashboard widgets
- Integrate real API endpoints
- Add user management pages
- Implement data tables with pagination
- Add charts and analytics

## 📝 Notes

- All components follow KISS and DRY principles
- Responsive design using Tailwind breakpoints
- Accessibility features included (ARIA labels, keyboard navigation)
- Dark mode fully supported
- Ready for CI/CD integration
