import { cn } from "@/lib/utils"
import React from "react"

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  index?: string | number
}

export function SectionLabel({ children, index, className, ...props }: SectionLabelProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-4",
        className
      )} 
      {...props}
    >
      {index !== undefined ? (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 font-mono text-[0.65rem] font-bold text-primary">
          {typeof index === "number" ? String(index).padStart(2, "0") : index}
        </span>
      ) : null}
      <span className="font-mono text-xs font-semibold tracking-widest">{children}</span>
    </div>
  )
}
