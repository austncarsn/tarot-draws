import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, X, Sparkles, Star } from 'lucide-react';
import { TAROT_CARDS, TarotCard as TarotCardType } from '../data/tarot-data';
import { Vector } from './icons/Vector';
import { GalleryCard } from './GalleryCard';

interface GlossaryProps {
  onSelectCard: (card: TarotCardType) => void;
  selectedCardId?: string;
  theme?: 'dark' | 'light';
}

export const Glossary: React.FC<GlossaryProps> = ({ onSelectCard, selectedCardId, theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'All' | 'Major' | 'Cups' | 'Wands' | 'Swords' | 'Pentacles'>('All');

  const filteredCards = TAROT_CARDS.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(search.toLowerCase()) || 
                         card.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = filter === 'All' || card.arcana === filter || card.suit === filter;
    return matchesSearch && matchesFilter;
  });

  const filterOptions = ['All', 'Major', 'Cups', 'Wands', 'Swords', 'Pentacles'] as const;

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-40 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
      {/* Premium Header */}
      <motion.header 
        className="mb-12 md:mb-20 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Icon */}
        <motion.div 
          className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 relative"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="text-foreground">
            <Vector />
          </div>
          <motion.div 
            className="absolute inset-0 blur-3xl rounded-full bg-accent/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Title */}
        <h2 className="text-4xl md:text-7xl font-serif mb-4 md:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-accent to-foreground">
          Arcana Glossary
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="h-[1px] w-12 md:w-16 bg-accent/30" />
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          <div className="h-[1px] w-12 md:w-16 bg-accent/30" />
        </div>

        {/* Description */}
        <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide px-4 text-muted-foreground">
          Explore the collective wisdom of the Arcana. Each card serves as a gateway to understanding 
          the elegant patterns of destiny.
        </p>
      </motion.header>

      {/* Premium Search & Filter Section */}
      <motion.div 
        className="sticky top-20 md:top-24 z-30 mb-12 md:mb-16 backdrop-blur-xl py-4 md:py-6 -mx-4 md:-mx-6 px-4 md:px-6 border-y transition-colors duration-500 bg-background/80 border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center justify-between max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative w-full lg:w-1/2 group">
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity rounded-2xl bg-accent/10" />
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 transition-colors text-muted-foreground/30 group-focus-within:text-accent" />
              
              <input 
                type="text" 
                placeholder="Search by name or keyword..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-10 py-3 md:py-4 text-sm md:text-base rounded-2xl border backdrop-blur-md transition-all outline-none bg-muted/20 border-border text-foreground placeholder:text-muted-foreground/30 focus:border-accent/50 focus:bg-muted/30"
              />
              
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all text-muted-foreground/50 hover:text-foreground hover:bg-muted/20"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="w-full lg:w-auto flex flex-nowrap overflow-x-auto no-scrollbar gap-2 p-1.5 md:p-2 rounded-2xl border backdrop-blur-md bg-muted/20 border-border">
            {filterOptions.map((option) => (
              <motion.button
                key={option}
                onClick={() => setFilter(option)}
                className={`flex-shrink-0 px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap ${
                  filter === option
                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <motion.div 
          className="text-center mt-4 md:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground/40">
            {filteredCards.length} {filteredCards.length === 1 ? 'Card' : 'Cards'} Found
          </p>
        </motion.div>
      </motion.div>

      {/* Cards Grid with Stagger Animation */}
      <AnimatePresence mode="wait">
        {filteredCards.length > 0 ? (
          <motion.div 
            key={`${filter}-${search}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: Math.min(idx * 0.05, 0.5), // Cap delay so waiting isn't too long
                  duration: 0.5,
                  ease: "easeOut" 
                }}
              >
                <GalleryCard 
                  card={card}
                  onClick={() => onSelectCard(card)}
                  isSelected={selectedCardId === card.id}
                  theme={theme}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-20 md:py-32"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 rounded-full border-2 border-dashed flex items-center justify-center border-border">
              <Search className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-2 text-foreground">
              No Cards Found
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Try adjusting your search or filter
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Footer Element */}
      <motion.div 
        className="flex items-center justify-center mt-20 md:mt-32 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 md:w-20 bg-border" />
          <Star className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" fill="currentColor" />
          <div className="h-[1px] w-12 md:w-20 bg-border" />
        </div>
      </motion.div>
    </div>
  );
};
