"use client"

import { ThetaHero } from "@/components/theta-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DottedSurface } from "@/components/ui/dotted-surface"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import { ColorfulBentoGrid } from "@/components/ui/colorful-bento-grid"
import { Stats } from "@/components/sections/stats"
import { Mission } from "@/components/sections/mission"
import { WaitlistDialog } from "@/components/waitlist-dialog" // Import WaitlistDialog

export default function Home() {
  return (
    <>
      {/* Fixed, non-interactive animated background */}
      <DottedSurface className="hidden sm:block" />

      <ThetaHero />

      {/* YC-style marquee band */}
      <ScrollVelocity
        texts={["DESIGN", "", "INNOVATION", "FUTURE", "VOICE-FIRST", "SCREENLESS", "EMOTION-DRIVEN"]}
        velocity={150}
        className="border-y-0 py-3"
        numCopies={8}
      />

      {/* New Stats section */}
      <Stats />

      {/* Modern Colorful Bento Grid features section */}
      <ColorfulBentoGrid className="py-16 md:py-24" />

      {/* New Mission section */}
      <Mission />

      <section id="buy" className="py-24 border-t border-border/50">
        <div className="container max-w-4xl">
          <Card className="bg-card border-border shadow-2xl">
            <CardHeader className="pb-6">
              <CardTitle className="font-sentient text-4xl md:text-5xl tracking-tight">Buy Now (Early Access)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="font-mono text-base md:text-lg text-foreground/75 leading-relaxed">
                Limited early units. We're refining hardware; delivery timelines may shift. If you're in, you're in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button aria-label="Buy Now (coming soon)" className="w-full sm:w-auto text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Buy Now
                </Button>
                <WaitlistDialog triggerClassName="w-full sm:w-auto" />
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed">No payments yet. We're validating demand first.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Anchor target for header link */}
      <div id="waitlist" className="sr-only">
        Waitlist anchor
      </div>
      <div id="mission" className="sr-only">
        Mission anchor
      </div>
      <div id="tech" className="sr-only">
        Tech anchor
      </div>
      <div id="press" className="sr-only">
        Press anchor
      </div>
      <div id="contact" className="sr-only">
        Contact anchor
      </div>
    </>
  )
}
