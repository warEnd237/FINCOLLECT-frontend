import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  const textSizeClasses = {
    sm: "text-16",
    md: "text-18",
    lg: "text-20",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logo Icon */}
      <div
        className={cn("bg-primary rounded-lg flex items-center justify-center", sizeClasses[size])}
      >
        <span className="text-primary-foreground font-bold">FC</span>
      </div>

      {/* Logo Text */}
      {showText && (
        <h1 className={cn("font-sans font-medium", textSizeClasses[size])}>
          <span className="text-primary">Fin</span>
          <span className="text-foreground">Collect</span>
        </h1>
      )}
    </div>
  );
}
