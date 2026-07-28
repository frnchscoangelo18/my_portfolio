"use client";

import { FadeIn } from "../ui/FadeIn";
import { MarqueeRow } from "../ui/MarqueeRow";
import { row1Skills, row2Skills, MARQUEE_MULTIPLIER } from "@/data/skills";

export function Skills() {
  // Duplicate arrays for seamless scrolling on ultrawide monitors
  const marquee1 = Array(MARQUEE_MULTIPLIER).fill(row1Skills).flat();
  const marquee2 = Array(MARQUEE_MULTIPLIER).fill(row2Skills).flat();

  return (
    <section id="skills" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 -skew-y-3 -z-10 transform origin-bottom-left" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Technical Stack</h2>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              The ecosystem of programming languages, frameworks, databases, and developer tools I use to build scalable software.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6 w-full -mx-4 sm:mx-0">
          <FadeIn direction="up" delay={0.2} fullWidth>
            <MarqueeRow items={marquee1} direction="left" speed={35} multiplier={MARQUEE_MULTIPLIER} />
          </FadeIn>
          <FadeIn direction="up" delay={0.3} fullWidth>
            <MarqueeRow items={marquee2} direction="right" speed={45} multiplier={MARQUEE_MULTIPLIER} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
