import type { Metadata } from "next";
import { Inter, Outfit, Silkscreen } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const pixelFont = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gelskrrttsangeles.vercel.app"), 
  title: "Franchesco Angelo Angeles | Portfolio",
  description: "Portfolio of Franchesco Angelo Angeles, a Future AI & Machine Learning Engineer based in the Philippines.",
  keywords: ["Franchesco Angelo Angeles", "Software Engineer", "AI Engineer", "Machine Learning", "Portfolio", "Web Development"],
  authors: [{ name: "Franchesco Angelo Angeles" }],
  openGraph: {
    title: "Franchesco Angelo Portfolio",
    description: "Discover my projects, skills, and experience in software engineering and AI.",
    url: "https://gelskrrttsangeles.vercel.app", 
    siteName: "Franchesco Angelo Portfolio",
    images: [
      {
        url: "/websitepic.png",
        width: 1200,
        height: 630,
        alt: "Franchesco Angelo Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchesco Angelo Portfolio",
    description: "Discover my projects, skills, and experience in software engineering and AI.",
    images: ["/websitepic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${pixelFont.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-md focus:shadow-md font-medium"
        >
          Skip to Content
        </a>
        <SmoothScroll>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
