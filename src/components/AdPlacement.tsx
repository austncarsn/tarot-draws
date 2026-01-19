import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, X, Sparkles } from 'lucide-react';

export type AdSize = 
  | 'leaderboard' 
  | 'large-leaderboard' 
  | 'med-rect' 
  | 'large-rect' 
  | 'mobile-banner' 
  | 'mobile-large-banner' 
  | 'adaptive';

interface AdPlacementProps {
  size: AdSize;
  className?: string;
  isCosmicSponsor?: boolean;
  onClose?: () => void;
  theme?: 'dark' | 'light';
  adClient?: string;
  adSlot?: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  fullWidthResponsive?: boolean;
  adLayout?: string;
}

const SIZE_CONFIG: Record<AdSize, { width: string; height: string; label: string }> = {
  'leaderboard': { width: '728px', height: '90px', label: '728 × 90' },
  'large-leaderboard': { width: '970px', height: '90px', label: '970 × 90' },
  'med-rect': { width: '300px', height: '250px', label: '300 × 250' },
  'large-rect': { width: '336px', height: '280px', label: '336 × 280' },
  'mobile-banner': { width: '320px', height: '50px', label: '320 × 50' },
  'mobile-large-banner': { width: '320px', height: '100px', label: '320 × 100' },
  'adaptive': { width: '100%', height: '100px', label: 'Fluid × 100' },
};

