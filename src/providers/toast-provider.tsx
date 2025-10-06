"use client";

import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { createContext, useContext, type ReactNode } from "react";
import { tokens } from "@/lib/design-tokens";

/**
 * ToastProvider moderne avec Sonner (shadcn/ui recommandation)
 *
 * ✅ Utilise Sonner pour les notifications
 * ✅ Design tokens pour typographie cohérente
 * ✅ Thème-aware automatiquement
 * ✅ Plus de gestion manuelle d'état
 */

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info" | "warning") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const showToast = (message: string, type: "success" | "error" | "info" | "warning" = "info") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      case "info":
      default:
        toast(message);
        break;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toaster
        position="top-right"
        expand={false}
        richColors
        closeButton
        style={{
          fontFamily: tokens.fonts.sans,
        }}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
