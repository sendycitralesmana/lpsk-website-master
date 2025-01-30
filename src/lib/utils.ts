import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatLevel = (level: number, options: string[]) => {
  return options[level]
}

export const formatText = (text?: string) => {
  return text?.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}