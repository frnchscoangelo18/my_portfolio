import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 py-6 border-t border-border/10">
      <div className="container mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:flex-row">
        
        {/* Left side: Branding */}
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold font-pixel text-foreground hover:text-primary transition-colors">
            &lt;FA /&gt;
          </Link>
        </div>

        {/* Right side: Copyright & Tech */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {currentYear} Franchesco Angelo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 text-center md:text-right">
            Designed & Built with <span className="text-primary font-medium">Next.js</span> and <span className="text-primary font-medium">Tailwind</span>.
          </p>
        </div>

      </div>
    </footer>
  );
}
