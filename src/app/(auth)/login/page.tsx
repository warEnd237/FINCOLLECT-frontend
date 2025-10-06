"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";
import { useLogin } from "@/hooks/use-auth";
import { tokens } from "@/lib/design-tokens";

export default function LoginPage() {
  const [email, setEmail] = useState<string>(""); // default value
  const [password, setPassword] = useState<string>(""); // default value
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const { mutate: login, isPending } = useLogin();
  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    login(
      { email, password },
      {
        onError: (error: Error) => {
          // Vérifier si c'est une erreur d'identifiants vs erreur serveur
          if (
            error?.message?.includes("Invalid") ||
            error?.message?.includes("incorrect") ||
            error?.message?.includes("wrong")
          ) {
            // Mauvais identifiants - pas de toast, juste mise à jour des erreurs
            setErrors({
              email: "Invalid email or password",
              password: "Invalid email or password",
            });
          } else {
            // Erreur serveur - toast d'erreur
            toast.error("Login failed. Please try again later.");
          }
        },
        onSuccess: () => {
          // Succès - toast de succès
          toast.success("Login successful! Redirecting...");
          // Clear any existing errors
          setErrors({});
        },
      }
    );
  };

  const handleGoogleLogin = () => {
    // OAuth2 Google logic - placeholder
    console.warn("Google OAuth2 login functionality not implemented yet");
  };

  const copyCredentials = async (email: string, password: string) => {
    try {
      await navigator.clipboard.writeText(`${email}\n${password}`);
      toast.success("Credentials copied to clipboard!");
    } catch {
      toast.error("Failed to copy credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{ backgroundColor: "hsl(var(--muted))" }} // #fafbfc
    >
      {/* Theme Toggle - Position d'origine en haut à droite de la page */}
      <div className="absolute top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      {/* Demo Credentials - En bas de la page */}
      <div className="absolute bottom-5 left-5 z-50 text-xs">
        <h3
          className="font-medium mb-2"
          style={{
            fontFamily: tokens.fonts.sans,
            fontSize: tokens.fontSizes["12"],
            color: "hsl(var(--muted-foreground))",
          }}
        >
          Demo Credentials
        </h3>
        <div className="space-y-1">
          {[
            {
              role: "Super Admin",
              email: "superadmin@fincollect.com",
              password: "admin123",
            },
            {
              role: "Admin",
              email: "admin@fincollect.com",
              password: "admin123",
            },
            {
              role: "Agent",
              email: "agent@fincollect.com",
              password: "agent123",
            },
          ].map(({ role, email, password }) => (
            <div
              key={role}
              className="flex items-center gap-2 py-0.5 px-2 rounded"
              style={{ backgroundColor: "hsl(var(--background) / 0.8)" }}
            >
              <div className="text-left">
                <span
                  className="font-medium"
                  style={{
                    color: "hsl(var(--foreground))",
                    fontSize: tokens.fontSizes["10"],
                  }}
                >
                  {role}:
                </span>
                <span
                  className="font-mono ml-1"
                  style={{
                    color: "hsl(var(--neutral-charcoal))",
                    fontSize: tokens.fontSizes["9"],
                  }}
                >
                  {email} / {password}
                </span>
              </div>
              <button
                onClick={() => copyCredentials(email, password)}
                className="p-0.5 rounded hover:bg-background/50 transition-colors"
                title={`Copy ${role} credentials`}
              >
                <Copy className="h-2.5 w-2.5" style={{ color: "hsl(var(--muted-foreground))" }} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Login Container - Dimensions : 1227x820 sur grands écrans */}
      <div
        className="w-full max-w-[1227px] lg:h-[820px] h-[600px] sm:h-[700px] max-h-[90vh] shadow-lg flex overflow-hidden relative"
        style={{ borderRadius: tokens.radius.lg }}
      >
        {/* Logo + Titre en haut à gauche - Position exacte: x: 30px, y: 16px du conteneur */}
        <div className="absolute z-40" style={{ top: "16px", left: "30px" }}>
          <Logo size="sm" showText={true} />
        </div>

        {/* Côté gauche - Formulaire de connexion */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center p-8"
          style={{ backgroundColor: "hsl(var(--background))" }} // #ffffff
        >
          <div className="w-full" style={{ maxWidth: "520px" }}>
            {/* Titres centrés */}
            <div className="flex flex-col items-center text-center mb-8">
              <h1
                className="font-medium mb-3"
                style={{
                  fontFamily: tokens.fonts.sans,
                  fontSize: tokens.fontSizes["32"],
                  color: "hsl(var(--foreground))", // #333333
                  letterSpacing: "-0.25%",
                }}
              >
                Welcome to FinCollect!
              </h1>
              <p
                style={{
                  fontFamily: tokens.fonts.sans,
                  fontSize: tokens.fontSizes["18"],
                  color: "hsl(var(--neutral-charcoal))", // #636060
                  letterSpacing: "0.5%",
                }}
              >
                Best tool for financial collection operations
              </p>
            </div>

            {/* Bouton Google OAuth2 */}
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="mb-6 border-border hover:bg-muted transition-colors"
              style={{
                fontFamily: tokens.fonts.sans,
                fontSize: tokens.fontSizes["16"],
                height: "48px",
                width: "499px",
                maxWidth: "100%",
              }}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign with Google
            </Button>

            {/* Barre OR */}
            <div className="flex items-center mb-6 gap-4">
              <div className="flex-1 border-t" style={{ borderColor: "hsl(var(--border))" }}></div>
              <span
                className="text-sm"
                style={{
                  color: "hsl(var(--border))",
                  fontFamily: tokens.fonts.sans,
                }}
              >
                OR
              </span>
              <div className="flex-1 border-t" style={{ borderColor: "hsl(var(--border))" }}></div>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <Label
                  htmlFor="email"
                  style={{
                    fontFamily: tokens.fonts.sans,
                    fontSize: "16px",
                    color: "hsl(var(--foreground))", // #000000
                  }}
                  className="block mb-2"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full"
                  style={{
                    height: "50px",
                    width: "499px",
                    maxWidth: "100%",
                    fontFamily: tokens.fonts.sans,
                    fontSize: "16px",
                    borderRadius: tokens.radius.lg, // 16px
                    borderColor: "hsl(var(--neutral-silver))", // #b1b1b1
                    color: "hsl(var(--neutral-charcoal))", // #636060
                  }}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <Label
                  htmlFor="password"
                  style={{
                    fontFamily: tokens.fonts.sans,
                    fontSize: "16px",
                    color: "hsl(var(--foreground))", // #000000
                  }}
                  className="block mb-2"
                >
                  Password
                </Label>
                <div className="relative" style={{ width: "499px", maxWidth: "100%" }}>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pr-12"
                    style={{
                      height: "50px",
                      fontFamily: tokens.fonts.sans,
                      fontSize: "16px",
                      borderRadius: tokens.radius.lg, // 16px
                      borderColor: "hsl(var(--neutral-silver))", // #b1b1b1
                      color: "hsl(var(--neutral-charcoal))", // #636060
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 transform -translate-y-1/2"
                    style={{
                      right: "12px",
                      color: "hsl(var(--neutral-silver))",
                      zIndex: 10,
                    }}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
              </div>

              {/* Forgot Password */}
              <div className="text-right mb-6">
                <Link
                  href="/forgot-password"
                  style={{
                    fontFamily: tokens.fonts.sans,
                    fontSize: "16px",
                    color: "hsl(var(--foreground))", // #000000
                  }}
                  className="hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                disabled={isPending}
                className="text-white hover:opacity-90"
                style={{
                  backgroundColor: tokens.colors.primary, // #009699
                  fontFamily: tokens.fonts.sans,
                  fontSize: "18px",
                  borderRadius: tokens.radius.lg,
                  height: "58px",
                  width: "499px",
                  maxWidth: "100%",
                }}
              >
                {isPending ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </div>
        </div>

        {/* Côté droit - Image/illustration avec fond #009699 */}
        <div
          className="hidden lg:flex lg:w-1/2 items-center justify-center p-12"
          style={{
            backgroundColor: tokens.colors.primary, // #009699
            fontFamily: tokens.fonts.sans,
          }}
        >
          <div className="text-center text-white">
            <div className="mb-6">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                <span className="text-primary-foreground font-bold text-3xl">FC</span>
              </div>
            </div>
            <h3 className="text-3xl font-medium mb-4" style={{ fontFamily: tokens.fonts.sans }}>
              Manage your collections efficiently
            </h3>
            <p className="text-lg opacity-90" style={{ fontFamily: tokens.fonts.sans }}>
              Track, analyze, and optimize your financial collection operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
