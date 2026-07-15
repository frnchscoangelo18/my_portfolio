import { Briefcase } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export function Experience() {
  const experiences = [
    {
      role: "IT Network Support Intern",
      company: "EWS Telecommunications Services",
      date: "July 2026 - Present",
      description: "Providing technical support and troubleshooting network issues for clients.",
    },
    
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Work Experience</h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A timeline of my professional journey, internships, and relevant work experience.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_var(--background)] z-10">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                
                {/* Timeline Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 dark:bg-slate-900/10 backdrop-blur-3xl border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all group relative overflow-hidden">
                  {/* Decorative glowing orb */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  <div className="text-muted-foreground font-medium mb-4">
                    {exp.company}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
