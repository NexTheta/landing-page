"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { createElement } from "react";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedGradientText({
  children,
  className,
  as = "h1",
}: AnimatedGradientTextProps) {
  return createElement(
    as,
    {
      className: cn(
        "bg-gradient-to-r from-[#FF3366] via-[#9D4EDD] to-[#00F5FF] bg-clip-text text-transparent",
        "animate-gradient bg-[length:200%_auto]",
        className
      ),
    },
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}
