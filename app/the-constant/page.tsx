"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Mic,
  CalendarClock,
  Waves,
  HeartPulse,
  MapPin,
  Inbox,
  type LucideIcon,
} from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

type Entry = { line: string; tag: string; icon: LucideIcon };

type Scene = {
  hour: string;
  label: string;
  ground: "obsidian" | "graphite" | "cream";
  noise: number;
  entries?: Entry[];
  close?: string;
  peak?: boolean;
  lines?: string[];
};

const GROUND: Record<Scene["ground"], string> = {
  obsidian: "var(--tc-obsidian)",
  graphite: "var(--tc-graphite)",
  cream: "var(--tc-cream)",
};

const scenes: Scene[] = [
  {
    hour: "06:00",
    label: "The Flood",
    ground: "obsidian",
    noise: 1,
    entries: [
      { line: "Six replies went out while you slept.", tag: "VOICE OS · AUTO-REPLIED · NO SCREEN", icon: Mic },
      { line: "The calendar sorted itself before your alarm.", tag: "VOICE OS · REORDERED", icon: CalendarClock },
    ],
  },
  {
    hour: "11:00",
    label: "The Pile-up",
    ground: "obsidian",
    noise: 0.8,
    entries: [
      { line: "Three meetings moved.", tag: "VOICE OS · RESCHEDULED · NO SCREEN", icon: CalendarClock },
      { line: "You said it once, out loud.", tag: "ONE UTTERANCE · NO APP OPENED", icon: Mic },
      { line: "The room got quieter on its own.", tag: "AANC · ADAPTIVE", icon: Waves },
    ],
    close: "You never touched your phone.",
  },
  {
    hour: "14:30",
    label: "The Overload",
    ground: "graphite",
    noise: 0.5,
    entries: [
      { line: "Heart rate steady through the noise.", tag: "BIOMETRIC · TRACK FITNESS", icon: HeartPulse },
      { line: "A pin dropped where you'd need it later.", tag: "MEMORY GEO-PINS", icon: MapPin },
    ],
    close: "The noise keeps climbing. You don't.",
  },
  {
    hour: "19:00",
    label: "The Wind-down",
    ground: "cream",
    noise: 0.2,
    entries: [
      { line: "Nothing new to open.", tag: "INBOX ZERO · HANDLED QUIETLY", icon: Inbox },
      { line: "Tomorrow, already planned.", tag: "VOICE OS · CLOSED OUT", icon: CalendarClock },
    ],
  },
  {
    hour: "23:00",
    label: "The Quiet",
    ground: "cream",
    noise: 0.02,
    peak: true,
    lines: ["Nothing new happened today.", "Because it already handled it."],
  },
];

const STOPS = scenes.length;

function sceneIndexAt(p: number) {
  return Math.min(STOPS - 1, Math.floor(p * STOPS));
}

function noiseAt(p: number) {
  const scaled = Math.min(Math.max(p, 0), 1) * (STOPS - 1);
  const i = Math.min(Math.floor(scaled), STOPS - 2);
  const frac = scaled - i;
  return scenes[i].noise + (scenes[i + 1].noise - scenes[i].noise) * frac;
}

