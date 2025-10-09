"use client";

import { motion } from "framer-motion";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Holographic Card */}
          <div className="relative group">
            {/* Animated Border */}
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Card Content */}
            <motion.div 
              className="relative glass rounded-3xl p-12 md:p-16 border border-red-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Floating Orbs */}
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative text-center space-y-8">
                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  <motion.div 
                    className="w-20 h-20 mx-auto flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/theta-symbol.png"
                      alt="Theta"
                      width={80}
                      height={80}
                      className="w-20 h-20 drop-shadow-2xl"
                    />
                  </motion.div>
                </motion.div>

                {/* Heading */}
                <div>
                  <motion.h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Ready to experience
                  </motion.h2>
                  <motion.h2 
                    className="text-4xl md:text-5xl lg:text-6xl gradient-text-animated font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    the future of sound?
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Join thousands on the waitlist for early access to Theta Sound
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <WaitlistDialog triggerClassName="group relative px-10 py-5 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white rounded-full font-semibold text-lg shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all duration-300" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
