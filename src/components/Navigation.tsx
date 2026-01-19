import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, BookOpen, Menu, X, Home, Info, Shield, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Vector } from './icons/Vector';

interface NavigationProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  spreadType: 'single' | 'triple';
  setSpreadType: (type: 'single' | 'triple') => void;
  reversals: boolean;
  setReversals: (val: boolean) => void;
  reduceMotion: boolean;
  setReduceMotion: (val: boolean) => void;
  currentPage: 'home' | 'glossary';
  setCurrentPage: (page: 'home' | 'glossary') => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  theme,
  setTheme,
  spreadType,
  setSpreadType,
  reversals,
  setReversals,
  reduceMotion,
  setReduceMotion,
  currentPage,
  setCurrentPage
}) => {
  const isDark = theme === 'dark';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isStaticPage = location.pathname !== '/';

  const handleLogoClick = () => {
    if (isStaticPage) {
      navigate('/');
    } else {
      setCurrentPage('home');
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 pl-4 pr-3 py-2.5 flex items-center justify-between rounded-full border backdrop-blur-xl shadow-2xl theme-transition-enabled w-[92%] md:w-[90%] max-w-5xl border-border bg-background/80"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo Section - Refined */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer group pr-6 border-r border-border"
          onClick={handleLogoClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-primary/10 text-primary group-hover:bg-primary/20"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-4 h-4 md:w-5 md:h-5">
              <Vector />
            </div>
          </motion.div>
          <div className="hidden sm:block">
            <span className="font-sans text-sm font-semibold tracking-widest uppercase transition-colors text-foreground">
              tarot draws
            </span>
          </div>
        </motion.div>

        {/* Desktop Center Controls */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {/* Spread Type Selector - Pill Style */}
          <div className="flex items-center rounded-full p-1 border backdrop-blur-md transition-all bg-muted/20 border-border">
            <button
              onClick={() => setSpreadType('single')}
              className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 ${
                spreadType === 'single' 
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {/* Replaced Sparkles with Logo (Vector) */}
              <div className={`w-3 h-3 ${spreadType === 'single' ? '' : 'opacity-50'}`}>
                <Vector />
              </div>
              Insight
            </button>
            <button
              onClick={() => setSpreadType('triple')}
              className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 ${
                spreadType === 'triple' 
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {/* Replaced Sparkles with Logo (Vector) */}
               <div className={`w-3 h-3 ${spreadType === 'triple' ? '' : 'opacity-50'}`}>
                <Vector />
              </div>
              Spread
            </button>
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3 pl-4 md:pl-6 border-l border-border">
          {/* Page Navigation Link */}
          <button
            onClick={() => setCurrentPage(currentPage === 'home' ? 'glossary' : 'home')}
            className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all hover:scale-105 active:scale-95 bg-transparent border-primary/20 text-foreground/80 hover:bg-primary/5"
          >
            <BookOpen className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-widest">
              {currentPage === 'home' ? 'Glossary' : 'Home'}
            </span>
          </button>

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border transition-all bg-primary/5 border-primary/10 text-primary hover:bg-primary/10"
            whileHover={{ scale: 1.05, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-3 h-3 md:w-4 md:h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-3 h-3 md:w-4 md:h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border transition-all bg-primary/5 border-primary/10 text-primary"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Detached Pill Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="fixed top-16 md:top-20 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm p-4 rounded-3xl border backdrop-blur-xl shadow-2xl md:hidden border-border bg-background/95"
          >
            <div className="space-y-4">
              {/* Show Home link on static pages */}
              {isStaticPage && (
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border bg-primary text-primary-foreground"
                >
                  <Home className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Back to Home</span>
                </Link>
              )}

              {/* Show tarot controls only on main app */}
              {!isStaticPage && (
                <>
                  {/* Mobile Spread Selector */}
                  <div className="flex gap-2 p-1 rounded-2xl border bg-muted/20 border-border">
                    <button
                      onClick={() => {
                        setSpreadType('single');
                        setMobileMenuOpen(false);
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs uppercase tracking-wider transition-all ${
                        spreadType === 'single' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground'
                      }`}
                    >
                      <div className="w-3 h-3">
                        <Vector />
                      </div>
                      Insight
                    </button>
                    <button
                      onClick={() => {
                        setSpreadType('triple');
                        setMobileMenuOpen(false);
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs uppercase tracking-wider transition-all ${
                        spreadType === 'triple' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground'
                      }`}
                    >
                      <div className="w-3 h-3">
                        <Vector />
                      </div>
                      Spread
                    </button>
                  </div>

                  {/* Mobile Page Navigation */}
                  <button
                    onClick={() => {
                      setCurrentPage(currentPage === 'home' ? 'glossary' : 'home');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border bg-primary/5 border-primary/10 text-primary"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider">
                      {currentPage === 'home' ? 'View Glossary' : 'Back to Home'}
                    </span>
                  </button>

                  {/* Mobile Toggles */}
                  <div className="space-y-3 pt-2 border-t border-border">
                    <label className="flex items-center justify-between cursor-pointer p-2">
                      <span className="text-xs uppercase tracking-wider text-foreground/70">
                        Enable Reversals
                      </span>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={reversals}
                          onChange={(e) => setReversals(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 rounded-full transition-all peer-checked:bg-secondary bg-muted" />
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm" />
                      </div>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer p-2">
                      <span className="text-xs uppercase tracking-wider text-foreground/70">
                        Reduce Motion
                      </span>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={reduceMotion}
                          onChange={(e) => setReduceMotion(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 rounded-full transition-all peer-checked:bg-secondary bg-muted" />
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm" />
                      </div>
                    </label>
                  </div>
                </>
              )}

              {/* Page Links - Always visible */}
              <div className="space-y-2 pt-2 border-t border-border">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 px-2 pt-1">Pages</p>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                    location.pathname === '/about' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground/70 hover:bg-muted/20'
                  }`}
                >
                  <Info className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">About</span>
                </Link>
                <Link
                  to="/privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                    location.pathname === '/privacy' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground/70 hover:bg-muted/20'
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Privacy</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                    location.pathname === '/contact' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground/70 hover:bg-muted/20'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Contact</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
