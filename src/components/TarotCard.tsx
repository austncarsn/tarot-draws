import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { TarotCard as TarotCardType } from '../data/tarot-data';
import { TarotCardBack } from './TarotCardBack';
import { TarotCardFront } from './TarotCardFront';

// TarotCard v2.0 - Separate mobile/desktop rendering paths

interface TarotCardProps {
  card?: TarotCardType;
  isFlipped: boolean;
  isReversed?: boolean;
  onClick?: () => void;
  className?: string;
  theme?: 'dark' | 'light';
}

export const TarotCard: React.FC<TarotCardProps> = React.memo(({ 
  card, 
  isFlipped, 
  isReversed = false,
  onClick,
  className = "",
  theme = 'dark'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Initialize isMobile - check window on mount, default true for safety
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return true;
  });

  // 3D Tilt Effect State (desktop only)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['-100%', '100%']);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || isFlipped) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    }
  }, [isMobile, isFlipped, x, y]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  // MOBILE CARD COMPONENT - Simple opacity-based flip
  if (isMobile) {
    return (
      <div 
        ref={cardRef}
        role="button"
        tabIndex={0}
        onClick={onClick}
        className={`relative w-[200px] h-[310px] sm:w-[240px] sm:h-[370px] cursor-pointer touch-manipulation select-none rounded-[24px] shadow-2xl overflow-hidden ${className}`}
        style={{ backgroundColor: 'var(--card)' }}
      >
        {/* CARD BACK */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            opacity: isFlipped ? 0 : 1,
            transition: 'opacity 0.4s ease-in-out',
            zIndex: isFlipped ? 1 : 2
          }}
        >
          <TarotCardBack theme={theme} className="w-full h-full" />
        </div>

        {/* CARD FRONT */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            opacity: isFlipped ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out',
            transform: isReversed ? 'rotate(180deg)' : undefined,
            zIndex: isFlipped ? 2 : 1
          }}
        >
          {card && <TarotCardFront card={card} theme={theme} className="w-full h-full" />}
        </div>
      </div>
    );
  }

  // DESKTOP CARD COMPONENT - Full 3D flip with effects
  return (
    <motion.div 
      ref={cardRef}
      role="button"
      tabIndex={0}
      className={`relative w-[280px] h-[430px] perspective-1000 cursor-pointer group touch-manipulation select-none z-10 rounded-[24px] transform-gpu ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      whileHover={{ scale: 1.02, y: -10 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Ambient Glow */}
      <div 
        className={`absolute -inset-6 rounded-[40px] blur-2xl transition-opacity duration-700 pointer-events-none bg-accent/20 ${
          isHovered && !isFlipped ? 'opacity-40' : 'opacity-0'
        }`} 
      />

      <motion.div
        className="relative w-full h-full transform-gpu"
        style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 25, mass: 1.2 }}
      >
        {/* CARD BACK */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden shadow-2xl bg-card" 
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
        >
          <TarotCardBack theme={theme} className="w-full h-full" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none mix-blend-overlay"
            style={{ x: glareX, opacity: isHovered ? 0.5 : 0 }}
          />
        </div>

        {/* CARD FRONT */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden shadow-2xl bg-card"
          style={{ backfaceVisibility: 'hidden', transform: `rotateY(180deg) ${isReversed ? 'rotateZ(180deg)' : ''}` }}
        >
          {card && <TarotCardFront card={card} theme={theme} className="w-full h-full" />}
          <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-color-dodge bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </motion.div>
    </motion.div>
  );
});
