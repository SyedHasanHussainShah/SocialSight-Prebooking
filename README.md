# SocialSight — Private Connection Platform

> Private connection, made personal. On-device neural intelligence for your family circle with zero cloud surveillance.

Live Pre-booking Web Experience: [SocialSight](https://github.com/SyedHasanHussainShah/SocialSight-Prebooking)

## 📦 What's Included

Every component, animation, keyframe, style, and asset is engineered with high fidelity:

- **Hero 3D Interactive Scene (`src/components/HeroScene.jsx`)**:
  - Interactive pointer-move perspective 3D tilt with smooth spring reset on pointer leave / blur.
  - Floating triple device mockups (`socialsight-family-dashboard.png`, `socialsight-family-splash.png`, and `socialsight-connect-screen.jpeg`).
  - Next-gen ergonomic wristband (`socialsight-wristband.png`) and companion earbuds (`socialsight-earbuds.png`).
  - Dual concentric ambient rings, glowing core, and perspective depth grid.
- **Scroll Reveal System (`src/components/ScrollReveal.jsx`)**:
  - Native `IntersectionObserver` scroll-triggered reveal animations with customizable delay tags (`--reveal-delay`).
  - Fluid fade-in and slide-up transitions (`is-visible`).
- **Navigation (`src/components/Navigation.jsx`)**:
  - Persistent sticky frosted-glass header (`backdrop-filter: blur(20px)`), mobile slide-down drawer toggle, and quick anchor navigation.
- **Landing Sections (`src/components/LandingSections.jsx`)**:
  - **Trust Strip**: Continuous infinite marquee scroll animation with smooth bilateral gradient edge mask.
  - **Family Section**: Family circle management dashboard and animated 3D value cards with glowing orbs.
  - **How It Works**: 3-step feature cards with continuous start-to-end animated progress sweep indicators.
  - **Product Ecosystem**: Companion ergonomic wristband and audio earbuds with subtle floating animations.
  - **Companion User App**: Dedicated section highlighting the seamless on-device companion app for loved ones.
  - **Closing CTA & Insane Footer**: Ambient radial mesh, interactive glassmorphic waitlist invitation card, live system status, and security verification badges.
- **Design System & Keyframes (`src/index.css`)**:
  - Complete CSS variable tokens (`--canvas`, `--surface`, `--card`, `--line`, `--text`, `--muted`, `--teal`, `--gold`, etc.).
  - Custom keyframes: `@keyframes progress-fill-sweep`, `@keyframes card-gentle-float`, `@keyframes orb-gentle-pulse`, `@keyframes product-drift`, `@keyframes marquee-infinite`.
  - Accessible `prefers-reduced-motion` compliance.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 🚢 Deploying to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Import this repository in your Vercel Dashboard.
2. Framework Preset: **Vite** (auto-detected).
3. Root Directory: `./`
4. Build Command: `vite build`
5. Output Directory: `dist`
6. Click **Deploy**!
