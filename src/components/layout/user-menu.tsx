"use client";

import { ChevronDown, User as UserIcon, Settings, LogOut } from "lucide-react";
import { useLogout } from "@/hooks/use-auth";
import type { User } from "@/types/auth.types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { tokens } from "@/lib/design-tokens";

interface UserMenuProps {
  user: User;
}

/**
 * UserMenu - Version moderne avec shadcn/ui DropdownMenu
 *
 * ✅ shadcn/ui DropdownMenu + Avatar components
 * ✅ Design tokens pour espacement et typographie
 * ✅ Thème-aware avec variables CSS unifiées
 * ✅ Accessible avec focus management
 */
export function UserMenu({ user }: UserMenuProps) {
  const { mutate: logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 h-auto p-2 hover:bg-accent"
          style={{ fontFamily: tokens.fonts.sans }}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.fullName} />
            <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
              {user.fullName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="hidden lg:block text-left">
            <p className="text-sm font-medium text-foreground">{user.fullName}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {user.role.replace("_", " ")}
            </p>
          </div>

          <ChevronDown className="hidden lg:block h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56"
        align="end"
        style={{
          fontFamily: tokens.fonts.sans,
          boxShadow: tokens.shadows.lg,
        }}
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.fullName}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
            <UserIcon className="h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-2 cursor-pointer">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isPending}
          className="text-destructive focus:text-destructive cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          <span>{isPending ? "Logging out..." : "Logout"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
