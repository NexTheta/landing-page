"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    { name: "Updates", href: "#updates" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
  Resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Status", href: "#status" },
  ],
  Legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Security", href: "#security" },
    { name: "Cookies", href: "#cookies" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/thetasound", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/theta-sound/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/thetasound", label: "Instagram" },
  { icon: Mail, href: "mailto:Theta.sound.info@gmail.com", label: "Email" },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
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
              Experience sound without screens
            </p>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-full glass border border-border hover:border-red-500/30 flex items-center justify-center text-foreground/60 hover:text-red-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <Link 
              href="mailto:Theta.sound.info@gmail.com"
              className="text-sm text-foreground/60 hover:text-red-500 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Theta.sound.info@gmail.com
            </Link>
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
