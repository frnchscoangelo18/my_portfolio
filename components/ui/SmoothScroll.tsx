"use client";

import { LenisProvider } from "@/hooks/useLenis";

/**
 * SmoothScroll Client Component
 *
 * Wraps page layouts with the `LenisProvider` context to initialize smooth inertial scrolling
 * across the application while maintaining native accessibility and reduced-motion compliance.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <LenisProvider>{children}</LenisProvider>;
}
