import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ui/ThemeProvider";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelFont = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Franchesco Angelo Angeles | Software Engineer",
  description: "Portfolio of Franchesco Angelo Angeles, a Future AI & Machine Learning Engineer based in the Philippines.",
  keywords: ["Franchesco Angelo Angeles", "Software Engineer", "AI Engineer", "Machine Learning", "Portfolio", "Web Development"],
  authors: [{ name: "Franchesco Angelo Angeles" }],
  openGraph: {
    title: "Franchesco Angelo Portfolio",
    description: "Discover my projects, skills, and experience in software engineering and AI.",
    url: "https://franchescoangelo.com", // Replace with actual domain
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
      className={`${geistSans.variable} ${geistMono.variable} ${pixelFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
