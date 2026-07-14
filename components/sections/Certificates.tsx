import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";

export function Certificates() {
  const placeholderCertificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "August 2025",
      link: "https://example.com/certificate",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera / University",
      date: "May 2025",
      link: "https://example.com/certificate",
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Cisco Networking Academy",
      date: "January 2025",
      link: "https://example.com/certificate",
    },
  ];

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 -skew-y-3 -z-10 transform origin-bottom-right" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-pixel">Certificates</h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A collection of my academic, professional, and technical certifications that validate my skills.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderCertificates.map((cert, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1} fullWidth>
              <div className="flex flex-col p-8 bg-card border-2 border-border/50 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full group">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border/50">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-base mb-8 flex-1">
                  Issued by <span className="font-semibold text-foreground">{cert.issuer}</span>
                </p>
                
                <div className="mt-auto pt-6 border-t border-border/50">
                  <Link 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-sky-600 transition-colors"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
