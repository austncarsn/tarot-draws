import React, { useMemo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CelestialBackgroundProps {
  theme?: 'dark' | 'light';
}

export const CelestialBackground: React.FC<CelestialBackgroundProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const [particleCount, setParticleCount] = useState(30);

  useEffect(() => {
    // Optimize for larger screens
    const updateCount = () => {
       if (typeof window !== 'undefined') {
         setParticleCount(window.innerWidth > 768 ? 80 : 30);
       }
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);
  
  const stars = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      baseDelay: Math.random() * 5,
      duration: Math.random() * 4 + 3,
      opacity: Math.random() * 0.8 + 0.2,
      staggerDelay: Math.random() * 0.3,
    }));
  }, [particleCount]);

  const geometricElements = useMemo(() => {
    const count = particleCount > 50 ? 12 : 6;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 150 + 50,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      rotation: Math.random() * 360,
      duration: Math.random() * 30 + 20,
      opacity: Math.random() * 0.15 + 0.05,
    }));
  }, [particleCount]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Premium Gradient Background Layers */}
      <motion.div 
        className="absolute inset-0 bg-background"
        animate={{
          background: isDark 
            ? 'radial-gradient(ellipse at 50% 30%, #4527A0 0%, #311B92 40%, #1A0E4E 100%)'
            : 'radial-gradient(ellipse at 50% 30%, #F5F3F8 0%, #EDE7F6 40%, #D1C4E9 100%)',
        }}
        transition={{ duration: 1 }}
      />

      {/* Animated Geometric Grid */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke="currentColor" 
                strokeOpacity="0.05"
                strokeWidth="0.5"
                className="text-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      {geometricElements.map((elem) => (
        <motion.div
          key={`geo-${elem.id}`}
          className="absolute border-foreground/10"
          style={{
            width: elem.size,
            height: elem.size,
            top: elem.top,
            left: elem.left,
            opacity: elem.opacity,
          }}
          animate={{
            rotate: [elem.rotation, elem.rotation + 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: elem.duration, repeat: Infinity, ease: "linear" },
            scale: { duration: elem.duration / 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {elem.id % 3 === 0 ? (
            // Triangle
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <polygon 
                points="50,10 90,90 10,90" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                className="text-secondary opacity-30"
              />
            </svg>
          ) : elem.id % 3 === 1 ? (
            // Circle
            <div 
              className="w-full h-full rounded-full border border-primary/20" 
            />
          ) : (
            // Square
            <div 
              className="w-full h-full border border-secondary/20" 
            />
          )}
        </motion.div>
      ))}

      {/* Mystical Stars (Dark Theme) */}
      <AnimatePresence>
        {isDark && (
          <div className="absolute inset-0">
            {stars.map((star) => (
              <motion.div
                key={`star-${star.id}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [star.opacity, 0.3, star.opacity],
                  scale: [1, 1.3, 1],
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0,
                  transition: { duration: 0.4, delay: star.staggerDelay }
                }}
                transition={{
                  opacity: { duration: star.duration, repeat: Infinity, ease: "easeInOut", delay: star.baseDelay },
                  scale: { duration: star.duration, repeat: Infinity, ease: "easeInOut", delay: star.baseDelay }
                }}
                className="absolute will-change-transform"
                style={{
                  width: star.size,
                  height: star.size,
                  top: star.top,
                  left: star.left,
                }}
              >
                <div 
                  className="w-full h-full rounded-full bg-gradient-to-br from-accent to-secondary shadow-[0_0_8px_rgba(126,87,194,0.6)]" 
                />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Ambient Light Particles (Light Theme) */}
      <AnimatePresence>
        {!isDark && (
          <div className="absolute inset-0">
            {stars.slice(0, Math.floor(particleCount / 2)).map((particle) => (
              <motion.div
                key={`particle-${particle.id}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  y: [100, -100],
                  x: [0, Math.random() * 50 - 25],
                }}
                exit={{ 
                  opacity: 0,
                  transition: { duration: 0.4 }
                }}
                transition={{
                  opacity: { duration: particle.duration, repeat: Infinity, ease: "easeInOut", delay: particle.baseDelay },
                  y: { duration: particle.duration * 2, repeat: Infinity, ease: "linear", delay: particle.baseDelay },
                  x: { duration: particle.duration, repeat: Infinity, ease: "easeInOut", delay: particle.baseDelay },
                }}
                className="absolute will-change-transform"
                style={{
                  width: particle.size * 1.5,
                  height: particle.size * 1.5,
                  top: particle.top,
                  left: particle.left,
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-sm" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Sacred Geometry Rings - Optimized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[900px] md:h-[900px]">
        {/* Outer Ring */}
        <motion.div 
          className="absolute inset-0 rounded-full border border-accent/15 will-change-transform"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          {/* Orbital Dots */}
          {[0, 90, 180, 270].map((angle) => (
            <motion.div
              key={`dot-outer-${angle}`}
              className="absolute w-3 h-3 rounded-full bg-accent shadow-lg will-change-transform"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${angle}deg) translateX(50%) translateY(-50%)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: angle / 360,
              }}
            />
          ))}
        </motion.div>

        {/* Middle Ring */}
        <motion.div 
          className="absolute inset-[15%] md:inset-[80px] rounded-full border border-secondary/20 will-change-transform"
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Ring */}
        <motion.div 
          className="absolute inset-[30%] md:inset-[160px] rounded-full border border-primary/10 will-change-transform"
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        >
          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-3xl bg-accent/30" />
        </motion.div>
      </div>

      {/* Gradient Overlay for Depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark 
            ? 'linear-gradient(to bottom, transparent 0%, rgba(26,14,78,0.4) 100%)'
            : 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 100%)',
        }}
      />
    </div>
  );
};
