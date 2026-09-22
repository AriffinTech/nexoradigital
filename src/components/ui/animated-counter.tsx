"use client"

import React, { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const shouldReduceMotion = useReducedMotion()
  const [current, setCurrent] = useState<number>(shouldReduceMotion ? to : from)

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      if (shouldReduceMotion) setCurrent(to)
      return
    }

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      
      // Easing out quad: progress * (2 - progress)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const value = from + (to - from) * easeProgress

      setCurrent(value)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCurrent(to)
      }
    }

    const animFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animFrame)
  }, [isInView, from, to, duration, shouldReduceMotion])

  const formattedValue = current.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}
