"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";

// Playground page for experimental components
export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState<"personas" | "actions" | "realtime" | "matrix">("matrix");

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      
      {/* Playground Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text-animated">
            Theta Playground
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            Experimental components for the landing page
          </p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("matrix")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "matrix"
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white/60 text-neutral-700 hover:bg-white"
              }`}
            >
              💊 Matrix Comparison
            </button>
            <button
              onClick={() => setActiveTab("personas")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "personas"
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white/60 text-neutral-700 hover:bg-white"
              }`}
            >
              Personas Gallery
            </button>
            <button
              onClick={() => setActiveTab("actions")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "actions"
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white/60 text-neutral-700 hover:bg-white"
              }`}
            >
              Actions, Not Apps
            </button>
            <button
              onClick={() => setActiveTab("realtime")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "realtime"
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white/60 text-neutral-700 hover:bg-white"
              }`}
            >
              Real-Time Intelligence
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {activeTab === "matrix" && <MatrixComparison key="matrix" />}
        {activeTab === "personas" && <PersonasGallery key="personas" />}
        {activeTab === "actions" && <ActionsSection key="actions" />}
        {activeTab === "realtime" && <RealtimeSection key="realtime" />}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// MATRIX COMPARISON: BLUE PILL VS RED PILL
// ============================================
function MatrixComparison() {
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios = [
    {
      task: "Book a cab to the office",
      bluePill: {
        title: "Without Theta (Blue Pill 💙)",
        steps: [
          "📱 Unlock your phone",
          "🔍 Find Uber/Ola app",
          "📍 Enter destination",
          "💰 Compare prices manually",
          "⏰ Check estimated time",
          "👆 Tap confirm",
          "⏱️ Wait for confirmation",
          "📲 Check driver details"
        ],
        time: "2 min 30 sec",
        taps: "12 taps",
        effort: "High cognitive load"
      },
      redPill: {
        title: "With Theta (Red Pill ❤️)",
        steps: [
          "💬 'Get me a cab to office'",
          "✓ Done"
        ],
        time: "3 seconds",
        taps: "0 taps",
        effort: "Zero friction",
        agents: ["Location Agent", "CAB Agent", "Price Agent", "Booking Agent"]
      }
    },
    {
      task: "Create a Bollywood party playlist",
      bluePill: {
        title: "Without Theta (Blue Pill 💙)",
        steps: [
          "📱 Open Spotify",
          "➕ Create new playlist",
          "✏️ Name it",
          "🔍 Search '2010s Bollywood'",
          "📜 Scroll through results",
          "➕ Add songs one by one",
          "🔀 Arrange order",
          "💾 Save playlist"
        ],
        time: "8 minutes",
        taps: "30+ taps",
        effort: "Tedious manual work"
      },
      redPill: {
        title: "With Theta (Red Pill ❤️)",
        steps: [
          "💬 'Create 2010s Bollywood party playlist'",
          "✓ Done - 30 songs curated"
        ],
        time: "2.3 seconds",
        taps: "0 taps",
        effort: "Instant gratification",
        agents: ["Music Agent", "Taste Agent", "Curation Agent", "Spotify Agent"]
      }
    },
    {
      task: "Plan evening with dinner & movie",
      bluePill: {
        title: "Without Theta (Blue Pill 💙)",
        steps: [
          "📅 Check your calendar",
          "🌤️ Check weather app",
          "🔍 Google restaurant options",
          "📖 Read reviews on Zomato",
          "📞 Call for reservation",
          "🎬 Check movie timings",
          "🎟️ Book tickets on BookMyShow",
          "🚗 Plan transport timing"
        ],
        time: "15+ minutes",
        taps: "50+ taps",
        effort: "Multiple apps, mental juggling"
      },
      redPill: {
        title: "With Theta (Red Pill ❤️)",
        steps: [
          "💬 'Plan my evening'",
          "✓ Dinner at 7pm (reserved)",
          "✓ Movie at 9:30pm (booked)",
          "✓ Cab scheduled for 6:45pm"
        ],
        time: "2.1 seconds",
        taps: "0 taps",
        effort: "Just live your life",
        agents: ["Calendar", "Weather", "Restaurant", "Movie", "CAB", "Payment"]
      }
    },
    {
      task: "Help with feeling lonely",
      bluePill: {
        title: "Without Theta (Blue Pill 💙)",
        steps: [
          "😔 Feel the loneliness",
          "📱 Scroll through contacts",
          "🤔 Wonder who to reach out to",
          "😰 Worry about bothering them",
          "⏰ Forget to follow through",
          "📱 Go back to social media",
          "😞 Feel worse"
        ],
        time: "Never resolved",
        taps: "Endless scrolling",
        effort: "Emotional exhaustion"
      },
      redPill: {
        title: "With Theta (Red Pill ❤️)",
        steps: [
          "💬 'I'm feeling lonely'",
          "🤗 'Haven't talked to Alex in 2 weeks'",
          "💡 'He's going through job change'",
          "✉️ Message drafted & sent",
          "😊 Connection initiated"
        ],
        time: "1.2 seconds",
        taps: "0 taps",
        effort: "Genuine human connection",
        agents: ["Emotion", "Social", "Context", "Communication", "Relationship"]
      }
    },
    {
      task: "Prepare for job interview",
      bluePill: {
        title: "Without Theta (Blue Pill 💙)",
        steps: [
          "🔍 Google company",
          "📄 Read their website",
          "📰 Check recent news",
          "💼 Review job description",
          "📝 Prepare answers manually",
          "😰 Practice alone in mirror",
          "🤔 Still feel unprepared"
        ],
        time: "3+ hours",
        taps: "100+ taps",
        effort: "Stressful & incomplete"
      },
      redPill: {
        title: "With Theta (Red Pill ❤️)",
        steps: [
          "💬 'Prepare for tomorrow's interview'",
          "✓ Company deep dive ready",
          "✓ Role analysis complete",
          "✓ STAR answers drafted",
          "✓ Mock interview conducted",
          "✓ Confidence boosted"
        ],
        time: "6.1 seconds",
        taps: "0 taps",
        effort: "Walk in confident",
        agents: ["Research", "Role", "Resume", "Question", "Answer", "Practice", "Confidence"]
      }
    }
  ];

  const scenario = scenarios[selectedScenario];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-6 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-block mb-8"
          >
            <div className="flex items-center gap-4 text-6xl">
              <span className="filter drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">💙</span>
              <span className="text-4xl text-neutral-400">vs</span>
              <span className="filter drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">❤️</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            With <span className="gradient-text-animated">Theta</span> vs Without Theta
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Experience the shift from managing tasks to simply speaking them into existence.
          </p>
        </div>

        {/* Background Hand Elements with Low Opacity */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[200px] opacity-[0.03] select-none">
            ✋
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] opacity-[0.03] select-none rotate-12">
            🤚
          </div>
        </div>

        {/* Scenario Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((s, i) => (
            <button
              key={i}
              onClick={() => setSelectedScenario(i)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                selectedScenario === i
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30"
                  : "bg-white/80 hover:bg-white text-neutral-700 border border-neutral-200"
              }`}
            >
              {s.task}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-neutral-200">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
                    <th className="py-5 px-6 text-left text-lg font-bold w-1/3">Aspect</th>
                    <th className="py-5 px-6 text-left text-lg font-bold w-1/3">
                      <div className="flex items-center gap-2">
                        <span>💙</span>
                        <span>Without Theta</span>
                      </div>
                    </th>
                    <th className="py-5 px-6 text-left text-lg font-bold w-1/3">
                      <div className="flex items-center gap-2">
                        <span>❤️</span>
                        <span>With Theta</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Time Row */}
                  <motion.tr
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-neutral-900">⏱️ Time Required</td>
                    <td className="py-5 px-6 text-neutral-600">{scenario.bluePill.time}</td>
                    <td className="py-5 px-6 text-neutral-900 font-semibold">{scenario.redPill.time}</td>
                  </motion.tr>

                  {/* Taps Row */}
                  <motion.tr
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-neutral-900">👆 Taps & Clicks</td>
                    <td className="py-5 px-6 text-neutral-600">{scenario.bluePill.taps}</td>
                    <td className="py-5 px-6 text-neutral-900 font-semibold">{scenario.redPill.taps}</td>
                  </motion.tr>

                  {/* Steps Row */}
                  <motion.tr
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-neutral-900">📋 Steps Involved</td>
                    <td className="py-5 px-6">
                      <ul className="space-y-2 text-neutral-600 text-sm">
                        {scenario.bluePill.steps.slice(0, 3).map((step, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-0.5">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                        {scenario.bluePill.steps.length > 3 && (
                          <li className="text-neutral-400 italic text-xs">
                            + {scenario.bluePill.steps.length - 3} more steps...
                          </li>
                        )}
                      </ul>
                    </td>
                    <td className="py-5 px-6">
                      <ul className="space-y-2 text-neutral-900 text-sm">
                        {scenario.redPill.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 font-medium">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </motion.tr>

                  {/* Experience Row */}
                  <motion.tr
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-neutral-900">🧠 Cognitive Load</td>
                    <td className="py-5 px-6 text-neutral-600">{scenario.bluePill.effort}</td>
                    <td className="py-5 px-6 text-neutral-900 font-semibold">{scenario.redPill.effort}</td>
                  </motion.tr>

                  {/* Multi-Agent Orchestration Row */}
                  {scenario.redPill.agents && (
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-r from-red-50/50 to-red-100/30 hover:from-red-50 hover:to-red-100/50 transition-colors"
                    >
                      <td className="py-5 px-6 font-bold text-neutral-900">🤖 AI Agents Working</td>
                      <td className="py-5 px-6 text-neutral-400 italic">None</td>
                      <td className="py-5 px-6">
                        <div className="flex flex-wrap gap-2">
                          {scenario.redPill.agents.map((agent, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-red-500/20 text-red-900 rounded-full text-xs font-semibold border border-red-300"
                            >
                              {agent}
                            </span>
                          ))}
                        </div>
                      </td>
                    </motion.tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Theta isn't another assistant — it's your <span className="gradient-text-animated">Active Second Brain.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105">
              💙 Stay in the Matrix
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl font-semibold shadow-lg shadow-red-500/30 transition-all hover:scale-105">
              ❤️ Join Theta Waitlist
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ============================================
// SECTION 1: PERSONAS GALLERY
// ============================================
function PersonasGallery() {
  const [activePersona, setActivePersona] = useState("buddy");

  const personas = [
    {
      id: "buddy",
      name: "Buddy",
      icon: "👔",
      color: "#0066FF",
      personality: "Casual, Friendly, Reliable",
      description: "Your everyday companion who understands your vibe and keeps things chill.",
      capabilities: [
        "Casual conversations",
        "Daily reminders",
        "Quick questions",
        "Friendly advice"
      ],
      example: "Hey! You've got that dentist appointment in 30 minutes. Want me to navigate you there?"
    },
    {
      id: "speaker",
      name: "Public Speaker",
      icon: "🎤",
      color: "#9B4DCA",
      personality: "Confident, Articulate, Professional",
      description: "Helps you communicate with clarity and confidence in any professional setting.",
      capabilities: [
        "Presentation prep",
        "Speech writing",
        "Meeting facilitation",
        "Professional communication"
      ],
      example: "I've prepared your keynote talking points and structured them for maximum impact. Ready when you are."
    },
    {
      id: "conversationalist",
      name: "Confident Conversationalist",
      icon: "💬",
      color: "#FF6B35",
      personality: "Socially Aware, Empathetic, Engaging",
      description: "Helps you navigate social situations with ease and genuine connection.",
      capabilities: [
        "Social cue reading",
        "Conversation starters",
        "Topic suggestions",
        "Relationship insights"
      ],
      example: "Sarah just mentioned her new job - perfect time to ask about her transition. She seemed excited!"
    },
    {
      id: "work",
      name: "Work Theta",
      icon: "🎯",
      color: "#10B981",
      personality: "Focused, Efficient, Strategic",
      description: "Your productivity partner who keeps you on track and ahead of deadlines.",
      capabilities: [
        "Task prioritization",
        "Email management",
        "Meeting scheduling",
        "Goal tracking"
      ],
      example: "Your 3pm with the design team is in 10 minutes. I've synced the latest mockups to the shared drive."
    },
    {
      id: "custom",
      name: "Custom Theta",
      icon: "✨",
      color: "#EC4899",
      personality: "Whatever You Need",
      description: "Create a Theta persona tailored exactly to your unique needs and preferences.",
      capabilities: [
        "Fully customizable",
        "Your personality traits",
        "Your priorities",
        "Your communication style"
      ],
      example: "Tell me what you need, and I'll become exactly that version of your assistant."
    }
  ];

  const active = personas.find(p => p.id === activePersona) || personas[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-6 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            One You. Many Versions.
          </h2>
          <p className="text-xl text-neutral-600">
            Choose the Theta persona that fits your moment
          </p>
        </div>

        {/* Persona Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(persona.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                activePersona === persona.id
                  ? "text-white shadow-xl scale-105"
                  : "bg-white/60 text-neutral-700 hover:bg-white hover:scale-105"
              }`}
              style={{
                backgroundColor: activePersona === persona.id ? persona.color : undefined
              }}
            >
              <span className="text-2xl">{persona.icon}</span>
              {persona.name}
            </button>
          ))}
        </div>

        {/* Active Persona Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.95, rotateX: -10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotateX: 10 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
              style={{ backgroundColor: active.color }}
            />

            {/* Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-neutral-200">
              <div className="flex items-start gap-6 mb-8">
                <div
                  className="text-6xl w-20 h-20 flex items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${active.color}20` }}
                >
                  {active.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{active.name}</h3>
                  <p className="text-lg text-neutral-600 italic">{active.personality}</p>
                </div>
              </div>

              <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
                {active.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span style={{ color: active.color }}>●</span>
                    Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {active.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-700">
                        <span className="text-green-500">✓</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span style={{ color: active.color }}>●</span>
                    Example Interaction
                  </h4>
                  <div
                    className="p-4 rounded-xl text-neutral-700 italic leading-relaxed"
                    style={{ backgroundColor: `${active.color}10` }}
                  >
                    "{active.example}"
                  </div>
                </div>
              </div>

              <button
                className="w-full py-4 rounded-xl font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                style={{ backgroundColor: active.color }}
              >
                Activate {active.name}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

// ============================================
// SECTION 2: ACTIONS, NOT APPS
// ============================================
function ActionsSection() {
  const [activeAction, setActiveAction] = useState(0);

  const actions = [
    {
      command: "Get me a cab to the office",
      steps: [
        { text: "Checking your location...", icon: "📍", time: "0.2s" },
        { text: "Searching available cabs...", icon: "🚗", time: "0.5s" },
        { text: "Comparing prices (Uber, Ola, Rapido)...", icon: "💰", time: "0.8s" },
        { text: "Booking best option...", icon: "✓", time: "1.2s" }
      ],
      result: "Cab booked! Arriving in 4 minutes. ₹180 via Ola.",
      timeSaved: "2 minutes, 8 taps"
    },
    {
      command: "Create a 2010s Bollywood party playlist",
      steps: [
        { text: "Analyzing your music taste...", icon: "🎵", time: "0.3s" },
        { text: "Searching 2010s Bollywood hits...", icon: "🔍", time: "0.7s" },
        { text: "Balancing party & romantic songs...", icon: "⚖️", time: "1.1s" },
        { text: "Creating playlist...", icon: "✓", time: "1.5s" }
      ],
      result: "Playlist created with 30 songs! Now playing on Spotify.",
      timeSaved: "5 minutes, 15 taps"
    },
    {
      command: "Schedule team standup tomorrow at 10am",
      steps: [
        { text: "Checking team calendars...", icon: "📅", time: "0.4s" },
        { text: "Finding common availability...", icon: "⏰", time: "0.7s" },
        { text: "Creating meeting with Gmeet link...", icon: "📹", time: "1.0s" },
        { text: "Sending invites...", icon: "✓", time: "1.3s" }
      ],
      result: "Meeting scheduled! All 5 team members notified.",
      timeSaved: "3 minutes, 12 taps"
    },
    {
      command: "What's 2847 × 365 ÷ 12 + 1500?",
      steps: [
        { text: "Calculating...", icon: "🧮", time: "0.1s" },
        { text: "Verifying result...", icon: "✓", time: "0.2s" }
      ],
      result: "87,768.75",
      timeSaved: "30 seconds vs calculator app"
    }
  ];

  const action = actions[activeAction];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-6 pb-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Actions, Not Apps
          </h2>
          <p className="text-xl text-neutral-600">
            Theta doesn't just talk. It does.
          </p>
        </div>

        {/* Action Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {actions.map((a, i) => (
            <button
              key={i}
              onClick={() => setActiveAction(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeAction === i
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-white/60 text-neutral-700 hover:bg-white hover:scale-105"
              }`}
            >
              {a.command.split(" ").slice(0, 3).join(" ")}...
            </button>
          ))}
        </div>

        {/* Action Demo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAction}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-neutral-200"
          >
            {/* Command */}
            <div className="mb-8">
              <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-4">
                💬 "{action.command}"
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {action.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl"
                >
                  <span className="text-3xl">{step.icon}</span>
                  <span className="flex-1 text-neutral-700">{step.text}</span>
                  <span className="text-sm text-neutral-500 font-mono">{step.time}</span>
                </motion.div>
              ))}
            </div>

            {/* Result */}
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">✓</span>
                <span className="font-bold text-green-800 text-lg">Done!</span>
              </div>
              <p className="text-neutral-700 text-lg">{action.result}</p>
            </div>

            {/* Time Saved */}
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
              <span className="text-neutral-600">Time saved:</span>
              <span className="text-red-600 font-bold text-lg">{action.timeSaved}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

// ============================================
// SECTION 3: REAL-TIME INTELLIGENCE
// ============================================
function RealtimeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-6 pb-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Real-Time Intelligence
          </h2>
          <p className="text-xl text-neutral-600">
            Phone call latency. Human-like conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Speed */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-neutral-200">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-neutral-600 mb-4">
              Response time under 500ms - faster than you can blink
            </p>
            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
              <div className="text-4xl font-bold text-yellow-600">&lt;500ms</div>
              <div className="text-sm text-neutral-600">Average response time</div>
            </div>
          </div>

          {/* Context Aware */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-neutral-200">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-3">Context Aware</h3>
            <p className="text-neutral-600 mb-4">
              Remembers everything from your conversations
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span> Your preferences
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span> Your schedule
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span> Your relationships
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span> Your goals
              </div>
            </div>
          </div>

          {/* Always Learning */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-neutral-200">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-3">Always Learning</h3>
            <p className="text-neutral-600 mb-4">
              Gets smarter with every interaction
            </p>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="text-sm text-neutral-700">
                The more you talk, the better Theta understands your unique needs, style, and preferences.
              </div>
            </div>
          </div>

          {/* Everywhere */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-neutral-200">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-3">Works Anywhere</h3>
            <p className="text-neutral-600 mb-4">
              Not limited to your home or specific devices
            </p>
            <div className="flex flex-wrap gap-2">
              {["Walking", "Driving", "Office", "Gym", "Travel"].map((place) => (
                <span
                  key={place}
                  className="px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-700"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* AWS Infrastructure */}
        <div className="mt-8 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-3xl p-8 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">🖥️</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Powered by AWS</h3>
              <p className="text-neutral-300">
                GPU-accelerated servers for real-time processing
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm text-neutral-400">Uptime</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">Low</div>
              <div className="text-sm text-neutral-400">Latency</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">Secure</div>
              <div className="text-sm text-neutral-400">Encrypted</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
