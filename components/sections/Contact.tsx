import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";
import { socialLinks } from "@/data/social";
import { socialIconMap } from "@/components/icons/SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(14,165,233,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(59,130,246,0.1),rgba(2,6,23,0))] -z-10" />
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="up">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Get In Touch</h2>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm currently looking for new opportunities, internships, or interesting projects to collaborate on. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-10">

            {/* Social Links Row */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full max-w-full">
              {socialLinks.map((social) => {
                const IconComponent = socialIconMap[social.icon];
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-105 hover:shadow-lg shadow-sm whitespace-nowrap overflow-hidden"
                    aria-label={social.name}
                  >
                    <div className="flex-shrink-0 scale-90 md:scale-100">
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                    </div>
                    <span className="text-xs md:text-sm font-semibold truncate">{social.handle}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
