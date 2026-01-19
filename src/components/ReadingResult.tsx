import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RotateCcw, Sparkles, Star } from 'lucide-react';
import { TarotCard as TarotCardType } from '../data/tarot-data';
import { AdPlacement } from './AdPlacement';
import { TarotCardFront } from './TarotCardFront';
import { Vector } from './icons/Vector';

interface ReadingResultProps {
  cards: { card: TarotCardType; isReversed: boolean }[];
  onReset: () => void;
  theme?: 'dark' | 'light';
}

export const ReadingResult: React.FC<ReadingResultProps> = ({ cards, onReset, theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax scroll effect for header - Disabled for better UX
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-20 relative z-10 overflow-x-hidden">
      {/* Premium Header with subtle parallax */}
      <motion.div 
        className="flex flex-col items-center mb-16 md:mb-24 text-center relative z-20"
        style={{ y: headerY, opacity: headerOpacity }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div 
          className="w-12 h-12 md:w-16 md:h-16 mb-5 md:mb-6 relative transition-colors duration-500 text-foreground"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Vector />
          <div className="absolute inset-0 blur-2xl rounded-full transition-colors duration-500 bg-accent/20" />
        </motion.div>
        
        <h2 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] mb-4 font-medium transition-colors duration-500 text-foreground">
          Your Cosmic Transmission
        </h2>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 md:w-16 transition-colors duration-500 bg-border" />
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 transition-colors duration-500 text-muted-foreground" />
          <div className="h-[1px] w-12 md:w-16 transition-colors duration-500 bg-border" />
        </div>

        <p className="max-w-xl text-xs md:text-sm font-sans leading-relaxed px-4 transition-colors duration-500 text-muted-foreground">
          The cards have spoken. Reflect on these ancient symbols and their modern resonance.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="space-y-20 md:space-y-32">
        {cards.map(({ card, isReversed }, idx) => (
          <ScrollRevealCard 
            key={`${card.id}-${idx}`}
            card={card}
            isReversed={isReversed}
            index={idx}
            total={cards.length}
            isDark={isDark}
            theme={theme}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Action Button */}
      <motion.div 
        className="flex justify-center mt-20 md:mt-32 pb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <button
          onClick={onReset}
          className="group relative px-10 py-5 md:px-12 md:py-6 rounded-full overflow-hidden transition-all duration-300 bg-primary text-primary-foreground shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95 touch-manipulation hover:bg-primary/90"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-current opacity-10 to-transparent skew-x-12" />
          
          <div className="relative flex items-center gap-3">
            <RotateCcw className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span className="tracking-[0.2em] uppercase text-xs font-semibold">Draw New Reading</span>
          </div>
        </button>
      </motion.div>

      {/* Ad Placement */}
      <div className="mt-16 md:mt-20 flex justify-center">
        <AdPlacement size="leaderboard" className="hidden md:block" theme={theme} />
        <AdPlacement size="mobile-large-banner" className="md:hidden" theme={theme} />
      </div>
    </div>
  );
};

const ScrollRevealCard: React.FC<{
  card: TarotCardType;
  isReversed: boolean;
  index: number;
  total: number;
  isDark: boolean;
  theme: 'dark' | 'light';
  isMobile?: boolean;
}> = ({ card, isReversed, index, total, isDark, theme, isMobile }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-10 md:gap-24 items-center group`}
    >
      {/* Card Visual */}
      <div className="flex flex-col items-center md:w-1/2 w-full">
        <motion.div
          className="mb-5 md:mb-6 px-4 py-1 md:px-5 md:py-1.5 rounded-full backdrop-blur-md border transition-colors duration-500 bg-background/5 border-border text-foreground/80"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-semibold">
            {total > 1 ? (index === 0 ? 'Past' : index === 1 ? 'Present' : 'Future') : 'The Insight'}
          </span>
        </motion.div>

        <motion.div 
          className="relative w-[240px] h-[360px] md:w-[320px] md:h-[480px]"
          whileHover={{ scale: 1.02, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute -inset-4 rounded-full blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 bg-primary/5" />
          <TarotCardFront 
            card={card}
            isReversed={isReversed}
            theme={theme}
            className={`w-full h-full relative z-10 transition-shadow duration-500 shadow-xl md:shadow-2xl`}
          />
        </motion.div>
      </div>

      {/* Card Interpretation */}
      <motion.div 
        className="w-full md:w-1/2 space-y-5 md:space-y-8 px-0 md:px-0"
        initial={{ opacity: 0, x: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {/* Upright Meaning */}
        <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl border backdrop-blur-xl transition-all duration-500 bg-background/5 border-border shadow-[0_0_30px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <Star className="w-3.5 h-3.5 md:w-4 md:h-4 transition-colors duration-500 text-foreground/80" fill="currentColor" />
            <h4 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-colors duration-500 text-foreground">
              Upright Meaning
            </h4>
          </div>
          <p className="text-sm md:text-base leading-relaxed font-light transition-colors duration-500 text-muted-foreground">
            {card.description}
          </p>
        </div>

        {/* Reversed Meaning */}
        <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl border backdrop-blur-xl transition-all duration-500 bg-background/5 border-border shadow-[0_0_30px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 transition-colors duration-500 text-foreground/80" />
            <h4 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-colors duration-500 text-foreground">
              Reversed Aspect
            </h4>
          </div>
          <p className="text-sm md:text-base leading-relaxed font-light transition-colors duration-500 text-muted-foreground">
            {card.reversedDescription}
          </p>
        </div>

        {/* Active Indicator */}
        {isReversed && (
          <motion.div 
            className="p-4 rounded-xl md:rounded-2xl border backdrop-blur-md text-center transition-colors duration-500 bg-background/5 border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs italic font-sans transition-colors duration-500 text-muted-foreground">
              This card appeared reversed in your reading
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
