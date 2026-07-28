"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FadeIn } from "../ui/FadeIn";
import { HeroTitle } from "../ui/HeroTitle";
import { Typewriter } from "../ui/Typewriter";
import { motion, useReducedMotion } from "framer-motion";
import { CVModal } from "../ui/CVModal";
import { TerminalCard } from "../ui/TerminalCard";
import { useEasterEgg } from "../../hooks/useEasterEgg";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCV, setShowCV] = useState(false);
  const { easterEgg, triggerEasterEgg, clearEasterEgg } = useEasterEgg();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (showCV) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [showCV]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <section id="hero" className="flex min-h-[100dvh] items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic Background Mesh (transparent to show global particles) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-transparent">
        <motion.div 
          className="absolute inset-0 opacity-40 mix-blend-screen will-change-[background]"
          animate={shouldReduceMotion ? { background: `radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)` } : {
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)`
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 will-change-transform"></div>
        <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 will-change-transform"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10 mt-12 md:mt-0">
        
        {/* Left Side: Terminal Information */}
        <div className="flex flex-col flex-1 w-full max-w-2xl lg:max-w-none">
          <FadeIn direction="right" delay={0.1} fullWidth>
            <TerminalCard easterEgg={easterEgg} onEasterEgg={triggerEasterEgg} onClearEasterEgg={clearEasterEgg}>
              {/* Command 1: whoami */}
              <div>
                <div className="flex items-center gap-2 text-sky-400 font-mono text-sm sm:text-base mb-3 opacity-80">
                  <span className="text-sky-500 font-bold">C:\Users\Guest&gt;</span>
                  <Typewriter text="who_am_i" delay={0.2} speed={40} showCursor={false} />
                </div>
                <div className="pl-4 border-l-2 border-sky-500/30 text-white drop-shadow-md">
                  <HeroTitle />
                </div>
              </div>

              {/* Command 2: cat bio.txt */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                className="mt-2"
              >
                <div className="flex items-center gap-2 text-sky-400 font-mono text-sm sm:text-base mb-3 opacity-80">
                  <span className="text-sky-500 font-bold">C:\Users\Guest&gt;</span>
                  <Typewriter text="python_predict_future.py" delay={3.5} speed={40} showCursor={false} />
                </div>
                <div className="pl-4 border-l-2 border-sky-500/30">
                  <p className="text-xs sm:text-base text-sky-100/90 leading-relaxed font-mono h-8">
                    <Typewriter text="Aspiring AI & Machine Learning Engineer" delay={4.2} speed={40} showCursor={false} />
                  </p>
                </div>
              </motion.div>
            </TerminalCard>
          </FadeIn>
        </div>

        {/* Right Side: Photo */}
        <FadeIn direction="left" delay={0.3}>
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[280px] sm:max-w-md mx-auto lg:mx-0 relative mt-10 lg:mt-0">
            
            {/* Profile Picture Container */}
            <motion.button 
              type="button"
              aria-label="View my curriculum vitae"
              onClick={() => setShowCV(true)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-[18rem] lg:h-[18rem] flex flex-col items-center justify-center z-10 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
            >
              {/* Glow Behind Picture */}
              <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:bg-primary/40 blur-[2rem] group-hover:blur-[3rem] opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden z-20 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500 shadow-2xl">
                <Image 
                  src="/profile.jpg" 
                  alt="Franchesco Angelo Angeles" 
                  fill
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 288px, 352px"
                  className="object-cover object-[100%_top]"
                />
              </div>
            </motion.button>

          </div>
        </FadeIn>

      </div>

      {/* CV Modal Pop-out */}
      <CVModal isOpen={showCV} onClose={() => setShowCV(false)} />

    </section>
  );
}
