"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { tokens } from "@/lib/design-tokens";

export default function TestTailwind() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }
  return (
    <div className="min-h-screen bg-background p-8 transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-2">Test des Thèmes Tailwind CSS v4</h1>
        <p className="text-muted-foreground mb-4">
          Testez les différences entre Light, Dark et System mode
        </p>
        <div className="mb-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm text-primary font-medium">
            🎯 <strong>Thème sélectionné :</strong>{" "}
            {theme ? theme.charAt(0).toUpperCase() + theme.slice(1) : "Loading..."}
            {theme === "system" && resolvedTheme && (
              <span className="ml-2 text-muted-foreground">
                (Effectif: {resolvedTheme.charAt(0).toUpperCase() + resolvedTheme.slice(1)})
              </span>
            )}
          </p>
        </div>

        {/* Démonstration des nouveaux tokens */}
        <div className="mb-8 p-6 bg-card rounded-lg border shadow-card">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">
            🎆 Nouveau Design System Unifié
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-primary text-primary-foreground rounded-md text-center">
              Primary
            </div>
            <div className="p-3 bg-secondary text-secondary-foreground rounded-md text-center">
              Secondary
            </div>
            <div className="p-3 bg-muted text-muted-foreground rounded-md text-center">Muted</div>
            <div className="p-3 bg-accent text-accent-foreground rounded-md text-center">
              Accent
            </div>
          </div>
          <p className="text-muted-foreground mt-4 text-xs">
            ✅ Compatible shadcn/ui • ✅ Radix UI • ✅ CSS pur • ✅ Tailwind v4
          </p>
        </div>

        {/* Test des design tokens */}
        <div className="mb-8 p-6 bg-card rounded-lg border shadow-card">
          <h3
            className="text-lg font-semibold text-card-foreground mb-4"
            style={{ fontFamily: tokens.fonts.heading }}
          >
            📦 Test des Design Tokens JavaScript
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div
              className="p-3 rounded-md text-center"
              style={{
                backgroundColor: tokens.colors.primary,
                color: tokens.colors.primaryForeground,
                fontFamily: tokens.fonts.sans,
                borderRadius: tokens.radius.md,
              }}
            >
              Primary Token
            </div>
            <div
              className="p-3 rounded-md text-center"
              style={{
                backgroundColor: tokens.colors.secondary,
                color: tokens.colors.secondaryForeground,
                boxShadow: tokens.shadows.sm,
              }}
            >
              Secondary Token
            </div>
            <div
              className="p-3 rounded-md text-center"
              style={{
                backgroundColor: tokens.colors.muted,
                color: tokens.colors.mutedForeground,
                borderRadius: tokens.radius.lg,
              }}
            >
              Muted Token
            </div>
            <div
              className="p-3 rounded-md text-center"
              style={{
                backgroundColor: tokens.colors.accent,
                color: tokens.colors.accentForeground,
                boxShadow: tokens.shadows.card,
              }}
            >
              Accent Token
            </div>
          </div>
          <p className="text-muted-foreground mt-4 text-xs">
            ✅ Tokens CSS accessibles en JavaScript avec auto-completion TypeScript
          </p>
        </div>

        {/* Background test modifié */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-card rounded-lg border shadow-soft">
            <h3
              className="text-lg font-semibold text-card-foreground mb-4"
              style={{ fontFamily: tokens.fonts.heading }}
            >
              🎨 Couleurs shadcn/ui
            </h3>
            <div className="space-y-2 text-sm">
              <div className="text-foreground">Foreground: Texte principal</div>
              <div className="text-muted-foreground">Muted: Texte secondaire</div>
              <div className="text-primary">Primary: Couleur primaire</div>
              <div className="text-secondary-foreground">Secondary: Couleur secondaire</div>
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg border shadow-soft">
            <h3
              className="text-lg font-semibold text-primary mb-4"
              style={{ fontFamily: tokens.fonts.heading }}
            >
              🚀 Couleurs Custom FinCollect
            </h3>
            <div className="space-y-3">
              <div
                className="w-full h-3 rounded-full"
                style={{ backgroundColor: tokens.colors.brand.vivid }}
              ></div>
              <div className="w-full h-3 bg-brand-vivid rounded-full"></div>
              <div className="w-full h-3 bg-brand-neon rounded-full"></div>
              <div className="w-full h-3 bg-brand-rich rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Buttons test avec shadcn/ui */}
        <div className="mb-8 p-6 bg-card rounded-lg border shadow-card">
          <h3
            className="text-2xl font-semibold text-card-foreground mb-4"
            style={{ fontFamily: tokens.fonts.heading }}
          >
            🔲 Test des Boutons shadcn/ui
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="default" size="lg">
              Default
            </Button>
            <Button variant="secondary" size="lg">
              Secondary
            </Button>
            <Button variant="outline" size="lg">
              Outline
            </Button>
            <Button variant="destructive" size="lg">
              Destructive
            </Button>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            ✅ Boutons shadcn/ui avec thèmes automatiques
          </p>
        </div>

        {/* Cards test avec shadcn/ui */}
        <div className="mb-8">
          <h3
            className="text-2xl font-semibold text-foreground mb-4"
            style={{ fontFamily: tokens.fonts.heading }}
          >
            🃏 Test des Cards shadcn/ui
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-card rounded-lg border shadow-card">
              <h4 className="font-semibold text-card-foreground mb-2">Card Moderne</h4>
              <p className="text-muted-foreground text-sm">
                Cette carte utilise les variables shadcn/ui qui s&apos;adaptent automatiquement aux
                thèmes.
              </p>
            </div>

            <div className="p-6 bg-secondary rounded-lg border">
              <h4 className="font-semibold text-secondary-foreground mb-2">Card Secondary</h4>
              <p className="text-muted-foreground text-sm">
                Cette carte utilise bg-secondary avec adaptation automatique des couleurs.
              </p>
            </div>

            <div
              className="p-6 rounded-lg text-white"
              style={{
                background: `linear-gradient(135deg, ${tokens.colors.primary}, ${tokens.colors.brand.vivid})`,
              }}
            >
              <h4 className="font-semibold mb-2">Card Custom</h4>
              <p className="text-white/90 text-sm">
                Cette carte utilise les design tokens JavaScript pour un gradient custom.
              </p>
            </div>
          </div>
        </div>

        {/* Informations finales */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg border">
          <p className="text-foreground text-center">
            <strong>🎆 Architecture Moderne Complète :</strong> shadcn/ui + next-themes + design
            tokens. Utilisez le bouton de thème en haut à droite pour tester light/dark/system.
            <span className="text-muted-foreground">
              Plus de classes conditionnelles dark:* nécessaires !
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
