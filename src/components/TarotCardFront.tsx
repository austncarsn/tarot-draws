import React from 'react';
import { TarotCard } from '../data/tarot-data';
import { TarotIllustration } from './TarotIllustration';
import { Sparkles } from 'lucide-react';

interface TarotCardFrontProps {
  card: TarotCard;
  isReversed?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

export const TarotCardFront: React.FC<TarotCardFrontProps> = ({ 
  card, 
  isReversed = false, 
  theme = 'dark',
  className = ''
}) => {
  return (
    <div className={`relative w-full h-full flex flex-col p-1.5 rounded-[24px] overflow-hidden select-none transition-colors duration-500 group bg-card text-card-foreground ${className}`}>
      
      {/* Noise Texture Overlay for Premium Paper Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} 
      />

      {/* Premium Double Border Frame */}
      <div className="absolute inset-0 rounded-[24px] pointer-events-none border-[3px] opacity-80 z-20 border-border" />
      
      <div className="absolute inset-[6px] rounded-[18px] pointer-events-none border-[1px] opacity-40 z-20 border-primary" />

      {/* Main Card Content */}
      <div className="relative z-10 w-full h-full flex flex-col p-5">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4 px-1 relative z-30">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-primary">
            {card.number}
          </span>
          <div className="flex gap-1">
             {card.suit && (
                <span className="text-[8px] uppercase tracking-wider opacity-60">{card.suit}</span>
             )}
          </div>
        </div>

        {/* The Portal: Image Container */}
        <div className="relative flex-1 w-full mx-auto mb-2">
          {/* Mystical Arch Frame */}
          <div className="relative w-full h-full rounded-t-[100px] rounded-b-[16px] overflow-hidden border transition-all duration-700 border-primary/10 bg-gradient-to-b from-primary/5 to-transparent shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
            
            {/* Background Glow inside Portal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full blur-[40px] opacity-40 pointer-events-none bg-accent" />

            {/* Illustration */}
            <div className={`relative w-full h-full p-6 flex items-center justify-center transition-transform duration-700 ease-out ${isReversed ? 'rotate-180' : ''}`}>
              <TarotIllustration 
                 id={card.id} 
                 color={card.illustration} 
                 imageUrl={card.imageUrl} 
                 theme={theme}
                 className="w-full h-full object-contain drop-shadow-2xl filter contrast-110 saturate-110"
              />
            </div>
            
            {/* Glass Reflection on Portal */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-30 pointer-events-none" />
            
            {/* Subtle Grain Overlay on Image */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} 
            />
          </div>
        </div>

        {/* Footer: Name & Details */}
        <div className="mt-3 text-center relative z-30">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <Sparkles className="w-2 h-2 text-primary" />
            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <h3 className="text-lg md:text-xl font-serif tracking-tight leading-none mb-3 text-card-foreground drop-shadow-sm">
            {card.name}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-1.5">
            {card.keywords.slice(0, 2).map(keyword => (
              <span key={keyword} className="text-[8px] px-2 py-0.5 rounded-sm uppercase tracking-[0.15em] font-medium border text-muted-foreground border-border bg-muted/20">
                  {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
