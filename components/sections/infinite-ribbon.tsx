"use client";

import { motion } from "framer-motion";

const features = [
  
  "PERSONALIZED",
  "INTUITIVE",
  "ADAPTIVE",
  "IMMERSIVE",
];

export function InfiniteRibbon() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-16 border-y border-border bg-gradient-to-r from-red-50/50 via-white to-orange-50/50"
    >
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate the array to create seamless loop */}
          {[...features, ...features, ...features].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 text-2xl md:text-3xl font-light"
              whileHover={{ scale: 1.1, color: "#dd0303" }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-foreground/40">{feature}</span>
              <span className="text-red-500">•</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
