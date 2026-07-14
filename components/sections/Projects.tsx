import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";

export function Projects() {
  const placeholderProjects = [
    {
      title: "Project Alpha",
      description: "A placeholder for a future computer engineering or software project. Showcases hardware-software integration or a complex web application build.",
      tags: ["React", "Node.js", "C++", "IoT"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Project Beta",
      description: "Another placeholder project description. This could be an algorithm visualizer, a microservices backend, or a computer vision script.",
      tags: ["Python", "TensorFlow", "FastAPI"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Project Gamma",
      description: "A placeholder for an exciting upcoming project. It will demonstrate proficiency in building scalable systems and clean user interfaces.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
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
              <div className="flex flex-col bg-gradient-to-br from-card via-card to-primary/5 dark:from-card dark:via-muted/30 dark:to-primary/10 border-t-2 border-primary/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 h-full">
                {/* Image Placeholder */}
                <div className="w-full h-52 bg-muted/50 border-b border-border/50 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                  <span className="text-muted-foreground text-sm font-medium z-10">Image Placeholder</span>
                </div>
                
                <div className="flex flex-col flex-1 p-8">
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
