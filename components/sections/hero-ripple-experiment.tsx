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
          className="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight"
          style={{ fontFamily: "Sentient, system-ui" }}
        >
          <span className="block font-light text-neutral-900 mb-2">Your personal executive assistant</span>
          <span className="block gradient-text-animated font-bold">that works for you</span>
        </motion.h1>

        {/* Subtitle - Your Voice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-3">
            No screen to check.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-neutral-700 font-medium">
            No app to open.
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Theta listens, comprehends, and executes the cumbersome, operational tasks creating friction in your daily life — so you can focus on what you're best at, the work you actually enjoy.
        </motion.p>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="relative group"
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="relative block px-8 py-3 backdrop-blur-xl bg-white/90 border-2 border-neutral-300 rounded-full text-base font-bold text-neutral-800 shadow-lg group-hover:border-red-400 group-hover:shadow-2xl group-hover:shadow-red-200/50 transition-all duration-300">
              In-Ear AI Assistant
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="relative group"
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="relative block px-8 py-3 backdrop-blur-xl bg-white/90 border-2 border-neutral-300 rounded-full text-base font-bold text-neutral-800 shadow-lg group-hover:border-purple-400 group-hover:shadow-2xl group-hover:shadow-purple-200/50 transition-all duration-300">
              All-Day Comfort Fit
            </span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center pointer-events-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Animated frame */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-red-500"
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
            <WaitlistDialog triggerClassName="relative px-12 py-5 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-red-500/40 hover:shadow-2xl hover:shadow-red-500/60 transition-all duration-300 border-2 border-red-400/50" />
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 backdrop-blur-xl bg-white/80 border-2 border-neutral-300 rounded-2xl font-bold text-lg text-neutral-900 hover:bg-white hover:border-neutral-400 transition-all duration-300 shadow-lg hover:shadow-xl"
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
