# 🚀 Franchesco Angelo's Portfolio

Welcome to the official repository for my personal portfolio website! This application showcases my work, technical stack, experience, and projects as a **Future AI & Machine Learning Engineer** and Computer Engineering student.

![Portfolio Preview](./public/websitepic.png)

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom CSS variables & theme tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for micro-interactions, fade-ins, and typewriter effects
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/) integrated via `LenisProvider` with lifecycle animation frame cleanup
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Social Icons
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) with View Transition API circular wipe effect
- **Fonts**: `Inter`, `Outfit`, and `Silkscreen` via `next/font/google`

---

## ✨ Key Features & Performance Optimizations

1. **Interactive Terminal Hero & Easter Eggs**:
   - Simulated terminal card with custom interactive buttons, typewriter text effects, and expandable CV modal preview.

2. **Data-Driven Architecture**:
   - Separation of content from presentation. Projects, work experience, certificates, and technical skills are cleanly managed inside [`data/`](./data/).

3. **Performance & Memory Optimizations**:
   - **Leak-Free RAF Loops**: Smooth scrolling and particle background animation loops automatically clean up animation frames on unmount.
   - **Passive Event Listeners**: Window `scroll`, `mousemove`, and `resize` handlers use `{ passive: true }` to minimize main-thread jank.
   - **ScrollSpy Optimization**: Memoized section tracking prevents unnecessary listener re-attachments during re-renders.

4. **Accessibility (a11y) & Motion Controls**:
   - Full support for `prefers-reduced-motion`. Displays static fallbacks for animations, marquee rows, and typewriter effects when enabled.
   - Keyboard accessible modals (`CVModal`) with focus trapping and `Escape` key listeners.

5. **View Transition Theme Toggling**:
   - Smooth circular mask transition on theme change with fallback for non-supporting browsers.

---

## 📁 Project Structure

```text
my_portfolio/
├── app/
│   ├── globals.css         # Tailwind directives, CSS variables, & z-index scale
│   ├── layout.tsx          # Root layout with font definitions & global providers
│   ├── page.tsx            # Main landing page assembling section components
│   └── icon.svg            # Site favicon
├── components/
│   ├── icons/
│   │   └── SocialIcons.tsx # Custom SVG icon map for social links
│   ├── sections/           # Modular page sections
│   │   ├── Hero.tsx        # Terminal hero section & CV modal launcher
│   │   ├── About.tsx       # Education & focus highlights
│   │   ├── Experience.tsx  # Interactive work experience timeline
│   │   ├── Skills.tsx      # Infinite dual-row skill marquee
│   │   ├── Projects.tsx    # Showcase cards with GitHub/Live demo links
│   │   ├── Certificates.tsx# Credential showcase with expand/collapse
│   │   └── Contact.tsx     # Social links & contact section
│   └── ui/                 # Reusable UI primitives
│       ├── CVModal.tsx            # Accessible modal for resume viewing
│       ├── FadeIn.tsx             # Framer Motion scroll animation wrapper
│       ├── Footer.tsx             # Footer component
│       ├── HeroTitle.tsx          # Animated headline component
│       ├── MarqueeRow.tsx         # Infinite scrolling skill row
│       ├── Navbar.tsx             # Floating desktop & mobile navigation bar
│       ├── ParticleBackground.tsx # Canvas interactive particle system
│       ├── ScrollToTop.tsx        # Scroll-reset on page load
│       ├── SectionDivider.tsx     # Gradient section separator
│       ├── SpotlightCard.tsx      # Mouse-following spotlight card
│       ├── TerminalCard.tsx       # Code terminal container with easter egg banner
│       ├── ThemeProvider.tsx      # next-themes provider wrapper
│       ├── ThemeToggle.tsx        # Dark/light mode button with View Transitions
│       └── Typewriter.tsx         # Configurable typewriter text animation
├── data/                   # Content configuration files
│   ├── certificates.ts     # Certification data array
│   ├── experience.ts       # Work experience timeline data
│   ├── projects.ts         # Portfolio projects data
│   ├── skills.ts           # Technical skills array & marquee row split
│   └── social.ts           # Social profile links & handles
├── hooks/                  # Custom React hooks
│   ├── useEasterEgg.ts     # Easter egg notification state hook
│   ├── useLenis.tsx        # Lenis smooth scroll provider & hook
│   └── useScrollSpy.ts     # High-performance section active link tracker
├── public/                 # Static assets (images, badges, CV)
├── next.config.ts          # Next.js configuration (remote image domain rules)
└── tsconfig.json           # TypeScript configuration (@/* path alias)
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm** or **yarn** / **pnpm**

### Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/frnchscoangelo18/my_portfolio.git
   cd my_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with HMR |
| `npm run build` | Compiles the production build |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint rules checks across the codebase |

---

## 🖊️ Editing Content

To update content on the site, edit the corresponding files in the [`data/`](./data/) directory:

- **Projects**: Edit [`data/projects.ts`](./data/projects.ts)
- **Work Experience**: Edit [`data/experience.ts`](./data/experience.ts)
- **Certificates**: Edit [`data/certificates.ts`](./data/certificates.ts)
- **Skills**: Edit [`data/skills.ts`](./data/skills.ts)
- **Social Links**: Edit [`data/social.ts`](./data/social.ts)

---

## 📬 Contact & Connect

- **LinkedIn**: [Franchesco Angelo Angeles](https://www.linkedin.com/in/franchescoangeloangeles18)
- **GitHub**: [@frnchscoangelo18](https://github.com/frnchscoangelo18)
- **Email**: [franchescoangelo1805@gmail.com](mailto:franchescoangelo1805@gmail.com)

---

> *"The best way to predict the future is to invent it." — Alan Kay*