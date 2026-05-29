import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const ADMIN_PASSWORD = 'creaar2024'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 32, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.15 }
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('creaar_admin', 'true')
        window.location.hash = '/admin'
        // forzar re-render
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      } else {
        setError('Contraseña incorrecta. Inténtalo de nuevo.')
        setLoading(false)
        gsap.fromTo(
          cardRef.current,
          { x: -8 },
          { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' }
        )
      }
    }, 600)
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-bg" />

      <div ref={cardRef} className="admin-login-card">
        <div className="admin-login-logo">
          creaar<span className="nav-logo-accent">.</span>es
        </div>
        <p className="admin-login-subtitle">Panel de administración</p>

        <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
          {error && (
            <div className="admin-login-error">{error}</div>
          )}

          <div className="admin-field">
            <label className="admin-label" htmlFor="admin-pass">Contraseña</label>
            <input
              id="admin-pass"
              type="password"
              className="admin-input"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
          </div>

          <button
            type="submit"
            className="admin-save-btn"
            style={{ marginTop: '4px', justifyContent: 'center' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ animation: 'spin 0.8s linear infinite' }}>
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Verificando...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Entrar al panel
              </>
            )}
          </button>
        </form>

        <div className="admin-login-back">
          <a href="#/" onClick={() => { window.location.hash = '/'; }}>← Volver a la web</a>
        </div>
      </div>
    </div>
  )
}
