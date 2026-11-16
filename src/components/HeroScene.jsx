import { ArrowDownRight, ArrowUpRight, LockKeyhole, Play } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { SectionEyebrow } from './BrandMark.jsx'

function PhoneStatusBar() {
  return (
    <div className="iphone-status-bar" aria-hidden="true">
      <span className="status-time">9:41</span>
      <div className="status-icons">
        <svg className="status-cellular" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="9" width="2.6" height="3" rx="0.6" />
          <rect x="4" y="6.5" width="2.6" height="5.5" rx="0.6" />
          <rect x="8" y="3.8" width="2.6" height="8.2" rx="0.6" />
          <rect x="12" y="1" width="2.6" height="11" rx="0.6" />
        </svg>
        <svg className="status-wifi" viewBox="0 0 16 14" fill="none">
          <path d="M1.25 4.5a10 10 0 0 1 13.5 0M4.15 7.4a5.8 5.8 0 0 1 7.7 0M6.8 10.1a1.85 1.85 0 0 1 2.4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="8" cy="12.2" r="0.95" fill="currentColor" />
        </svg>
        <div className="status-battery">
          <div className="status-battery-body">
            <div className="status-battery-level" style={{ width: '92%' }} />
          </div>
          <div className="status-battery-cap" />
        </div>
      </div>
    </div>
  )
}

function Phone({ className, src, label, alt, showIsland = false, showStatusBar = false }) {
  return (
    <figure className={`hero-phone ${className}`} aria-label={label}>
      <div className="phone-frame">
        <img src={src} alt={alt} />
        {showIsland && <span className="phone-island" aria-hidden="true" />}
        {showStatusBar && <PhoneStatusBar />}
      </div>
    </figure>
  )
}

export default function HeroScene() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const setHeroTilt = useCallback((event) => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(hover: none), (pointer: coarse)').matches
    ) return
    const bounds = event.currentTarget.getBoundingClientRect()
    setTilt({
      x: ((event.clientY - bounds.top) / bounds.height - 0.5) * -7,
      y: ((event.clientX - bounds.left) / bounds.width - 0.5) * 8,
    })
  }, [])

  useEffect(() => {
    const resetTilt = () => setTilt({ x: 0, y: 0 })
    window.addEventListener('blur', resetTilt)
    return () => window.removeEventListener('blur', resetTilt)
  }, [])

  return (
    <section className="hero" id="top" onPointerMove={setHeroTilt} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="hero-ambient ambient-one" />
      <div className="hero-ambient ambient-two" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner page-shell">
        <div className="hero-copy">
          <SectionEyebrow>Private connection, made personal</SectionEyebrow>
          <h1>Stay close to the people who matter.</h1>
          <p className="hero-description">
            SocialSight brings your circle, shared memories, and thoughtful recognition together in one private experience.
          </p>
          <div className="hero-buttons">
            <a className="button button--light" href="/api/auth/login">Start your circle <ArrowUpRight size={17} /></a>
            <a className="text-action" href="#how-it-works"><span className="play-icon"><Play size={12} fill="currentColor" /></span> Explore the experience</a>
          </div>
          <div className="hero-note"><LockKeyhole size={14} /> Designed around on-device privacy</div>
        </div>

        <div className="hero-stage" style={{ '--tilt-x': `${tilt.x}deg`, '--tilt-y': `${tilt.y}deg` }} aria-label="Floating SocialSight products">
          <div className="orbit orbit--outer" />
          <div className="orbit orbit--inner" />
          {/* Main Family Dashboard Phone */}
          <Phone className="phone--main" src="/assets/socialsight-family-dashboard.png?v=3" label="Family dashboard" alt="SocialSight Family dashboard with a family circle and privacy features" showIsland />
          
          {/* Splash Screen Phone (shifted up so it doesn't overlap earbuds) */}
          <Phone className="phone--splash" src="/assets/socialsight-family-splash.png" label="A warmer welcome" alt="SocialSight Family splash screen" showIsland />
          
          {/* Companion User App Phone (on the right, positioned down but fully in view) */}
          <Phone className="phone--connect" src="/assets/socialsight-connect-screen-iphone.png" label="Companion app" alt="SocialSight companion app connection screen" showIsland showStatusBar />
          
          {/* Companion Ergonomic Wristband (replaces watch, positioned lower on right) */}
          <img className="hero-wristband" src="/assets/socialsight-wristband-clean.png" alt="SocialSight companion wristband" />
          
          {/* Companion Earbuds (positioned cleanly below splash phone) */}
          <img className="hero-buds" src="/assets/socialsight-earbuds.png" alt="SocialSight companion earbuds" />
        </div>
      </div>
      <div className="scroll-prompt"><span /> Scroll to explore <ArrowDownRight size={15} /></div>
    </section>
  )
}
