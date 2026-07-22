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
          <p className="text-xs text-muted-foreground/80 italic text-center md:text-right mt-1">
            &quot;The best way to predict the future is to invent it.&quot; — Alan Kay
          </p>
        </div>

      </div>
    </footer>
  );
}
