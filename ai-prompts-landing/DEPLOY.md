# Deployment Guide

## AI Prompt Templates Landing Page

### Option 1: Vercel (Recommended)
```bash
cd ai-prompts-landing
npx vercel --prod
```

### Option 2: Netlify
```bash
cd ai-prompts-landing
netlify deploy --prod
```

### Option 3: GitHub Pages
```bash
cd ai-prompts-landing
# Enable GitHub Pages in repo settings
```

## Required Environment
- VERCEL_TOKEN or Netlify CLI authentication

## Current Status
- Landing page: ✅ Created (ai-prompts-landing/index.html)
- Stripe link: ✅ https://buy.stripe.com/eVqeV6f6m4CC8Gucco0Ny03
- Domain: Need to deploy

## Next Steps
1. Deploy landing page
2. Connect custom domain
3. Test checkout flow
4. Launch
