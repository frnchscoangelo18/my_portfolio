import { Code2, Cpu, GraduationCap } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Education",
      description: "A 3rd year Bachelor of Science in Computer Engineering at Polytechnic University of the Philippines. Pursuing a specialization in AI and Machine Learning.",
    },
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Software Focus",
      description: "Passionate about creating clean, scalable web applications and exploring modern frameworks and technologies in the frontend and backend.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Hardware Interest",
      description: "Fascinated by how software interacts with hardware. Applying my knowledge in electrical and electronic circuits.",
    },
  ];

  return (
    <section id="about" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 skew-y-3 -z-10 transform origin-top-left" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">About Me</h2>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I am a dedicated computer engineering student who never stops learning new technologies
              and exploring oppurtunities to showcase my skills. Always eager to take on new challenges and contribute to innovative projects.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1} fullWidth>
              <div className="flex flex-col items-center text-center p-5 md:p-8 bg-white/5 dark:bg-slate-900/10 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 h-full group relative overflow-hidden">
                {/* Decorative glowing orb */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl shadow-inner shadow-primary/20 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
