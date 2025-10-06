import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * FormInput - Composant Input étendu avec Label et gestion d'erreurs
 *
 * ✅ Utilise shadcn/ui Input + Label
 * ✅ Compatible avec l'ancienne API (label, error, helperText)
 * ✅ Design tokens pour espacement et couleurs
 * ✅ Accessible avec associations label/input correctes
 * ✅ Hydration-safe avec useId()
 */
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full space-y-2">
        {label && (
          <Label htmlFor={inputId} className="block text-sm font-medium text-foreground mb-1.5">
            {label}
          </Label>
        )}
        <Input
          id={inputId}
          className={cn(
            "h-11 text-base",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-destructive font-medium">{error}</p>}
        {helperText && !error && <p className="text-sm text-muted-foreground">{helperText}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
