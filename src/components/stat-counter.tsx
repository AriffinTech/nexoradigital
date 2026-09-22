"use client"

import React from "react"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface StatCounterProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  sublabel: string
  icon?: React.ReactNode
}

export function StatCounter({ end, suffix = "", prefix = "", label, sublabel, icon }: StatCounterProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left p-2">
      {icon && (
        <div className="flex-shrink-0 mb-1 sm:mb-0">
          {icon}
        </div>
      )}
      <div className="flex flex-col space-y-1">
        <div className="flex items-baseline justify-center sm:justify-start">
          <AnimatedCounter
            to={end}
            prefix={prefix}
            suffix={suffix}
            className="text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold tracking-tight text-foreground"
          />
        </div>
        <div>
          <div className="font-bold text-foreground text-xs sm:text-sm uppercase tracking-wider">{label}</div>
          <div className="text-muted-foreground text-xs sm:text-sm mt-0.5 sm:mt-1">{sublabel}</div>
        </div>
      </div>
    </div>
  )
}
