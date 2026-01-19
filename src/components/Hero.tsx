import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Vector } from './icons/Vector';

interface HeroProps {
  onBegin: () => void;
  theme?: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ onBegin, theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardControls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll parallax for decorative elements only (NOT content)
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -75]);

  // Track mouse for parallax effect - DISABLED on mobile
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Handle Card Flip Animation Sequence - Optimized
  useEffect(() => {
    setIsTransitioning(true);
    
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 150));
      
      // Simpler animation on mobile
      if (isMobile) {
        await cardControls.start({
          scale: [0.95, 1],
          opacity: [0, 0.5], // Lower opacity on mobile to not distract
          transition: { duration: 0.8, ease: "easeOut" }
        });
      } else {
        await cardControls.start({
          rotateY: 15,
          transition: { duration: 0.3, ease: "easeInOut" }
        });

        await cardControls.start({
          rotateY: 0,
          transition: { duration: 0.15, ease: "easeOut" }
        });
      }
      
      setIsTransitioning(false);
    };

    sequence();
  }, [theme, cardControls, isMobile]);

  return (
    <div className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden z-10 pt-24 md:pt-12 pb-20 md:pb-0">
      {/* Premium Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient Orbs - Static on mobile */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/6 -left-10 md:top-1/4 md:-left-20 w-[200px] md:w-[600px] h-[200px] md:h-[600px] rounded-full blur-[60px] md:blur-[140px] opacity-30 md:opacity-40 will-change-transform bg-accent"
          animate={{
            x: isMobile ? 0 : mousePosition.x * 2,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { duration: 0.3 },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/6 -right-10 md:bottom-1/4 md:-right-20 w-[180px] md:w-[500px] h-[180px] md:h-[500px] rounded-full blur-[60px] md:blur-[120px] opacity-30 md:opacity-40 will-change-transform bg-secondary"
          animate={{
            x: isMobile ? 0 : -mousePosition.x * 1.5,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { duration: 0.3 },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      {/* Floating Tarot Cards - Hidden on mobile for cleaner UX, visible on desktop */}
      {!isMobile && (
        <>
          <motion.div 
            className="absolute top-[15%] left-[10%] w-28 h-44 rounded-2xl border backdrop-blur-xl transition-colors duration-500 will-change-transform bg-card/20 border-border shadow-xl transform-gpu"
            animate={isTransitioning ? cardControls : { 
              y: [0, -20, 0],
              rotate: [-6, -3, -6],
              x: mousePosition.x * 0.3,
            }}
            transition={isTransitioning ? undefined : { 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              x: { duration: 0.3 }
            }}
            style={{ transformPerspective: 1000, y: y2 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-30 transition-colors duration-500 text-foreground">
              ★
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-[12%] right-[10%] w-28 h-44 rounded-2xl border backdrop-blur-xl transition-colors duration-500 will-change-transform bg-card/20 border-border shadow-xl transform-gpu"
            animate={isTransitioning ? cardControls : { 
              y: [0, 20, 0],
              rotate: [8, 11, 8],
              x: -mousePosition.x * 0.3,
            }}
            transition={isTransitioning ? undefined : { 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 1,
              x: { duration: 0.3 }
            }}
            style={{ transformPerspective: 1000, y: y1 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-30 transition-colors duration-500 text-foreground">
              ✦
            </div>
          </motion.div>
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center max-w-5xl w-full"
      >
        {/* Central Vector Icon - Simplified on mobile */}
        <div className="mb-8 md:mb-12 relative group cursor-pointer transform-gpu">
          <motion.div
            className="w-28 h-28 md:w-48 md:h-48 relative p-6 md:p-8 rounded-full backdrop-blur-sm border transition-colors duration-500 bg-background/5 border-border transform-gpu"
            animate={isMobile ? {} : {
              y: mousePosition.y * 0.1,
              x: mousePosition.x * 0.1,
            }}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full transition-colors duration-500 text-foreground">
              <Vector />
            </div>
            
            {/* Glow Effect - Static on mobile, animated on desktop */}
            <div 
              className={`absolute inset-0 rounded-full blur-2xl md:blur-3xl -z-10 ${
                isDark ? 'bg-white/10' : 'bg-primary/20'
              }`}
              style={{ opacity: 0.4 }}
            />
          </motion.div>
        </div>
        
        {/* Subtitle */}
        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-border" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Tarot Draws
          </span>
          <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-border" />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-[3.2rem] sm:text-7xl md:text-8xl lg:text-9xl font-sans font-light mb-2 leading-[0.9] tracking-tighter transition-colors duration-500 text-foreground">
          Draw a spread.
        </h1>
        
        <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-10 md:mb-12 italic transition-colors duration-500 text-foreground/90">
          Reflect deeply.
        </h2>
        
        <p className="text-sm md:text-lg max-w-[85%] md:max-w-xl mx-auto mb-12 md:mb-16 tracking-wide leading-relaxed px-2 md:px-6 transition-colors duration-500 text-muted-foreground">
          Consult the cosmos through our geometric abstract tarot deck. 
          Find clarity in the patterns of the universe.
        </p>
        
        {/* CTA Button - Always visible, no scroll fade */}
        <button
          onClick={onBegin}
          className="group relative px-9 py-4 md:px-10 md:py-5 rounded-full overflow-hidden transition-all duration-300 bg-primary text-primary-foreground shadow-2xl hover:shadow-primary/30 active:scale-95 touch-manipulation hover:bg-primary/90"
        >
          {/* Shimmer Effect on Hover - Desktop only */}
          <div className="hidden md:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-current opacity-10 to-transparent skew-x-12" />
          
          <div className="relative flex items-center gap-3">
            <span className="tracking-[0.2em] uppercase text-[11px] md:text-xs font-semibold">Begin Your Reading</span>
            <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
        
        {/* Bottom Disclaimer */}
        <div className="mt-16 md:mt-24 text-[8px] md:text-[9px] uppercase tracking-[0.3em] flex items-center gap-3 transition-colors duration-500 text-muted-foreground/40">
          <span>✦</span>
          <span>Guidance from the Stars</span>
          <span>✦</span>
        </div>
      </motion.div>
    </div>
  );
};
