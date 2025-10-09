"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

function useCountUp(target: number, duration = 1200) {
  const [value, set] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      set(Math.floor(p * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

export function Stats({ className }: { className?: string }) {
  const rebels = useCountUp(10000)
  const screens = useCountUp(0)
  return (
    <section className={cn("section-y border-t border-border/50", className)}>
      <div className="container grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8">
        <div className="group">
          <div className="heading-gradient font-sentient text-6xl md:text-7xl font-extralight transition-transform duration-300 group-hover:scale-110">
            {rebels.toLocaleString()}+
          </div>
          <div className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/70 font-semibold">Rebels Joined</div>
        </div>
        <div className="group">
          <div className="heading-gradient font-sentient text-6xl md:text-7xl font-extralight transition-transform duration-300 group-hover:scale-110">
            {screens}
          </div>
          <div className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/70 font-semibold">Screens Needed</div>
        </div>
        <div className="group">
          <div className="heading-gradient font-sentient text-6xl md:text-7xl font-extralight transition-transform duration-300 group-hover:scale-110">
            ∞
          </div>
          <div className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/70 font-semibold">Possibilities Unlocked</div>
        </div>
      </div>
    </section>
  )
}
