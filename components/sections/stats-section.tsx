"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  {
    value: "15+",
    label: "Integrations",
    description: "Works with the apps you already use",
    count: 15,
  },
  {
    value: "0",
    label: "Screens",
    description: "Everything happens by voice",
    count: 0,
  },
  {
    value: "∞",
    label: "Possibilities",
    description: "It adapts to how you use it",
    count: null,
  },
];

function AnimatedNumber({ value, isInView }: { value: number; isInView: boolean }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, motionValue, value]);

  return <motion.span>{rounded}</motion.span>;
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/20 to-white" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Built for Future.
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            <span className="block mb-2">No screens // No friction // No distraction.</span>
            <span className="block font-medium text-foreground/90">We put the power back into your control</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >
              <motion.div 
                className="glass rounded-3xl p-12 text-center border border-red-500/10 hover:border-red-500/30 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative">
                  <div className="text-7xl md:text-8xl font-light gradient-text mb-4">
                    {stat.count !== null ? (
                      <>
                        <AnimatedNumber value={stat.count} isInView={isInView} />
                        {stat.value.includes('+') && '+'}
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <motion.div 
                    className="text-2xl font-medium text-foreground mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >
                    {stat.label}
                  </motion.div>
                  <motion.div 
                    className="text-foreground/60"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.7 + index * 0.15 }}
                  >
                    {stat.description}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
