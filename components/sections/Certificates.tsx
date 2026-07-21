"use client";

import { useState } from "react";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";

export function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const placeholderCertificates = [
    {
      title: "Intermediate Python",
      issuer: "DataCamp",
      date: "January 2026",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/5e97fdfa1acf991a0d8a58b1dba0b1821da80359?raw=1",
      logo: "https://cdn.simpleicons.org/datacamp/03EF62",
    },
    {
      title: "Data Manipulation with pandas",
      issuer: "DataCamp",
      date: "Feb 2026",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/936a431c8311a0f00ff7fda67cf70e39e8868e8d?raw=1",
      logo: "https://cdn.simpleicons.org/datacamp/03EF62",
    },
    {
      title: "Applying SQL to Real-World Problems",
      issuer: "DataCamp",
      date: "March 2026",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/7db9c98e6c80b84f72396b095f7fef4990674de0?raw=1",
      logo: "https://cdn.simpleicons.org/datacamp/03EF62",
    },

  ];

  const displayedCerts = showAll ? placeholderCertificates : placeholderCertificates.slice(0, 3);

  const handleToggle = () => {
    if (showAll) {
      // When collapsing, smoothly scroll back to the top of the certificates section
      const section = document.getElementById("certificates");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setShowAll(false);
    } else {
      // When expanding, reveal the items and smoothly scroll down
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
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Certificates</h2>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              A collection of my academic, professional, and technical certifications that validate my skills.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCerts.map((cert, index) => (
            <FadeIn key={index} direction="up" delay={0.1 * (index % 3)} fullWidth>
              <div className="flex flex-col p-5 md:p-8 bg-white/5 dark:bg-slate-900/10 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 h-full group relative overflow-hidden">
                {/* Decorative glowing orb */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary backdrop-blur-sm flex items-center justify-center w-14 h-14">
                    {cert.logo ? (
                      <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all" />
                    ) : (
                      <Award className="h-8 w-8" />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border/50">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
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
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-sky-600 transition-colors"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* View More / View Less Button */}
        {placeholderCertificates.length > 3 && (
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleToggle}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/50 text-primary font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : (
                  <>
                    View All {placeholderCertificates.length} Certificates <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
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
