"use client";

import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const bodyVariant = cva("", {
  variants: {
    fontSize: {
      default: "prose-base",
      lg: "prose-lg",
      xl: "prose-3xl",
    },
  },
  defaultVariants: {
    fontSize: "default",
  },
});

export interface BodyProps
  extends React.HTMLAttributes<HTMLBodyElement>,
    VariantProps<typeof bodyVariant> {
}

const Body = React.forwardRef<HTMLBodyElement, BodyProps>(
  ({ className, fontSize ,...props }, ref) => {
   return <body ref={ref} className={bodyVariant({ className, fontSize })} {...props} />
  }
)
Body.displayName = "Body"

export { Body, bodyVariant };
