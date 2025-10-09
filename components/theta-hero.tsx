"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist-dialog"
import Link from "next/link"

export function ThetaHero() {
  return (
    <section className="theta-hero-wrap flex min-h-svh flex-col justify-end pt-36 pb-16 md:pt-48 md:pb-24">
      <div className="container text-center">
        <div className="flex items-center justify-center">
          <Image
            src="/images/theta-symbol.png"
            alt="Theta Sound"
            width={120}
            height={120}
            priority
            className="pointer-events-none select-none w-24 h-auto md:w-28 animate-theta-pulse"
          />
        </div>

        <p className="eyebrow mt-6">Design–Tech Rebellion</p>

        <h1 className="heading-gradient text-balance font-sentient mt-4 text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-[-0.02em]">
          Liberate Your Senses.
          <br />
          <span className="font-light">Feel Without Screens.</span>
        </h1>

        <p className="font-mono text-sm sm:text-base text-foreground/70 text-pretty mt-8 max-w-[640px] mx-auto">
          Screenless. Emotion-first. Presence over pings. Theta Sound is a voice-forward wearable that moves with you,
          not against you.
        </p>

        <div className="cta-pair mt-12">
          <WaitlistDialog />
          <Link href="#buy" className="contents">
            <Button variant="outline" className="theta-glow-ring bg-transparent" aria-label="Go to Buy section">
              Dare to Feel
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
