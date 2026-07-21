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
                className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 ${
                  isActive 
                    ? "text-primary font-bold drop-shadow-[0_0_12px_rgba(56,189,248,0.8)] scale-105" 
                    : "text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
              >
                <link.icon className="w-4 h-4" />
                <span className="relative flex items-center justify-center">
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator-dot"
                      className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(56,189,248,1)]"
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="ml-4 pl-4 border-l border-border/50">
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Floating Header */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50">
        <header className="flex items-center justify-between h-14 px-1 transition-all duration-300">
          {/* Menu button on the left (replacing logo) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-primary transition-colors focus:outline-none flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Theme toggle on the right */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </header>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out absolute top-2 left-10 w-60 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] border origin-top-left ${
            isMobileMenuOpen ? "max-h-[500px] py-4 opacity-100 border-white/20 dark:border-white/10 scale-100" : "max-h-0 opacity-0 py-0 border-transparent scale-95 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-1 px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium transition-all w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl ${
                  activeSection === link.href 
                    ? "text-primary bg-primary/10 shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5 dark:hover:bg-white/5 active:bg-white/10"
                }`}
              >
                <link.icon className={`w-5 h-5 transition-opacity ${activeSection === link.href ? "opacity-100" : "opacity-70"}`} />
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
