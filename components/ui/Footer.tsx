import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 py-8">
      <div className="container mx-auto max-w-5xl flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8 md:flex-row md:justify-between">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with <span className="text-primary font-medium">Next.js</span> and <span className="text-primary font-medium">Tailwind CSS</span>.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
