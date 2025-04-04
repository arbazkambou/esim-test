import { cn } from "@/lib/utils";
import type React from "react";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent";
}

export function Spinner({
  className,
  size = "md",
  color = "primary",
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex items-center justify-center",
        {
          "h-16": size === "sm",
          "h-24": size === "md",
          "h-32": size === "lg",
        },
        className,
      )}
      {...props}
    >
      <svg
        className={cn("animate-spin", {
          "h-8 w-8": size === "sm",
          "h-12 w-12": size === "md",
          "h-16 w-16": size === "lg",
          "text-primary": color === "primary",
          "text-secondary": color === "secondary",
          "text-accent": color === "accent",
        })}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
