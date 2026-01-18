import React from 'react';
import { motion } from 'motion/react';
import { TarotIllustration } from './TarotIllustration';
import { TarotCardBack } from './TarotCardBack';
import { ArrowRight, BookOpen, Moon, Sun, Search } from 'lucide-react';
import { Vector } from './icons/Vector';
import { CelestialToggleShowcase } from './CelestialToggle';
import { MinimalCelestialToggleShowcase } from './MinimalCelestialToggle';

export const ThemeReferenceSheet: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-8 md:p-16 font-sans">
      <header className="max-w-6xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-serif text-gold mb-4 tracking-tight">Component Mastery Sheet</h1>
        <p className="text-white/40 uppercase tracking-[0.5em] text-sm">Dual-Theme Specification & Design System</p>
      </header>

      <div className="max-w-7xl mx-auto space-y-40">
        {/* THEME HEADERS */}
        <div className="grid grid-cols-2 gap-8 sticky top-0 z-40 bg-[#0a0a0f]/80 backdrop-blur-md py-6 border-b border-white/5">
          <div className="text-center">
            <span className="text-xs text-gold uppercase tracking-[0.4em]">Celestial Night (Dark)</span>
          </div>
          <div className="text-center">
            <span className="text-xs text-white/40 uppercase tracking-[0.4em]">Ethereal Dawn (Light)</span>
          </div>
        </div>

        {/* SECTION: NAVIGATION */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="text-2xl font-serif uppercase tracking-widest text-gold">Navigation Bar</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* DARK NAV */}
            <div className="p-8 bg-[#0a0a0f] border border-white/5 rounded-2xl">
              <nav className="w-full flex items-center justify-between p-4 border-b border-gold/10 bg-black/40 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6"><Vector /></div>
                  <span className="font-serif text-sm tracking-widest text-white uppercase">Instant <span className="text-gold">Tarot</span></span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10">
                  <button className="px-3 py-1 bg-gold text-black rounded-full text-[9px] uppercase tracking-widest font-bold">Insight</button>
                  <button className="px-3 py-1 text-white/40 rounded-full text-[9px] uppercase tracking-widest">Spread</button>
                </div>
                <div className="flex items-center gap-4 text-white/40">
                  <BookOpen size={14} />
                  <div className="w-[1px] h-4 bg-white/10" />
                  <Sun size={14} />
                </div>
              </nav>
            </div>
            {/* LIGHT NAV */}
            <div className="p-8 bg-[#fdfcfa] border border-[#e5e0d8] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <nav className="w-full flex items-center justify-between p-4 border-b border-[#e5e0d8] bg-[#fdfcfa] rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6"><Vector /></div>
                  <span className="font-serif text-sm tracking-widest text-[#1a1a24] uppercase">Instant <span className="text-[#c9a227]">Tarot</span></span>
                </div>
                <div className="flex items-center gap-2 bg-[#fdfcfa] rounded-full p-1 border border-[#c9a227]">
                  <button className="px-3 py-1 bg-[#c9a227] text-[#1a1a24] rounded-full text-[9px] uppercase tracking-widest font-bold">Insight</button>
                  <button className="px-3 py-1 text-[#1a1a24] rounded-full text-[9px] uppercase tracking-widest">Spread</button>
                </div>
                <div className="flex items-center gap-4 text-[#1a1a24]/60">
                  <BookOpen size={14} className="hover:text-[#c9a227]" />
                  <div className="w-[1px] h-4 bg-[#e5e0d8]" />
                  <Moon size={14} className="hover:text-[#c9a227]" />
                </div>
              </nav>
            </div>
          </div>
        </section>

        {/* SECTION: BUTTONS */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="text-2xl font-serif uppercase tracking-widest text-gold">Buttons</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* DARK BUTTONS */}
            <div className="p-12 bg-[#0a0a0f] border border-white/5 rounded-2xl flex flex-col gap-6 items-center">
              <button className="w-full max-w-xs py-3 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_4px_12px_rgba(201,162,39,0.3)] hover:scale-[1.02] transition-all">Primary Action</button>
              <button className="w-full max-w-xs py-3 bg-transparent border-2 border-[#c9a227] text-[#c9a227] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#c9a227]/10 transition-all">Secondary Action</button>
              <button className="text-[#c9a227] text-xs uppercase tracking-[0.3em] font-medium hover:underline underline-offset-8">Ghost Link</button>
            </div>
            {/* LIGHT BUTTONS */}
            <div className="p-12 bg-white border border-[#e5e0d8] rounded-2xl flex flex-col gap-6 items-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              <button className="w-full max-w-xs py-3 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#1a1a24] font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_4px_12px_rgba(201,162,39,0.3)] hover:scale-[1.02] transition-all">Primary Action</button>
              <button className="w-full max-w-xs py-3 bg-transparent border-[1.5px] border-[#c9a227] text-[#c9a227] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#c9a227]/10 transition-all">Secondary Action</button>
              <button className="text-[#c9a227] text-xs uppercase tracking-[0.3em] font-medium hover:underline underline-offset-8">Ghost Link</button>
            </div>
          </div>
        </section>

        {/* SECTION: INPUTS */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="text-2xl font-serif uppercase tracking-widest text-gold">Inputs & Toggles</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* DARK INPUTS */}
            <div className="p-12 bg-[#0a0a0f] border border-white/5 rounded-2xl space-y-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  type="text" 
                  placeholder="Focus your intent..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-gold/50 transition-all"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-white/40">Celestial Mode</span>
                <div className="w-10 h-5 bg-gold rounded-full relative p-0.5">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm absolute right-0.5" />
                </div>
              </div>
            </div>
            {/* LIGHT INPUTS */}
            <div className="p-12 bg-white border border-[#e5e0d8] rounded-2xl space-y-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a95]" />
                <input 
                  type="text" 
                  placeholder="Focus your intent..." 
                  className="w-full bg-white border border-[#d0ccc5] rounded-xl py-3 pl-12 pr-4 text-sm text-[#1a1a24] focus:outline-none focus:border-[#c9a227] focus:ring-4 focus:ring-[#c9a227]/15 transition-all"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#1a1a24]/40">Ethereal Mode</span>
                <div className="w-10 h-5 bg-gradient-to-r from-gold to-[#c9a227] rounded-full relative p-0.5">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm absolute right-0.5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: BADGES & STATUS */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="text-2xl font-serif uppercase tracking-widest text-gold">Badges & Metadata</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* DARK BADGES */}
            <div className="p-12 bg-[#0a0a0f] border border-white/5 rounded-2xl flex flex-wrap gap-4 justify-center">
              <span className="px-3 py-1 bg-white/5 border border-gold/20 text-gold text-[9px] uppercase tracking-widest rounded-md">Manifestation</span>
              <span className="px-3 py-1 bg-[#4a90d9]/10 border border-[#4a90d9]/30 text-[#4a90d9] text-[9px] uppercase tracking-widest rounded-md">Cups</span>
              <span className="px-3 py-1 bg-[#e07b39]/10 border border-[#e07b39]/30 text-[#e07b39] text-[9px] uppercase tracking-widest rounded-md">Wands</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/40 text-[9px] uppercase tracking-widest rounded-md font-bold">Major</span>
              <span className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-[9px] uppercase tracking-widest rounded-md">Reversed</span>
            </div>
            {/* LIGHT BADGES */}
            <div className="p-12 bg-white border border-[#e5e0d8] rounded-2xl flex flex-wrap gap-4 justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              <span className="px-3 py-1 bg-transparent border border-[#c9a227] text-[#c9a227] text-[9px] uppercase tracking-widest rounded-md">Manifestation</span>
              <span className="px-3 py-1 bg-transparent border border-[#2d5a8a] text-[#2d5a8a] text-[9px] uppercase tracking-widest rounded-md">Cups</span>
              <span className="px-3 py-1 bg-transparent border border-[#b85a1f] text-[#b85a1f] text-[9px] uppercase tracking-widest rounded-md">Wands</span>
              <span className="px-3 py-1 bg-transparent border border-[#c9a227] text-[#c9a227] text-[9px] uppercase tracking-widest rounded-md font-bold">Major</span>
              <span className="px-3 py-1 bg-transparent border border-[#c44] text-[#c44] text-[9px] uppercase tracking-widest rounded-md">Reversed</span>
            </div>
          </div>
        </section>

        {/* SECTION: CARDS & AD SLOTS */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="text-2xl font-serif uppercase tracking-widest text-gold">Surfaces & Ad Slots</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* DARK SURFACES */}
            <div className="p-12 bg-[#0a0a0f] border border-white/5 rounded-2xl space-y-8">
              <div className="p-6 bg-[#12121a] border border-white/10 rounded-xl hover:border-gold/40 transition-all">
                <h4 className="text-sm font-serif text-white mb-2">Dark Content Surface</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">Celestial geometry meets depth and shadow.</p>
              </div>
              <div className="p-4 bg-white/[0.03] border border-gold/10 rounded-lg flex items-center justify-center h-20 relative">
                <span className="absolute top-2 left-2 text-[8px] text-white/20 uppercase tracking-tighter">ADVERTISEMENT</span>
                <div className="w-3/4 h-[1px] bg-gold/10" />
              </div>
            </div>
            {/* LIGHT SURFACES */}
            <div className="p-12 bg-[#fdfcfa] border border-[#e5e0d8] rounded-2xl space-y-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="p-6 bg-white border border-[#e5e0d8] rounded-xl hover:border-[#c9a227]/40 transition-all shadow-sm">
                <h4 className="text-sm font-serif text-[#1a1a24] mb-2">Light Content Surface</h4>
                <p className="text-[10px] text-[#1a1a24]/40 uppercase tracking-widest leading-relaxed">Pure ethereal clarity and cream-toned warmth.</p>
              </div>
              <div className="p-4 bg-[#f5f3ef] border border-[#c9a227]/20 rounded-lg flex items-center justify-center h-20 relative">
                <span className="absolute top-2 left-2 text-[8px] text-black/40 uppercase tracking-tighter">ADVERTISEMENT</span>
                <div className="w-3/4 h-[1px] bg-[#c9a227]/20" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: MODALS & DIVIDERS */}
        <section className="pb-40">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="text-2xl font-serif uppercase tracking-widest text-gold">Modals & Transitions</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* DARK MODAL PREVIEW */}
            <div className="p-12 bg-[#0a0a0f] border border-white/5 rounded-2xl flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
               <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
               <div className="relative w-full max-w-sm bg-[#12121a] border border-gold/20 rounded-2xl p-8 shadow-2xl">
                 <h3 className="text-xl font-serif text-white mb-4">Celestial Decree</h3>
                 <div className="flex items-center gap-4 my-6">
                   <div className="h-[1px] flex-1 bg-gold/20" />
                   <div className="w-4 h-4 text-gold/60"><Vector /></div>
                   <div className="h-[1px] flex-1 bg-gold/20" />
                 </div>
                 <p className="text-xs text-white/40 leading-relaxed mb-6">The patterns of the cosmos are revealed to those who look within.</p>
                 <button className="w-full py-2 bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase tracking-widest rounded-lg">Acknowledge</button>
               </div>
            </div>
            {/* LIGHT MODAL PREVIEW */}
            <div className="p-12 bg-white border border-[#e5e0d8] rounded-2xl flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
               <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
               <div className="relative w-full max-w-sm bg-white border border-[#e5e0d8] rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                 <h3 className="text-xl font-serif text-[#1a1a24] mb-4">Ethereal Blessing</h3>
                 <div className="flex items-center gap-4 my-6">
                   <div className="h-[1px] flex-1 bg-[#e5e0d8]" />
                   <div className="w-4 h-4 text-[#c9a227]"><Vector /></div>
                   <div className="h-[1px] flex-1 bg-[#e5e0d8]" />
                 </div>
                 <p className="text-xs text-[#1a1a24]/60 leading-relaxed mb-6">Light returns to the world, bringing clarity to your path.</p>
                 <button className="w-full py-2 bg-[#fdfcfa] border border-[#c9a227]/30 text-[#c9a227] text-[10px] uppercase tracking-widest rounded-lg">Receive</button>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: RESPONSIVE SWITCHING */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="text-2xl font-serif uppercase tracking-widest text-gold">07. Transition Mechanics</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 overflow-hidden flex flex-col items-center">
            <ThemeSwitcherDemo />
            <div className="grid grid-cols-3 gap-8 mt-12 w-full max-w-2xl text-center">
              <div>
                <span className="text-xs text-gold">300ms</span>
                <p className="text-[10px] text-white/40 uppercase tracking-tighter">Transition Duration</p>
              </div>
              <div>
                <span className="text-xs text-gold">Ease-In-Out</span>
                <p className="text-[10px] text-white/40 uppercase tracking-tighter">Cubic Bezier</p>
              </div>
              <div>
                <span className="text-xs text-gold">Shadow/Glow</span>
                <p className="text-[10px] text-white/40 uppercase tracking-tighter">Filter Inversion</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: HIGH-FIDELITY TOGGLE */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="text-2xl font-serif uppercase tracking-widest text-gold">08. Celestial Toggle</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-16">
            <CelestialToggleShowcase />
          </div>
        </section>

        {/* SECTION 9: MINIMAL MORPH TOGGLE */}
        <section className="pb-40">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="text-2xl font-serif uppercase tracking-widest text-gold">09. Minimal Morph</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-16">
            <MinimalCelestialToggleShowcase />
          </div>
        </section>
      </div>
    </div>
  );
};

const ThemeSwitcherDemo: React.FC = () => {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotateY: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-[180px] h-[260px] preserve-3d"
        >
          <div className={`absolute inset-0 backface-hidden`}>
             <TarotCardBack theme="dark" className="w-full h-full" />
          </div>
          <div className={`absolute inset-0 backface-hidden [transform:rotateY(180deg)]`}>
             <TarotCardBack theme="light" className="w-full h-full" />
          </div>
        </motion.div>
        <span className="text-[10px] text-gold uppercase tracking-[0.4em]">{theme === 'dark' ? 'Night State' : 'Dawn State'}</span>
      </div>
      
      <div className="flex flex-col items-center">
        <ArrowRight className={`text-gold transition-all duration-500 ${theme === 'light' ? 'rotate-180' : ''}`} size={32} />
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className={`p-8 rounded-2xl transition-all duration-500 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white shadow-xl'}`}>
          <TarotIllustration id="major-17" theme={theme} className="w-32 h-40" />
        </div>
        <span className="text-[10px] text-gold uppercase tracking-[0.4em]">Properties Animate</span>
      </div>
    </div>
  );
}
