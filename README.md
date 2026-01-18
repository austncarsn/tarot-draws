
  # tarot draws

A free online tarot card reading application with cosmic-themed UI and Google AdSense monetization. Built with React, TypeScript, and Vite for fast performance.

## 🌟 Features

- **Single & Three-Card Spreads** - Draw individual cards or past/present/future readings
- **Dark/Light Themes** - Beautiful celestial backgrounds with theme transitions  
- **Responsive Design** - Mobile-first UI with touch-friendly interactions
- **Accessibility** - WCAG compliant with screen reader support
- **Google AdSense Ready** - Configured for display advertising monetization
- **SEO Optimized** - Meta tags, Open Graph, and performance-focused

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deployment

### GitHub → Vercel → Domain Setup

1. **Push to GitHub** (you're here now!)
2. **Deploy to Vercel**:
   - Connect your GitHub repo to Vercel
   - Auto-deploy on main branch pushes
3. **Configure Domain**:
   - Add `tarotdraws.com` in Vercel dashboard
   - Update DNS records with your registrar
4. **AdSense Setup**:
   - Apply for Google AdSense with live domain
   - Add environment variables in Vercel

### Environment Variables (Vercel Dashboard)

```
VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
VITE_ADSENSE_SLOT_LEADERBOARD=XXXXXXXXXX
VITE_ADSENSE_SLOT_LARGE_LEADERBOARD=XXXXXXXXXX
VITE_ADSENSE_SLOT_MED_RECT=XXXXXXXXXX
VITE_ADSENSE_SLOT_LARGE_RECT=XXXXXXXXXX
VITE_ADSENSE_SLOT_MOBILE_BANNER=XXXXXXXXXX
VITE_ADSENSE_SLOT_MOBILE_LARGE_BANNER=XXXXXXXXXX
VITE_ADSENSE_SLOT_ADAPTIVE=XXXXXXXXXX
VITE_DOMAIN=tarotdraws.com
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Monetization**: Google AdSense
- **Hosting**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── data/               # Tarot card data
├── hooks/              # Custom React hooks
├── styles/             # Global CSS and themes
└── App.tsx             # Main application
```

## 🎨 Design Philosophy

- **Performance First**: Bundle size < 400KB, optimized loading
- **Mobile-First**: Touch-friendly interactions, responsive design
- **Accessibility**: Screen reader support, keyboard navigation
- **Monetization**: Non-intrusive ad placement, user experience focused

## 📊 Performance

- Lighthouse Score: 95+ (target)
- Core Web Vitals: Passing
- Bundle Size: ~380KB gzipped
- Time to Interactive: < 3s

## 🔧 Development

### Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint check
```

### Adding AdSense

1. Copy `.env.example` to `.env`
2. Add your AdSense publisher ID and slot IDs
3. Ads will automatically render when deployed

## 🌙 The original project design is available at https://www.figma.com/design/qFExCR9Ow5zHBuVsaewLRA/Current-Tarot.

---

⭐ **Star this repo if you find it useful!**

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  