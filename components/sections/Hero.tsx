import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { HeroTitle } from "../ui/HeroTitle";

export function Hero() {
  const ActionButtons = () => (
    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 lg:pt-6">
      <Link href="#projects" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground h-12 px-8 py-2 w-full sm:w-auto">
        View My Work
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      <Link href="#contact" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-primary/20 hover:bg-primary/10 hover:text-primary h-12 px-8 py-2 w-full sm:w-auto">
        Contact Me
      </Link>
    </div>
  );

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background gradients for the futuristic look */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_70%_70%_at_50%_-10%,rgba(14,165,233,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_70%_70%_at_50%_-10%,rgba(59,130,246,0.15),rgba(2,6,23,0))]" />
      
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 z-10">
        
        {/* Left Side: Information */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 flex-1 w-full">
          <FadeIn direction="right" delay={0.1} fullWidth>
            <HeroTitle />
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2} fullWidth>
            <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mt-2 lg:mt-4">
              Future AI & Machine Learning Engineer 
            </p>
          </FadeIn>
          
          {/* Desktop Buttons (Hidden on mobile) */}
          <FadeIn direction="right" delay={0.3} fullWidth className="hidden lg:block w-full">
            <ActionButtons />
          </FadeIn>
        </div>

        {/* Right Side: Photo Placeholder with Glow */}
        <FadeIn direction="left" delay={0.3}>
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-sm lg:max-w-md relative">
            {/* Subtle glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-primary/30 shadow-2xl overflow-hidden bg-card flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105 hover:border-primary/60 backdrop-blur-sm z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src="/profile.jpg" 
                alt="Franchesco Angelo Angeles" 
                className="w-full h-full object-cover object-[100%_top] rounded-full relative z-0"
              />
            </div>
          </div>
        </FadeIn>

        {/* Mobile Buttons (Hidden on desktop, shows below photo on mobile) */}
        <FadeIn direction="up" delay={0.4} fullWidth className="lg:hidden w-full mt-4">
          <ActionButtons />
        </FadeIn>

      </div>
    </section>
  );
}
