"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Bell, HeartPulse, ShieldAlert, Mic, CheckCircle2 } from "lucide-react";

const demos = [
  {
    key: "ride",
    tab: "Book a Ride",
    icon: Car,
    said: "Get me a cab to the airport",
    reply: "Booked! Your Uber is 4 minutes away — ₹340, arriving 6:45am.",
  },
  {
    key: "reminder",
    tab: "Daily Reminders",
    icon: Bell,
    said: "Remind me to call mom when I get home",
    reply: "Got it. I'll remind you the moment you walk through the door.",
  },
  {
    key: "fitness",
    tab: "Fitness Check-in",
    icon: HeartPulse,
    said: "How's my day looking?",
    reply: "6,200 steps so far, heart rate steady at 72bpm. Two meetings left today.",
  },
  {
    key: "panic",
    tab: "Emergency Alert",
    icon: ShieldAlert,
    said: "Hold to alert — I need help",
    reply: "Alert sent to Mom and Alex with your live location.",
  },
];

export function FunctionDemoSection() {
  const [active, setActive] = useState(demos[0].key);
  const activeDemo = demos.find((d) => d.key === active) ?? demos[0];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/20 to-white" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Just say it.
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            No screen to tap through. Talk naturally and Theta Sound handles the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Tab list */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {demos.map((demo) => (
              <button
                key={demo.key}
                onClick={() => setActive(demo.key)}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 border ${
                  active === demo.key
                    ? "bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/30"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-red-300"
                }`}
              >
                <demo.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">{demo.tab}</span>
              </button>
            ))}
          </div>

          {/* Conversation preview */}
          <div className="relative min-h-[280px] rounded-3xl glass border border-red-500/10 p-8 md:p-10 overflow-hidden">
            <motion.div
              key={activeDemo.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* Spoken command bubble */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                  <Mic className="w-5 h-5" />
                </div>
                <div className="bg-neutral-100 rounded-2xl rounded-tl-sm px-5 py-3 max-w-md">
                  <p className="text-foreground font-medium">"{activeDemo.said}"</p>
                </div>
              </div>

              {/* Theta's response */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-red-500 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-md">
                  <p className="font-medium">{activeDemo.reply}</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
