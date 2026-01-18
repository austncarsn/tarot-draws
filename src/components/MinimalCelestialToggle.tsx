import React from 'react';
import { motion } from 'motion/react';

interface MinimalCelestialToggleProps {
  theme: 'dark' | 'light';
  onToggle: (theme: 'dark' | 'light') => void;
}

export const MinimalCelestialToggle: React.FC<MinimalCelestialToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    onToggle(isDark ? 'light' : 'dark');
  };

  // SVG Paths provided by the user
  const moonPath = "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z";
  const sunPath = "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 6a6 6 0 100 12 6 6 0 000-12z";

  return (
    <button
      onClick={toggleTheme}
      key={`toggle-${theme}`}
      className={`group relative w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 accent-gold accent-flourish ${
        isDark 
          ? 'bg-transparent border-gold/30 hover:bg-gold/10' 
          : 'bg-transparent border-[#c9a227]/40 hover:bg-[#c9a227]/10'
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          {/* Morphing Path */}
          <motion.path
            d={isDark ? moonPath : sunPath}
            initial={false}
            animate={{ 
              d: isDark ? moonPath : sunPath,
              rotate: isDark ? 0 : 180,
              color: isDark ? '#d4af37' : '#c9a227'
            }}
            transition={{ 
              duration: 0.4, 
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Decorative Sun Rays that pop out (alternative to single path if it doesn't morph cleanly) */}
        {/* The user's sunPath includes the rays, but for a "morph" look we can add extra layers if needed */}
      </div>

      {/* Hover Glow */}
      <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${isDark ? 'bg-gold' : 'bg-[#c9a227]'}`} />
    </button>
  );
};

export const MinimalCelestialToggleShowcase: React.FC = () => {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');

  return (
    <div className="flex flex-col items-center gap-12 p-8">
      <div className="space-y-4 text-center">
        <h4 className="text-[10px] text-gold uppercase tracking-[0.4em]">Minimal Morph Toggle</h4>
        <div className="flex items-center gap-12">
           <div className="flex flex-col items-center gap-4">
             <span className="text-[9px] text-white/20 uppercase tracking-widest">Interactive</span>
             <MinimalCelestialToggle theme={theme} onToggle={setTheme} />
           </div>
           
           <div className="flex flex-col items-center gap-4">
             <span className="text-[9px] text-white/20 uppercase tracking-widest">Static Light</span>
             <MinimalCelestialToggle theme="light" onToggle={() => {}} />
           </div>

           <div className="flex flex-col items-center gap-4">
             <span className="text-[9px] text-white/20 uppercase tracking-widest">Static Dark</span>
             <MinimalCelestialToggle theme="dark" onToggle={() => {}} />
           </div>
        </div>
      </div>

      <div className="space-y-4 w-full">
        <h4 className="text-[10px] text-gold uppercase tracking-[0.4em] text-center">Keyframes visualization</h4>
        <div className="flex justify-between max-w-lg mx-auto overflow-hidden">
          {[0, 45, 90, 135, 180].map((rot, i) => (
            <div key={rot} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full border border-gold/20 scale-75`}>
                 <svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" className="w-5 h-5" style={{ transform: `rotate(${rot}deg)` }}>
                    <path d={i < 2 ? "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" : "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 6a6 6 0 100 12 6 6 0 000-12z"} />
                 </svg>
              </div>
              <span className="text-[8px] text-white/20">{rot}°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
