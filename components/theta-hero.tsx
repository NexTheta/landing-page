"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist-dialog"
import Link from "next/link"

export function ThetaHero() {
  return (
    <section className="theta-hero-wrap flex min-h-svh flex-col justify-end pt-40 pb-20 md:pt-52 md:pb-28">
      <div className="container text-center">
        <div className="flex items-center justify-center mb-8">
          <Image
            src="/images/theta-symbol.png"
            alt="Theta Sound"
            width={140}
            height={140}
            priority
            className="pointer-events-none select-none w-28 h-auto md:w-36 animate-theta-pulse"
          />
        </div>

        <p className="eyebrow mt-6 text-base tracking-[0.2em]">Design–Tech Rebellion</p>

        <h1 className="heading-gradient text-balance font-sentient mt-6 text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-0.03em] font-extralight">
          Liberate Your Senses.
          <br />
          <span className="font-light italic">Feel Without Screens.</span>
        </h1>

        <p className="font-mono text-base sm:text-lg md:text-xl text-foreground/75 text-pretty mt-10 max-w-[720px] mx-auto leading-relaxed">
          Screenless. Emotion-first. Presence over pings. Theta Sound is a voice-forward wearable that moves with you,
          not against you.
        </p>

        <div className="cta-pair mt-14 gap-4">
          <WaitlistDialog />
          <Link href="#buy" className="contents">
            <Button 
              variant="outline" 
              className="theta-glow-ring bg-transparent hover:bg-primary/5 transition-all duration-300 text-base px-8" 
              aria-label="Go to Buy section"
            >
              Dare to Feel
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
