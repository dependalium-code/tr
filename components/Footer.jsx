import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useData } from '../context/DataContext'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const { data } = useData()
  const { instagram, linkedin, tiktok, facebook } = data.socials
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-grid > *', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%', once: true },
      })
    }, footerRef)
    return () => ctx.revert()
  }, [])

  const go = (href) => {
    if (href.startsWith('#') && !href.includes('/')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navCols = [
    {
      title: 'Servicios',
      links: [
        { label: 'Diseño Web', href: '#services' },
        { label: 'E-commerce', href: '#services' },
        { label: 'Redes Sociales', href: '#services' },
        { label: 'SEO & Posicionamiento', href: '#services' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Testimonios', href: '#testimonials' },
        { label: 'Proceso de trabajo', href: '#services' },
        { label: 'Admin', href: '/admin', isHash: true },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: data.contact.email,   href: `mailto:${data.contact.email}`, external: true },
        { label: data.contact.phone,   href: `tel:${data.contact.phone.replace(/\s/g, '')}`, external: true },
        { label: data.contact.address, href: '#', noNav: true },
        { label: 'Empezar proyecto →', href: '#contact' },
      ],
    },
  ]

  const socials = [
    { href: instagram, title: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
    { href: linkedin,  title: 'LinkedIn',  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
    { href: tiktok,    title: 'TikTok',    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg> },
    { href: facebook,  title: 'Facebook',  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  ]

  return (
    <footer ref={footerRef} className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">creaar<span className="footer-logo-accent">.</span>es</div>
            <p className="footer-tagline">Agencia digital premium. Transformamos marcas con diseño web, redes sociales y SEO que generan resultados reales.</p>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.title} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer" className="social-link">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columnas nav */}
          {navCols.map(col => (
            <div key={col.title}>
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-links">
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} className="footer-link">{link.label}</a>
                    ) : link.isHash ? (
                      <a href={`#${link.href}`} className="footer-link"
                        onClick={e => { e.preventDefault(); window.location.hash = link.href; window.dispatchEvent(new HashChangeEvent('hashchange')) }}>
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.noNav ? undefined : link.href} className="footer-link"
                        onClick={e => { if (!link.noNav && link.href.startsWith('#')) { e.preventDefault(); go(link.href) } }}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} <a href="https://creaar.es">creaar.es</a> — Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#">Aviso legal</a>
            <a href="#">Privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
