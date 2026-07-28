"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "@/components/ui/Typewriter";

export function HeroTitle() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => 
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );
  const [showCursor, setShowCursor] = useState(() => prefersReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let timer: NodeJS.Timeout | null = null;
    if (!mediaQuery.matches) {
      // Show cursor after typing completes (~4s for all 3 lines)
      timer = setTimeout(() => setShowCursor(true), 4000);
    }

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      if (timer) clearTimeout(timer);
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  if (prefersReducedMotion) {
    return (
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.3] font-pixel min-h-[60px] sm:min-h-[100px] lg:min-h-[140px]">
        Franchesco Angelo Angeles! <br className="hidden sm:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500">
          Computer Engineering
        </span>
        <br/>
        Student
        <span className="inline-block w-[0.6em] h-[0.1em] ml-2 mb-2 bg-primary animate-pulse"></span>
      </h1>
    );
  }

  return (
    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.3] font-pixel min-h-[60px] sm:min-h-[100px] lg:min-h-[140px]">
      <Typewriter text="Franchesco Angelo Angeles!" delay={0.5} speed={60} showCursor={false} /> <br className="hidden sm:block"/>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500">
        <Typewriter text="Computer Engineering" delay={2.2} speed={60} showCursor={false} />
      </span>
      <br/>
      <Typewriter text="Student" delay={3.5} speed={60} showCursor={false} />
      <span className={`inline-block w-[0.6em] h-[0.1em] ml-2 mb-2 bg-primary ${showCursor ? "animate-pulse" : "opacity-0"}`}></span>
    </h1>
  );
}
