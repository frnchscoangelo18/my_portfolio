import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";

export function Projects() {
  const placeholderProjects = [
    {
      title: "HEXNODE",
      description: "Interactive visualizers for common data structures and algorithms (Stack, Queue, Binary Tree, Binary Search Tree, Fibonacci, Factorial, Tower of Hanoi).",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/frnchscoangelo18/HEXNODE",
      demo: "https://hexnode-gamma.vercel.app",
      image: "/hexnode.png", // Add your image path here, e.g., "/hexnode.png"
    },
    {
      title: "ICPEP Booth Games 2026",
      description: "Interactive web application for the ICPEP Booth Games event.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS","Supabase"],
      github: "https://github.com/frnchscoangelo18/icpep-booth-games-2026",
      demo: "https://icpep-booth-games-2026.vercel.app",
      image: "/icpep.png", // Add your image path here, e.g., "/icpep.png"
    },
    {
      title: "Dragonfly",
      description: "An AI-powered, mobile-first sourcing assistant designed to turn messy hardware ideas into ready-to-buy reality.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS","Supabase"],
      github: "https://github.com/frnchscoangelo18/dragonfly",
      demo: "https://dragonfly-rose.vercel.app",
      image: "/dragonfly.png", // Add your image path here, e.g., "/dragonfly.png"
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Featured Projects</h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A selection of projects I've built or am currently working on. These will be updated with actual project details soon.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {placeholderProjects.map((project, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1} fullWidth>
              <div className="flex flex-col bg-white/5 dark:bg-slate-900/10 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 h-full group relative">
                
                {/* Decorative glowing orb behind the card content */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

                {/* Project Image Area */}
                <div className="w-full h-52 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent border-b border-border/30 flex items-center justify-center relative overflow-hidden backdrop-blur-md z-10">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10 pointer-events-none"></div>
                  
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-muted-foreground text-sm font-medium z-10 bg-background/30 px-4 py-2 rounded-full border border-border/50 backdrop-blur-xl">Image Placeholder</span>
                  )}
                </div>
                
                <div className="flex flex-col flex-1 p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 mt-auto pt-6 border-t border-border/50">
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                    <Link 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
