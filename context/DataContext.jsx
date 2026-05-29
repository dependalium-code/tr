import { createContext, useContext, useState } from 'react'

export const DEFAULT_DATA = {
  hero: {
    title: 'Diseñamos el futuro digital de tu marca',
    subtitle:
      'Transformamos ideas en experiencias digitales memorables. Diseño web, redes sociales y SEO que impulsa el crecimiento real de tu negocio.',
    cta1: 'Ver proyectos',
    cta2: 'Hablemos',
  },
  services: [
    {
      id: 1,
      title: 'Diseño Web',
      description:
        'Creamos sitios web y tiendas online que convierten visitantes en clientes. Diseño a medida, rápido, seguro y optimizado para todos los dispositivos.',
      features: [
        'Landing pages de alta conversión',
        'E-commerce con Shopify / WooCommerce',
        'Webs corporativas premium',
        'Diseño UX/UI personalizado',
      ],
    },
    {
      id: 2,
      title: 'Redes Sociales',
      description:
        'Gestionamos tu presencia en Instagram, TikTok y LinkedIn con contenido que engancha, crece tu comunidad y genera oportunidades reales de negocio.',
      features: [
        'Estrategia de contenido mensual',
        'Diseño de posts y reels',
        'Community management diario',
        'Campañas de publicidad pagada',
      ],
    },
    {
      id: 3,
      title: 'SEO & Posicionamiento',
      description:
        'Llevamos tu web a la primera página de Google con estrategias SEO técnicas, de contenido y link building que generan tráfico orgánico sostenible.',
      features: [
        'Auditoría SEO completa',
        'Optimización técnica on-page',
        'Estrategia de contenidos SEO',
        'Link building de calidad',
      ],
    },
  ],
  portfolio: [
    { id: 1, name: 'LuxeMode Store', category: 'E-commerce', year: '2024', tag: 'Web' },
    { id: 2, name: 'NexFlow SaaS', category: 'Dashboard · SaaS', year: '2024', tag: 'Web' },
    { id: 3, name: 'La Trattoria', category: 'Restaurante · Web', year: '2024', tag: 'Web' },
    { id: 4, name: 'Frames Studio', category: 'Portfolio · Fotógrafo', year: '2023', tag: 'Branding' },
    { id: 5, name: 'MoveIt App', category: 'Identidad · Branding', year: '2024', tag: 'Branding' },
    { id: 6, name: 'Pulsar Tech', category: 'Startup · Web corporativa', year: '2024', tag: 'Web' },
  ],
  contact: {
    email: 'hola@creaar.es',
    phone: '+34 654 321 000',
    address: 'Barcelona, España · 100% Remote',
  },
  socials: {
    instagram: 'https://www.instagram.com/creaar.es',
    linkedin: 'https://www.linkedin.com/company/creaar',
    tiktok: 'https://www.tiktok.com/@creaar.es',
    facebook: 'https://www.facebook.com/creaar.es',
  },
}

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem('creaarData')
      if (stored) {
        const p = JSON.parse(stored)
        return {
          hero: { ...DEFAULT_DATA.hero, ...p.hero },
          services: p.services || DEFAULT_DATA.services,
          portfolio: p.portfolio || DEFAULT_DATA.portfolio,
          contact: { ...DEFAULT_DATA.contact, ...p.contact },
          socials: { ...DEFAULT_DATA.socials, ...p.socials },
        }
      }
    } catch { /* use defaults */ }
    return DEFAULT_DATA
  })

  const updateSection = (section, value) => {
    setData((prev) => {
      const next = { ...prev, [section]: value }
      localStorage.setItem('creaarData', JSON.stringify(next))
      return next
    })
  }

  const resetData = () => {
    localStorage.removeItem('creaarData')
    setData(DEFAULT_DATA)
  }

  return (
    <DataContext.Provider value={{ data, updateSection, resetData }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within DataProvider')
  return ctx
}
