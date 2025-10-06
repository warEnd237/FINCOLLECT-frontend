"use client";

import { Search, Bell } from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UserMenu } from "./user-menu";

/**
 * Header - Composant moderne avec shadcn/ui + design tokens
 *
 * ✅ Utilise shadcn/ui Button component
 * ✅ Applique tous les design tokens (spacing, fonts, colors, shadows)
 * ✅ Thème-aware avec les nouvelles variables CSS
 * ✅ Responsive design avec breakpoints modernes
 */
export function Header() {
  const { user } = useAuthStore();

  return (
    <header className="h-16 bg-background border-b border-border sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-4 font-sans">
        {/* Left section */}
        <div className="flex items-center gap-4">
          {/* Search bar - shadcn/ui Input */}
          <div className="hidden md:block min-w-[300px] max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-9 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Notifications - shadcn/ui Button */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs"
            >
              2
            </Badge>
            <span className="sr-only">Notifications</span>
          </Button>

          {/* User menu */}
          {user && <UserMenu user={user} />}
        </div>
      </div>
    </header>
  );
}
