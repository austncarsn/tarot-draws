import React from 'react';
import { TarotCardBack } from './TarotCardBack';

interface ThemeComparisonProps {
  theme?: 'dark' | 'light';
}

export const ThemeComparison: React.FC<ThemeComparisonProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h3 className={`text-3xl font-serif mb-4 theme-transition-enabled font-light ${isDark ? 'text-white' : 'text-[#1a1a24]'}`}>Design Evolution</h3>
        <p className={`text-xs uppercase tracking-[0.3em] theme-transition-enabled ${isDark ? 'text-white/40' : 'text-[#1a1a24]/40'}`}>Theme Comparison: Dark vs Light Archetypes</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
        <div className="flex flex-col items-center gap-8">
          <div className="w-[200px] h-[300px] md:w-[220px] md:h-[340px]">
            <TarotCardBack theme="dark" className="shadow-2xl" />
          </div>
          <span className="text-[10px] text-white/60 uppercase tracking-[0.3em]">Celestial Night (Dark)</span>
        </div>
        
        <div className={`h-[1px] w-24 md:h-32 md:w-[1px] theme-transition-enabled ${isDark ? 'bg-white/10' : 'bg-[#311B92]/10'}`} />
        
        <div className="flex flex-col items-center gap-8">
          <div className="w-[200px] h-[300px] md:w-[220px] md:h-[340px]">
             <TarotCardBack theme="light" className="shadow-xl" />
          </div>
          <span className={`text-[10px] px-3 py-1 rounded-full uppercase tracking-[0.3em] theme-transition-enabled ${isDark ? 'text-black/60 bg-white/10' : 'text-[#311B92]/60 bg-[#311B92]/5'}`}>Ethereal Dawn (Light)</span>
        </div>
      </div>
      
      <div className={`mt-20 rounded-3xl p-10 border theme-transition-enabled backdrop-blur-sm ${isDark ? 'bg-white/5 border-white/5' : 'bg-[#311B92]/5 border-[#311B92]/5'}`}>
        <div className="grid md:grid-cols-2 gap-12 text-sm">
          <div className="space-y-4">
            <h4 className={`uppercase tracking-widest text-xs font-medium theme-transition-enabled ${isDark ? 'text-white' : 'text-[#311B92]'}`}>Dark Theme Characteristics</h4>
            <ul className={`space-y-3 list-disc pl-4 font-light leading-relaxed theme-transition-enabled ${isDark ? 'text-white/60' : 'text-[#1a1a24]/70'}`}>
              <li>Clean white iconography on deep nebula purple</li>
              <li>Glassmorphic layers with subtle depth</li>
              <li>Focus on introspective shadow work</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className={`uppercase tracking-widest text-xs font-medium theme-transition-enabled ${isDark ? 'text-white' : 'text-[#311B92]'}`}>Light Theme Characteristics</h4>
            <ul className={`space-y-3 list-disc pl-4 font-light leading-relaxed theme-transition-enabled ${isDark ? 'text-white/60' : 'text-[#1a1a24]/70'}`}>
              <li>Soft porcelain and lilac gradients</li>
              <li>Precision royal purple on crisp white</li>
              <li>Focus on clarity and solar illumination</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
