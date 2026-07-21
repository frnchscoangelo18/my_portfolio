"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { HeroTitle } from "../ui/HeroTitle";
import { Typewriter } from "../ui/Typewriter";
import { motion } from "framer-motion";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const ActionButtons = () => (
    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 lg:pt-6 w-full sm:w-auto">
      <Link href="#projects" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground h-12 px-8 py-2 w-full sm:w-auto overflow-hidden relative group">
        <span className="relative z-10 flex items-center">
          View My Work
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
      </Link>
      <Link href="#contact" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:text-primary h-12 px-8 py-2 w-full sm:w-auto">
        Contact Me
      </Link>
    </div>
  );

  return (
    <section id="hero" className="flex min-h-[100dvh] items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
        <motion.div 
          className="absolute inset-0 opacity-40 mix-blend-screen"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)`
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 z-10 mt-16 md:mt-0">
        
        {/* Left Side: Information */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 flex-1 w-full">
          <FadeIn direction="right" delay={0.1} fullWidth>
            <HeroTitle />
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2} fullWidth>
            <p className="max-w-2xl text-sm sm:text-lg text-muted-foreground leading-relaxed mt-2 lg:mt-4 h-8">
              <Typewriter text="Future AI & Machine Learning Engineer" delay={0.8} speed={50} />
            </p>
          </FadeIn>
          
          {/* Desktop Buttons (Hidden on mobile) */}
          <FadeIn direction="right" delay={1.5} fullWidth className="hidden lg:block w-full">
            <ActionButtons />
          </FadeIn>
        </div>

        {/* Right Side: Photo with Dynamic Glow */}
        <FadeIn direction="left" delay={0.3}>
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[280px] sm:max-w-md mx-auto lg:mx-0 relative group mt-8 lg:mt-0">
            {/* Dynamic glow tracking mouse */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full pointer-events-none mix-blend-screen"
              animate={{
                background: `radial-gradient(circle at ${40 + mousePosition.x * 0.2}% ${40 + mousePosition.y * 0.2}%, rgba(14, 165, 233, 0.4), transparent 70%)`
              }}
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />
            
            <div className="relative w-36 h-36 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden bg-card/50 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
              <img 
                src="/profile.jpg" 
                alt="Franchesco Angelo Angeles" 
                className="w-full h-full object-cover object-[100%_top] rounded-full relative z-0"
              />
            </div>
          </div>
        </FadeIn>

        {/* Mobile Buttons (Hidden on desktop, shows below photo on mobile) */}
        <FadeIn direction="up" delay={1.5} fullWidth className="lg:hidden w-full mt-4">
          <ActionButtons />
        </FadeIn>

      </div>
    </section>
  );
}
