"use client";

import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "./mobile-menu"
import { WaitlistDialog } from "@/components/waitlist-dialog"
import { motion } from "framer-motion"

export const Header = () => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <header className="glass border-b border-white/10 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/theta-symbol.png"
              alt="Theta Sound"
              width={40}
              height={40}
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          <nav className="max-lg:hidden flex items-center gap-10">
            {[
              { name: "Features", href: "#features" },
              { name: "Mission", href: "#mission" },
              { name: "Pricing", href: "#pricing" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-foreground/70 transition-colors hover:text-red-500 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="max-lg:hidden">
            <WaitlistDialog triggerClassName="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium text-sm shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105" />
          </div>

          <MobileMenu />
        </div>
      </header>
    </motion.div>
  )
}
