import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CloudOff,
  Cpu,
  Ear,
  Github,
  Globe,
  HeartHandshake,
  Image,
  Linkedin,
  LockKeyhole,
  Mail,
  Radio,
  ScanFace,
  Send,
  ShieldCheck,
  Sparkles,
  Twitter,
  UsersRound,
  Youtube,
} from 'lucide-react'
import { useState } from 'react'
import { BrandMark, SectionEyebrow } from './BrandMark.jsx'
import IPhoneFrame from './IPhoneFrame.jsx'
import ScrollReveal from './ScrollReveal.jsx'

const trustItems = [
  { icon: LockKeyhole, text: 'Privacy-led by design' },
  { icon: UsersRound, text: 'Built around family' },
  { icon: CloudOff, text: 'On-device first' },
  { icon: Sparkles, text: 'Made for meaningful moments' },
  { icon: ShieldCheck, text: 'Zero cloud surveillance' },
  { icon: ScanFace, text: 'Real-time face recognition' },
  { icon: Cpu, text: 'On-device neural engine' },
  { icon: HeartHandshake, text: 'Calm & considered technology' },
]

const valueCards = [
  {
    icon: UsersRound,
    title: 'Family circle',
    text: 'Invite the people you choose and keep the important connections easy to find.',
    accent: 'gold',
  },
  {
    icon: Image,
    title: 'Memories',
    text: 'Create a more personal place to return to the moments worth holding on to.',
    accent: 'teal',
  },
  {
    icon: ScanFace,
    title: 'Thoughtful recognition',
    text: 'Build familiarity around the people in your circle, in a calm and considered way.',
    accent: 'blue',
  },
]

