import { Briefcase } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { SpotlightCard } from "../ui/SpotlightCard";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-10 md:py-20 bg-muted/30 relative">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Work Experience</h2>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              A timeline of my professional journey, technical internships, and hands-on industry experience.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Timeline Icon with Pulsing Glow Ring */}
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(56,189,248,0.4)] z-10 transition-all duration-300 group-hover:scale-125 group-hover:border-sky-400 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.8)]">
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-75 duration-1000 -z-10"></div>
                  <Briefcase className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Timeline Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <SpotlightCard className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                      <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap border border-primary/20">
                        {exp.date}
                      </span>
                    </div>
                    <div className="text-muted-foreground font-medium mb-4">
                      {exp.company}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </SpotlightCard>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
