"use client";

import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AmicroFeatureCardProps {
  icon: LucideIcon;
  label: string;
  description: string;
  className?: string;
}

export function AmicroFeatureCard({
  icon: Icon,
  label,
  description,
  className,
}: AmicroFeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative h-[268px] w-[280px] sm:w-[320px] rounded-[24px] border border-neutral-100/85 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      {/* Inner Preview Stage Canvas */}
      <div className="absolute left-[12px] top-[12px] right-[12px] h-[188px] rounded-[14px] flex flex-col items-center justify-center gap-3 overflow-hidden bg-[#f4f4f6] px-5 text-center transition-colors duration-300">
        <div className="absolute inset-0 rounded-[14px] pointer-events-none z-10 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]" />
        <div className="relative z-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500 text-white transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
        <p className="relative z-0 text-[13px] leading-snug text-neutral-600">
          {description}
        </p>
      </div>

      {/* Card Footer Bar */}
      <div className="absolute left-[16px] bottom-[14px] right-[16px] flex items-center">
        <span className="text-[13px] font-semibold tracking-[-0.01em] text-black">
          {label}
        </span>
      </div>
    </div>
  );
}
