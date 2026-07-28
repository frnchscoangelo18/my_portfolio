"use client";

import { useState } from "react";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";
import { SpotlightCard } from "../ui/SpotlightCard";
import { certificates } from "@/data/certificates";

const CERT_CATEGORIES = ["All", "Python", "Data Science", "SQL"] as const;

export function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryFiltered = selectedCategory === "All"
    ? certificates
    : certificates.filter((c) => c.category === selectedCategory);

  const displayedCerts = showAll ? categoryFiltered : categoryFiltered.slice(0, 3);

  const handleToggle = () => {
    if (showAll) {
      const section = document.getElementById("certificates");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setShowAll(false);
    } else {
      setShowAll(true);
      setTimeout(() => {
        window.scrollBy({ top: window.innerHeight * 0.6, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <section id="certificates" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 -skew-y-3 -z-10 transform origin-bottom-right" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Certificates</h2>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              A collection of my academic, professional, and technical certifications that validate my skills.
            </p>
          </div>
        </FadeIn>

        {/* Filter Bar */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10" role="tablist" aria-label="Certificate Topics">
            {CERT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowAll(true);
                  }}
                  className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-muted/70"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-cert-category"
                      className="absolute inset-0 bg-primary rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard className="flex flex-col p-5 md:p-8 h-full">
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary backdrop-blur-sm flex items-center justify-center w-14 h-14 relative">
                      {cert.logo ? (
                        <div className="relative w-8 h-8">
                          <Image src={cert.logo} alt={`${cert.issuer} logo`} fill className="object-contain group-hover:brightness-0 group-hover:invert transition-all" />
                        </div>
                      ) : (
                        <Award className="h-8 w-8" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                        {cert.category}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full border border-border/50">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-base mb-8 flex-1">
                    Issued by <span className="font-semibold text-foreground">{cert.issuer}</span>
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-border/50">
                    <Link 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-sky-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      View Credential
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Button */}
        {categoryFiltered.length > 3 && (
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleToggle}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/50 text-primary font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : (
                  <>
                    View All {categoryFiltered.length} Certificates <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