const steps = [
  [
    '01',
    'Create your circle',
    'Start with the people you care about. Add and organize your family circle in a few clear steps.',
  ],
  [
    '02',
    'Make it personal',
    'Save faces, moments, and the small details that make a connection feel familiar.',
  ],
  [
    '03',
    'Stay in the moment',
    'Use your phone and companion products to keep your circle comfortably close.',
  ],
]

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="SocialSight product principles">
      <div className="trust-marquee">
        <div className="trust-track">
          {trustItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <span key={`a-${idx}`} className="trust-item">
                <Icon size={16} /> {item.text}
                <i className="trust-dot" />
              </span>
            )
          })}
        </div>
        <div className="trust-track" aria-hidden="true">
          {trustItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <span key={`b-${idx}`} className="trust-item">
                <Icon size={16} /> {item.text}
                <i className="trust-dot" />
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FamilySection() {
  return (
    <section className="section family-section" id="family">
      <div className="page-shell family-intro">
        <ScrollReveal className="family-copy">
          <SectionEyebrow>Your people, in one place</SectionEyebrow>
          <h2>A familiar feeling, wherever life takes you.</h2>
          <p>
            SocialSight is a private home for the people you love. See your circle, revisit shared
            memories, and make every interaction feel more connected.
          </p>
          <a className="inline-link" href="/api/auth/login">
            Build your family circle <ArrowRight size={17} />
          </a>
        </ScrollReveal>
        <ScrollReveal className="dashboard-feature" delay={120}>
          <div className="dashboard-glow" />
          <div className="dashboard-card">
            <p className="tiny-label">
              <span /> SOCIALSIGHT
            </p>
            <div className="dashboard-title">
              <span>
                Everything
                <br />
                in your circle.
              </span>
              <i>✦</i>
            </div>
            <div className="dashboard-device-wrap">
              {/* iPhone screen with realistic Dynamic Island notch and page content shifted down */}
              <IPhoneFrame
                src="/assets/socialsight-family-dashboard.png"
                alt="SocialSight dashboard showing family circle"
                showStatusBar={true}
                showIsland={true}
                statusTheme="dark"
                contentOffset={40}
                className="family-iphone"
              />
              <div className="dashboard-float">
                <Check size={15} />
                <span>
                  <b>Ready to connect</b>Family circle is nearby
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Pic 6 Fix: Animated Value Cards */}
      <div className="page-shell value-grid">
        {valueCards.map(({ icon: Icon, title, text, accent }, index) => (
          <ScrollReveal key={title} delay={index * 90}>
            <article
              className={`value-card value-card--${accent} value-card--animated`}
              style={{ '--card-index': index }}
            >
              <div className="value-card-glow" />
              <div className="value-icon">
                <Icon size={24} />
              </div>
              <span className="value-count">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ChevronRight className="card-arrow" size={21} />
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="how-outline-text" aria-hidden="true">
        CLOSER
      </div>
      <div className="page-shell">
        <ScrollReveal className="section-heading section-heading--center">
          <SectionEyebrow>A simple way to begin</SectionEyebrow>
          <h2>
            Made to feel natural
            <br />
            from the first hello.
          </h2>
        </ScrollReveal>
        <div className="steps-grid">
          {steps.map(([number, title, text], index) => (
            <ScrollReveal key={number} delay={index * 120}>
              <article className="step-card" style={{ '--step-index': index }}>
                <div className="step-card-header">
                  <span className="step-number">{number}</span>
                  <span className="step-badge">Step {number}</span>
                </div>
                <div className="step-line" aria-hidden="true">
                  <i className="step-progress-bar" />
                  <span className="step-glow-head" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductSection() {
  return (
    <section className="products-section" id="products">
      <div className="product-mesh" />
      <div className="page-shell products-intro">
        <ScrollReveal>
          <SectionEyebrow>One circle. More ways to stay close.</SectionEyebrow>
          <h2>
            Connection that moves
            <br />
            with you.
          </h2>
          <p>
            Your SocialSight experience extends beyond the phone with companion products designed
            for everyday comfort and familiarity.
          </p>
        </ScrollReveal>
      </div>
      <div className="page-shell product-grid">
        {/* Pic 10 & 11 Fix: Replaced Watch with the new Wristband */}
        <ScrollReveal className="product-card product-card--wristband">
          <div className="product-card-content">
            <p className="product-kicker">
              <Radio size={15} /> THE WRISTBAND
            </p>
            <h3>Keep your circle within reach.</h3>
            <p>
              A discreet, tactile companion wristband designed for all-day comfort. Delivers gentle
              haptic feedback and instant recognition when someone from your circle is nearby.
            </p>
            <a className="inline-link inline-link--light" href="/api/auth/login">
              Explore the wristband <ArrowRight size={17} />
            </a>
          </div>
          <img
            src="/assets/socialsight-wristband-clean.png"
            alt="SocialSight ergonomic companion wristband with tactile button"
            className="product-wristband"
          />
          <span className="product-ring ring-a" />
          <span className="product-ring ring-b" />
        </ScrollReveal>

        <ScrollReveal className="product-card product-card--buds" delay={120}>
          <div className="product-card-content">
            <p className="product-kicker">
              <Ear size={15} /> THE EARBUDS
            </p>
            <h3>Made for the moments around you.</h3>
            <p>Companion earbuds designed to keep your experience close, comfortable, and personal.</p>
            <a className="inline-link inline-link--light" href="/api/auth/login">
              Discover companion audio <ArrowRight size={17} />
            </a>
          </div>
          <img
            src="/assets/socialsight-earbuds.png"
            alt="SocialSight companion earbuds in charging case"
            className="product-buds"
          />
          <span className="sound-wave wave-a" />
          <span className="sound-wave wave-b" />
          <span className="sound-wave wave-c" />
        </ScrollReveal>
      </div>
    </section>
  )
}

function PrivacySection() {
  return (
    <section className="section privacy-section" id="privacy">
      <div className="page-shell privacy-panel">
        {/* Pic 9 Fix: Clearly explains this is the Companion User App (vs the Family dashboard above) */}
        <ScrollReveal className="privacy-content">
          <div className="privacy-icon">
            <ShieldCheck size={33} />
          </div>
          <SectionEyebrow icon={false}>COMPANION USER APP • PRIVATE & SEAMLESS</SectionEyebrow>
          <h2>A calm companion app for your loved ones.</h2>
          <p>
            While family organizers manage circles and members on the family dashboard above, your loved
            ones use the lightweight SocialSight companion app. No complex setup or passwords—just open
            the app to instantly recognize familiar faces and stay comfortably connected with complete
            on-device privacy.
          </p>
          <ul className="privacy-list">
            <li>
              <Check size={16} /> <b>Zero learning curve:</b> Designed for elders, children, and loved ones alike
            </li>
            <li>
              <Check size={16} /> <b>Instant circle sync:</b> Links with your family circle in one simple tap
            </li>
            <li>
              <Check size={16} /> <b>100% on-device privacy:</b> Biometrics stay strictly on the local hardware
            </li>
            <li>
              <Check size={16} /> <b>Calm recognition:</b> Gentle audio and visual prompts when family is near
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className="privacy-visual" delay={130}>
          <div className="privacy-orb privacy-orb--one" />
          <div className="privacy-orb privacy-orb--two" />
          <div className="privacy-phone-card">
            {/* Pic 7 Fix: Removed duplicate fake status bar / Apple wifi time charging over the real image */}
            <IPhoneFrame
              src="/assets/socialsight-connect-screen.jpeg"
              alt="SocialSight companion user app connection screen"
              showStatusBar={false}
              showIsland={false}
              className="privacy-iphone"
            />
          </div>
          <div className="secure-chip">
            <LockKeyhole size={16} />
            <span>
              <b>Companion User App</b>
              <small>Private on-device connection</small>
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ClosingAndFooter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <>
      <section className="closing-section">
        <div className="closing-orb" />
        <div className="closing-orb closing-orb--two" />
        <ScrollReveal className="closing-content">
          <p className="eyebrow">
            <HeartHandshake size={14} /> SOCIALSIGHT
          </p>
          <h2>
            See the people
            <br />
            you love.
          </h2>
          <p>Start building a more familiar, private way to stay connected.</p>
          <div className="closing-actions">
            <a className="button button--gold button--large" href="/api/auth/login">
              Start your circle <ArrowRight size={17} />
            </a>
          </div>
        </ScrollReveal>
      </section>

      <footer className="site-footer">
        {/* Top glowing ambient gradient divider */}
        <div className="footer-glow-line" aria-hidden="true" />

        <div className="page-shell">
          {/* Newsletter / Early Access Preview Card */}
          <div className="footer-invite-card">
            <div className="invite-content">
              <div className="invite-badge">
                <Radio size={14} className="pulse-icon" />
                <span>PRIVATE PREVIEW ACCESS</span>
              </div>
              <h3>Experience Private Connection First.</h3>
              <p>
                Get invited to our private preview cohort. On-device neural intelligence with zero cloud
                surveillance.
              </p>
            </div>
            <form className="invite-form" onSubmit={handleSubscribe}>
              {subscribed ? (
                <div className="invite-success">
                  <Check size={18} />
                  <span>You're on the list. We'll be in touch soon.</span>
                </div>
              ) : (
                <div className="invite-input-wrap">
                  <Mail size={16} className="invite-mail-icon" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address for preview"
                  />
                  <button type="submit" className="button button--small button--light">
                    Join waitlist <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Main Footer Content Grid */}
          <div className="footer-grid">
            <div className="footer-brand-col">
              <BrandMark />
              <p className="footer-tagline">
                The private on-device intelligence platform. Staying close to the people who matter
                most, without compromising your privacy or sovereignty.
              </p>

              {/* Security & System Status Pills */}
              <div className="footer-badges">
                <div className="footer-pill">
                  <ShieldCheck size={13} />
                  <span>100% On-Device Neural Processing</span>
                </div>
                <div className="footer-pill">
                  <LockKeyhole size={13} />
                  <span>Zero-Cloud Biometric Storage</span>
                </div>
              </div>

              <div className="footer-system-status">
                <span className="status-dot-pulse" />
                <span>All Systems Operational • v2.4 (Preview)</span>
              </div>
            </div>

            <div className="footer-col">
              <p className="footer-heading">Product</p>
              <a href="#family">Family Circle</a>
              <a href="#how-it-works">Recognition Engine</a>
              <a href="#family">Shared Memories</a>
              <a href="#products">Companion Wristband</a>
              <a href="#products">Audio Earbuds</a>
              <a href="#privacy">User Companion App</a>
            </div>

            <div className="footer-col">
              <p className="footer-heading">Technology</p>
              <a href="#privacy">Neural Processing</a>
              <a href="#privacy">Zero-Cloud Storage</a>
              <a href="#privacy">Local Encryption</a>
              <a href="#how-it-works">Face Vector Engine</a>
              <a href="#privacy">Offline Sync</a>
              <a href="#products">Companion Hardware</a>
            </div>

            <div className="footer-col">
              <p className="footer-heading">Company</p>
              <a href="#top">Our Mission</a>
              <a href="#privacy">Privacy Manifesto</a>
              <a href="#family">Advisory Council</a>
              <a href="#top">Newsroom</a>
              <a href="/api/auth/login">
                Careers <span className="hiring-badge">We're hiring</span>
              </a>
              <a href="/api/auth/login">Contact Team</a>
            </div>

            <div className="footer-col">
              <p className="footer-heading">Connect</p>
              <div className="footer-social-links">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <Youtube size={16} />
                </a>
              </div>
              <p className="footer-mini-note">Built for privacy, crafted for humanity.</p>
            </div>
          </div>

          {/* Bottom Bar with Legal and Copyright */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <span>© {new Date().getFullYear()} SocialSight Technologies, Inc. All rights reserved.</span>
              <span className="footer-sep">•</span>
              <a href="#privacy">Privacy Policy</a>
              <span className="footer-sep">•</span>
              <a href="#privacy">Terms of Service</a>
              <span className="footer-sep">•</span>
              <a href="#privacy">Security Disclosure</a>
            </div>
            <div className="footer-bottom-right">
              <span className="lang-pill">
                <Globe size={13} /> English (US)
              </span>
              <span className="family-made-badge">Designed for meaningful connection</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default function LandingSections() {
  return (
    <>
      <TrustStrip />
      <FamilySection />
      <HowItWorks />
      <ProductSection />
      <PrivacySection />
      <ClosingAndFooter />
    </>
  )
}
