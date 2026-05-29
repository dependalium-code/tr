import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useData } from '../context/DataContext'

gsap.registerPlugin(ScrollTrigger)

const GRADIENTS = [
  'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
  'linear-gradient(135deg, #0a1628, #1a3a5c, #0d2440)',
  'linear-gradient(135deg, #1a0533, #3d0575, #6a0dad)',
  'linear-gradient(135deg, #0d2b1d, #155239, #0a6624)',
  'linear-gradient(135deg, #2d0320, #660f47, #991b1b)',
  'linear-gradient(135deg, #020617, #0c1445, #162260)',
]

const ACCENTS = ['#a78bfa', '#67e8f9', '#c084fc', '#4ade80', '#fb7185', '#60a5fa']

const FILTERS = ['Todos', 'Web', 'Branding', 'Social', 'App']

function MockupCard({ accent }) {
  return (
    <div className="portfolio-mockup">
      <div className="portfolio-mockup-screen">
        <div className="mockup-topbar">
          <span className="mockup-dot" /><span className="mockup-dot" /><span className="mockup-dot" />
        </div>
        <div className="mockup-content">
          <div className="mockup-bar" style={{ height: 10, width: '55%', background: accent + '66', borderRadius: 3 }} />
          <div className="mockup-bar" style={{ width: '100%' }} />
          <div className="mockup-bar" style={{ width: '75%' }} />
          <div className="mockup-bar" style={{ width: '50%' }} />
          <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
            <div className="mockup-bar" style={{ flex: 1, height: 26, borderRadius: 4, background: accent + '22' }} />
            <div className="mockup-bar" style={{ flex: 1, height: 26, borderRadius: 4, background: 'rgba(255,255,255,0.05)' }} />
            <div className="mockup-bar" style={{ flex: 1, height: 26, borderRadius: 4, background: 'rgba(255,255,255,0.05)' }} />
          </div>
          <div className="mockup-bar" style={{ width: '100%', marginTop: 2 }} />
          <div className="mockup-bar" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const { data } = useData()
  const { portfolio } = data
  const sectionRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered = activeFilter === 'Todos'
    ? portfolio
    : portfolio.filter(p => p.tag === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.portfolio-header', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.portfolio-header', start: 'top 85%', once: true },
      })
      gsap.fromTo('.portfolio-filters', { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.portfolio-filters', start: 'top 88%', once: true },
      })
      gsap.fromTo('.portfolio-grid', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.portfolio-grid', start: 'top 84%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    gsap.fromTo('.portfolio-item', { y: 30, opacity: 0, scale: 0.97 }, {
      y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out',
    })
  }, [activeFilter])

  return (
    <section id="portfolio" ref={sectionRef} className="portfolio section">
      <div className="container">
        <div className="section-header portfolio-header">
          <div className="section-tag"><span className="section-tag-dot" />Portfolio</div>
          <h2 className="section-title">Proyectos que <span className="gradient-text">hablan por sí solos</span></h2>
          <p className="section-subtitle">Cada proyecto es una historia de transformación digital. Aquí están algunos de los trabajos de los que más orgullosos estamos.</p>
        </div>

        <div className="portfolio-filters">
          {FILTERS.map(f => (
            <button key={f} className={`filter-btn ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>{f}</button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((project, i) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-visual" style={{ background: GRADIENTS[i % GRADIENTS.length] }}>
                  <MockupCard accent={ACCENTS[i % ACCENTS.length]} />
                </div>
                <div className="portfolio-overlay">
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENTS[i % ACCENTS.length], marginBottom: 6, display: 'block' }}>
                    {project.category}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
                    {project.name}
                  </span>
                </div>
              </div>
              <div className="portfolio-info">
                <div>
                  <div className="portfolio-name">{project.name}</div>
                  <div className="portfolio-category">{project.category} · {project.year}</div>
                </div>
                <div className="portfolio-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
