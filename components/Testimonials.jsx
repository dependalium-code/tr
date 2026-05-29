import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TESTIMONIALS = [
  {
    text: 'Trabajar con creaar.es fue una experiencia increíble. Rediseñaron nuestra web en tiempo récord y las ventas online aumentaron un 240% en tres meses. Son un equipo que de verdad se involucra con tu negocio.',
    name: 'María Fernández',
    role: 'CEO · LuxeMode',
    initials: 'MF',
    avatarGradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    stars: 5,
  },
  {
    text: 'El trabajo de SEO que hicieron para nosotros superó todas nuestras expectativas. Pasamos de la página 4 a la posición 1 en nuestras palabras clave principales. El tráfico orgánico se triplicó en 6 meses.',
    name: 'Carlos Méndez',
    role: 'Fundador · Pulsar Tech',
    initials: 'CM',
    avatarGradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    stars: 5,
  },
  {
    text: 'Desde que gestionan nuestras redes sociales, la comunidad ha crecido de 800 a más de 18.000 seguidores en Instagram. El contenido que crean refleja perfectamente nuestra esencia como restaurante.',
    name: 'Elena Soler',
    role: 'Propietaria · La Trattoria',
    initials: 'ES',
    avatarGradient: 'linear-gradient(135deg, #ec4899, #f97316)',
    stars: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    setCurrent(index)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length)
  }, [])

  // Auto-rotate cada 5s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  // Parar auto-rotate al interactuar
  const handleManualNav = (fn) => {
    clearInterval(timerRef.current)
    fn()
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 5000)
  }

  // Animación de entrada del slide activo
  useEffect(() => {
    gsap.fromTo(
      '.testimonial-slide.active .testimonial-text',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }
    )
    gsap.fromTo(
      '.testimonial-slide.active .testimonial-author',
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.12 }
    )
  }, [current])

  // ScrollTrigger reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-header',
            start: 'top 85%',
            once: true,
          },
        }
      )
      gsap.fromTo(
        '.testimonial-carousel',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonial-carousel',
            start: 'top 88%',
            once: true,
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const t = TESTIMONIALS[current]

  return (
    <section id="testimonials" ref={sectionRef} className="testimonials section">
      <div className="container">
        {/* Header */}
        <div className="section-header testimonials-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            Testimonios
          </div>
          <h2 className="section-title">
            Lo que dicen{' '}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="section-subtitle">
            Más de 50 empresas han confiado en nosotros para transformar su
            presencia digital. Aquí está su experiencia.
          </p>
        </div>

        {/* Carousel */}
        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className={`testimonial-slide ${i === current ? 'active' : ''}`}
              >
                {/* Comillas decorativas */}
                <div className="testimonial-quote-mark" aria-hidden="true">"</div>

                {/* Estrellas */}
                <div className="testimonial-stars" aria-label={`${item.stars} estrellas`}>
                  {Array.from({ length: item.stars }).map((_, j) => (
                    <span key={j} className="star">★</span>
                  ))}
                </div>

                {/* Cita */}
                <p className="testimonial-text">"{item.text}"</p>

                {/* Autor */}
                <div className="testimonial-author">
                  <div
                    className="author-avatar"
                    style={{ background: item.avatarGradient }}
                  >
                    {item.initials}
                  </div>
                  <div className="author-info">
                    <span className="author-name">{item.name}</span>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles */}
          <div className="testimonial-controls">
            <button
              className="testimonial-nav-btn"
              onClick={() => handleManualNav(prev)}
              aria-label="Anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === current ? 'active' : ''}`}
                  onClick={() => handleManualNav(() => goTo(i))}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonial-nav-btn"
              onClick={() => handleManualNav(next)}
              aria-label="Siguiente"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
