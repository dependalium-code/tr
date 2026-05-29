import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook: staggered scroll reveal para elementos hijos
 * @param {object} options - from, duration, ease, start, stagger, selector, once
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      from = { y: 60, opacity: 0 },
      duration = 0.85,
      ease = 'power3.out',
      start = 'top 85%',
      stagger = 0,
      selector = null,
      once = true,
    } = options

    const targets = selector ? el.querySelectorAll(selector) : [el]

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        ...from,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          once,
          toggleActions: once ? undefined : 'play none none reverse',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * Hook: reveal de un elemento individual al hacer scroll
 */
export function useRevealOnScroll(from = { y: 50, opacity: 0 }, options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...from,
        duration: options.duration || 0.8,
        ease: options.ease || 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: options.start || 'top 88%',
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return ref
}
