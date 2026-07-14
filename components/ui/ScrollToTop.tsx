"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top immediately on mount
    window.scrollTo(0, 0);

    return () => {
      // Optional: restore to auto when component unmounts
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return null;
}
