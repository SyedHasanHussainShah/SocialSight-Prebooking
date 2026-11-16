import { ArrowDownRight, ArrowUpRight, LockKeyhole, Play } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { SectionEyebrow } from './BrandMark.jsx'

function Phone({ className, src, label, alt, hasIsland = false, offset = 0 }) {
  return (
    <figure className={`hero-phone ${className}`} aria-label={label}>
      <div className={`phone-frame ${hasIsland ? 'phone-frame--with-island' : ''}`}>
        {hasIsland && (
          <div className="hero-dynamic-island" aria-hidden="true">
            <span className="island-sensor" />
            <span className="island-camera" />
          </div>
        )}
        <div className="hero-phone-screen" style={{ paddingTop: offset ? `${offset}px` : undefined }}>
          <img src={src} alt={alt} />
        </div>
        <span className="phone-glare" />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  )
}

export default function HeroScene() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const setHeroTilt = useCallback((event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
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
          <div className="glow-core" />
          <p className="stage-label stage-label--top">YOUR CIRCLE <i /> YOUR WORLD</p>
          
          {/* Main Family Dashboard Phone (Dynamic Island at center top, page content shifted down) */}
          <Phone
            className="phone--main"
            src="/assets/socialsight-family-dashboard.png"
            label="Family dashboard"
            alt="SocialSight dashboard with a family circle and privacy features"
            hasIsland={true}
            offset={30}
          />
          
          {/* Splash Screen Phone (shifted up so it doesn't overlap earbuds) */}
          <Phone className="phone--splash" src="/assets/socialsight-family-splash.png" label="A warmer welcome" alt="SocialSight Family splash screen" />
          
          {/* Companion User App Phone (on the right, positioned down but fully in view) */}
          <Phone className="phone--connect" src="/assets/socialsight-connect-screen.jpeg" label="Companion app" alt="SocialSight companion app connection screen" />
          
          {/* Companion Ergonomic Wristband (replaces watch, positioned lower on right) */}
          <img className="hero-wristband" src="/assets/socialsight-wristband-clean.png" alt="SocialSight companion wristband" />
          
          {/* Companion Earbuds (positioned cleanly below splash phone) */}
          <img className="hero-buds" src="/assets/socialsight-earbuds.png" alt="SocialSight companion earbuds" />
          
          <p className="stage-label stage-label--bottom">CONNECTED <b>✦</b> PRESENT <b>✦</b> YOURS</p>
        </div>
      </div>
      <div className="scroll-prompt"><span /> Scroll to explore <ArrowDownRight size={15} /></div>
    </section>
  )
}
