import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, Star } from 'lucide-react';

interface ContactPageProps {
  theme?: 'dark' | 'light';
}

export const ContactPage: React.FC<ContactPageProps> = ({ theme = 'dark' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailCopy = async () => {
    await navigator.clipboard.writeText('hello@tarotdraws.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
            <MessageCircle />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions, feedback, or just want to connect.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Email */}
          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-serif mb-4 text-foreground">Email Us</h2>
            <p className="text-muted-foreground mb-6">
              For general inquiries, feedback, or support questions.
            </p>
            <button
              onClick={handleEmailCopy}
              className="group relative px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-200 w-full text-left"
            >
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium">hello@tarotdraws.com</span>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {copiedEmail ? 'Copied!' : 'Click to copy'}
                </span>
              </div>
            </button>
          </div>

          {/* Response Time */}
          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-serif mb-4 text-foreground">Response Time</h2>
            <p className="text-muted-foreground mb-4">
              We typically respond within 24-48 hours. For urgent matters, please include "URGENT" in your subject line.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>📧 Email responses: 1-2 business days</p>
              <p>🔧 Technical issues: Same day when possible</p>
              <p>💡 Feature requests: We read them all!</p>
            </div>
          </div>
        </motion.div>

        {/* Common Questions */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center text-foreground">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card/30 p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Is tarot draws really free?</h3>
              <p className="text-muted-foreground">
                Yes! All card readings and features are completely free. We're supported by tasteful, non-intrusive 
                advertising to keep the service accessible to everyone.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/30 p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">How accurate are the readings?</h3>
              <p className="text-muted-foreground">
                Tarot readings are tools for self-reflection and personal insight rather than prediction. The accuracy 
                comes from how well you connect with the card meanings and apply them to your situation.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/30 p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Do you store my reading history?</h3>
              <p className="text-muted-foreground">
                No, we don't store any of your personal readings or questions. Everything happens in your browser 
                and your spiritual journey remains completely private.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/30 p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Can I request new features?</h3>
              <p className="text-muted-foreground">
                Absolutely! We love hearing from our community. Send us your ideas and we'll consider them for 
                future updates. Popular requests often get prioritized.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feedback Form */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <h2 className="text-2xl font-serif mb-6 text-foreground">Quick Feedback</h2>
            <p className="text-muted-foreground mb-6">
              Help us improve tarot draws! What would you like to see added or changed?
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <button className="group p-4 rounded-lg border border-border bg-card/30 hover:bg-card/50 transition-all text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Love it!</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tell us what you love about the experience
                </p>
              </button>

              <button className="group p-4 rounded-lg border border-border bg-card/30 hover:bg-card/50 transition-all text-left">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Suggestion</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ideas for new features or improvements
                </p>
              </button>

              <button className="group p-4 rounded-lg border border-border bg-card/30 hover:bg-card/50 transition-all text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Issue</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Report bugs or technical problems
                </p>
              </button>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Clicking any option opens your email client to hello@tarotdraws.com
            </p>
          </div>
        </motion.div>

        {/* Community */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-2xl border border-border bg-card/20 p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-serif mb-4 text-foreground">Join Our Community</h3>
            <p className="text-muted-foreground mb-6">
              tarot draws is built by a small team of spiritual practitioners and developers who believe 
              in making wisdom accessible. We're always excited to connect with fellow seekers and creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://github.com/austncarsn/tarot-draws" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-border bg-card/50 hover:bg-card transition-colors text-muted-foreground hover:text-foreground"
              >
                View on GitHub
              </a>
              <span className="text-muted-foreground text-sm">•</span>
              <span className="text-muted-foreground text-sm">More social links coming soon</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};