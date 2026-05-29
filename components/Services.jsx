import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useData } from '../context/DataContext'

gsap.registerPlugin(ScrollTrigger)

const ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" key="web">
    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    <path d="M7 8h4M7 11h2" /><rect x="13" y="7" width="5" height="5" rx="1" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" key="social">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" key="seo">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 7v4l3 2" />
  </svg>,
]

export default function Services() {
  const { data } = useData()
  const { services } = data
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-header', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-header', start: 'top 85%', once: true },
      })
      gsap.fromTo('.service-card', { y: 70, opacity: 0, scale: 0.97 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-grid', start: 'top 82%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="services section">
      <div className="container">
        <div className="section-header services-header">
          <div className="section-tag"><span className="section-tag-dot" />Nuestros servicios</div>
          <h2 className="section-title">Todo lo que necesita <span className="gradient-text">tu negocio digital</span></h2>
          <p className="section-subtitle">Combinamos diseño de alto impacto, estrategia digital y tecnología de última generación para hacer crecer tu marca online.</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={service.id} className="service-card">
              <div className="service-card-inner">
                <span className="service-number">0{i + 1}</span>
                <div className="service-icon-wrap">{ICONS[i % ICONS.length]}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feat) => (
                    <li key={feat} className="service-feature">
                      <span className="service-feature-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-link">
                  Saber más
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
