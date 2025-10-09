"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { Brain, Zap, Heart, Sparkles } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Brain,
    title: "AI Understanding",
    description: "Our AI analyzes your emotional state in real-time to curate the perfect audio experience.",
  },
  {
    icon: Heart,
    title: "Emotion Detection",
    description: "Advanced sensors detect subtle changes in your mood and adapt instantly.",
  },
  {
    icon: Zap,
    title: "Instant Adaptation",
    description: "Seamlessly transitions between moods without interrupting your experience.",
  },
  {
    icon: Sparkles,
    title: "Personalized",
    description: "Learns your preferences over time to deliver increasingly perfect matches.",
  },
];

export function FeaturesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#dd030308_0%,transparent_65%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
                Intelligent by design
              </h2>
              <p className="text-xl text-foreground/70">
                Every feature is crafted to create the most natural audio experience possible.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group"
                >
                  <div className="flex gap-4 p-6 rounded-2xl hover:bg-red-50/50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Video with 3D Effect */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-orange-500/30 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Video Container */}
              <motion.div 
                className="relative glass rounded-3xl p-4 border border-red-500/10 overflow-hidden"
                whileHover={{ borderColor: "rgba(221, 3, 3, 0.3)" }}
              >
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <source src="/video_theta.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
