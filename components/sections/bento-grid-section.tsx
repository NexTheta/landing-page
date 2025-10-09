"use client";

import { motion } from "framer-motion";
import { Music, Headphones, Waves, Radio, Mic, Volume2 } from "lucide-react";

const bentoItems = [
  {
    title: "Smart Playlists",
    description: "AI-curated music that matches your emotional state",
    icon: Music,
    className: "col-span-2 row-span-2",
    gradient: "from-red-500/10 to-orange-500/10",
  },
  {
    title: "Voice Control",
    description: "Hands-free operation",
    icon: Mic,
    className: "col-span-1 row-span-1",
    gradient: "from-pink-500/10 to-red-500/10",
  },
  {
    title: "Spatial Audio",
    description: "Immersive 3D sound",
    icon: Headphones,
    className: "col-span-1 row-span-1",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    title: "Mood Waves",
    description: "Visualize your emotional journey through sound",
    icon: Waves,
    className: "col-span-1 row-span-2",
    gradient: "from-red-500/10 to-pink-500/10",
  },
  {
    title: "Live Radio",
    description: "Curated stations worldwide",
    icon: Radio,
    className: "col-span-2 row-span-1",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    title: "Adaptive Volume",
    description: "Auto-adjusts to your environment",
    icon: Volume2,
    className: "col-span-1 row-span-1",
    gradient: "from-red-500/10 to-orange-500/10",
  },
];

export function BentoGridSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Everything you need
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Powerful features designed for the modern audio experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.02,
                rotateZ: 1,
                transition: { duration: 0.2 }
              }}
              className={`group ${item.className}`}
            >
              <div className={`relative h-full glass rounded-3xl p-8 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden cursor-pointer`}>
                {/* Gradient Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={false}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <motion.div 
                      className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-7 h-7" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-medium text-foreground mb-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-foreground/70">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <motion.div 
                    className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
