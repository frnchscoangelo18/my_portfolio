import { FadeIn } from "../ui/FadeIn";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertDark: true },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
      ],
    },
    {
      title: "Tools & Systems",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertDark: true },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Technical Skills</h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A comprehensive list of technologies, languages, and tools I have experience working with throughout my academic and personal projects.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1} fullWidth>
              <div className="flex flex-col p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl shadow-sm hover:border-primary/50 transition-colors h-full">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 text-sm font-semibold text-foreground border border-border/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default shadow-sm"
                    >
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`} 
                        className={`w-5 h-5 object-contain ${skill.invertDark ? 'dark:invert' : ''}`}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
