"use client";

import { LenisProvider } from "@/hooks/useLenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <LenisProvider>{children}</LenisProvider>;
}
