"use client"

import type React from "react"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type TileProps = {
  className?: string
  title: string
  desc?: string
  accent?: "primary" | "secondary" | "accent"
  children?: React.ReactNode
}

function Tile({ className, title, desc, children, accent = "accent" }: TileProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl overflow-hidden soft-shadow",
        "transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-xl",
        className,
      )}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(600px 200px at 20% 0%, hsl(var(--accent)/0.12) 0%, transparent 60%)",
        }}
      />
      <div className="p-5 md:p-6 relative z-10">
        <div
          className={cn(
            "mb-2 text-xs font-medium tracking-wide uppercase",
            accent === "primary" && "text-primary",
            accent === "secondary" && "text-secondary",
            accent === "accent" && "text-accent",
          )}
        >
          {title}
        </div>
        {desc && <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>}
        {children}
      </div>
    </div>
  )
}

export default function BentoGrid() {
  return (
    <section id="features" className="section">
      <div className="container-tight">
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold">Emotion is the Interface</h2>
          <p className="text-muted-foreground mt-2">Presence-first features, engineered for calm.</p>
        </div>

        {/* Responsive Bento: 6 tiles with varied spans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <Tile
            className="lg:col-span-2"
            title="VoiceOS"
            desc="Natural speech. Hands-free control with warmth, not friction."
            accent="primary"
          >
            <div className="mt-4 rounded-xl overflow-hidden">
              <Image
                src={"/placeholder.svg?height=240&width=760&query=voice%20waveform%20organic%20warm%20gradient"}
                alt="Voice waveform"
                width={760}
                height={240}
                className="w-full h-auto"
              />
            </div>
          </Tile>

          <Tile title="Biometric Sync" desc="Understands rhythm, not just raw data." accent="secondary">
            <div className="mt-4 rounded-xl bg-gradient-to-b from-secondary/20 to-background h-28" />
          </Tile>

          <Tile
            className="lg:row-span-2"
            title="Gesture Flow"
            desc="Subtle head cues. Silent navigation."
            accent="accent"
          >
            <div className="mt-4 aspect-[3/4] rounded-xl bg-gradient-to-b from-accent/20 to-background grid place-items-center">
              <Image
                src={"/placeholder.svg?height=360&width=360&query=theta%20buds%20gesture%20illustration"}
                alt="Gesture illustration"
                width={360}
                height={360}
              />
            </div>
          </Tile>

          <Tile className="lg:col-span-2" title="Orbital Dock" desc="Desktop serenity—charge, display, breathe.">
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-card border border-border h-24" />
              <div className="rounded-xl bg-card border border-border h-24" />
            </div>
          </Tile>

          <Tile title="Presence Mode" desc="Soft focus when you need it; world-first non-distraction tech.">
            <div className="mt-4 flex items-center gap-3">
              <Button variant="outline" className="h-8 hover:border-accent hover:bg-accent/10 bg-transparent">
                Try Demo
              </Button>
              <Button className="h-8 bg-primary text-primary-foreground hover:bg-primary/90">Join Waitlist</Button>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  )
}
