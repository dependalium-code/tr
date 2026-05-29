import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useData } from '../context/DataContext'

gsap.registerPlugin(ScrollTrigger)

// ── Color states: blanco → negro → lila ──────────────────────────────────────
const COLOR_STATES = [
  {
    body: '#f0f0f0',
    emissive: '#1a1a3a',
    roughness: 0.25,
    metalness: 0.15,
    p1Color: new THREE.Color('#7c3aed'),
    p2Color: new THREE.Color('#06b6d4'),
    label: 'white',
  },
  {
    body: '#0e0e1c',
    emissive: '#4c1d95',
    roughness: 0.35,
    metalness: 0.2,
    p1Color: new THREE.Color('#6366f1'),
    p2Color: new THREE.Color('#3b82f6'),
    label: 'black',
  },
  {
    body: '#9333ea',
    emissive: '#c084fc',
    roughness: 0.2,
    metalness: 0.25,
    p1Color: new THREE.Color('#22d3ee'),
    p2Color: new THREE.Color('#ec4899'),
    label: 'violet',
  },
]

const COLOR_INTERVAL = 4    // segundos entre cambios
const TRANS_DURATION  = 1.1 // segundos de transición

function buildWomanFigure(mat) {
  const group = new THREE.Group()

  // ── Cuerpo (silueta femenina con LatheGeometry) ──────────────────────────
  const bodyPts = [
    new THREE.Vector2(0.01, 0.00),  // pies
    new THREE.Vector2(0.11, 0.09),
    new THREE.Vector2(0.14, 0.25),
    new THREE.Vector2(0.11, 0.44),  // rodillas
    new THREE.Vector2(0.16, 0.64),
    new THREE.Vector2(0.28, 0.83),  // caderas (más ancho)
    new THREE.Vector2(0.25, 0.93),
    new THREE.Vector2(0.17, 1.06),  // cintura (más estrecho)
    new THREE.Vector2(0.21, 1.20),
    new THREE.Vector2(0.27, 1.37),  // pecho
    new THREE.Vector2(0.24, 1.51),
    new THREE.Vector2(0.18, 1.63),  // hombros
    new THREE.Vector2(0.07, 1.73),  // base cuello
    new THREE.Vector2(0.065, 1.84), // cuello
  ]
  const bodyGeo = new THREE.LatheGeometry(bodyPts, 72)
  group.add(new THREE.Mesh(bodyGeo, mat))

  // ── Cabeza ────────────────────────────────────────────────────────────────
  const headGeo = new THREE.SphereGeometry(0.27, 36, 36)
  const head = new THREE.Mesh(headGeo, mat)
  head.position.y = 2.17
  group.add(head)

  // ── Cabello (silueta LatheGeometry) ───────────────────────────────────────
  const hairPts = [
    new THREE.Vector2(0.01, 0.00),
    new THREE.Vector2(0.28, 0.04),
    new THREE.Vector2(0.33, 0.22),
    new THREE.Vector2(0.31, 0.46),
    new THREE.Vector2(0.24, 0.64),
    new THREE.Vector2(0.10, 0.78),
    new THREE.Vector2(0.01, 0.88),
  ]
  const hairGeo = new THREE.LatheGeometry(hairPts, 48)
  const hair = new THREE.Mesh(hairGeo, mat)
  hair.position.y = 2.17
  group.add(hair)

  // ── Brazos ─────────────────────────────────────────────────────────────────
  const armPairs = [
    { x: -0.36, angleZ:  Math.PI / 4.5, foreX: -0.54, foreAngle:  Math.PI / 6.5 },
    { x:  0.36, angleZ: -Math.PI / 4.5, foreX:  0.54, foreAngle: -Math.PI / 6.5 },
  ]

  armPairs.forEach(({ x, angleZ, foreX, foreAngle }) => {
    const upperGeo = new THREE.CylinderGeometry(0.04, 0.055, 0.68, 18)
    const upper = new THREE.Mesh(upperGeo, mat)
    upper.position.set(x, 1.35, 0)
    upper.rotation.z = angleZ
    group.add(upper)

    const lowerGeo = new THREE.CylinderGeometry(0.032, 0.04, 0.58, 16)
    const lower = new THREE.Mesh(lowerGeo, mat)
    lower.position.set(foreX, 0.98, 0)
    lower.rotation.z = foreAngle
    group.add(lower)
  })

  // ── Anillo de base ─────────────────────────────────────────────────────────
  const ringGeo = new THREE.TorusGeometry(0.22, 0.018, 16, 80)
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.55 })
  const ring = new THREE.Mesh(ringGeo, ringMat)
  ring.rotation.x = Math.PI / 2
  ring.position.y = 0.008
  group.add(ring)

  return { group, ring, ringMat }
}

