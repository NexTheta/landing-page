"use client";

import { motion } from "framer-motion";
import { Car, MapPin, Heart, ShieldAlert, Mic, Ear } from "lucide-react";
import { AmicroFeatureCard } from "@/components/ui/amicro-feature-card";

const bentoItems = [
  {
    title: "Book a Cab",
    description: "Say where you're going and Theta books it with the ride service you already use.",
    icon: Car,
  },
  {
    title: "Voice Commands",
    description: "Speak normally. There's no list of phrases to memorize.",
    icon: Mic,
  },
  {
    title: "Track Fitness",
    description: "The biometric sensors keep track of your fitness through the day.",
    icon: Heart,
  },
  {
    title: "Memory Geo-Pins",
    description: "Reminders tied to a place, so they go off when you actually get there.",
    icon: MapPin,
  },
  {
    title: "Panic Detection",
    description: "Alerts your emergency contacts when you need help.",
    icon: ShieldAlert,
  },
  {
    title: "All-Day Wear",
    description: "Made to stay comfortable in your ear from morning to night.",
    icon: Ear,
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
            What it can do
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everyday errands and safety features, all handled by voice.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AmicroFeatureCard
                icon={item.icon}
                label={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
