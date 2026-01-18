import { useState, useCallback, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useThemeTransition(initialTheme: 'dark' | 'light' = 'dark') {
  const [theme, setThemeState] = useState<'dark' | 'light'>(initialTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [reduceMotion] = useReducedMotion();

  const switchTheme = useCallback(async (newTheme: 'dark' | 'light') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    document.body.classList.add('theme-transitioning');
    
    // 1. Prepare Elements: Force GPU Layers
    const animatedElements = document.querySelectorAll('.theme-animated, .card, .badge');
    animatedElements.forEach(el => {
      (el as HTMLElement).style.willChange = 'transform, opacity, filter';
    });

    // 2. Apply Theme
    setThemeState(newTheme);
    // Sync with Tailwind dark mode class logic if needed
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', newTheme);

    // 3. Wait for Transition
    const duration = reduceMotion ? 150 : 600; // Matches --theme-transition-total
    await new Promise(resolve => setTimeout(resolve, duration));

    // 4. Cleanup
    animatedElements.forEach(el => {
      (el as HTMLElement).style.willChange = 'auto';
    });
    
    document.body.classList.remove('theme-transitioning');
    setIsTransitioning(false);
  }, [isTransitioning, reduceMotion]);

  // Initial setup
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return { theme, switchTheme, isTransitioning };
}
