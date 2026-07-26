"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

const MarqueeRow = ({ items, direction = "left", speed = 40, multiplier = 1 }: { items: any[], direction?: "left" | "right", speed?: number, multiplier?: number }) => (
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
        <motion.div 
          key={idx} 
          whileHover={{ scale: 1.08, y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 dark:bg-slate-900/10 backdrop-blur-3xl border border-white/20 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-primary/80 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] dark:hover:bg-primary/10 transition-all cursor-pointer min-w-fit group"
        >
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className={`w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-125 transition-transform duration-300 ${skill.invertDark ? 'dark:invert opacity-80 group-hover:opacity-100' : ''}`}
          />
          <span className="text-base sm:text-xl font-bold text-foreground/80 group-hover:text-primary transition-colors">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export function Skills() {
  const originalSkills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertDark: true },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertDark: true },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
  ];

  // Split into two distinct rows
  const row1Skills = originalSkills.slice(0, 6);
  const row2Skills = originalSkills.slice(6, 12);

  // Duplicate the arrays massively to ensure seamless scrolling even on ultrawide monitors
  const MULTIPLIER = 8;
  const marquee1 = Array(MULTIPLIER).fill(row1Skills).flat();
  const marquee2 = Array(MULTIPLIER).fill(row2Skills).flat();

  return (
    <section id="skills" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 -skew-y-3 -z-10 transform origin-bottom-left" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Technical Stack</h2>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              The ecosystem of languages, frameworks, and AI tools I use to build intelligent applications.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6 w-full -mx-4 sm:mx-0">
          <FadeIn direction="up" delay={0.2} fullWidth>
            <MarqueeRow items={marquee1} direction="left" speed={35} multiplier={MULTIPLIER} />
          </FadeIn>
          <FadeIn direction="up" delay={0.3} fullWidth>
            <MarqueeRow items={marquee2} direction="right" speed={45} multiplier={MULTIPLIER} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
