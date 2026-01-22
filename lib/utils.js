import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind classes with clsx for conditional logic
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
