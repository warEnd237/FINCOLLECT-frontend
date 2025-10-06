import { X, CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const toastStyles = {
  success: "bg-neutral-cloud border-l-feedback-success text-feedback-success shadow-lg",
  error: "bg-neutral-cloud border-l-feedback-error text-feedback-error shadow-lg",
  info: "bg-neutral-cloud border-l-teal-aqua text-teal-aqua shadow-lg",
  warning: "bg-neutral-cloud border-l-feedback-warning text-feedback-warning shadow-lg",
};

const toastIcons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

export function Toast({ message, type, onClose }: ToastProps) {
  const Icon = toastIcons[type];

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border-l-4 min-w-[320px] max-w-md animate-slideUp backdrop-blur-sm",
        toastStyles[type]
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <p className="flex-1 text-sm font-medium text-neutral-lead">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-neutral-slate hover:text-neutral-lead transition-colors rounded-full p-1 hover:bg-neutral-pale/50"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
