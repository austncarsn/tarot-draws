import React from 'react';
import { motion } from 'motion/react';
import { TarotCard } from '../data/tarot-data';
import { TarotCardFront } from './TarotCardFront';

interface GalleryCardProps {
  card: TarotCard;
  isSelected?: boolean;
  onClick?: () => void;
  theme?: 'dark' | 'light';
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ card, isSelected, onClick, theme = 'dark' }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
      onClick={onClick}
      className={`relative aspect-[2/3] cursor-pointer rounded-2xl transition-all duration-300 ease-out group ${
        isSelected 
          ? 'ring-2 ring-foreground shadow-xl scale-[1.02]'
          : 'hover:ring-1 hover:ring-foreground/30'
      }`}
    >
      <TarotCardFront 
        card={card} 
        theme={theme} 
        className="w-full h-full"
      />
      
      {/* Selection Overlay */}
      {isSelected && (
         <div className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-overlay bg-foreground/10" />
      )}
    </motion.div>
  );
};
