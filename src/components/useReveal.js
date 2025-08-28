// src/components/useReveal.js
import { useEffect, useRef } from 'react'

export function useReveal(options = { threshold: 0.1 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('reveal-in')
        obs.disconnect()
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}