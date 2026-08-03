"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TerminalCardProps {
  children: React.ReactNode;
  easterEgg: string | null;
  onEasterEgg: (msg: string) => void;
  onClearEasterEgg: () => void;
}

export function TerminalCard({ children, easterEgg, onEasterEgg, onClearEasterEgg }: TerminalCardProps) {

  return (
    <div 
      className="w-full bg-[#031525]/90 dark:bg-[#020b14]/90 backdrop-blur-xl rounded-xl border border-sky-500/30 shadow-[0_0_40px_rgba(14,165,233,0.2)] overflow-hidden"
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 border-b border-sky-500/20 bg-sky-900/40">
        <div className="flex gap-2">
          <button 
            onClick={() => onEasterEgg("🚨 System Alert: Extreme coffee level required! ☕")}
            className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 hover:scale-125 transition-all cursor-pointer"
            title="Click for Red Alert"
          />
          <button 
            onClick={() => onEasterEgg("⚡ Overclocking AI neural pathways to 200%...")}
            className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 hover:scale-125 transition-all cursor-pointer"
            title="Click for Turbo Mode"
          />
          <button 
            onClick={() => onEasterEgg("🚀 System Ready: Ready to build state-of-the-art AI applications!")}
            className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 hover:scale-125 transition-all cursor-pointer"
            title="Click for Ready Status"
          />
        </div>
        <div className="mx-auto text-xs text-sky-400 font-mono tracking-wider flex items-center gap-2">
          <span className="opacity-50">~</span> franchesco.exe
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-5 sm:p-6 lg:p-8 text-left flex flex-col gap-5 relative">
        
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
              <button onClick={onClearEasterEgg} className="text-sky-400 hover:text-white font-bold ml-2">×</button>
            </motion.div>
          )}
        </AnimatePresence>

        {children}
        
      </div>
    </div>
  );
}
