/**
 * Interface representing a portfolio project item.
 */
export interface Project {
  /** Short headline title of the project */
  title: string;
  /** Summary description displayed on showcase cards */
  description: string;
  /** Comprehensive technical description displayed inside ProjectModal */
  fullDescription?: string;
  /** Key feature bullet points displayed inside ProjectModal */
  features?: string[];
  /** Technology stack badges */
  tags: string[];
  /** GitHub repository URL link */
  github: string;
  /** Live deployment preview URL link */
  demo: string;
  /** Screenshot asset path relative to public/ */
  image: string;
}

/**
 * Array of featured portfolio projects rendered in the Projects section.
 */
export const projects: Project[] = [
  {
    title: "HEXNODE",
    description: "Interactive real-time visualizers for fundamental data structures and algorithms, featuring step-by-step state animations and call-stack inspection.",
    fullDescription: "HEXNODE is an interactive educational suite built to visualize complex data structures and algorithms in real time. It features step-by-step state animations, custom dataset inputs, playback speed controls, and live call-stack inspection.",
    features: [
      "Interactive step-by-step algorithm playback",
      "Support for linear and tree-based data structures",
      "Dynamic recursion call-stack visualizer",
      "High-contrast, accessible UI optimized for learning"
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/frnchscoangelo18/HEXNODE",
    demo: "https://hexnode-gamma.vercel.app",
    image: "/hexnode.png",
  },
  {
    title: "ICPEP Booth Games 2026",
    description: "Gamified event platform featuring real-time leaderboards, user registration, and interactive minigames for ICPEP.",
    fullDescription: "Built to enhance ICPEP event engagement, this application manages real-time leaderboards, interactive mobile minigames, participant registration, and instant score synchronization backed by Supabase.",
    features: [
      "Real-time leaderboards powered by Supabase WebSocket subscriptions",
      "Mobile-optimized interactive event minigames",
      "Secure user authentication and player profile tracking",
      "Comprehensive admin control panel for live score updates and event management"
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/frnchscoangelo18/icpep-booth-games-2026",
    demo: "https://icpep-booth-games-2026.vercel.app",
    image: "/icpep.png",
  },
  {
    title: "Dragonfly",
    description: "AI-powered sourcing assistant that converts technical hardware specifications into structured, purchase-ready bills of materials (BOMs).",
    fullDescription: "Dragonfly streamlines hardware procurement by analyzing natural language component descriptions, querying supplier catalogs, generating structured bills of materials (BOMs), and recommending compatible alternative parts.",
    features: [
      "AI-driven natural language specification parsing",
      "Automated bill of materials (BOM) generation",
      "Real-time supplier inventory lookup and component matching",
      "Mobile-first responsive design with system dark mode support"
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/frnchscoangelo18/dragonfly",
    demo: "https://dragonfly-rose.vercel.app",
    image: "/dragonfly.png",
  },
];
