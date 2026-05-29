import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DataProvider } from './context/DataContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'

gsap.registerPlugin(ScrollTrigger)

function useHashRoute() {
  const [path, setPath] = useState(() => window.location.hash.slice(1) || '/')
  useEffect(() => {
    const handler = () => setPath(window.location.hash.slice(1) || '/')
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])
  return path
}

function MainSite() {
  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const path = useHashRoute()
  const isAdmin = path.startsWith('/admin')
  const isAuthed = sessionStorage.getItem('creaar_admin') === 'true'

  return (
    <DataProvider>
      {isAdmin ? (
        isAuthed && path !== '/admin/login' ? (
          <AdminDashboard />
        ) : (
          <AdminLogin />
        )
      ) : (
        <MainSite />
      )}
    </DataProvider>
  )
}
