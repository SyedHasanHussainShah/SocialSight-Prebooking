# SocialSight Family — Web Experience

Exact clone of the SocialSight Family web experience ([https://ta-01m7j9jc93qdb7fzdkfsp4nv2v-3000-x149k2dix3zijtwz03ce1yves.w.modal.host/](https://ta-01m7j9jc93qdb7fzdkfsp4nv2v-3000-x149k2dix3zijtwz03ce1yves.w.modal.host/)).

## 📦 What's Included

Every component, animation, keyframe, style, and asset has been extracted and cloned 1:1:

- **Hero 3D Interactive Scene (`src/components/HeroScene.jsx`)**:
  - Interactive pointer-move perspective 3D tilt on phone models with smooth spring reset on pointer leave / blur.
  - Floating dual device mockups (`socialsight-family-dashboard.png` and `socialsight-family-splash.png`).
  - Dual concentric ambient rings (`orbit--outer`, `orbit--middle`), glowing orbs, and perspective depth grid.
  - Floating status pills and trust badges.
- **Scroll Reveal System (`src/components/ScrollReveal.jsx`)**:
  - Native `IntersectionObserver` scroll-triggered reveal animations with customizable delay tags (`--reveal-delay`).
  - Fluid fade-in and slide-up transitions (`is-visible`).
- **Navigation (`src/components/Navigation.jsx`)**:
  - Responsive header with blur background backdrop, mobile slide-down drawer toggle (`Menu`/`X`), brand mark, and smooth anchor scrolling.
- **Landing Sections (`src/components/LandingSections.jsx`)**:
  - **Trust Strip**: Continuous infinite marquee scroll animation (`scroll-marquee`).
  - **Family Section**: Perspective phone tilt frame and feature bullet points with glowing icons.
  - **How It Works**: 3-step feature cards with step indicators, hover elevations, and responsive grids.
  - **Product Ecosystem**: 3D floating smartwatch (`socialsight-wearable.png`) and earbuds (`socialsight-earbuds.png`) with drifting float animations (`product-drift`).
  - **On-Device Privacy**: Shield emblem, privacy orb glows, and secured connection device frame (`socialsight-connect-screen.jpeg`).
  - **Closing CTA & Footer**: Ambient gradient orbs, call to action, wordmark, and footer links.
- **Design System & Keyframes (`src/index.css`)**:
  - Complete CSS variable tokens (`--canvas`, `--surface`, `--card`, `--line`, `--text`, `--muted`, `--teal`, `--gold`, etc.).
  - Custom keyframes: `@keyframes intro-up`, `@keyframes main-phone`, `@keyframes float-left`, `@keyframes float-right`, `@keyframes product-drift`, `@keyframes scroll-marquee`.
  - Accessible `prefers-reduced-motion` compliance.
- **Assets (`public/assets/`)**:
  - `socialsight-family-dashboard.png` (High-res mockup)
  - `socialsight-family-splash.png` (High-res mockup)
  - `socialsight-connect-screen.jpeg` (High-res mockup)
  - `socialsight-wearable.png` (3D watch mockup)
  - `socialsight-earbuds.png` (3D earbuds mockup)

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
cd website
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates production-ready, minified and optimized assets inside `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```
