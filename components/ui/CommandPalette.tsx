"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Briefcase, Code2, LayoutGrid, Award, Mail, Sun, Moon, FileText, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCV?: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenCV }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (onClose) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: "hero", title: "Go to Home", icon: Home, section: "#hero" },
    { id: "about", title: "Go to About", icon: User, section: "#about" },
    { id: "experience", title: "Go to Experience", icon: Briefcase, section: "#experience" },
    { id: "skills", title: "Go to Skills", icon: Code2, section: "#skills" },
    { id: "projects", title: "Go to Projects", icon: LayoutGrid, section: "#projects" },
    { id: "certificates", title: "Go to Certificates", icon: Award, section: "#certificates" },
    { id: "contact", title: "Go to Contact", icon: Mail, section: "#contact" },
    {
      id: "theme",
      title: `Toggle Theme (Current: ${theme})`,
      icon: theme === "dark" ? Sun : Moon,
      action: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
    {
      id: "cv",
      title: "View Curriculum Vitae (CV)",
      icon: FileText,
      action: () => {
        if (onOpenCV) onOpenCV();
      },
    },
    {
      id: "github",
      title: "Open GitHub Profile",
      icon: ExternalLink,
      action: () => window.open("https://github.com/frnchscoangelo18", "_blank"),
    },
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (actionItem: typeof actions[0]) => {
    onClose();
    if (actionItem.section) {
      const elem = document.querySelector(actionItem.section);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else if (actionItem.action) {
      actionItem.action();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          className="relative w-full max-w-xl rounded-2xl bg-card border border-border/60 shadow-2xl z-10 overflow-hidden"
        >
          <div className="flex items-center px-4 border-b border-border/50">
            <Search className="w-5 h-5 text-muted-foreground mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or section name..."
              className="w-full py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
              autoFocus
            />
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold text-muted-foreground bg-muted rounded border border-border/50">
              ESC
            </kbd>
          </div>

          <div className="max-h-80 overflow-y-auto p-2">
            {filteredActions.length === 0 ? (
              <div className="p-6 text-center text-sm text-muted-foreground">
                No matching commands found.
              </div>
            ) : (
              filteredActions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">Jump</span>
                </button>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
