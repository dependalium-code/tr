import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useData } from '../context/DataContext'

gsap.registerPlugin(ScrollTrigger)

const SERVICES_LIST = ['Diseño Web', 'Tienda Online / E-commerce', 'Gestión de Redes Sociales', 'SEO & Posicionamiento', 'Branding & Identidad Visual', 'Otro / No sé aún']
const BUDGETS = ['Menos de 1.000 €', '1.000 € – 3.000 €', '3.000 € – 8.000 €', 'Más de 8.000 €']

export default function Contact() {
  const { data } = useData()
  const { email, phone, address } = data.contact
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const change = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1800)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-header-left', { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-header-left', start: 'top 85%', once: true },
      })
      gsap.fromTo('.contact-form-section', { x: 50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form-section', start: 'top 85%', once: true },
      })
      gsap.fromTo('.contact-item', { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-items', start: 'top 87%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const contactItems = [
    { label: 'Email', value: email,   icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
    { label: 'Teléfono', value: phone, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.2z"/></svg> },
    { label: 'Ubicación', value: address, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> },
    { label: 'Respuesta', value: 'En menos de 24 horas', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  ]

  return (
    <section id="contact" ref={sectionRef} className="contact section">
      <div className="container">
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info-section contact-header-left">
            <div className="section-tag"><span className="section-tag-dot" />Contacto</div>
            <h2 className="section-title">Hablemos de tu <span className="gradient-text">próximo proyecto</span></h2>
            <p className="section-subtitle">Cuéntanos qué necesitas y te responderemos en menos de 24 horas con una propuesta sin compromiso.</p>
            <div className="contact-items">
              {contactItems.map(item => (
                <div key={item.label} className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="contact-form-section">
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, padding: '48px 24px', textAlign: 'center', minHeight: 400 }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--gradient-main)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>¡Mensaje enviado!</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: 300, lineHeight: 1.6 }}>Gracias por contactarnos. Te respondemos en menos de 24 horas con una propuesta personalizada.</p>
                <button className="btn-ghost" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', budget: '', message: '' }) }}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="cn">Nombre<span className="required">*</span></label>
                    <input id="cn" name="name" type="text" className="form-input" placeholder="Tu nombre" value={form.name} onChange={change} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="ce">Email<span className="required">*</span></label>
                    <input id="ce" name="email" type="email" className="form-input" placeholder="tu@email.com" value={form.email} onChange={change} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cs">¿Qué necesitas?<span className="required">*</span></label>
                  <select id="cs" name="service" className="form-select" value={form.service} onChange={change} required>
                    <option value="" disabled>Selecciona un servicio</option>
                    {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cb">Presupuesto aproximado</label>
                  <select id="cb" name="budget" className="form-select" value={form.budget} onChange={change}>
                    <option value="">Selecciona tu rango</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cm">Cuéntanos tu proyecto<span className="required">*</span></label>
                  <textarea id="cm" name="message" className="form-textarea" placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..." value={form.message} onChange={change} rows={5} required />
                </div>
                <button type="submit" className="form-submit" disabled={loading}>
                  {loading ? (
                    <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 0.8s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg><span>Enviando...</span></>
                  ) : (
                    <><span>Enviar mensaje</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z"/></svg></>
                  )}
                </button>
                <p className="form-note">Sin compromiso · Respuesta en &lt; 24h · 100% confidencial</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
