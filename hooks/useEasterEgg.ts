import { useState, useEffect, useCallback } from 'react';

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
