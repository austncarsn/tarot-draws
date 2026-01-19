import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { TarotCard as TarotCardType } from '../data/tarot-data';
import { TarotCardBack } from './TarotCardBack';
import { TarotCardFront } from './TarotCardFront';

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
  const isDark = theme === 'dark';
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  // Initialize isMobile based on window width (SSR-safe)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return true; // Default to mobile for SSR
  });

  // 3D Tilt Effect State
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [isFlipped ? 0 : 5, isFlipped ? 0 : -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [isFlipped ? 180 : -5, isFlipped ? 180 : 5]);
  
  // Glare effect transform - must be called unconditionally (Rules of Hooks)
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
      const width = rect.width;
      const height = rect.height;
      const mouseXVal = e.clientX - rect.left;
      const mouseYVal = e.clientY - rect.top;

      const xPct = (mouseXVal / width) - 0.5;
      const yPct = (mouseYVal / height) - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  }, [isMobile, isFlipped, x, y]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  }, [onClick]);

  return (
    <motion.div 
      ref={cardRef}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative w-[200px] h-[310px] sm:w-[240px] sm:h-[370px] md:w-[280px] md:h-[430px] perspective-1000 cursor-pointer group touch-manipulation select-none z-10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-[24px] transform-gpu ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileHover={!isMobile ? { scale: 1.02, y: -10 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {/* Dynamic Ambient Glow - Hidden on mobile for performance */}
      {!isMobile && (
        <div 
          className={`absolute -inset-6 rounded-[40px] blur-2xl transition-opacity duration-700 pointer-events-none bg-accent/20 ${
            isHovered && !isFlipped ? 'opacity-40' : 'opacity-0'
          }`} 
        />
      )}

      {/* For mobile: Simple opacity-based card flip with no 3D transforms */}
      {isMobile ? (
        <div className="relative w-full h-full">
          {/* CARD BACK - visible when not flipped */}
          <div 
            className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden shadow-2xl bg-card"
            style={{ 
              opacity: isFlipped ? 0 : 1,
              transition: 'opacity 0.4s ease-in-out',
              zIndex: isFlipped ? 1 : 2
            }}
          >
            <TarotCardBack theme={theme} className="w-full h-full" />
          </div>

          {/* CARD FRONT - visible when flipped */}
          <div 
            className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden shadow-2xl bg-card"
            style={{ 
              opacity: isFlipped ? 1 : 0,
              transition: 'opacity 0.4s ease-in-out',
              transform: isReversed ? 'rotateZ(180deg)' : undefined,
              zIndex: isFlipped ? 2 : 1
            }}
          >
            {card && (
              <TarotCardFront 
                card={card} 
                theme={theme} 
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      ) : (
        /* Desktop: Full 3D flip animation */
        <motion.div
          className="relative w-full h-full transform-gpu"
          style={{ 
            transformStyle: 'preserve-3d',
            rotateX: rotateX,
            rotateY: rotateY
          }}
          animate={{ 
            rotateY: isFlipped ? 180 : 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 180, 
            damping: 25,
            mass: 1.2
          }}
        >
          {/* CARD BACK */}
          <div 
            className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden shadow-2xl bg-card transform-gpu will-change-transform" 
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)'
            }}
          >
            <TarotCardBack theme={theme} className="w-full h-full" />
            
            {/* Dynamic Glare/Sheen on Hover (Back) */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none mix-blend-overlay"
              style={{
                x: glareX,
                opacity: isHovered ? 0.5 : 0
              }}
            />
          </div>

          {/* CARD FRONT */}
          <div 
            className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden shadow-2xl bg-card transform-gpu will-change-transform"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: `rotateY(180deg) ${isReversed ? 'rotateZ(180deg)' : ''}`
            }}
          >
            {card && (
              <TarotCardFront 
                card={card} 
                theme={theme} 
                className="w-full h-full"
              />
            )}
            
            {/* Holographic Foil Overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-color-dodge bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
});
