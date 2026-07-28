"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code, CheckCircle2, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border/60 shadow-2xl z-10 p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-border/40">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow">
                {project.category}
              </div>
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-foreground mb-3 font-pixel">
              {project.title}
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              {project.fullDescription || project.description}
            </p>

            {project.features && project.features.length > 0 && (
              <div className="mb-6 bg-muted/30 p-5 rounded-2xl border border-border/40">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" /> Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-border/60">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Code className="w-4 h-4" /> Source Code
              </Link>
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
