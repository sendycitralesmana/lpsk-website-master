import { cn } from "@/lib/utils";
import React from "react";
import { useFontStore } from "../hook/font-store";

export type H1Props = React.HtmlHTMLAttributes<HTMLHeadingElement>;

const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, ...props }, ref) => {
    const { size } = useFontStore((state) => state);
    return (
      <h1
        ref={ref}
        className={cn(className, {
          "text-xl": size === 0,
          "text-2xl": size === 1,
          "text-3xl": size === 2,
        })}
        {...props}
      />
    );
  }
);

H1.displayName = "H1";

export { H1 };
