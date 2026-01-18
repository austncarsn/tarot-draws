import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

interface CelestialToggleProps {
  theme: 'dark' | 'light';
  onToggle: (theme: 'dark' | 'light') => void;
}

export const CelestialToggle: React.FC<CelestialToggleProps> = ({ theme, onToggle }) => {
  const isReducedMotion = useReducedMotion();
  const isDark = theme === 'dark';

  const transition = isReducedMotion 
    ? { duration: 0 } 
    : { duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] };

  const handleToggle = () => {
    onToggle(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleToggle}
      className="relative focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d4af37]/40 rounded-full group cursor-pointer p-0 border-0 bg-transparent"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="w-[80px] h-[40px] rounded-[20px] relative overflow-hidden border transition-colors duration-500"
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, #1a1a24, #252535)' 
            : 'linear-gradient(135deg, #87CEEB, #e0f0ff)',
          borderColor: isDark 
            ? 'rgba(212, 175, 55, 0.3)' 
            : 'rgba(201, 162, 39, 0.4)',
          boxShadow: isDark 
            ? 'inset 0 2px 4px rgba(0,0,0,0.3)' 
            : 'inset 0 2px 4px rgba(0,0,0,0.1)'
        }}
        whileHover={{
          borderColor: isDark ? 'rgba(212, 175, 55, 0.6)' : 'rgba(201, 162, 39, 0.7)'
        }}
      >
        {/* Track Content: Stars (Dark) */}
        <AnimatePresence>
          {isDark && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-3 top-0 h-full flex items-center gap-1.5"
            >
              {[2, 3, 2].map((size, i) => (
                <motion.div
                  key={`star-${i}`}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ 
                    duration: 1.5 + i * 0.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="bg-[#d4af37] rounded-full"
                  style={{ width: size, height: size }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Track Content: Clouds (Light) */}
        <AnimatePresence>
          {!isDark && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-4 top-0 h-full flex flex-col justify-center gap-1"
            >
              {[0, 1].map((i) => (
                <motion.div
                  key={`cloud-${i}`}
                  animate={{ x: [0, 3, 0] }}
                  transition={{ 
                    duration: 3 + i * 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="bg-white rounded-full opacity-70"
                  style={{ 
                    width: 14 + i * 4, 
                    height: 6,
                    marginLeft: i * 4 
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Thumb */}
        <motion.div
          className="absolute top-1 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden"
          initial={false}
          animate={{
            x: isDark ? 44 : 4,
            background: isDark
              ? 'radial-gradient(circle at center, #f5f5f0, #e8e5dc)'
              : 'radial-gradient(circle at center, #FFD700, #FFA500)',
            boxShadow: isDark
              ? '0 2px 8px rgba(0,0,0,0.3)'
              : '0 2px 8px rgba(0,0,0,0.2), 0 0 20px rgba(255, 215, 0, 0.4)'
          }}
          transition={transition}
          whileTap={{ scale: 0.95 }}
        >
          {/* Icons Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Moon Icon */}
            <motion.div
              initial={false}
              animate={{
                opacity: isDark ? 1 : 0,
                rotate: isDark ? 0 : -30,
                scale: isDark ? 1 : 0.5
              }}
              transition={transition}
              className="absolute text-[#1a1a24]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                {/* Crater Detail */}
                <circle cx="12" cy="15" r="1.5" fill="black" fillOpacity="0.05" />
                <circle cx="8" cy="12" r="1" fill="black" fillOpacity="0.05" />
              </svg>
            </motion.div>

            {/* Sun Icon */}
            <motion.div
              initial={false}
              animate={{
                opacity: isDark ? 0 : 1,
                rotate: isDark ? -180 : 360,
                scale: isDark ? 0.5 : 1
              }}
              transition={transition}
              className="absolute text-white"
            >
              <div className="relative flex items-center justify-center">
                {/* Sun Core */}
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
                {/* Sun Rays */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`ray-${i}`}
                    initial={false}
                    animate={{ scale: isDark ? 0 : 1 }}
                    transition={{ ...transition, delay: isDark ? 0 : 0.2 }}
                    className="absolute bg-white"
                    style={{
                      width: 2,
                      height: 5,
                      borderRadius: 1,
                      transform: `rotate(${i * 45}deg) translateY(-8px)`
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </button>
  );
};

export const CelestialToggleShowcase: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <div className="space-y-12">
      <div className="flex flex-col items-center gap-8">
        <h4 className="text-xs text-gold uppercase tracking-[0.4em] mb-4">Interactive Prototype</h4>
        <CelestialToggle theme={theme} onToggle={setTheme} />
        <p className="text-[10px] text-white/40 uppercase tracking-widest">
          Active Theme: <span className="text-gold">{theme === 'dark' ? 'Celestial Night' : 'Ethereal Dawn'}</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-4 p-8 border border-white/5 rounded-2xl bg-[#0a0a0f]">
           <span className="text-[9px] text-white/30 uppercase tracking-widest">Static Dark</span>
           <CelestialToggle theme="dark" onToggle={() => {}} />
        </div>
        <div className="flex flex-col items-center gap-4 p-8 border border-black/5 rounded-2xl bg-white">
           <span className="text-[9px] text-black/30 uppercase tracking-widest">Static Light</span>
           <CelestialToggle theme="light" onToggle={() => {}} />
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-xs text-gold uppercase tracking-[0.4em] text-center">Animation Sequence (Mockup)</h4>
        <div className="flex justify-between items-center gap-2 overflow-x-auto pb-4 px-4 no-scrollbar">
          {[0, 0.25, 0.5, 0.75, 1].map((step, i) => (
            <div key={`step-${i}`} className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="scale-75 opacity-80">
                <div 
                  className="w-[80px] h-[40px] rounded-[20px] relative border"
                  style={{
                    background: step < 0.5 
                      ? 'linear-gradient(135deg, #1a1a24, #252535)' 
                      : 'linear-gradient(135deg, #87CEEB, #e0f0ff)',
                    borderColor: 'rgba(212, 175, 55, 0.3)'
                  }}
                >
                  <div 
                    className="absolute top-1 w-8 h-8 rounded-full" 
                    style={{ 
                      left: 4 + step * 40,
                      background: step < 0.5 ? '#f5f5f0' : '#FFD700',
                      transform: `rotate(${step * 180}deg)`
                    }} 
                  />
                </div>
              </div>
              <span className="text-[8px] text-white/20 uppercase tracking-tighter">Frame {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
