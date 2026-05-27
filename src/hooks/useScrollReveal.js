import { useEffect, useRef } from 'react'


export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const root = ref.current || document
    const targets = root.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-scale')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}


export function useCounters() {
  useEffect(() => {
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.target, 10)
      const suffix = el.dataset.suffix || ''
      const duration = 1800
      const step = 16
      const increment = target / (duration / step)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        el.textContent = Math.floor(current).toLocaleString() + suffix
      }, step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    const counters = document.querySelectorAll('[data-target]')
    counters.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
