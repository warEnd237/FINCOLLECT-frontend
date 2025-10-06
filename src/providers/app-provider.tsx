import { ThemeProvider } from "./theme-provider";
import { ToastProvider } from "./toast-provider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
}