export default function TheConstantPage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Computed from window scrollY directly (not framer-motion's `target` ref
  // tracking) because target-ref timing races hydration in the App Router
  // and silently produces stale progress values on some loads.
  const { scrollY } = useScroll();
  const scrollYProgress = useTransform(scrollY, (y) => {
    const el = wrapperRef.current;
    if (!el) return 0;
    const top = el.offsetTop;
    const height = el.offsetHeight;
    const vh = window.innerHeight;
    const raw = (y - top) / (height - vh);
    return Math.min(1, Math.max(0, raw));
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const noise = useTransform(scrollYProgress, (p) => noiseAt(p));
  const noiseHeight = useTransform(noise, (n) => `${Math.round(n * 100)}%`);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = sceneIndexAt(p);
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  const scene = scenes[activeIndex];
  const dark = scene.ground !== "cream";
  const ink = dark ? "var(--tc-cream)" : "var(--tc-obsidian)";
  const inkSoft = dark ? "var(--tc-ash)" : "var(--tc-ash)";
  const accent = dark ? "var(--tc-copper)" : "var(--tc-ember)";
  const tagColor = "var(--tc-ember)";

  return (
    <main style={{ background: GROUND[scenes[0].ground] }}>
      <h1 className="sr-only">
        The Constant: a day with Theta Sound, the in-ear AI assistant that stays the same while everything else changes
      </h1>
      {/* Persistent header */}
      <div
        className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-6"
        style={{ color: ink }}
      >
        <Link href="/" className="flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Theta Sound
        </Link>
        <div
          className="hidden md:block text-[10px] tracking-[0.24em] uppercase"
          style={{ color: inkSoft, fontFamily: "ui-monospace, monospace" }}
        >
          TWS &middot; Biometric &middot; Voice OS &middot; AANC
        </div>
      </div>

      {/* Pinned stage: 5 stops, ~130vh each */}
      <div ref={wrapperRef} style={{ height: `${STOPS * 130}vh`, position: "relative" }}>
        <div
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ background: GROUND[scene.ground] }}
        >
          {/* Noise band, right margin */}
          <div
            className="hidden md:block absolute right-8 lg:right-16 top-[28%] bottom-[28%] w-[3px] overflow-hidden"
            style={{ background: dark ? "rgba(254,243,226,0.12)" : "rgba(16,11,7,0.1)" }}
          >
            <motion.div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: noiseHeight, background: "var(--tc-ember)" }}
            />
          </div>
          <div
            className="hidden md:block absolute right-8 lg:right-16 top-[calc(28%-24px)] text-[9px] tracking-[0.18em]"
            style={{ color: inkSoft, fontFamily: "ui-monospace, monospace" }}
          >
            NOISE
          </div>

          {/* The spine — fixed, never moves */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-px"
            style={{ left: "35%", background: "rgba(196,48,29,0.6)" }}
          />
          <div
            className="hidden md:flex absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] items-center justify-center"
            style={{ background: GROUND[scene.ground] }}
          >
            <Image src="/images/theta-symbol.png" alt="Theta" width={44} height={44} className="w-9 h-9 object-contain" />
          </div>

          {/* Mobile constant marker */}
          <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Image src="/images/theta-symbol.png" alt="Theta" width={36} height={36} className="w-8 h-8 object-contain" />
          </div>

          {scene.peak ? (
            // Peak layout: mostly empty, two large lines, centered on the cream ground
            <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-10 text-center gap-3 md:gap-4">
              <div
                className="text-[10px] tracking-[0.24em] uppercase mb-4"
                style={{ color: inkSoft, fontFamily: "ui-monospace, monospace" }}
              >
                {scene.hour} &middot; {scene.label}
              </div>
              {scene.lines?.map((l, i) => {
                const Tag = i === 0 ? motion.h2 : motion.p;
                return (
                  <Tag
                    key={`${activeIndex}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`max-w-3xl text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.015em] ${i === 1 ? "italic" : ""}`}
                    style={{
                      fontFamily: "Sentient, Georgia, serif",
                      fontWeight: i === 1 ? 300 : 200,
                      color: i === 1 ? "var(--tc-ember)" : ink,
                    }}
                  >
                    {l}
                  </Tag>
                );
              })}
            </div>
          ) : (
            // Standard layout: hour left of the spine, entries right of it
            <div className="relative h-full flex flex-col md:flex-row items-center px-6 md:px-0 gap-8 md:gap-0">
              <div className="hidden md:flex flex-col items-end justify-center w-[35%] pr-16 h-full">
                <div
                  className="text-[110px] lg:text-[150px] leading-[0.86] tracking-[-0.03em]"
                  style={{ fontFamily: "Sentient, Georgia, serif", fontWeight: 200, color: inkSoft }}
                >
                  {scene.hour}
                </div>
                <div
                  className="text-[10px] tracking-[0.24em] uppercase mt-5"
                  style={{ color: inkSoft, fontFamily: "ui-monospace, monospace" }}
                >
                  {scene.label}
                </div>
              </div>

              <div className="md:hidden text-center pt-16">
                <div
                  className="text-6xl leading-none tracking-[-0.02em]"
                  style={{ fontFamily: "Sentient, Georgia, serif", fontWeight: 200, color: inkSoft }}
                >
                  {scene.hour}
                </div>
                <div
                  className="text-[10px] tracking-[0.24em] uppercase mt-3"
                  style={{ color: inkSoft, fontFamily: "ui-monospace, monospace" }}
                >
                  {scene.label}
                </div>
              </div>

              <div className="w-full md:w-[65%] md:pl-16 flex flex-col justify-center gap-0 max-w-2xl">
                {scene.entries?.map((entry, i) => (
                  <motion.div
                    key={`${activeIndex}-${i}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    style={{ borderTop: `1px solid ${dark ? "rgba(254,243,226,0.14)" : "rgba(16,11,7,0.12)"}` }}
                    className="py-5"
                  >
                    <h3
                      className="text-xl md:text-3xl lg:text-4xl leading-[1.18] font-normal"
                      style={{ fontFamily: "Sentient, Georgia, serif", fontWeight: 200, color: ink }}
                    >
                      {entry.line}
                    </h3>
                    <p
                      className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase mt-3"
                      style={{ color: tagColor, fontFamily: "ui-monospace, monospace" }}
                    >
                      <entry.icon className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.25} />
                      {entry.tag}
                    </p>
                  </motion.div>
                ))}
                <div style={{ borderTop: `1px solid ${dark ? "rgba(254,243,226,0.14)" : "rgba(16,11,7,0.12)"}` }} />
                {scene.close && (
                  <p
                    className="mt-8 text-lg md:text-2xl italic"
                    style={{ fontFamily: "Sentient, Georgia, serif", fontWeight: 300, color: accent }}
                  >
                    {scene.close}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Close: the spine releases, the last line centers and holds */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-40"
        style={{ background: "var(--tc-cream)" }}
      >
        <h2
          className="text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.02em] max-w-3xl font-normal"
          style={{ fontFamily: "Sentient, Georgia, serif", fontWeight: 200, color: "var(--tc-obsidian)" }}
        >
          Everything else keeps changing.
        </h2>
        <p
          className="text-3xl md:text-5xl lg:text-6xl italic leading-[1.15] tracking-[-0.02em] max-w-3xl mt-1"
          style={{ fontFamily: "Sentient, Georgia, serif", fontWeight: 300, color: "var(--tc-ember)" }}
        >
          This does not.
        </p>
        <Link
          href="/"
          className="mt-14 text-sm underline underline-offset-4 decoration-[var(--tc-ash)] transition-colors"
          style={{ color: "var(--tc-obsidian)" }}
        >
          Back to Theta Sound
        </Link>
        <div
          className="absolute bottom-10 text-[10px] tracking-[0.24em] uppercase"
          style={{ color: "var(--tc-ash)", fontFamily: "ui-monospace, monospace" }}
        >
          Theta Sound &middot; TWS &middot; Voice OS
        </div>
      </section>
    </main>
  );
}
