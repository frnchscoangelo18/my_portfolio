import { Code2, Cpu, GraduationCap } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Education",
      description: "Currently pursuing a Bachelor of Science in Computer Engineering. Focusing on software development, computer architecture, and embedded systems.",
    },
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Software Focus",
      description: "Passionate about creating clean, scalable web applications and exploring modern frameworks and technologies in the frontend and backend.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Hardware Interest",
      description: "Fascinated by how software interacts with hardware. Enjoy tinkering with microcontrollers and learning about lower-level systems.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 skew-y-3 -z-10 transform origin-top-left" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">About Me</h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated student constantly learning and building. My journey in Computer Engineering has given me a strong foundation in both software engineering and hardware integration.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1} fullWidth>
              <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-card via-card to-primary/5 dark:from-card dark:via-muted/30 dark:to-primary/10 border border-border/50 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl shadow-inner shadow-primary/20">
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
