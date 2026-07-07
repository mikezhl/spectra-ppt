import { useCallback, useEffect, useState } from 'react'
import { slides } from './slides'

export default function App() {
  const [active, setActive] = useState(0)

  const goTo = useCallback((target) => {
    const next = Math.max(0, Math.min(slides.length - 1, target))
    document.getElementById(`slide-${next + 1}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        goTo(active + 1)
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(active - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, goTo])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActive(Number(visible.target.getAttribute('data-slide-index')))
        }
      },
      { threshold: [0.55, 0.75] },
    )

    document.querySelectorAll('[data-slide-index]').forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main className="deck">
      <div className="deck-progress-bar" aria-hidden="true">
        <span style={{ width: `${((active + 1) / slides.length) * 100}%` }} />
      </div>

      {slides.map((Slide, index) => (
        <section
          key={index}
          id={`slide-${index + 1}`}
          className="deck-section"
          data-slide-index={index}
        >
          <div className="deck-frame">
            <Slide />
          </div>
        </section>
      ))}

      <div className="deck-ui">
        <div className="deck-counter" aria-label={`第 ${active + 1} 页，共 ${slides.length} 页`}>
          <span>{String(active + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>

        <nav className="deck-pagination" aria-label="页面导航">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`跳转到第 ${index + 1} 页`}
              className={active === index ? 'is-active' : ''}
            >
              <span />
            </button>
          ))}
        </nav>
      </div>
    </main>
  )
}
