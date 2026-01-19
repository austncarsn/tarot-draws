import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { TarotCard as TarotCardType } from '../data/tarot-data';
import { TarotCardBack } from './TarotCardBack';
import { TarotCardFront } from './TarotCardFront';

// TarotCard v3.0 - Simplified debug version

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
  // Working card with proper styling
  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={`relative cursor-pointer rounded-[24px] shadow-2xl overflow-hidden transition-transform hover:scale-105 ${className}`}
      style={{ 
        width: '280px',
        height: '430px',
        backgroundColor: theme === 'dark' ? '#1e1b4b' : '#f8f6f0'
      }}
    >
      {/* Card Back - visible when not flipped */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-500"
        style={{ 
          opacity: isFlipped ? 0 : 1,
          pointerEvents: isFlipped ? 'none' : 'auto'
        }}
      >
        <TarotCardBack theme={theme} className="w-full h-full" />
      </div>
      
      {/* Card Front - visible when flipped */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-500"
        style={{ 
          opacity: isFlipped ? 1 : 0,
          pointerEvents: isFlipped ? 'auto' : 'none',
          transform: isReversed ? 'rotate(180deg)' : undefined
        }}
      >
        {card && <TarotCardFront card={card} theme={theme} className="w-full h-full" />}
      </div>
    </div>
  );
});
