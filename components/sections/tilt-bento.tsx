"use client"
import { TiltCard } from "@/components/ui/tilt-card"
import { cn } from "@/lib/utils"

type Tile = {
  id: number
  title: string
  description: string
  icon?: string
  span?: string
}

const tiles: Tile[] = [
  {
    id: 1,
    title: "Voice-First Tech",
    description: "Talk to the world without looking at it. Emotion-aware, zero-screen.",
    icon: "🎙️",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Screenless Future",
    description: "Liberate attention. Banish the doom scroll.",
    icon: "🚫",
  },
  {
    id: 3,
    title: "Spatial Audio",
    description: "Feel presence. 3D soundscapes mapped to your movement.",
    icon: "🔊",
  },
  {
    id: 4,
    title: "Neural Interface",
    description: "Signals, not noise. Your emotion is the input.",
    icon: "🧠",
    span: "md:row-span-2",
  },
  {
    id: 5,
    title: "Always Listening",
    description: "Context-aware. Whisper-quiet. Always on—when you need it.",
    icon: "👂",
    span: "md:col-span-2",
  },
]

export function TiltBento({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 md:px-6", className)}>
      <header className="mb-6 md:mb-10">
        <h2 className="text-pretty text-2xl font-bold tracking-tight md:text-4xl">The Rebellion Arsenal</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Hardware that gets out of your way. Presence-first. Emotion-forward. Zero distraction.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:auto-rows-[200px] md:grid-cols-3">
        {tiles.map((t) => (
          <TiltCard key={t.id} className={cn("p-5 md:p-6", "bg-background", "hover:border-primary", t.span)}>
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                {t.icon ? (
                  <span aria-hidden className="text-xl">
                    {t.icon}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold">{t.title}</h3>
              </div>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{t.description}</p>
              <div className="mt-4 h-px w-full bg-input/60" />
              <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-wide text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Built for presence
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