function buildParticles() {
  const count = 180
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = 1.6 + Math.random() * 1.8
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + 1.1
    positions[i * 3 + 2] = r * Math.cos(phi)
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({ size: 0.026, color: 0x7c3aed, transparent: true, opacity: 0.55 })
  return { points: new THREE.Points(geo, mat), geo, mat }
}

export default function Hero() {
  const { data } = useData()
  const { title, subtitle, cta1, cta2 } = data.hero
  const wrapRef  = useRef(null)
  const sectionRef = useRef(null)
  const [colorIdx, setColorIdx] = useState(0)

  // ── THREE.js setup ────────────────────────────────────────────────────────
  useEffect(() => {
    const container = wrapRef.current
    if (!container) return

    const W = container.clientWidth
    const H = container.clientHeight

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100)
    camera.position.set(0, 1.25, 5.2)
    camera.lookAt(0, 1.2, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Material compartido
    const mat = new THREE.MeshStandardMaterial({
      color:    new THREE.Color(COLOR_STATES[0].body),
      emissive: new THREE.Color(COLOR_STATES[0].emissive),
      emissiveIntensity: 0.28,
      roughness: COLOR_STATES[0].roughness,
      metalness: COLOR_STATES[0].metalness,
    })

    // Figura
    const { group: figure, ring, ringMat } = buildWomanFigure(mat)
    figure.position.y = -0.5
    figure.rotation.y = 0.15
    scene.add(figure)

    // Partículas
    const { points: particles, geo: pGeo, mat: pMat } = buildParticles()
    scene.add(particles)

    // Luces
    const ambient = new THREE.AmbientLight(0xffffff, 0.45)
    scene.add(ambient)

    const dir = new THREE.DirectionalLight(0xffffff, 1.3)
    dir.position.set(2, 3.5, 2)
    scene.add(dir)

    const p1 = new THREE.PointLight(0x7c3aed, 2.2, 9)
    p1.position.set(-2.2, 2, 2)
    scene.add(p1)

    const p2 = new THREE.PointLight(0x06b6d4, 1.8, 7)
    p2.position.set(2.2, 0.5, 1)
    scene.add(p2)

    // ── Estado de color ──────────────────────────────────────────────────────
    let curState   = 0
    let colorTimer = 0
    let inTrans    = false
    let transT     = 0

    const tmpColor = new THREE.Color()

    function applyColor(stateIdx) {
      const s = COLOR_STATES[stateIdx]
      mat.color.set(s.body)
      mat.emissive.set(s.emissive)
      mat.roughness = s.roughness
      mat.metalness = s.metalness
      p1.color.copy(s.p1Color)
      p2.color.copy(s.p2Color)
      ringMat.color.copy(s.p1Color)
    }

    // ── Mouse tracking ───────────────────────────────────────────────────────
    const target = { y: 0.15, x: 0.0 }
    const onMouse = (e) => {
      const nx = (e.clientX / window.innerWidth)  * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      target.y =  0.15 + nx * 0.45
      target.x = -ny * 0.12
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      const W2 = container.clientWidth
      const H2 = container.clientHeight
      camera.aspect = W2 / H2
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', onResize, { passive: true })

    // ── Loop ─────────────────────────────────────────────────────────────────
    const clock = new THREE.Clock()
    let raf

    const tick = () => {
      raf = requestAnimationFrame(tick)
      const dt = clock.getDelta()
      const t  = clock.elapsedTime

      colorTimer += dt

      // Transición de color
      if (!inTrans && colorTimer >= COLOR_INTERVAL) {
        inTrans    = true
        transT     = 0
        colorTimer = 0
      }

      if (inTrans) {
        transT += dt / TRANS_DURATION
        if (transT >= 1) {
          transT  = 1
          inTrans = false
          curState = (curState + 1) % COLOR_STATES.length
          applyColor(curState)
          setColorIdx(curState) // actualiza indicador React
        } else {
          const nextIdx = (curState + 1) % COLOR_STATES.length
          const from = COLOR_STATES[curState]
          const to   = COLOR_STATES[nextIdx]
          const e    = transT

          mat.color.copy(tmpColor.set(from.body)).lerp(tmpColor.set(to.body), e)
          // trick: re-set from because lerp modifies in place
          const fc = new THREE.Color(from.body)
          const tc = new THREE.Color(to.body)
          mat.color.copy(fc).lerp(tc, e)

          const fe = new THREE.Color(from.emissive)
          const te = new THREE.Color(to.emissive)
          mat.emissive.copy(fe).lerp(te, e)

          const fp1 = new THREE.Color().copy(from.p1Color)
          const tp1 = new THREE.Color().copy(to.p1Color)
          p1.color.copy(fp1).lerp(tp1, e)

          const fp2 = new THREE.Color().copy(from.p2Color)
          const tp2 = new THREE.Color().copy(to.p2Color)
          p2.color.copy(fp2).lerp(tp2, e)

          ringMat.color.copy(fp1).lerp(tp1, e)
        }
      }

      // Mouse follow (suave)
      figure.rotation.y += (target.y - figure.rotation.y) * 0.055
      figure.rotation.x += (target.x - figure.rotation.x) * 0.055

      // Flotación suave
      figure.position.y = -0.5 + Math.sin(t * 0.55) * 0.055

      // Luces animadas
      p1.position.x = -2.2 + Math.sin(t * 0.28) * 0.6
      p1.position.z =  2.0 + Math.cos(t * 0.22) * 0.5
      p2.position.x =  2.2 + Math.cos(t * 0.35) * 0.5
      p2.position.z =  1.0 + Math.sin(t * 0.30) * 0.5

      // Partículas girando
      particles.rotation.y += 0.0018
      particles.rotation.x  = Math.sin(t * 0.15) * 0.08

      renderer.render(scene, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      mat.dispose()
      pGeo.dispose()
      pMat.dispose()
      ringMat.dispose()
    }
  }, [])

  // ── GSAP entrada ─────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo('.hero-badge', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
        .fromTo('.hero-word',  { y: 110, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.055, ease: 'power4.out' }, '-=0.3')
        .fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }, '-=0.5')
        .fromTo('.hero-action', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.12, ease: 'power3.out' }, '-=0.35')
        .fromTo('.hero-stat',   { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.2')

      // Parallax hero bg
      gsap.to('.hero-orb-1', {
        yPercent: 40, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 2 },
      })

      // Scroll indicator fade
      gsap.to('.scroll-indicator', {
        opacity: 0,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '15% top', scrub: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const words = title.split(' ')

  return (
    <section id="hero" ref={sectionRef} className="hero">
      {/* Fondo */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid-overlay" />
      </div>

      {/* Contenido de texto */}
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Agencia Digital Premium
          </div>

          <h1 className="hero-title">
            {words.map((word, i) => (
              <span key={i} className="hero-word-wrap">
                <span className="hero-word">
                  {['digital', 'futuro'].includes(word.toLowerCase().replace(',', '')) ? (
                    <span className="highlight">{word}</span>
                  ) : word}
                </span>
                {i < words.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>

          <p className="hero-subtitle">{subtitle}</p>

          <div className="hero-actions">
            <a href="#portfolio" className="hero-action btn-primary">
              <span>{cta1}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="hero-action btn-ghost">{cta2}</a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Proyectos completados</span>
            </div>
            <div className="hero-stats-divider" />
            <div className="hero-stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Clientes satisfechos</span>
            </div>
            <div className="hero-stats-divider" />
            <div className="hero-stat">
              <span className="stat-number">5★</span>
              <span className="stat-label">Valoración media</span>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas THREE.js */}
      <div ref={wrapRef} className="hero-canvas-wrap">
        {/* Color indicator */}
        <div className="hero-color-indicator">
          {COLOR_STATES.map((_, i) => (
            <div key={i} className={`color-dot ${i === colorIdx ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"><div className="scroll-dot" /></div>
      </div>
    </section>
  )
}
