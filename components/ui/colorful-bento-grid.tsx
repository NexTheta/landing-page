"use client"

import Link from "next/link"
import { Gift } from "lucide-react"
import { cn } from "@/lib/utils"

export function ColorfulBentoGrid({ className = "" }: { className?: string }) {
  return (
    <section id="theta-bento" className={cn("section-y", className)}>
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-12 md:mb-16">
          <div className="eyebrow text-base tracking-[0.2em]">Theta Sound</div>
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <h2 className="text-brand-ink text-balance text-5xl md:text-6xl font-sans font-semibold leading-[1.05] tracking-tight">
              {"The Sound of Presence "}
              <span className="align-middle inline-flex -translate-y-1">
                <Gift style={{ color: "var(--theta-red)" }} size={42} strokeWidth={2} />
              </span>
            </h2>
            <p className="max-w-md text-brand-ink/70 text-pretty text-lg">
              Screenless. Emotion-first. Indian innovation for a calmer, more human future.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 font-medium text-base" style={{ color: "var(--theta-red)" }}>
            <p className="whitespace-nowrap">+1,000 early signups</p>
            <p className="whitespace-nowrap">Founder-led, YC-ready craft</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link
            href="#features"
            className="md:col-span-2 relative bento-tile bento-hover bg-brand-amber-20 h-[360px] flex items-center justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="pl-10 flex flex-col gap-2">
              <p className="-rotate-1 text-brand-ink/80 text-base">Ambient intelligence</p>
              <h3 className="-rotate-1 text-3xl font-semibold text-brand-ink bg-brand-cream rounded-full px-6 py-3 w-fit shadow-md">
                Emotion-first wearable
              </h3>
            </div>
            <div className="h-full w-1/2 rounded-xl mr-6 bg-brand-cream-60" />
          </Link>

          <Link
            href="#tools"
            className="relative bento-tile bento-hover bg-brand-orange-20 h-[360px] flex flex-col items-center justify-between py-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-center">
              <p className="rotate-3 text-brand-ink/80 mb-2 text-base">10,000 test plays</p>
              <h3 className="rotate-3 text-3xl font-semibold text-brand-ink bg-brand-cream rounded-full px-6 py-3 w-fit mx-auto shadow-md">
                Growth by feeling
              </h3>
            </div>
            <div className="h-1/2 w-full rounded-xl bg-brand-cream-60" />
          </Link>

          <Link
            href="#behavior"
            className="relative bento-tile bento-hover bg-brand-red-15 h-[360px] flex flex-col items-center justify-between py-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-center">
              <p className="-rotate-2 text-brand-ink/80 mb-2 text-base">Presence over pings</p>
              <h3 className="-rotate-2 text-3xl font-semibold text-brand-ink bg-brand-cream rounded-full px-6 py-3 w-fit mx-auto shadow-md">
                Calm UX patterns
              </h3>
            </div>
            <div className="h-1/2 w-full rounded-xl bg-brand-cream-60" />
          </Link>

          <Link
            href="#journal"
            className="relative bento-tile bento-hover bg-brand-cream h-[260px] flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <p className="-rotate-3 text-brand-ink/80 mb-2 text-base">Journal & Studies</p>
            <h3 className="-rotate-3 text-2xl font-semibold text-brand-ink bg-white/80 rounded-full px-6 py-2.5 shadow-md">
              Coming soon
            </h3>
          </Link>

          <Link
            href="#playbooks"
            className="relative bento-tile bento-hover bg-brand-cream h-[260px] flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <p className="rotate-2 text-brand-ink/80 mb-2 text-base">Playbooks</p>
            <h3 className="rotate-2 text-2xl font-semibold text-brand-ink bg-white/80 rounded-full px-6 py-2.5 shadow-md">
              Coming soon
            </h3>
          </Link>
        </div>
      </div>
    </section>
  )
}
