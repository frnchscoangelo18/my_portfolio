"use client";

import { useState } from "react";
import { ExternalLink, Code, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "../ui/FadeIn";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ProjectModal } from "../ui/ProjectModal";
import { projects, Project } from "@/data/projects";

export function Projects() {
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-10 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Featured Projects</h2>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              A curated selection of projects demonstrating full-stack web development, AI integration, and real-time interactive systems. Select any card to view detailed architecture and key features.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} direction="up" delay={0.2 + index * 0.1} fullWidth>
              <SpotlightCard className="h-full flex flex-col group cursor-pointer" onClick={() => setActiveProjectModal(project)}>
                {/* Project Image Area */}
                <div className="w-full h-52 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent border-b border-border/30 flex items-center justify-center relative overflow-hidden backdrop-blur-md">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10 pointer-events-none"></div>

                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-muted-foreground text-sm font-medium z-10 bg-background/30 px-4 py-2 rounded-full border border-border/50 backdrop-blur-xl">Image Placeholder</span>
                  )}
                </div>
                
                <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <Info className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 mt-auto pt-6 border-t border-border/50 z-20" onClick={(e) => e.stopPropagation()}>
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title}`}
                      className="flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                    <Link 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View live demo for ${project.title}`}
                      className="flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
}
