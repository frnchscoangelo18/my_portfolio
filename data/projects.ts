export interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  category: "Full-Stack" | "AI" | "Frontend";
  features?: string[];
  tags: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "HEXNODE",
    description: "Interactive visualizers for common data structures and algorithms (Stack, Queue, Binary Tree, Binary Search Tree, Fibonacci, Factorial, Tower of Hanoi).",
    fullDescription: "HEXNODE is an interactive educational suite designed to bring data structures and algorithms to life. Users can visualize operations in real time with step-by-step state animations, custom dataset inputs, speed control, and call-stack inspection.",
    category: "Frontend",
    features: [
      "Interactive step-by-step algorithm playback",
      "Support for Linear and Tree-based structures",
      "Dynamic recursion call-stack visualizer",
      "Clean high-contrast theme optimized for learning"
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/frnchscoangelo18/HEXNODE",
    demo: "https://hexnode-gamma.vercel.app",
    image: "/hexnode.png",
  },
  {
    title: "ICPEP Booth Games 2026",
    description: "Interactive web application for the ICPEP Booth Games event.",
    fullDescription: "Built for ICPEP event engagement, this application manages real-time event leaderboards, interactive minigames, user registrations, and instant score updates powered by Supabase backend.",
    category: "Full-Stack",
    features: [
      "Real-time live leaderboard via Supabase subscriptions",
      "Mobile-optimized event minigames",
      "User authentication and profile tracking",
      "Admin panel for score updates and event management"
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/frnchscoangelo18/icpep-booth-games-2026",
    demo: "https://icpep-booth-games-2026.vercel.app",
    image: "/icpep.png",
  },
  {
    title: "Dragonfly",
    description: "An AI-powered, mobile-first sourcing assistant designed to turn messy hardware ideas into ready-to-buy reality.",
    fullDescription: "Dragonfly streamlines hardware procurement by processing technical component descriptions, querying supplier catalogs, generating structured bill-of-materials (BOM), and suggesting compatible alternatives.",
    category: "AI",
    features: [
      "Natural language specification parsing",
      "Automated bill-of-materials (BOM) generation",
      "Supplier inventory and alternative part matching",
      "Mobile-first responsive interface with dark mode"
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/frnchscoangelo18/dragonfly",
    demo: "https://dragonfly-rose.vercel.app",
    image: "/dragonfly.png",
  },
];

