import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useData } from '../context/DataContext'

export default function Navbar() {
  const { data } = useData()
  const { instagram, linkedin, tiktok, facebook } = data.socials
  const navRef  = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setMenuOpen(false)
    if (href.startsWith('#') && !href.includes('/')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = href
    }
  }

  const links = [
    { label: 'Servicios',   href: '#services' },
    { label: 'Portfolio',   href: '#portfolio' },
    { label: 'Testimonios', href: '#testimonials' },
    { label: 'Contacto',    href: '#contact' },
  ]

  const socialLinks = [
    { href: instagram, title: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
    { href: linkedin,  title: 'LinkedIn',  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
    { href: tiktok,    title: 'TikTok',    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg> },
    { href: facebook,  title: 'Facebook',  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  ]

  return (
    <>
      <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); go('#hero') }}>
            creaar<span className="nav-logo-accent">.</span>es
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <button className="nav-link" onClick={() => go(l.href)}>{l.label}</button>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            {/* Iconos sociales */}
            <div style={{ display: 'flex', gap: 6 }}>
              {socialLinks.map(s => (
                <a key={s.title} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer"
                  className="social-link" style={{ width: 32, height: 32 }}>
                  {s.icon}
                </a>
              ))}
            </div>

            <a href="#/admin" className="nav-admin-link"
              onClick={e => { e.preventDefault(); window.location.hash = '/admin'; window.dispatchEvent(new HashChangeEvent('hashchange')) }}>
              Admin
            </a>

            <button className="nav-cta" onClick={() => go('#contact')}>
              Empezar proyecto
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <button className={`nav-mobile-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            <span className="hamburger-line" /><span className="hamburger-line" /><span className="hamburger-line" />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <button key={l.href} className="nav-mobile-link" onClick={() => go(l.href)}>{l.label}</button>
        ))}
        <div style={{ display: 'flex', gap: 8, padding: '8px 16px' }}>
          {socialLinks.map(s => (
            <a key={s.title} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer"
              className="social-link" style={{ width: 36, height: 36 }}>
              {s.icon}
            </a>
          ))}
        </div>
        <button className="nav-mobile-cta" onClick={() => go('#contact')}>Empezar proyecto →</button>
      </div>
    </>
  )
}
