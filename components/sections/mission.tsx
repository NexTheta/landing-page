import { cn } from "@/lib/utils"

export function Mission({ className }: { className?: string }) {
  return (
    <section id="mission" className={cn("section-y", className)}>
      <div className="container text-center">
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">The Mission</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mx-auto max-w-4xl text-pretty mb-8 tracking-tight gradient-text-animated">
          Redefine How Humans Interact With Technology
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl md:text-2xl leading-relaxed text-foreground/80">
          We believe screens have become prison walls. Theta Sound breaks you free with voice-first, emotion-aware
          technology that adapts to your life, not the other way around. This isn&apos;t just a product—it's a movement
          toward genuine human connection.
        </p>
      </div>
    </section>
  )
}
