"use client";

import { useFilterStore } from "@/components/hook/filter-store";
import { useFontStore } from "@/components/hook/font-store";
import { useToolStore } from "@/components/hook/tool-store";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

type BaseLayoutProps = {
  className?: string;
  children?: React.ReactNode;
};

const config = {
  size: ["prose-base", "prose-lg", "prose-xl", "prose-2xl"],
  spacing: [
    "!tracking-normal",
    "!tracking-wide",
    "!tracking-wider",
    "!tracking-widest",
  ],
  leading: [
    "!leading-none",
    "!leading-tight",
    "!leading-snug",
    "!leading-normal",
    "!leading-relaxed",
    "!leading-loose",
  ],
  contrast: ["!contrast-100", "!contrast-125", "!contrast-150"],
  sepia: ["sepia-0", "sepia"],
  grayscale: ["grayscale-0", "grayscale"],
  invert: ["invert-0", "invert"],
  saturate: ["saturate-100", "saturate-150", "saturate-200"],
  hueRotate: [
    "hue-rotate-0",
    "hue-rotate-15",
    "hue-rotate-30",
    "hue-rotate-60",
    "hue-rotate-90",
    "hue-rotate-180",
  ],
  brightness: ["brightness-100", "brightness-150", "brightness-200"],
  highlightLink: ["", "highlight-link"],
  hideImages: ["", "hide-img"],
};

const BaseLayout = ({ children, className }: BaseLayoutProps) => {
  const variant = useMemo(() => config, []);
  const { size, spacing, leading } = useFontStore((state) => state);
  const {
    contrast,
    sepia,
    grayscale,
    invert,
    saturate,
    hueRotate,
    brightness,
  } = useFilterStore((state) => state);
  const { highlightLinks, hideImages } = useToolStore((state) => state);
  return (
    <body
      className={cn(
        className,
        variant.size[size],
        variant.spacing[spacing],
        variant.leading[leading],
        variant.contrast[contrast],
        variant.sepia[sepia],
        variant.grayscale[grayscale],
        variant.invert[invert],
        variant.saturate[saturate],
        variant.hueRotate[hueRotate],
        variant.brightness[brightness],
        variant.highlightLink[highlightLinks ? 1 : 0],
        variant.hideImages[hideImages ? 1 : 0]
      )}
    >
      {children}
    </body>
  );
};

export { BaseLayout };
