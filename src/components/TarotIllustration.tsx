import React from 'react';
import { svgPaths } from './icons/vector-paths';

interface IllustrationProps {
  id?: string;
  color?: string;
  className?: string;
  theme?: 'light' | 'dark';
  imageUrl?: string;
}

export const TarotIllustration: React.FC<IllustrationProps> = ({ color = '#d4af37', className = "", theme = 'dark', imageUrl }) => {
  const isLight = theme === 'light';
  
  if (imageUrl) {
    return (
      <img 
        src={imageUrl} 
        alt="Tarot Card Illustration" 
        className={`w-full h-full object-cover mix-blend-normal opacity-90 hover:opacity-100 transition-opacity duration-500 ${className}`} 
      />
    );
  }

  // Unified "Basic SVG" for all cards - Geometric Mysticism
  // Using the paths from the Vector component to ensure consistency
  
  // Theme-based colors
  // In light mode, we want high contrast (dark primary). In dark mode, we use the card's specific color or gold.
  const primaryFill = isLight ? "var(--foreground)" : (color || "var(--primary)"); 
  const accentFill = isLight ? "var(--accent)" : "var(--accent-foreground)";
  
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" preserveAspectRatio="xMidYMid meet">
        <g id="MysticSymbol">
          <path d={svgPaths.p1cddc800} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p47d7e80} fill={accentFill} className="transition-colors duration-300" />
          <path d={svgPaths.p1e416280} fill={accentFill} className="transition-colors duration-300" />
          <path d={svgPaths.pf116200} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p20dae700} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p188bd300} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p11875d00} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p9036910} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p3f918b00} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p2fd8a700} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p3de38c80} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p2711a500} fill={accentFill} className="transition-colors duration-300" />
          <path d={svgPaths.p12792f80} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p351ffc00} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p3983d300} fill={accentFill} fillOpacity="0.9" className="transition-colors duration-300" />
          <path d={svgPaths.p18215b00} fill={accentFill} fillOpacity="0.98" className="transition-colors duration-300" />
          <path d={svgPaths.paa38700} fill={accentFill} className="transition-colors duration-300" />
          <path d={svgPaths.p32312900} fill={accentFill} className="transition-colors duration-300" />
          <path d={svgPaths.p2058bc00} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p31d1a200} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p2dc6320} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.pd50c600} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p24482e00} fill={primaryFill} className="transition-colors duration-300" />
          <path d={svgPaths.p2f13a700} fill={accentFill} className="transition-colors duration-300" />
          <path d={svgPaths.p20b09200} fill={accentFill} fillOpacity="0.98" className="transition-colors duration-300" />
          <path d={svgPaths.p1d7b6280} fill={accentFill} fillOpacity="0.98" className="transition-colors duration-300" />
          <path d={svgPaths.p32874b00} fill={accentFill} fillOpacity="0.95" className="transition-colors duration-300" />
          <path d={svgPaths.p8705b80} fill={accentFill} fillOpacity="0.95" className="transition-colors duration-300" />
        </g>
      </svg>
    </div>
  );
};