const ADSENSE_SLOT_BY_SIZE: Record<AdSize, string | undefined> = {
  leaderboard: import.meta.env.VITE_ADSENSE_SLOT_LEADERBOARD,
  'large-leaderboard': import.meta.env.VITE_ADSENSE_SLOT_LARGE_LEADERBOARD,
  'med-rect': import.meta.env.VITE_ADSENSE_SLOT_MED_RECT,
  'large-rect': import.meta.env.VITE_ADSENSE_SLOT_LARGE_RECT,
  'mobile-banner': import.meta.env.VITE_ADSENSE_SLOT_MOBILE_BANNER,
  'mobile-large-banner': import.meta.env.VITE_ADSENSE_SLOT_MOBILE_LARGE_BANNER,
  adaptive: import.meta.env.VITE_ADSENSE_SLOT_ADAPTIVE,
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export const AdPlacement: React.FC<AdPlacementProps> = ({ 
  size, 
  className = "", 
  isCosmicSponsor = false,
  onClose,
  theme = 'dark',
  adClient,
  adSlot,
  adFormat,
  fullWidthResponsive,
  adLayout,
}) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const config = SIZE_CONFIG[size];
  const isDark = theme === 'dark';
  const adPushAttemptedRef = useRef(false);

  const resolvedAdClient = adClient ?? import.meta.env.VITE_ADSENSE_CLIENT;
  const resolvedAdSlot = adSlot ?? ADSENSE_SLOT_BY_SIZE[size];
  const isAdsEnabled = Boolean(resolvedAdClient && resolvedAdSlot);

  const adStyles = useMemo(() => {
    if (size === 'adaptive') {
      return { display: 'block', width: '100%', height: '100%' } as React.CSSProperties;
    }

    return { display: 'block', width: config.width, height: config.height, maxWidth: '100%' } as React.CSSProperties;
  }, [config.height, config.width, size]);

  useEffect(() => {
    if (!isAdsEnabled) {
      const timer = setTimeout(() => setStatus('loaded'), 1200);
      return () => clearTimeout(timer);
    }

    if (typeof window === 'undefined' || adPushAttemptedRef.current) return;

    const tryPushAd = () => {
      if (!window.adsbygoogle) return false;

      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        adPushAttemptedRef.current = true;
        setStatus('loaded');
        return true;
      } catch {
        setStatus('error');
        return true;
      }
    };

    const immediate = tryPushAd();
    if (immediate) return;

    const retryTimer = window.setTimeout(() => {
      tryPushAd();
    }, 600);

    return () => window.clearTimeout(retryTimer);
  }, [isAdsEnabled]);

  const renderContent = () => {
    if (isAdsEnabled) {
      return (
        <ins
          className="adsbygoogle"
          style={adStyles}
          data-ad-client={resolvedAdClient}
          data-ad-slot={resolvedAdSlot}
          data-ad-format={adFormat ?? (size === 'adaptive' ? 'auto' : undefined)}
          data-full-width-responsive={fullWidthResponsive ?? (size === 'adaptive' ? 'true' : undefined)}
          data-ad-layout={adLayout}
        />
      );
    }

    if (status === 'loading') {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="will-change-opacity"
          >
            <Star className={`w-5 h-5 mb-2 ${isDark ? 'text-gold/20' : 'text-[#311B92]/20'}`} />
          </motion.div>
          <span className={`text-[9px] tracking-[0.2em] uppercase ${isDark ? 'text-white/20' : 'text-[#311B92]/20'}`}>
            Consulting Sponsors...
          </span>
        </div>
      );
    }

    return (status === 'loaded' ? (
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="text-center">
          <p className={`text-[9px] uppercase tracking-widest mb-1 ${isDark ? 'text-white/30' : 'text-[#311B92]/30'}`}>
            Divine Alignment
          </p>
          <p className={`text-xs font-serif italic ${isDark ? 'text-gold/60' : 'text-[#311B92]/60'}`}>
            Your celestial message would appear here.
          </p>
        </div>
      </div>
    ) : null);
  };

  if (isCosmicSponsor) {
    return (
      <section 
        className={`w-full py-12 px-6 flex flex-col items-center ${className}`}
      >
        <div className="w-full max-w-4xl relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className={`h-px flex-1 ${isDark ? 'bg-gold/10' : 'bg-[#311B92]/10'}`} />
            <span className={`text-[10px] uppercase tracking-[0.3em] ${isDark ? 'text-gold/40' : 'text-[#311B92]/40'}`}>
              Sponsor
            </span>
            <div className={`h-px flex-1 ${isDark ? 'bg-gold/10' : 'bg-[#311B92]/10'}`} />
          </div>

          <div 
            className={`relative rounded-xl border border-dashed p-8 flex flex-col items-center justify-center min-h-[160px] ${
              isDark 
                ? 'border-gold/20 bg-gradient-to-b from-[#12121a]/50 to-[#0a0a0f]/80' 
                : 'border-[#311B92]/20 bg-gradient-to-b from-white/50 to-[#F8F6FA]/80'
            }`}
          >
            <div 
              className={`relative overflow-hidden border rounded shadow-inner ${
                isDark ? 'border-white/5 bg-black/20' : 'border-[#311B92]/5 bg-white/40'
              }`}
              style={{ width: config.width, height: config.height, maxWidth: '100%' }}
            >
              <div className="absolute top-0 left-0 bg-black/40 px-2 py-0.5 rounded-br text-[8px] text-white/60 tracking-widest uppercase z-10">
                AD
              </div>
              {renderContent()}
              
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <svg width="100%" height="100%">
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div 
      className={`relative inline-block overflow-hidden border rounded-xl group transition-colors duration-500 ${className} ${
        isDark 
          ? 'bg-[#12121a]/60 border-gold/15' 
          : 'bg-white/40 border-[#311B92]/15'
      }`}
      style={{ width: config.width, height: config.height, maxWidth: '100%' }}
    >
      <div className={`absolute top-0 left-0 px-2 py-0.5 rounded-br text-[9px] tracking-wider uppercase z-10 ${
        isDark ? 'bg-black/30 text-white/40' : 'bg-[#311B92]/10 text-[#311B92]/40'
      }`}>
        AD
      </div>

      {onClose && (
        <button 
          onClick={onClose}
          className={`absolute top-1 right-1 p-1 transition-colors z-20 ${
            isDark ? 'text-white/30 hover:text-white' : 'text-[#311B92]/30 hover:text-[#311B92]'
          }`}
        >
          <X className="w-3 h-3" />
        </button>
      )}

      {renderContent()}

      {/* Simplified Shimmer for Mobile Optimization */}
      {status === 'loading' && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none"
          style={{ backgroundSize: '200% 100%' }}
        />
      )}
    </div>
  );
};

interface MobileStickyAdProps {
  theme?: 'dark' | 'light';
}

export const MobileStickyAd: React.FC<MobileStickyAdProps> = ({ theme = 'dark' }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-[90] md:hidden px-4 pb-6 pointer-events-none"
    >
      <div className="max-w-[320px] mx-auto pointer-events-auto">
        <AdPlacement 
          size="mobile-banner" 
          onClose={() => setIsVisible(false)} 
          className="shadow-[0_-4px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl"
          theme={theme}
        />
      </div>
    </motion.div>
  );
};
