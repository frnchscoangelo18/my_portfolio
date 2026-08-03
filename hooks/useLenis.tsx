"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

/**
 * Context provider component that instantiates and manages the lifecycle of the Lenis smooth scroll engine.
 *
 * Checks `prefers-reduced-motion` to bypass smooth scrolling for user accessibility preference.
 * Cleans up the requestAnimationFrame loop and destroys the Lenis instance on unmount.
 */
export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
    });

    queueMicrotask(() => {
      setLenis(lenisInstance);
    });

    let rafId: number;

    function raf(time: number) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
};

/**
 * Custom React hook to access the active Lenis smooth scroll instance.
 *
 * @returns The active `Lenis` instance or `null` if not inside `LenisProvider` or reduced motion is active.
 */
export const useLenis = () => {
  return useContext(LenisContext);
};
