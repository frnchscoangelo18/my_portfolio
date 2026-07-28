"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { Skill } from "@/data/skills";

interface MarqueeRowProps {
  items: Skill[];
  direction?: "left" | "right";
  speed?: number;
  multiplier?: number;
}

export function MarqueeRow({ items, direction = "left", speed = 40, multiplier = 1 }: MarqueeRowProps) {
  const shouldReduceMotion = useReducedMotion();

  // Static grid fallback for reduced motion
  if (shouldReduceMotion) {
    return (
      <div className="flex flex-wrap gap-4 sm:gap-8 justify-center py-4">
        {items.slice(0, items.length / multiplier).map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 dark:bg-slate-900/10 backdrop-blur-3xl border border-white/20 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:scale-105 hover:border-primary/80 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] dark:hover:bg-primary/10 transition-all duration-300 cursor-pointer min-w-fit group"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className={`object-contain group-hover:scale-125 transition-transform duration-300 ${skill.invertDark ? 'dark:invert opacity-80 group-hover:opacity-100' : ''}`}
              />
            </div>
            <span className="text-base sm:text-xl font-bold text-foreground/80 group-hover:text-primary transition-colors">{skill.name}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex w-full overflow-hidden whitespace-nowrap py-4"
      style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <motion.div
        className="flex w-max gap-4 sm:gap-8 items-center"
        animate={{ x: direction === "left" ? ["0%", `-${100 / multiplier}%`] : [`-${100 / multiplier}%`, "0%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {items.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 dark:bg-slate-900/10 backdrop-blur-3xl border border-white/20 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:scale-105 hover:border-primary/80 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] dark:hover:bg-primary/10 transition-all duration-300 cursor-pointer min-w-fit group"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                sizes="(max-width: 640px) 32px, 40px"
                className={`object-contain group-hover:scale-125 transition-transform duration-300 ${skill.invertDark ? 'dark:invert opacity-80 group-hover:opacity-100' : ''}`}
              />
            </div>
            <span className="text-base sm:text-xl font-bold text-foreground/80 group-hover:text-primary transition-colors">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
