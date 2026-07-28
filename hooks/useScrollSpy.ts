import { useState, useEffect, useRef } from "react";

/**
 * High-performance active section tracker custom hook.
 *
 * Uses `requestAnimationFrame` throttle and passive scroll listeners to detect which section target
 * is currently in the viewport without causing main-thread jank.
 *
 * @param sectionIds - Array of section link IDs (e.g. `['#hero', '#about', '#projects']`)
 * @param offset - Vertical pixel offset threshold to adjust active activation trigger point (default: 100)
 * @returns The href string of the currently active section (e.g. `'#about'`)
 */
export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");
  const activeSectionRef = useRef<string>("");
  const sectionIdsKey = sectionIds.join(",");

  useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [sectionIdsKey, sectionIds, offset]);

  return activeSection;
}
