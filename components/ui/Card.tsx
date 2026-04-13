import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-[#0d1117]/80 backdrop-blur-sm border border-white/[0.06] rounded-lg text-text-primary transition-all duration-300 ease-out hover:bg-[#111821] hover:border-white/[0.1] shadow-[0_2px_8px_rgba(0,0,0,0.3)]",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
