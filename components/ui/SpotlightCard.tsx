"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(56, 189, 248, 0.25)", // Brighter sky-400 glow
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl bg-white/5 dark:bg-neutral-900/50 backdrop-blur-3xl border border-border/40 dark:border-white/15 shadow-lg transition-all duration-500 hover:border-primary/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] group ${className}`}
    >
      {/* Dynamic spotlight for desktop (mouse tracking) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 hidden md:block md:group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          opacity,
        }}
      />
      {/* Static subtle glow for mobile (always slightly visible) */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl md:hidden opacity-50"
        style={{
          background: `radial-gradient(150px circle at 50% 0%, ${spotlightColor}, transparent 100%)`,
        }}
      />
      {/* Subtle inner noise or gradient could go here */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent dark:from-white/[0.05] pointer-events-none z-0"></div>
      
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
