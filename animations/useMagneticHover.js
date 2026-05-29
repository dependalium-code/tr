import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Hook: efecto magnético en hover — el elemento sigue ligeramente al cursor
 * @param {number} strength - intensidad del efecto (0.2 = sutil, 0.5 = fuerte)
 */
export function useMagneticHover(strength = 0.25) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = (e.clientX - centerX) * strength
      const dy = (e.clientY - centerY) * strength

      gsap.to(el, {
        x: dx,
        y: dy,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)',
      })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}
