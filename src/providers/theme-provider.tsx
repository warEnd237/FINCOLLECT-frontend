"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

/**
 * ThemeProvider - Architecture moderne avec next-themes
 *
 * ✅ Utilise next-themes pour la gestion des thèmes
 * ✅ Support data-theme attribute (compatible shadcn/ui + Radix)
 * ✅ FOUC prevention automatique
 * ✅ Support système, light, dark
 * ✅ Persistance localStorage automatique
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="fincollect-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
