import React from 'react';
import { motion } from 'motion/react';
import { Vector } from './icons/Vector';

interface TarotCardBackProps {
  theme: 'light' | 'dark';
  className?: string;
}

export const TarotCardBack: React.FC<TarotCardBackProps> = ({ theme, className = "" }) => {
  const isDark = theme === 'dark';

  return (
    <div 
      className={`relative w-full h-full rounded-[24px] overflow-hidden group bg-card ${className}`}
    >
      {/* Deep Cosmic Background with Texture */}
      <div 
        className="absolute inset-0 transition-colors duration-500 bg-card"
      />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} 
      />

      {/* Geometric Grid Pattern - Vector Replacement for PNG */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <pattern id="cardBackGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground"/>
               </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cardBackGrid)" />
         </svg>
      </div>

      {/* Central Monolith Container */}
      <div className="absolute inset-3 rounded-[16px] flex items-center justify-center overflow-hidden border border-border bg-background/50 backdrop-blur-sm">
          
          {/* Rotating Ring - Sacred Geometry */}
          <motion.div 
            className="absolute w-40 h-40 rounded-full border-[1px] opacity-10 border-foreground"
            style={{ borderStyle: 'dashed' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute w-32 h-32 rounded-full border-[1px] opacity-20 border-accent"
            style={{ borderStyle: 'dotted' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />

          {/* Central Logo with Breathing Animation */}
          <motion.div 
            className="relative w-14 h-14 text-accent"
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
             <Vector />
             {/* Glow behind logo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 blur-xl -z-10 opacity-40 bg-accent" />
          </motion.div>
      </div>

      {/* Premium Double Border Gradient */}
      <div className="absolute inset-0 rounded-[24px] border-[3px] opacity-20 z-10 pointer-events-none border-foreground" />
      
      {/* Gold Foil Accent Corners */}
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-accent opacity-60" />
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-accent opacity-60" />
      <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-accent opacity-60" />
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-accent opacity-60" />

      {/* Holographic Sheen on Hover (Handled by parent, but added here for fallback) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none skew-x-12" />
    </div>
  );
};
