import { Code2, Cpu, GraduationCap } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { SpotlightCard } from "../ui/SpotlightCard";

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 transition-colors" />,
      title: "Education",
      description: "3rd-year BS Computer Engineering student at Polytechnic University of the Philippines, specializing in Artificial Intelligence and Machine Learning.",
    },
    {
      icon: <Code2 className="h-8 w-8 transition-colors" />,
      title: "Software Focus",
      description: "Focused on crafting clean, responsive, and scalable web applications across the full stack using modern frameworks and TypeScript.",
    },
    {
      icon: <Cpu className="h-8 w-8 transition-colors" />,
      title: "Hardware Interest",
      description: "Intrigued by hardware-software integration, bringing circuit design and electronic principles into intelligent software solutions.",
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
              I am a dedicated Computer Engineering student passionate about mastering emerging technologies, building intelligent web applications, and bridging software engineering with hardware systems.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1} fullWidth>
              <SpotlightCard className="p-5 md:p-8 h-full group">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-6 p-4 bg-primary/10 rounded-2xl shadow-inner shadow-primary/20 border border-primary/20 group-hover:bg-primary transition-all duration-300 flex items-center justify-center w-16 h-16 text-primary group-hover:text-primary-foreground">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
