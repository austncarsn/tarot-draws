import React from 'react';
import { motion } from 'motion/react';
import { Star, Heart, Users, Shield } from 'lucide-react';
import { Vector } from '../components/icons/Vector';

interface AboutPageProps {
  theme?: 'dark' | 'light';
}

export const AboutPage: React.FC<AboutPageProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 mx-auto mb-6 text-primary">
            <Vector />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-foreground">About tarot draws</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bringing ancient wisdom to the digital age through beautiful, accessible tarot readings
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="rounded-2xl border border-border bg-card/50 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-foreground">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              tarot draws exists to make the profound wisdom of tarot accessible to everyone. We believe that 
              self-reflection and spiritual guidance shouldn't be limited by location, time, or resources.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Our digital platform combines traditional tarot meanings with a modern, user-friendly experience 
              that honors both the ancient practice and contemporary needs for mindfulness and insight.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-xl border border-border bg-card/30 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif mb-3 text-foreground">Free & Accessible</h3>
            <p className="text-muted-foreground">
              No hidden fees or subscriptions. Everyone deserves access to spiritual guidance and self-reflection tools.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/30 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif mb-3 text-foreground">Privacy First</h3>
            <p className="text-muted-foreground">
              Your readings are personal. We don't store your questions or track your spiritual journey.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/30 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif mb-3 text-foreground">Authentic Meanings</h3>
            <p className="text-muted-foreground">
              Our card interpretations are based on traditional tarot wisdom, researched and curated with care.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/30 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif mb-3 text-foreground">Community Focused</h3>
            <p className="text-muted-foreground">
              Built by spiritual practitioners for anyone seeking guidance, clarity, or a moment of reflection.
            </p>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center text-foreground">How tarot draws Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-serif mb-2 text-foreground">Focus Your Intent</h3>
              <p className="text-muted-foreground text-sm">
                Take a moment to center yourself and consider what guidance you're seeking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-serif mb-2 text-foreground">Draw Your Cards</h3>
              <p className="text-muted-foreground text-sm">
                Choose a single card for quick insight or a three-card spread for deeper exploration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-serif mb-2 text-foreground">Reflect & Apply</h3>
              <p className="text-muted-foreground text-sm">
                Consider how the card's message applies to your current situation and path forward.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-2xl border border-border bg-card/20 p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-serif mb-3 text-foreground">A Note on Tarot</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tarot readings are intended for entertainment, self-reflection, and personal growth. They are not a 
              substitute for professional advice regarding health, legal, or financial matters. The insights provided 
              are meant to inspire contemplation and should be considered alongside your own judgment and circumstances.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};