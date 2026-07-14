import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-5xl flex h-16 items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</Link>
          <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          <Link href="#certificates" className="text-muted-foreground hover:text-foreground transition-colors">Certificates</Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
        </nav>
        <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
