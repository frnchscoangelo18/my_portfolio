"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }

        if (e.key === "Tab") {
          if (!modalRef.current) return;
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;
          
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      
      const timer = setTimeout(() => {
        if (modalRef.current) {
          const closeBtn = modalRef.current.querySelector('button');
          if (closeBtn) (closeBtn as HTMLElement).focus();
        }
      }, 100);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("keydown", handleKeyDown);
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-background/60 overscroll-contain"
          onClick={onClose}
        >
          <motion.div 
            ref={modalRef}
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <h3 id="cv-modal-title" className="font-semibold text-base sm:text-lg lg:text-xl text-foreground tracking-tight">
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
                      onClick={onClose}
                      aria-label="Close modal"
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
  );
}
