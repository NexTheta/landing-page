"use client"
import { cn } from "@/lib/utils"

type Props = {
  texts: string[]
  velocity?: number // pixels per second
  className?: string
  numCopies?: number
}

export function ScrollVelocity({ texts, velocity = 120, className, numCopies = 6 }: Props) {
  const duration = Math.max(12, 60_000 / Math.max(80, velocity)) // seconds

  return (
    <div className={cn("relative overflow-hidden border-y border-input bg-background", className)} aria-hidden="true">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "theta-marquee linear infinite",
          animationDuration: `${duration}s`,
        }}
      >
        {Array.from({ length: numCopies }).map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-6 py-2 text-sm font-semibold tracking-wider uppercase">
            {texts.map((t, j) => (
              <span key={`${i}-${j}`} className="text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes theta-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
