"use client"

import React, { createContext, useContext } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

const FadeInStaggerContext = createContext(false)

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
}

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.3,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const isInStaggerGroup = useContext(FadeInStaggerContext)

  const directionOffsets = {
    up: { y: 12, x: 0 },
    down: { y: -12, x: 0 },
    left: { x: 12, y: 0 },
    right: { x: -12, y: 0 },
    none: { x: 0, y: 0 },
  }

  const offset = directionOffsets[direction]

  const variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : offset.x,
      y: shouldReduceMotion ? 0 : offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: isInStaggerGroup ? undefined : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  if (isInStaggerGroup) {
    return (
      <motion.div
        variants={variants}
        className={cn(className)}
        {...(props as any)}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={variants}
      className={cn(className)}
      {...(props as any)}
    >
      {children}
    </motion.div>
  )
}

interface FadeInStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  faster?: boolean
  delay?: number
}

export function FadeInStagger({
  children,
  className,
  faster = false,
  delay = 0,
  ...props
}: FadeInStaggerProps) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          staggerChildren: faster ? 0.05 : 0.08,
          delayChildren: delay,
        }}
        className={cn(className)}
        {...(props as any)}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  )
}
