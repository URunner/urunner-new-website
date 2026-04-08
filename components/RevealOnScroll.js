'use client'
import { useEffect, useRef } from 'react'

export default function RevealOnScroll({ children, className = '', delay = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal${delay ? ` reveal-d${delay}` : ''} ${className}`}>
      {children}
    </div>
  )
}
