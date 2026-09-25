"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Only real, working destinations. Add categories back once real pages
// (Privacy, Terms, Blog, etc.) and social accounts actually exist —
// a dead link is a worse signal, to both crawlers and visitors, than no link.
const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Mission", href: "#mission" },
  ],
  Company: [
    { name: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Animated Background Boxes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 grid grid-cols-12 gap-px">
          {Array.from({ length: 120 }).map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-border"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.02,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/theta-symbol.png"
                alt="Theta"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-light text-foreground">Theta</span>
            </div>
            <p className="text-foreground/60 mb-6">
              Your AI assistant, worn in your ear
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 hover:text-red-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Theta Sound. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60">
            Built with ❤️ for a screenless future
          </p>
        </div>
      </div>
    </footer>
  );
}
