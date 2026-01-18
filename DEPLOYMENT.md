# Deployment Guide for tarotdraws.com

## GitHub → Vercel → Domain → AdSense Workflow

### Step 1: GitHub Setup ✅
1. Create GitHub repository
2. Push code to `main` branch
3. Ensure `.env` is gitignored (sensitive data)

### Step 2: Vercel Deployment
1. **Connect Repository**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your tarot-draws repository
   - Configure build settings:
     - Build Command: `npm run build`
     - Output Directory: `build`

2. **Auto-Deploy Setup**
   - Vercel auto-deploys on `main` branch pushes
   - Preview deployments for pull requests
   - Build status in GitHub commits

### Step 3: Domain Configuration
1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add `tarotdraws.com` and `www.tarotdraws.com`
   
2. **DNS Configuration**
   - Add A record: `@` → Vercel IP (provided in dashboard)
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Wait for DNS propagation (5-60 minutes)

3. **SSL Certificate**
   - Automatic via Let's Encrypt
   - Vercel handles renewal

### Step 4: AdSense Application
1. **Apply with Live Domain**
   - Visit [adsense.google.com](https://adsense.google.com)
   - Add site: `tarotdraws.com`
   - Wait for approval (1-14 days)

2. **Create Ad Units**
   - Leaderboard (728x90)
   - Large Leaderboard (970x90)  
   - Medium Rectangle (300x250)
   - Large Rectangle (336x280)
   - Mobile Banner (320x50)
   - Mobile Large Banner (320x100)
   - Adaptive (responsive)

3. **Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all AdSense configuration:

```bash
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

## Environment Configuration

### Required AdSense Variables
```bash
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

### AdSense Setup Steps
1. Sign up for Google AdSense at https://adsense.google.com
2. Add your site (tarotdraws.com) and wait for approval
3. Create ad units for each size needed:
   - Leaderboard (728x90)
   - Large Leaderboard (970x90)  
   - Medium Rectangle (300x250)
   - Large Rectangle (336x280)
   - Mobile Banner (320x50)
   - Mobile Large Banner (320x100)
   - Adaptive (responsive)

## Hosting Recommendations

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build and deploy
npm run build
# Upload build/ folder to Netlify
```

### CloudFlare Pages
```bash
# Build command: npm run build
# Publish directory: build
```

## Security Headers (Add to hosting config)

### Content Security Policy
```
Content-Security-Policy: default-src 'self'; 
  script-src 'self' 'unsafe-inline' *.googlesyndication.com *.googletagservices.com; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data: *.googlesyndication.com *.googletagservices.com; 
  frame-src *.googlesyndication.com;
```

### Additional Headers
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Performance Checklist

- [x] Bundle size < 400KB (currently ~380KB)
- [ ] Lighthouse Performance Score > 90
- [ ] Core Web Vitals passing
- [ ] Images optimized (WebP where possible)
- [ ] Ads load without layout shift

## SEO Checklist

- [x] Meta description added
- [x] Canonical URLs configured
- [x] Open Graph tags added
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Search Console ownership
- [ ] Monitor AdSense performance

## Monitoring

### Google Analytics (Optional)
Add to `.env`:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Google Search Console
1. Add property for tarotdraws.com
2. Verify ownership via HTML file upload
3. Submit sitemap.xml (auto-generated)

## Troubleshooting

### Ads Not Showing
- Check browser ad-blockers
- Verify AdSense approval status  
- Confirm all environment variables are set
- Check browser console for errors

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Performance Issues
- Enable Brotli compression on hosting
- Add proper cache headers for static assets
- Consider lazy-loading below-fold ads