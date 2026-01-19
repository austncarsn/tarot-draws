import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Eye, Database, Cookie, Home } from 'lucide-react';

interface PrivacyPageProps {
  theme?: 'dark' | 'light';
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ theme = 'dark' }) => {
  const lastUpdated = "January 18, 2026";

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 mx-auto mb-4 text-primary">
            <Shield />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <p className="text-foreground/80 leading-relaxed mb-4">
              At tarot draws, we deeply respect your privacy and spiritual journey. This Privacy Policy explains 
              how we collect, use, and protect information when you visit tarotdraws.com.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We believe your personal reflections and spiritual practices should remain private, and we've 
              designed our service with privacy as a core principle.
            </p>
          </div>
        </motion.div>

        {/* Information We Collect */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-serif mb-6 flex items-center gap-3 text-foreground">
            <Database className="w-6 h-6 text-primary" />
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card/30 p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">What We DON'T Collect</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Your tarot questions or personal reflections</li>
                <li>Your card reading results or interpretations</li>
                <li>Personal identifiers like names, emails, or phone numbers</li>
                <li>Location data beyond general country/region for analytics</li>
                <li>Any data that could identify your spiritual practices</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card/30 p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">What We May Collect</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Basic analytics data (page views, session duration, device type)</li>
                <li>Technical information to improve site performance</li>
                <li>General geographic region for content optimization</li>
                <li>Cookies for essential site functionality and preferences</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Google AdSense */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-serif mb-6 flex items-center gap-3 text-foreground">
            <Eye className="w-6 h-6 text-primary" />
            Advertising & Google AdSense
          </h2>
          
          <div className="rounded-xl border border-border bg-card/30 p-6">
            <p className="text-foreground/80 leading-relaxed mb-4">
              To keep tarot draws free for everyone, we display advertisements through Google AdSense. 
              Here's what this means for your privacy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Google may collect data to show relevant ads based on your browsing habits</li>
              <li>We do not control or access the data Google collects for advertising</li>
              <li>You can opt out of personalized ads in your Google settings</li>
              <li>Ad blockers are respected - we don't attempt to detect or bypass them</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              For more information about Google's advertising practices, visit their 
              <a href="https://policies.google.com/privacy" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>.
            </p>
          </div>
        </motion.div>

        {/* Cookies */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-serif mb-6 flex items-center gap-3 text-foreground">
            <Cookie className="w-6 h-6 text-primary" />
            Cookies & Local Storage
          </h2>
          
          <div className="rounded-xl border border-border bg-card/30 p-6">
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use minimal cookies and local storage to enhance your experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Theme preference:</strong> Remembers if you prefer dark or light mode</li>
              <li><strong>Motion preference:</strong> Respects your reduced motion settings</li>
              <li><strong>Essential functionality:</strong> Cookies required for the site to work properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how to improve the site</li>
            </ul>
          </div>
        </motion.div>

        {/* Data Security */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-serif mb-6 text-foreground">Data Security</h2>
          
          <div className="rounded-xl border border-border bg-card/30 p-6">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>All data transmission is encrypted using HTTPS</li>
              <li>We don't store personal reading data on our servers</li>
              <li>Card readings are generated client-side in your browser</li>
              <li>No reading history or personal spiritual data is retained</li>
            </ul>
          </div>
        </motion.div>

        {/* Your Rights */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-serif mb-6 text-foreground">Your Rights</h2>
          
          <div className="rounded-xl border border-border bg-card/30 p-6">
            <p className="text-foreground/80 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use tarot draws without providing any personal information</li>
              <li>Clear cookies and local storage at any time</li>
              <li>Use ad blockers without penalty</li>
              <li>Know that your spiritual practices remain completely private</li>
              <li>Contact us with privacy questions or concerns</li>
            </ul>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="rounded-2xl border border-border bg-card/20 p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-serif mb-3 text-foreground">Questions About This Policy?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              If you have any questions about our Privacy Policy or how we handle your data, 
              please don't hesitate to reach out.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};