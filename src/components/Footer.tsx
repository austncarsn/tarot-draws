import React from 'react';
import { Link } from 'react-router-dom';
import { Vector } from './icons/Vector';

interface FooterProps {
  theme?: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme = 'dark' }) => {
  return (
    <footer className="relative py-12 px-6 border-t border-border transition-colors duration-300 ease-out text-center bg-card/40">
      <div className="flex items-center justify-center gap-4 text-muted-foreground/40 mb-6">
        <div className="h-[1px] w-12 bg-current" />
        <div className="w-8 h-8 opacity-60">
          <Vector />
        </div>
        <div className="h-[1px] w-12 bg-current" />
      </div>
      <p className="text-[10px] uppercase tracking-[0.3em] mb-4 text-muted-foreground">
        &copy; 2025 TAROT DRAWS. GUIDANCE FROM THE STARS.
      </p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <Link 
          to="/" 
          className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          About
        </Link>
        <Link 
          to="/privacy" 
          className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          Privacy
        </Link>
        <Link 
          to="/contact" 
          className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
};
