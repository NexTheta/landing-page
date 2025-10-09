"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroRippleExperiment() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf8f5]">
      {/* Interactive Ripple Background - MUST be interactive */}
      <div className="absolute inset-0 z-0">
        <BackgroundRippleEffect rows={12} cols={30} cellSize={48} />
      </div>
      
      {/* Gradient overlay for Theta branding */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5 pointer-events-none z-[1]" />
      
      {/* Content - Allow clicks to pass through to ripple background */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 text-center pointer-events-none">
        {/* Theta Symbol with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          className="flex justify-center mb-12"
        >
          <motion.div
            className="relative pointer-events-auto"
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 blur-3xl bg-red-500/30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <Image
              src="/images/theta-symbol.png"
              alt="Theta"
              width={200}
              height={200}
              className="relative w-32 h-32 md:w-48 md:h-48 lg:w-52 lg:h-52 drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          style={{ fontFamily: "Sentient, system-ui" }}
        >
          <span className="block font-light text-neutral-900">Creating an</span>
          <span className="block gradient-text-animated font-bold">extension of you</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Click anywhere to create ripples. Experience the future of interactive design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Animated frame */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-red-500"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <WaitlistDialog triggerClassName="relative px-10 py-4 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300 border-2 border-red-400/50" />
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 backdrop-blur-xl bg-white/60 border border-neutral-200 rounded-xl font-semibold text-lg text-neutral-900 hover:bg-white/80 transition-all duration-300"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Instruction hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-16 text-sm text-neutral-500 pointer-events-auto"
        >
          💡 Click anywhere on the background to create ripples
        </motion.p>
      </div>
    </section>
  );
}
