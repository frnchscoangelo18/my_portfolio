import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const SectionDivider = () => (
  <div className="w-full flex justify-center py-4">
    <div className="w-3/4 max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-foreground/10 dark:via-white/10 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Global Background Orbs for Glassmorphism to blur over */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 dark:bg-primary/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sky-400/20 dark:bg-sky-600/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-10000" style={{ animationDelay: '2s' }}></div>
      </div>

      <ParticleBackground />
      <ScrollToTop />
      
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Certificates />
      <SectionDivider />
      <Contact />
    </main>
  );
}
