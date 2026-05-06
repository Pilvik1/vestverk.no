import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong";
}

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-panel",
          variant === "strong" && "glass-panel-strong",
          className
        )}
        {...props}
      />
    );
  }
);
GlassPanel.displayName = "GlassPanel";
