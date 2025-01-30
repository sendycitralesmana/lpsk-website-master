import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const buttonVariants = cva(
  "flex flex-col justify-center place-items-center border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground gap-1 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
);

export interface ButtonToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  level?: number;
  length?: number;
}

const ButtonToggle = React.forwardRef<HTMLButtonElement, ButtonToggleProps>(
  ({ className, level = 0, length = 1, children, ...props }, ref) => {
    return (
      <Button
        className={cn(buttonVariants({ className }), "h-fit text-primary py-4 select-none")}
        ref={ref}
        {...props}
      >
        {children}
        <div className="flex gap-1">
          {Array.from({length}).map((_, i) => (
            <div
              key={i}
              className={cn("w-5 h-1 bg-primary rounded", {
                "bg-muted": i >= level,
                "bg-primary": i < level,
              })}
            ></div>
          ))}
        </div>
      </Button>
    );
  }
);

ButtonToggle.displayName = "ButtonToggle";

export { ButtonToggle, buttonVariants };

