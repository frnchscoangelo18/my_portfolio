"use client";
import { useState, useEffect } from "react";

export function HeroTitle() {
  const [step, setStep] = useState(0);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  
  const fullText1 = "Franchesco Angelo Angeles!";
  const fullText2 = "Computer Engineering";
  const fullText3 = "Student";

  useEffect(() => {
    // Add a small initial delay before starting the typing animation
    const initialDelay = setTimeout(() => {
      if (step === 0) {
        if (text1.length < fullText1.length) {
          setTimeout(() => setText1(fullText1.slice(0, text1.length + 1)), 60);
        } else {
          setTimeout(() => setStep(1), 200); // pause before next line
        }
      } else if (step === 1) {
        if (text2.length < fullText2.length) {
          setTimeout(() => setText2(fullText2.slice(0, text2.length + 1)), 60);
        } else {
          setTimeout(() => setStep(2), 200);
        }
      } else if (step === 2) {
        if (text3.length < fullText3.length) {
          setTimeout(() => setText3(fullText3.slice(0, text3.length + 1)), 60);
        } else {
          setStep(3); // done
        }
      }
    }, step === 0 && text1.length === 0 ? 500 : 0);
    
    return () => clearTimeout(initialDelay);
  }, [step, text1, text2, text3]);

  return (
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.3] font-pixel min-h-[120px] sm:min-h-[160px] lg:min-h-[200px]">
      {text1} <br className="hidden sm:block"/>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500">
        {text2}
      </span>
      {text2.length > 0 && <br/>}
      {text3}
      <span className={`inline-block w-[0.6em] h-[0.1em] ml-2 mb-2 bg-primary ${step === 3 ? "animate-pulse" : ""}`}></span>
    </h1>
  );
}
