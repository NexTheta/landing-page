"use client";

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "./mobile-menu"
import { WaitlistDialog } from "@/components/waitlist-dialog"
import { motion, useScroll, useTransform } from "framer-motion"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  // Dynamic blur and opacity based on scroll
  const navHeight = useTransform(scrollY, [0, 100], [80, 64])
  const navBlur = useTransform(scrollY, [0, 100], [20, 30])
  const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.85])
  const shadowOpacity = useTransform(scrollY, [0, 100], [0.05, 0.15])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <motion.header 
        style={{ 
          height: navHeight,
        }}
        className="mx-auto max-w-6xl relative overflow-hidden rounded-2xl"
      >
        {/* TECHNIQUE 1: Multi-Layer Glass Background */}
        <motion.div
          style={{
            backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
            backgroundColor: useTransform(navOpacity, (v) => `rgba(255, 255, 255, ${v})`),
            boxShadow: useTransform(
              shadowOpacity,
              (v) => `0 8px 32px rgba(10, 10, 10, ${v}), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.05)`
            ),
          }}
          className="absolute inset-0 border border-neutral-200/50 rounded-2xl"
        />

        {/* TECHNIQUE 2: Frosted Glass Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none rounded-2xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* TECHNIQUE 3: Animated Gradient Border Glow */}
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundSize: '200% 100%' }}
        />

        {/* Content Layer */}
        <div className="relative h-full flex items-center justify-between px-6 lg:px-8">
          {/* Logo with Glow */}
          <Link href="/" className="flex items-center gap-2 group relative z-10 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative"
            >
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-red-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/theta-symbol.png"
                alt="Theta Sound"
                width={44}
                height={44}
                className="h-11 w-11 drop-shadow-lg relative z-10"
                priority
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent max-md:hidden"
            >
              Theta
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {[
              { name: "Features", href: "#features" },
              { name: "Mission", href: "#mission" },
              { name: "Pricing", href: "#pricing" },
              { name: "Contact", href: "#contact" }
            ].map((item, index) => (
              <NavLink key={item.name} href={item.href} delay={index * 0.1}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <MagneticButton />
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </motion.header>
    </motion.div>
  )
}

// NavLink Component with Glass Effect
function NavLink({ href, children, delay = 0 }: { href: string; children: React.ReactNode; delay?: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-4 py-2 text-[15px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors group rounded-lg"
    >
      <span className="relative z-10">{children}</span>
      
      {/* Glass Background on Hover */}
      <motion.span
        className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-lg shadow-sm border border-white/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.95 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Shine Effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated Underline */}
      <motion.span
        className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </motion.a>
  )
}

// Magnetic Button with Enhanced Glass
function MagneticButton() {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative group"
    >
      {/* Outer Glow Layer */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-red-500/20 via-red-600/20 to-red-500/20 rounded-xl blur-xl"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <WaitlistDialog
        triggerClassName="relative px-6 py-3 rounded-xl font-semibold text-white text-sm
          bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-[length:200%_100%]
          hover:bg-[position:100%_0] transition-all duration-500
          shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50
          border border-red-400/30
          before:absolute before:inset-0 before:rounded-xl before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
      />
    </motion.div>
  )
}
