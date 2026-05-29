import { useState } from 'react'
import { useData } from '../context/DataContext'

const NAV_ITEMS = [
  {
    id: 'hero',
    label: 'Hero',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'services',
    label: 'Servicios',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contacto',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: 'socials',
    label: 'Redes Sociales',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    ),
  },
]

// ── Section editors ──────────────────────────────────────────────────────────

function SavedBadge() {
  return (
    <span className="admin-saved-badge">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      Guardado
    </span>
  )
}

function HeroEditor() {
  const { data, updateSection } = useData()
  const [form, setForm] = useState({ ...data.hero })
  const [saved, setSaved] = useState(false)

  const save = () => {
    updateSection('hero', form)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <h2 className="admin-section-title">Hero</h2>
      <p className="admin-section-desc">Texto principal que ve el visitante al entrar a la web.</p>
      <div className="admin-card">
        <div className="admin-card-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M4 6h16M4 12h16M4 18h7" /></svg>
          Contenido
        </div>
        <div className="admin-form">
          <div className="admin-field">
            <label className="admin-label">Título principal</label>
            <input className="admin-input" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Subtítulo / descripción</label>
            <textarea className="admin-textarea" rows={3} value={form.subtitle} onChange={e => setForm(f => ({ ...f, subtitle: e.target.value }))} />
          </div>
          <div className="admin-form-row">
            <div className="admin-field">
              <label className="admin-label">Texto CTA principal</label>
              <input className="admin-input" value={form.cta1} onChange={e => setForm(f => ({ ...f, cta1: e.target.value }))} />
            </div>
            <div className="admin-field">
              <label className="admin-label">Texto CTA secundario</label>
              <input className="admin-input" value={form.cta2} onChange={e => setForm(f => ({ ...f, cta2: e.target.value }))} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button className="admin-save-btn" onClick={save}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
              Guardar cambios
            </button>
            {saved && <SavedBadge />}
          </div>
        </div>
      </div>
    </div>
  )
}

