"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Typewriter({
  text,
  delay = 0,
  speed = 50,
  showCursor = true,
}: {
  text: string;
  delay?: number;
  speed?: number;
  showCursor?: boolean;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (shouldReduceMotion) {
      setDisplayedText(text);
      return;
    }
    
    let i = 0;
    
    const typingInterval = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, started, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {displayedText}
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
        />
      )}
    </span>
  );
}
