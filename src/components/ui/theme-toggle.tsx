"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * ThemeToggle - Composant moderne compatible shadcn/ui
 *
 * Utilise next-themes avec data-theme attribute
 * Compatible avec le nouveau design system unifié
 * Animations smooth sans classes dark: conditionnelles
 * Support light/dark/system themes
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // S'assurer que le composant est monté côté client avant de rendre
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Éviter l'erreur d'hydratation en ne rendant rien côté serveur
  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="relative w-9 h-9 p-0">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  // Déterminer l'icône à afficher selon le thème actuel
  const getCurrentIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
      case "system":
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />;
      default:
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="relative w-9 h-9 p-0">
          {getCurrentIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <span>Light</span>
          </div>
          {theme === "light" && <span className="text-xs">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            <span>Dark</span>
          </div>
          {theme === "dark" && <span className="text-xs">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            <span>System</span>
          </div>
          {theme === "system" && <span className="text-xs">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
// Export both names for compatibility
export const ModeToggle = ThemeToggle;
