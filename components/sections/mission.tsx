import { cn } from "@/lib/utils"

export function Mission({ className }: { className?: string }) {
  return (
    <section id="mission" className={cn("section-padding", className)}>
      <div className="container text-center">
        <p className="eyebrow text-primary">The Mission</p>
        <h2 className="heading-gradient font-sentient mx-auto mt-3 max-w-4xl text-pretty text-4xl md:text-6xl">
          Redefine How Humans Interact With Technology
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
          We believe screens have become prison walls. Theta Sound breaks you free with voice-first, emotion-aware
          technology that adapts to your life, not the other way around. This isn&apos;t just a product—it's a movement
          toward genuine human connection.
        </p>
      </div>
    </section>
  )
}
