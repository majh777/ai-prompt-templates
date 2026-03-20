# Configuration Guide

## ⚡ Quick Setup (5 minutes)

### 1. Email Capture (Formspree)

1. Go to https://formspree.io and create a free account
2. Create a new form → name it "AI Prompt Templates Leads"
3. Copy your endpoint URL (e.g., `https://formspree.io/f/abc123`)
4. In `index.html`, replace:
   - Line 276: `https://formspree.io/f/YOUR_FORMSPREE_ID` → your real endpoint

**Leads will be emailed to you automatically and stored in Formspree dashboard.**

---

### 2. Payment (Stripe)

1. Go to https://dashboard.stripe.com and create a payment link
2. Set up a product ($47 one-time)
3. Copy the payment link URL
4. In `index.html`, replace:
   - Line 451: `YOUR_PAYMENT_LINK_ID` → your Stripe payment link ID (or full URL)

---

### 3. (Optional) Analytics

Add your tracking IDs in the `<head>` section:
- Google Analytics: `G-XXXXXXXXXX`
- Facebook Pixel: `xxxxxxxxxx`

---

## 🎯 What This Enables

| Feature | Before | After |
|---------|--------|-------|
| Email capture | ❌ localStorage only | ✅ Real leads collected |
| Payments | ❌ Broken link | ✅ Working checkout |
| Analytics | ❌ None | ✅ Track visitors |

---

## 🚀 Deploy

```bash
git add .
git commit -m "fix: configure email & payment"
git push origin main
```

GitHub Actions will auto-deploy to: https://majh777.github.io/ai-prompt-templates/
