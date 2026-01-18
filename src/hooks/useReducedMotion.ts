import { useState, useEffect } from 'react';

export function useReducedMotion() {
  // Initialize from localStorage or default to false (system preference is handled separately by CSS/Framer)
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tarot-reduce-motion');
      return saved === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (reduceMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
    localStorage.setItem('tarot-reduce-motion', String(reduceMotion));
  }, [reduceMotion]);

  return [reduceMotion, setReduceMotion] as const;
}
