import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { CelestialBackground } from './components/CelestialBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TarotCard } from './components/TarotCard';
import { ReadingResult } from './components/ReadingResult';
import { Glossary } from './components/Glossary';
import { AdPlacement, MobileStickyAd } from './components/AdPlacement';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ContactPage } from './pages/ContactPage';
import { TAROT_CARDS, TarotCard as TarotCardType } from './data/tarot-data';
import { Vector } from './components/icons/Vector';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useThemeTransition } from './hooks/useThemeTransition';

type AppState = 'landing' | 'drawing' | 'reading' | 'glossary';

const TarotApp: React.FC = () => {
  const { theme, switchTheme } = useThemeTransition('dark');
  const [state, setState] = useState<AppState>('landing');
  const [spreadType, setSpreadType] = useState<'single' | 'triple'>('single');
  const [reversals, setReversals] = useState(false);
  const [reduceMotion, setReduceMotion] = useReducedMotion();
  const [drawnCards, setDrawnCards] = useState<{ card: TarotCardType; isReversed: boolean }[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [selectedGlossaryCard, setSelectedGlossaryCard] = useState<TarotCardType | null>(null);
  const location = useLocation();

  const handleBegin = useCallback(() => {
    setState('drawing');
    setFlippedIndices([]);
    
    // Simulate drawing cards
    const count = spreadType === 'single' ? 1 : 3;
    const shuffled = [...TAROT_CARDS].sort(() => Math.random() - 0.5);
    const selection = shuffled.slice(0, count).map(card => ({
      card,
      isReversed: reversals && Math.random() > 0.7
    }));
    
    setDrawnCards(selection);
  }, [spreadType, reversals]);

  const handleCardClick = useCallback((index: number) => {
    setFlippedIndices(prev => {
        if (prev.includes(index)) return prev;
        return [...prev, index];
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (state !== 'drawing') return;
    
    const totalToFlip = spreadType === 'single' ? 1 : 3;
    if (flippedIndices.length === totalToFlip) {
      const timer = setTimeout(() => setState('reading'), 1500);
      return () => clearTimeout(timer);
    }
  }, [flippedIndices, spreadType, state]);

  const handleReset = useCallback(() => {
    setState('landing');
    setDrawnCards([]);
    setFlippedIndices([]);
  }, []);

  const handleSetCurrentPage = useCallback((page: 'home' | 'glossary') => {
      setState(page === 'glossary' ? 'glossary' : 'landing');
  }, []);

  const handleCloseGlossaryCard = useCallback(() => setSelectedGlossaryCard(null), []);

  // Reset tarot app state when navigating to different pages
  useEffect(() => {
    if (location.pathname !== '/') {
      setState('landing');
      setDrawnCards([]);
      setFlippedIndices([]);
      setSelectedGlossaryCard(null);
    }
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "user"}>
      {/* 
        Using standard Tailwind classes mapped to CSS variables in globals.css 
        bg-background -> var(--background)
        text-foreground -> var(--foreground)
      */}
      <div className={`min-h-screen theme-transition-enabled font-sans selection:bg-accent/30 relative overflow-hidden bg-background text-foreground ${theme}`}>
        {/* Premium Ambient Background */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-background via-sidebar to-background"
            animate={{
              opacity: 1
            }}
            transition={{ duration: 0.5 }}
          />
          {/* Floating Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-accent/10"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-secondary/10"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <CelestialBackground theme={theme} />
        
        <Navigation 
          theme={theme}
          setTheme={switchTheme}
          spreadType={spreadType}
          setSpreadType={setSpreadType}
          reversals={reversals}
          setReversals={setReversals}
          reduceMotion={reduceMotion}
          setReduceMotion={setReduceMotion}
          currentPage={state === 'glossary' ? 'glossary' : 'home'}
          setCurrentPage={handleSetCurrentPage}
        />

        <main className="relative pt-20 pb-20">
        <AnimatePresence mode="wait">
          {state === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero onBegin={handleBegin} theme={theme} />
              <div className="flex justify-center py-12 px-6">
                <AdPlacement size="large-leaderboard" className="hidden lg:block" theme={theme} />
                <AdPlacement size="leaderboard" className="hidden md:block lg:hidden" theme={theme} />
                <AdPlacement size="mobile-large-banner" className="md:hidden" theme={theme} />
              </div>
            </motion.div>
          )}

          {state === 'drawing' && (
            <motion.div
              key="drawing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[80vh] flex flex-col items-center justify-center p-6"
            >
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-serif mb-2 text-foreground">Focus your energy</h2>
                <p className="text-muted-foreground text-xs md:text-sm tracking-widest uppercase">
                  {spreadType === 'single' ? 'Draw your card' : 'Reveal your spread in sequence'}
                </p>
              </div>

              <div className={`flex flex-wrap justify-center gap-6 md:gap-12`}>
                {drawnCards.map((data, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {spreadType === 'triple' && (
                      <span className="text-[10px] text-gold/40 uppercase tracking-[0.4em] mb-4">
                        {idx === 0 ? 'Past' : idx === 1 ? 'Present' : 'Future'}
                      </span>
                    )}
                    <TarotCard 
                      theme={theme}
                      card={data.card}
                      isFlipped={flippedIndices.includes(idx)}
                      isReversed={data.isReversed}
                      onClick={() => handleCardClick(idx)}
                      className={flippedIndices.includes(idx) ? '' : 'md:hover:scale-105 md:hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]'}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {state === 'reading' && (
            <motion.div
              key="reading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <ReadingResult cards={drawnCards} onReset={handleReset} theme={theme} />
            </motion.div>
          )}

          {state === 'glossary' && (
            <motion.div
              key="glossary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex justify-center pt-32 -mb-20">
                 <AdPlacement size="leaderboard" className="hidden md:block" theme={theme} />
                 <AdPlacement size="mobile-banner" className="md:hidden" theme={theme} />
              </div>
              <Glossary 
                theme={theme}
                onSelectCard={setSelectedGlossaryCard} 
                selectedCardId={selectedGlossaryCard?.id}
              />
            </motion.div>
          )}
        </AnimatePresence>
        </main>

        <MobileStickyAd theme={theme} />

        {/* Glossary Modal Detail */}
        <AnimatePresence>
          {selectedGlossaryCard && (
            <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseGlossaryCard}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                className="relative w-full md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-2xl border-t md:border border-gold/20 bg-card text-card-foreground
                  [&::-webkit-scrollbar]:w-1.5 
                  [&::-webkit-scrollbar-track]:bg-transparent 
                  [&::-webkit-scrollbar-thumb]:rounded-full 
                  [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20 hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/40"
              >
                <button 
                  onClick={handleCloseGlossaryCard}
                  className="absolute top-4 right-4 text-xs tracking-widest z-50 p-3 rounded-full transition-colors text-muted-foreground hover:text-foreground bg-accent/5 hover:bg-accent/10"
                >
                  CLOSE
                </button>
                
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 flex items-center justify-center min-h-[50vh] md:min-h-[600px] bg-muted/20">
                    <TarotCard 
                      theme={theme}
                      card={selectedGlossaryCard} 
                      isFlipped={true} 
                      className="!w-full !max-w-[300px] !h-auto !aspect-[2/3] md:!max-w-[340px] shadow-2xl" 
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-xs text-gold uppercase tracking-[0.3em] mb-3 opacity-60">Card No. {selectedGlossaryCard.number}</div>
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">{selectedGlossaryCard.name}</h2>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedGlossaryCard.keywords.map(kw => (
                        <span key={kw} className="text-[10px] md:text-xs border px-3 py-1 rounded uppercase tracking-wider bg-accent/5 border-accent/20 text-accent-foreground/80">
                          {kw}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest mb-2 font-semibold text-muted-foreground">Upright Meaning</h4>
                        <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                          {selectedGlossaryCard.description}
                        </p>
                      </div>
                      <div className="pt-6 border-t border-border">
                        <h4 className="text-xs uppercase tracking-widest mb-2 font-semibold text-muted-foreground">Reversed Meaning</h4>
                        <p className="text-sm md:text-base italic leading-relaxed text-foreground/60">
                          {selectedGlossaryCard.reversedDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <Footer theme={theme} />
      </div>
    </MotionConfig>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TarotApp />} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><PrivacyPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
    </Router>
  );
}

// Reusable page wrapper for static pages with theme support
interface PageWrapperProps {
  children: React.ReactElement<{ theme?: 'dark' | 'light' }>;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { theme, switchTheme } = useThemeTransition('dark');
  const [reduceMotion] = useReducedMotion();
  
  return (
    <div className={`min-h-screen theme-transition-enabled font-sans selection:bg-accent/30 relative overflow-hidden bg-background text-foreground ${theme}`}>
      <CelestialBackground theme={theme} />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation 
          theme={theme}
          setTheme={switchTheme}
          spreadType="single"
          setSpreadType={() => {}}
          reversals={false}
          setReversals={() => {}}
          reduceMotion={reduceMotion}
          setReduceMotion={() => {}}
          currentPage="home"
          setCurrentPage={() => {}}
        />
        <main className="flex-1">
          {React.cloneElement(children, { theme })}
        </main>
        <Footer theme={theme} />
      </div>
    </div>
  );
};
