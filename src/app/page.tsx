"use client";

import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { useAuthStore } from "@/store/auth.store";
import { getDashboardRoute } from "@/constants/routes";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  const { isAuthenticated, user } = useAuthStore();

  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime guarantee",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Real-time insights and performance tracking",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless workflow for agents and administrators",
    },
    {
      icon: Clock,
      title: "Efficient Processing",
      description: "Automate routine tasks and save time",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Theme Toggle */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo size="md" showText={true} />

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {isAuthenticated && user ? (
              <Link href={getDashboardRoute(user.role)}>
                <Button>Go to Dashboard</Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Premier texte - Increase your productivity */}
          <h1 className="text-40 md:text-48 lg:text-57 font-sans text-foreground mb-0.5 leading-tight">
            Increase your productivity
          </h1>

          {/* Deuxième texte - Customer relationship simplified */}
          <h2 className="text-40 md:text-48 lg:text-57 font-sans text-primary mb-3 leading-tight">
            Customer relationship simplified
          </h2>

          {/* Troisième texte - Description */}
          <p className="text-19 font-sans mb-8 max-w-4xl mx-auto leading-relaxed text-neutral-charcoal">
            With seamless integrations, power analytics, and advanced marketing tools, you can take
            your business to the next level and create sustainable growth with FinCollect
          </p>

          {/* Bouton Get Started */}
          <div className="flex justify-center">
            {isAuthenticated && user ? (
              <Link href={getDashboardRoute(user.role)}>
                <Button size="lg" className="group">
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-primary to-brand-vivid">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Transform Your Collection Process?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of collection agencies already using FinCollect
          </p>

          {!isAuthenticated && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90 border-background"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2025 FinCollect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
