"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing
      orientation: "vertical", 
      gestureOrientation: "vertical", 
      smoothWheel: true,
      wheelMultiplier: 0.8, // Lowers the scroll speed slightly
      touchMultiplier: 2,
    });

    // Expose lenis to window so other components can trigger scrollTo
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
