import React from 'react';
import { svgPaths } from './vector-paths';

interface VectorProps {
  className?: string;
  color?: string;
  gradient?: boolean;
  theme?: 'dark' | 'light';
}

export const Vector: React.FC<VectorProps> = ({ className = "", color, gradient = false, theme = 'dark' }) => {
  const gradientId = 'logoGradient';
  const glowId = 'logoGlow';
  
  return (
    <div className={`relative size-full ${className}`} data-name="Logo">
      <svg 
        className="block size-full" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 500 500"
        style={{ color: color }}
      >
        <defs>
          {/* Gradient for premium look */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme === 'dark' ? '#f8f6fa' : '#4a1d96'} />
            <stop offset="50%" stopColor={theme === 'dark' ? '#d4af37' : '#7c3aed'} />
            <stop offset="100%" stopColor={theme === 'dark' ? '#f8f6fa' : '#4a1d96'} />
          </linearGradient>
          {/* Glow filter */}
          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <g id="Logo" filter={gradient ? `url(#${glowId})` : undefined}>
          <path d={svgPaths.p1cddc800} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p47d7e80} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.8" />
          <path d={svgPaths.p1e416280} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.8" />
          <path d={svgPaths.pf116200} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p20dae700} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p188bd300} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p11875d00} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p9036910} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p3f918b00} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p2fd8a700} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p3de38c80} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p2711a500} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.8" />
          <path d={svgPaths.p12792f80} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p351ffc00} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p3983d300} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.9" />
          <path d={svgPaths.p18215b00} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.95" />
          <path d={svgPaths.paa38700} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.8" />
          <path d={svgPaths.p32312900} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.8" />
          <path d={svgPaths.p2058bc00} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p31d1a200} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p2dc6320} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.pd50c600} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p24482e00} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
          <path d={svgPaths.p2f13a700} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.9" />
          <path d={svgPaths.p20b09200} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.98" />
          <path d={svgPaths.p1d7b6280} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.98" />
          <path d={svgPaths.p32874b00} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.95" />
          <path d={svgPaths.p8705b80} fill={gradient ? `url(#${gradientId})` : "currentColor"} fillOpacity="0.95" />
        </g>
      </svg>
    </div>
  );
};
