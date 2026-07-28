import { useState, useEffect, useRef } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");
  const activeSectionRef = useRef<string>("");
  const sectionIdsKey = sectionIds.join(",");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + offset;

          let currentSection = activeSectionRef.current;
          let foundSection = false;

          for (const id of sectionIds) {
            const element = document.getElementById(id.substring(1)); // remove #
            if (element) {
              const { top, bottom } = element.getBoundingClientRect();
              const elementTop = top + window.scrollY;
              const elementBottom = bottom + window.scrollY;

              if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                currentSection = id;
                foundSection = true;
              }
            }
          }

          if (window.scrollY < 50) {
            currentSection = sectionIds[0] || "";
            foundSection = true;
          }

          if (
            window.innerHeight + Math.round(window.scrollY) >=
            document.documentElement.scrollHeight - 50
          ) {
            currentSection = sectionIds[sectionIds.length - 1] || "";
            foundSection = true;
          }

          if ((foundSection || currentSection === "") && currentSection !== activeSectionRef.current) {
            activeSectionRef.current = currentSection;
            setActiveSection(currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIdsKey, sectionIds, offset]);

  return activeSection;
}
