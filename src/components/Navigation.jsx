import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { BrandMark } from './BrandMark.jsx'

const links = [
  ['Experience', '#family'],
  ['How it works', '#how-it-works'],
  ['Products', '#products'],
  ['Companion App', '#privacy'],
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      // Navbar sticky both on scroll down and scroll up; never hides
      if (window.scrollY > 15) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="brand-link" onClick={closeMenu}>
          <BrandMark />
        </a>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu} className="nav-link-item">
              <span>{label}</span>
            </a>
          ))}
          <a className="nav-login mobile-login" href="/api/auth/login" onClick={closeMenu}>
            Sign in
          </a>
        </div>

        <div className="nav-actions">
          <a className="nav-login" href="/api/auth/login">
            Sign in
          </a>
          <a className="button button--small button--light nav-cta" href="/api/auth/login">
            Get started <ArrowUpRight size={14} />
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={21} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
