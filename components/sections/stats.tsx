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
    <section className={cn("section-padding border-t border-border/60", className)}>
      <div className="container grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        <div>
          <div className="heading-gradient font-sentient text-5xl md:text-6xl">{rebels.toLocaleString()}+</div>
          <div className="mt-2 text-xs uppercase tracking-[0.15em] text-foreground/60">Rebels Joined</div>
        </div>
        <div>
          <div className="heading-gradient font-sentient text-5xl md:text-6xl">{screens}</div>
          <div className="mt-2 text-xs uppercase tracking-[0.15em] text-foreground/60">Screens Needed</div>
        </div>
        <div>
          <div className="heading-gradient font-sentient text-5xl md:text-6xl">∞</div>
          <div className="mt-2 text-xs uppercase tracking-[0.15em] text-foreground/60">Possibilities Unlocked</div>
        </div>
      </div>
    </section>
  )
}
