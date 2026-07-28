/**
 * Interface representing a social media profile link.
 */
export interface SocialLink {
  /** Platform name (e.g. LinkedIn, GitHub) */
  name: string;
  /** Key matching icon renderer in SocialIcons component */
  icon: string;
  /** Target link URL or mailto link */
  href: string;
  /** Display handle or username text */
  handle: string;
}

/**
 * Dataset of social media profiles and contact links.
 */
export const socialLinks: SocialLink[] = [
  { name: "Email", icon: "email", href: "mailto:franchescoangelo1805@gmail.com", handle: "franchescoangelo1805@gmail.com" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/franchescoangeloangeles18", handle: "Franchesco Angelo Angeles" },
  { name: "GitHub", icon: "github", href: "https://github.com/frnchscoangelo18", handle: "frnchscoangelo18" },
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/anshell01", handle: "Franchesco Angelo" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/gelskrrttt", handle: "gelskrrttt" },
];
