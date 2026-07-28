export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "HEXNODE",
    description: "Interactive visualizers for common data structures and algorithms (Stack, Queue, Binary Tree, Binary Search Tree, Fibonacci, Factorial, Tower of Hanoi).",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/frnchscoangelo18/HEXNODE",
    demo: "https://hexnode-gamma.vercel.app",
    image: "/hexnode.png",
  },
  {
    title: "ICPEP Booth Games 2026",
    description: "Interactive web application for the ICPEP Booth Games event.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/frnchscoangelo18/icpep-booth-games-2026",
    demo: "https://icpep-booth-games-2026.vercel.app",
    image: "/icpep.png",
  },
  {
    title: "Dragonfly",
    description: "An AI-powered, mobile-first sourcing assistant designed to turn messy hardware ideas into ready-to-buy reality.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/frnchscoangelo18/dragonfly",
    demo: "https://dragonfly-rose.vercel.app",
    image: "/dragonfly.png",
  },
];
