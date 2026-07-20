"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { 
  Menu, X, Home, User, Briefcase, 
  Code2, LayoutGrid, Award, Mail 
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: LayoutGrid },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const activeSection = useScrollSpy(
    navLinks.map((link) => link.href),
    150
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Navbar */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-md border-border shadow-lg shadow-black/5 dark:shadow-black/20"
            : "bg-background/20 backdrop-blur-sm border-transparent"
        }`}
      >
        <nav className="flex items-center gap-1 text-sm font-medium relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 flex flex-col items-center justify-center ${
                  isActive 
                    ? "text-primary font-bold drop-shadow-[0_0_12px_rgba(56,189,248,0.8)] scale-105" 
                    : "text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator-dot"
                    className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(56,189,248,1)]"
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="ml-4 pl-4 border-l border-border/50">
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Header (Standard style for mobile to save space) */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-background/80 backdrop-blur border-b border-border/50 transition-all">
        <div className="flex items-center justify-between h-16 px-4">
          <span className="font-pixel font-bold text-lg text-primary tracking-tight">FA.</span>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur absolute w-full left-0 border-b border-border/50 shadow-xl ${
            isMobileMenuOpen ? "max-h-[80vh] py-6 opacity-100" : "max-h-0 opacity-0 py-0 border-transparent"
          }`}
        >
          <nav className="flex flex-col items-center gap-2 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-semibold transition-all w-full flex items-center justify-center gap-2 py-3 rounded-xl ${
                  activeSection === link.href 
                    ? "text-primary bg-primary/10 shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5 active:bg-white/10"
                }`}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
