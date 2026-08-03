import { useState, useEffect, useCallback } from "react";

/**
 * Custom React hook for managing interactive easter egg notification state inside the TerminalCard.
 *
 * Automatically clears the active notification message after a 5-second timeout.
 *
 * @returns Object containing `easterEgg` string or `null`, `triggerEasterEgg` callback, and `clearEasterEgg` callback.
 */
export function useEasterEgg() {
  const [easterEgg, setEasterEgg] = useState<string | null>(null);

  useEffect(() => {
    if (easterEgg) {
      const timer = setTimeout(() => setEasterEgg(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [easterEgg]);

  const triggerEasterEgg = useCallback((msg: string) => {
    setEasterEgg(msg);
  }, []);

  const clearEasterEgg = useCallback(() => {
    setEasterEgg(null);
  }, []);

  return { easterEgg, triggerEasterEgg, clearEasterEgg };
}
