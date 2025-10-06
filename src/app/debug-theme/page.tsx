"use client";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tokens } from "@/lib/design-tokens";

export default function DebugTheme() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [htmlClasses, setHtmlClasses] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    setHtmlClasses(document.documentElement.className || "aucune classe");
  }, []);

  // Éviter l'erreur d'hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground">Debug Thème</h1>
            <ThemeToggle />
          </div>
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8 transition-colors duration-300">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: tokens.fonts.heading }}
          >
            Debug Thème Moderne
          </h1>
          <ThemeToggle />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>État next-themes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Thème sélectionné :</span>
              <Badge variant="outline">{theme || "undefined"}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Thème résolu :</span>
              <Badge variant="secondary">{resolvedTheme || "undefined"}</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Classes HTML :</strong>{" "}
              <code className="bg-muted px-1 rounded">{htmlClasses}</code>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Variables CSS Modernes</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="p-4 rounded-md border"
                style={{
                  backgroundColor: tokens.colors.background,
                  color: tokens.colors.foreground,
                  fontFamily: tokens.fonts.sans,
                }}
              >
                <div className="text-sm space-y-1">
                  <div>
                    Background: <code>hsl(var(--background))</code>
                  </div>
                  <div>
                    Foreground: <code>hsl(var(--foreground))</code>
                  </div>
                  <div>
                    Primary:{" "}
                    <code style={{ color: tokens.colors.primary }}>hsl(var(--primary))</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Classes Tailwind shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-card text-card-foreground p-4 rounded-md border border-border">
                <div className="text-sm space-y-1">
                  <div>
                    Background: <code>bg-card</code>
                  </div>
                  <div>
                    Foreground: <code>text-card-foreground</code>
                  </div>
                  <div className="text-primary">
                    Primary: <code>text-primary</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Design Tokens JavaScript</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div
                className="p-3 rounded-md text-center text-sm"
                style={{
                  backgroundColor: tokens.colors.primary,
                  color: tokens.colors.primaryForeground,
                }}
              >
                Primary
              </div>
              <div
                className="p-3 rounded-md text-center text-sm"
                style={{
                  backgroundColor: tokens.colors.secondary,
                  color: tokens.colors.secondaryForeground,
                }}
              >
                Secondary
              </div>
              <div
                className="p-3 rounded-md text-center text-sm"
                style={{
                  backgroundColor: tokens.colors.muted,
                  color: tokens.colors.mutedForeground,
                }}
              >
                Muted
              </div>
              <div
                className="p-3 rounded-md text-center text-sm"
                style={{
                  backgroundColor: tokens.colors.accent,
                  color: tokens.colors.accentForeground,
                }}
              >
                Accent
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statut Migration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="default">✅</Badge>
                <span className="text-sm">shadcn/ui components</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">✅</Badge>
                <span className="text-sm">Design tokens unifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">✅</Badge>
                <span className="text-sm">next-themes integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">✅</Badge>
                <span className="text-sm">Hydration fixée</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
