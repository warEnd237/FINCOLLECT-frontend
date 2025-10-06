"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useIsAuthenticated, useAuthInitialized } from "@/hooks/use-auth";
import { Header } from "@/components/layout/header";
import { SidebarLayout } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";

/**
 * App Layout - Main layout for all authenticated pages
 *
 * This layout wraps ALL post-authentication pages:
 * - dashboard, users, departments, tasks, contacts, reports, analytics, settings
 *
 * Contains: Header + Sidebar + Footer (Router-Outlet pattern)
 * Authentication: Required for all child pages
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated();
  const isInitialized = useAuthInitialized();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (isInitialized && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isInitialized, router]);

  // Show loading while checking authentication
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render anything if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  // Main layout with sidebar - applies to ALL authenticated pages
  return (
    <div className="min-h-screen bg-background">
      <SidebarLayout>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-6 lg:p-8">
            {children} {/* ← All authenticated pages render here (router-outlet) */}
          </main>
          <Footer />
        </div>
      </SidebarLayout>
    </div>
  );
}
