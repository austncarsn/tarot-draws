import React from 'react';
import { svgPaths } from './vector-paths';

interface VectorProps {
  className?: string;
  color?: string;
}

export const Vector: React.FC<VectorProps> = ({ className = "", color }) => {
  return (
    <div className={`relative size-full ${className}`} data-name="Logo">
      <svg 
        className="block size-full" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 500 500"
        style={{ color: color }}
      >
        <g id="Logo">
          <path d={svgPaths.p1cddc800} fill="currentColor" />
          <path d={svgPaths.p47d7e80} fill="currentColor" fillOpacity="0.8" />
          <path d={svgPaths.p1e416280} fill="currentColor" fillOpacity="0.8" />
          <path d={svgPaths.pf116200} fill="currentColor" />
          <path d={svgPaths.p20dae700} fill="currentColor" />
          <path d={svgPaths.p188bd300} fill="currentColor" />
          <path d={svgPaths.p11875d00} fill="currentColor" />
          <path d={svgPaths.p9036910} fill="currentColor" />
          <path d={svgPaths.p3f918b00} fill="currentColor" />
          <path d={svgPaths.p2fd8a700} fill="currentColor" />
          <path d={svgPaths.p3de38c80} fill="currentColor" />
          <path d={svgPaths.p2711a500} fill="currentColor" fillOpacity="0.8" />
          <path d={svgPaths.p12792f80} fill="currentColor" />
          <path d={svgPaths.p351ffc00} fill="currentColor" />
          <path d={svgPaths.p3983d300} fill="currentColor" fillOpacity="0.9" />
          <path d={svgPaths.p18215b00} fill="currentColor" fillOpacity="0.95" />
          <path d={svgPaths.paa38700} fill="currentColor" fillOpacity="0.8" />
          <path d={svgPaths.p32312900} fill="currentColor" fillOpacity="0.8" />
          <path d={svgPaths.p2058bc00} fill="currentColor" />
          <path d={svgPaths.p31d1a200} fill="currentColor" />
          <path d={svgPaths.p2dc6320} fill="currentColor" />
          <path d={svgPaths.pd50c600} fill="currentColor" />
          <path d={svgPaths.p24482e00} fill="currentColor" />
          <path d={svgPaths.p2f13a700} fill="currentColor" fillOpacity="0.9" />
          <path d={svgPaths.p20b09200} fill="currentColor" fillOpacity="0.98" />
          <path d={svgPaths.p1d7b6280} fill="currentColor" fillOpacity="0.98" />
          <path d={svgPaths.p32874b00} fill="currentColor" fillOpacity="0.95" />
          <path d={svgPaths.p8705b80} fill="currentColor" fillOpacity="0.95" />
        </g>
      </svg>
    </div>
  );
};
