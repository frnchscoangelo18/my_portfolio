"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Removed lucide-react icons for terminal snippet
import { FadeIn } from "../ui/FadeIn";
import { HeroTitle } from "../ui/HeroTitle";
import { Typewriter } from "../ui/Typewriter";
import { SpotlightCard } from "../ui/SpotlightCard";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCV, setShowCV] = useState(false);
  const [easterEgg, setEasterEgg] = useState<string | null>(null);

  useEffect(() => {
    if (easterEgg) {
      const timer = setTimeout(() => setEasterEgg(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [easterEgg]);

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

  const handlePictureClick = () => {
    setShowCV(true);
  };

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


  return (
    <section id="hero" className="flex min-h-[100dvh] items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic Background Mesh (transparent to show global particles) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-transparent">
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
        
        {/* Left Side: Terminal Information */}
        <div className="flex flex-col flex-1 w-full max-w-2xl lg:max-w-none">
          <FadeIn direction="right" delay={0.1} fullWidth>
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full bg-[#031525]/90 dark:bg-[#020b14]/90 backdrop-blur-xl rounded-xl border border-sky-500/30 shadow-[0_0_40px_rgba(14,165,233,0.2)] overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 border-b border-sky-500/20 bg-sky-900/40">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setEasterEgg("🚨 System Alert: Extreme coffee level required! ☕")}
                    className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 hover:scale-125 transition-all cursor-pointer"
                    title="Click for Red Alert"
                  />
                  <button 
                    onClick={() => setEasterEgg("⚡ Overclocking AI neural pathways to 200%...")}
                    className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 hover:scale-125 transition-all cursor-pointer"
                    title="Click for Turbo Mode"
                  />
                  <button 
                    onClick={() => setEasterEgg("🚀 System Ready: Ready to build state-of-the-art AI applications!")}
                    className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 hover:scale-125 transition-all cursor-pointer"
                    title="Click for Ready Status"
                  />
                </div>
                <div className="mx-auto text-xs text-sky-400 font-mono tracking-wider flex items-center gap-2">
                  <span className="opacity-50">~</span> franchesco.exe
                </div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 sm:p-8 lg:p-10 text-left flex flex-col gap-6 relative">
                
                {/* Easter Egg Notification Banner */}
                <AnimatePresence>
                  {easterEgg && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="p-3 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-200 text-xs sm:text-sm font-mono flex items-center justify-between shadow-lg backdrop-blur-md"
                    >
                      <span>{easterEgg}</span>
                      <button onClick={() => setEasterEgg(null)} className="text-sky-400 hover:text-white font-bold ml-2">×</button>
                    </motion.div>
                  )}
                </AnimatePresence>

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
                    <p className="text-sm sm:text-lg text-sky-100/90 leading-relaxed font-mono h-8">
                      <Typewriter text="Future AI & Machine Learning Engineer" delay={4.2} speed={40} showCursor={false} />
                    </p>
                  </div>
                </motion.div>
                
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Right Side: Photo */}
        <FadeIn direction="left" delay={0.3}>
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[280px] sm:max-w-md mx-auto lg:mx-0 relative mt-10 lg:mt-0">
            
            {/* Profile Picture Container */}
            <motion.div 
              onClick={handlePictureClick}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] flex flex-col items-center justify-center z-10 cursor-pointer group"
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
            </motion.div>

          </div>
        </FadeIn>

      </div>

      {/* CV Modal Pop-out */}
      <AnimatePresence>
        {showCV && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-background/60 overscroll-contain"
            onClick={() => setShowCV(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="relative w-full max-w-5xl h-[85vh] lg:h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <SpotlightCard className="w-full h-full rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border-white/10">
                <div className="w-full h-full flex flex-col">
                  {/* Elegant Header */}
                  <div className="flex-none flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 border-b border-border/50 bg-background/40 relative z-20 backdrop-blur-md">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-foreground tracking-tight">
                        Curriculum Vitae
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <a 
                        href="/CV.png" 
                        download
                        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary text-sm font-semibold transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Download
                      </a>
                      <button 
                        onClick={() => setShowCV(false)}
                        className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-rose-500/10 text-muted-foreground hover:text-rose-400 border border-white/5 hover:border-rose-500/20 transition-colors group"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 transition-transform group-hover:scale-110"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Robust Scrollable Area */}
                  <div className="flex-1 w-full overflow-y-auto bg-zinc-950/40 relative z-10">
                    <div className="w-full min-h-full flex justify-center items-start p-3 sm:p-6 lg:p-10">
                      <Image 
                        src="/CV.png" 
                        alt="Curriculum Vitae"
                        width={1200}
                        height={1600}
                        className="w-full max-w-4xl h-auto shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-md sm:rounded-xl border border-white/10 bg-white"
                      />
                    </div>
                  </div>

                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
