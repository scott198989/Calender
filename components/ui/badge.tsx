import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "service" | "bible-study" | "special" | "prayer"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-slate-200 text-slate-800",
    service: "bg-primary-100 text-primary-800 border-primary-200",
    "bible-study": "bg-burgundy-100 text-burgundy-800 border-burgundy-200",
    special: "bg-gold-100 text-gold-900 border-gold-200",
    prayer: "bg-purple-100 text-purple-800 border-purple-200",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