function ServicesEditor() {
  const { data, updateSection } = useData()
  const [services, setServices] = useState(data.services.map(s => ({ ...s, features: [...s.features] })))
  const [saved, setSaved] = useState(false)

  const update = (idx, field, val) => setServices(prev => prev.map((s, i) => i === idx ? { ...s, [field]: val } : s))
  const updateFeature = (si, fi, val) => setServices(prev => prev.map((s, i) => i === si ? { ...s, features: s.features.map((f, j) => j === fi ? val : f) } : s))
  const addFeature = (si) => setServices(prev => prev.map((s, i) => i === si ? { ...s, features: [...s.features, ''] } : s))
  const removeFeature = (si, fi) => setServices(prev => prev.map((s, i) => i === si ? { ...s, features: s.features.filter((_, j) => j !== fi) } : s))

  const save = () => {
    updateSection('services', services)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <h2 className="admin-section-title">Servicios</h2>
      <p className="admin-section-desc">Edita el título, descripción y características de cada servicio.</p>
      {services.map((s, si) => (
        <div key={s.id} className="admin-card">
          <div className="admin-card-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
            Servicio {si + 1}
          </div>
          <div className="admin-form">
            <div className="admin-field">
              <label className="admin-label">Título</label>
              <input className="admin-input" value={s.title} onChange={e => update(si, 'title', e.target.value)} />
            </div>
            <div className="admin-field">
              <label className="admin-label">Descripción</label>
              <textarea className="admin-textarea" rows={3} value={s.description} onChange={e => update(si, 'description', e.target.value)} />
            </div>
            <div className="admin-field">
              <label className="admin-label">Características (una por línea)</label>
              <div className="admin-features-list">
                {s.features.map((feat, fi) => (
                  <div key={fi} className="admin-feature-row">
                    <input className="admin-input" value={feat} onChange={e => updateFeature(si, fi, e.target.value)} placeholder={`Característica ${fi + 1}`} />
                    <button className="admin-remove-btn" onClick={() => removeFeature(si, fi)} title="Eliminar">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                  </div>
                ))}
              </div>
              <button className="admin-add-btn" onClick={() => addFeature(si)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                Añadir característica
              </button>
            </div>
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button className="admin-save-btn" onClick={save}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
          Guardar cambios
        </button>
        {saved && <SavedBadge />}
      </div>
    </div>
  )
}

function PortfolioEditor() {
  const { data, updateSection } = useData()
  const [projects, setProjects] = useState(data.portfolio.map(p => ({ ...p })))
  const [saved, setSaved] = useState(false)

  const update = (idx, field, val) => setProjects(prev => prev.map((p, i) => i === idx ? { ...p, [field]: val } : p))

  const save = () => {
    updateSection('portfolio', projects)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <h2 className="admin-section-title">Portfolio</h2>
      <p className="admin-section-desc">Edita los proyectos mostrados en la sección de portfolio.</p>
      <div className="admin-card">
        <div className="admin-card-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /></svg>
          Proyectos
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {/* Header */}
          <div className="admin-portfolio-row" style={{ paddingBottom: 10, marginBottom: 4 }}>
            <span className="admin-label" style={{ marginBottom: 0 }}>Nombre</span>
            <span className="admin-label" style={{ marginBottom: 0 }}>Categoría</span>
            <span className="admin-label" style={{ marginBottom: 0 }}>Año</span>
            <span className="admin-label" style={{ marginBottom: 0 }}>Tag</span>
          </div>
          {projects.map((p, i) => (
            <div key={p.id} className="admin-portfolio-row">
              <input className="admin-input" value={p.name} onChange={e => update(i, 'name', e.target.value)} placeholder="Nombre proyecto" />
              <input className="admin-input" value={p.category} onChange={e => update(i, 'category', e.target.value)} placeholder="Categoría" />
              <input className="admin-input" value={p.year} onChange={e => update(i, 'year', e.target.value)} placeholder="2024" maxLength={4} />
              <select className="admin-select" value={p.tag} onChange={e => update(i, 'tag', e.target.value)}>
                <option value="Web">Web</option>
                <option value="Branding">Branding</option>
                <option value="Social">Social</option>
                <option value="App">App</option>
              </select>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button className="admin-save-btn" onClick={save}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
          Guardar cambios
        </button>
        {saved && <SavedBadge />}
      </div>
    </div>
  )
}

function ContactEditor() {
  const { data, updateSection } = useData()
  const [form, setForm] = useState({ ...data.contact })
  const [saved, setSaved] = useState(false)

  const save = () => {
    updateSection('contact', form)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <h2 className="admin-section-title">Contacto</h2>
      <p className="admin-section-desc">Información de contacto que aparece en la sección de la web.</p>
      <div className="admin-card">
        <div className="admin-card-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
          Datos de contacto
        </div>
        <div className="admin-form">
          <div className="admin-field">
            <label className="admin-label">Email</label>
            <input className="admin-input" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="hola@creaar.es" />
          </div>
          <div className="admin-field">
            <label className="admin-label">Teléfono</label>
            <input className="admin-input" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+34 654 321 000" />
          </div>
          <div className="admin-field">
            <label className="admin-label">Dirección / Ubicación</label>
            <input className="admin-input" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} placeholder="Barcelona, España · 100% Remote" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button className="admin-save-btn" onClick={save}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
              Guardar cambios
            </button>
            {saved && <SavedBadge />}
          </div>
        </div>
      </div>
    </div>
  )
}

const SOCIAL_DEFS = [
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@creaar.es',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: '@creaar.es',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    handle: '@creaar.es',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    key: 'facebook',
    label: 'Facebook',
    handle: '@creaar.es',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

function SocialsEditor() {
  const { data, updateSection } = useData()
  const [socials, setSocials] = useState({ ...data.socials })
  const [saved, setSaved] = useState(false)

  const save = () => {
    updateSection('socials', socials)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <h2 className="admin-section-title">Redes Sociales</h2>
      <p className="admin-section-desc">URLs de los perfiles sociales de creaar.es.</p>
      <div className="admin-card">
        <div className="admin-card-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
          </svg>
          Perfiles sociales
        </div>
        {SOCIAL_DEFS.map((s) => (
          <div key={s.key} className="admin-social-row">
            <div className="admin-social-icon">{s.icon}</div>
            <div style={{ minWidth: 100 }}>
              <div className="admin-social-label">{s.label}</div>
              <div className="admin-social-handle">{s.handle}</div>
            </div>
            <input
              className="admin-input"
              style={{ flex: 1 }}
              value={socials[s.key] || ''}
              onChange={e => setSocials(prev => ({ ...prev, [s.key]: e.target.value }))}
              placeholder={`https://www.${s.key === 'tiktok' ? 'tiktok' : s.key === 'instagram' ? 'instagram' : s.key === 'linkedin' ? 'linkedin' : 'facebook'}.com/creaar.es`}
            />
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16 }}>
          <button className="admin-save-btn" onClick={save}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
            Guardar cambios
          </button>
          {saved && <SavedBadge />}
        </div>
      </div>
    </div>
  )
}

const EDITORS = {
  hero: HeroEditor,
  services: ServicesEditor,
  portfolio: PortfolioEditor,
  contact: ContactEditor,
  socials: SocialsEditor,
}

// ── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('hero')
  const ActiveEditor = EDITORS[activeSection]

  const handleLogout = () => {
    sessionStorage.removeItem('creaar_admin')
    window.location.hash = '/'
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }

  const handlePreview = () => {
    window.location.hash = '/'
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }

  return (
    <div className="admin-layout">
      {/* Top bar */}
      <header className="admin-topbar">
        <div className="admin-topbar-logo">
          creaar<span className="nav-logo-accent">.</span>es
          <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.8rem', marginLeft: 10 }}>
            Admin
          </span>
        </div>
        <div className="admin-topbar-actions">
          <button className="admin-preview-btn" onClick={handlePreview}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Vista previa
          </button>
          <button className="admin-logout-btn" onClick={handleLogout}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Cerrar sesión
          </button>
        </div>
      </header>

      <div className="admin-body">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="admin-nav-label">Secciones</div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`admin-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </aside>

        {/* Contenido */}
        <main className="admin-main">
          <ActiveEditor />
        </main>
      </div>
    </div>
  )
}
