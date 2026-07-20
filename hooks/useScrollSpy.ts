import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentSection = activeSection; // Keep previous by default
      let foundSection = false;

      for (const id of sectionIds) {
        const element = document.getElementById(id.substring(1)); // remove #
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          // Check if the scroll position is within the element's top and bottom
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = id;
            foundSection = true;
          }
        }
      }

      // Special case for top of page to activate first link if we haven't reached it
      if (window.scrollY < 50) {
        currentSection = sectionIds[0] || '';
        foundSection = true;
      }

      // Special case for bottom of page to activate last link
      if (
        window.innerHeight + Math.round(window.scrollY) >= 
        document.documentElement.scrollHeight - 50
      ) {
        currentSection = sectionIds[sectionIds.length - 1] || '';
        foundSection = true;
      }

      if (foundSection || currentSection === '') {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset, activeSection]);

  return activeSection;
}
