"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  maxTiltDeg?: number
  scale?: number
}

export function TiltCard({ children, className, maxTiltDeg = 10, scale = 1.02 }: Props) {
  const ref = React.useRef<HTMLDivElement>(null)

  const onMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * maxTiltDeg
      const rotateY = ((centerX - x) / centerX) * maxTiltDeg
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    },
    [maxTiltDeg, scale],
  )

  const onMouseLeave = React.useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        // Solid colors + subtle glow using tokens; no gradients
        "transform-gpu will-change-transform transition-transform duration-100",
        "rounded-xl border border-input bg-background/60 backdrop-blur",
        "shadow-[0_0_0_1px_var(--color-input),0_10px_30px_-10px_oklch(0.6_0.15_30_/_0.25)]",
        "hover:shadow-[0_0_0_1px_var(--color-input),0_20px_50px_-20px_oklch(0.6_0.2_30_/_0.35)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
