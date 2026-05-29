import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook: efecto parallax en scroll
 * @param {number} speed - velocidad relativa (0 = fijo, 1 = sigue scroll, -0.3 = sube más lento)
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el.parentElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    })

    return () => ctx.revert()
  }, [speed])

  return ref
}
