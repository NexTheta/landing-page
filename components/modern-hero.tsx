"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import Link from "next/link";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Sparkles, Play } from "lucide-react";

export function ModernHero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden">
      {/* Shader Animation Background */}
      <ShaderAnimation />

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
          <Image
            src="/images/theta-symbol.png"
            alt="Theta Sound"
            width={160}
            height={160}
            priority
            className="pointer-events-none select-none w-32 h-auto md:w-40 animate-theta-pulse"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="eyebrow text-base tracking-[0.3em] flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          DESIGN–TECH REBELLION
        </motion.p>

        {/* Main Headline */}
        <AnimatedGradientText className="mt-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-sentient font-extralight leading-[0.9] tracking-tight">
          Liberate Your<br />
          <span className="italic font-light">Senses.</span>
        </AnimatedGradientText>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-mono text-lg sm:text-xl md:text-2xl text-white/70 text-pretty mt-10 max-w-[800px] mx-auto leading-relaxed"
        >
          Screenless. Emotion-first. Presence over pings.{" "}
          <span className="text-white font-semibold">Theta Sound</span> is a
          voice-forward wearable that moves with you, not against you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <WaitlistDialog
            triggerClassName="bg-gradient-to-r from-[#FF3366] to-[#9D4EDD] hover:opacity-90 transition-all duration-300 text-white font-semibold px-10 py-6 text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,51,102,0.5)] hover:scale-105"
          />
          
          <Link href="#demo">
            <Button
              variant="outline"
              className="border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white font-semibold px-10 py-6 text-lg transition-all duration-300 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00F5FF] animate-pulse" />
            <span>10,000+ Waitlist</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#9D4EDD] animate-pulse" />
            <span>50+ Beta Testers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FFD60A] animate-pulse" />
            <span>YC-Ready Innovation</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
