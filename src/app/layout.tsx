import type { Metadata } from "next";
import { Barlow, REM } from "next/font/google";
import "./global.css";
import { QueryProvider } from "@/providers/query-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { AppProvider } from "../providers/app-provider";

// Charger Barlow pour les headings
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

// Charger REM pour le body (texte principal)
const rem = REM({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinCollect - Financial Collection Management",
  description: "Manage your financial collections efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${rem.variable} font-sans antialiased bg-muted min-h-screen`}
      >
        <QueryProvider>
          <AuthProvider>
            <AppProvider>{children}</AppProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
