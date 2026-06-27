import { useCallback, useEffect, useState } from 'react'
import Slide01 from './slides/Slide01'
import Slide02 from './slides/Slide02'
import SlideAgentTeacher from './slides/SlideAgentTeacher'
import SlideAgentParent from './slides/SlideAgentParent'
import SlideAgentManagement from './slides/SlideAgentManagement'
import SlideAcademicDatabase from './slides/SlideAcademicDatabase'
import SlideDataLoop from './slides/SlideDataLoop'
import Slide08 from './slides/Slide08'
import Slide09 from './slides/Slide09'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'

const slides = [
  Slide01,
  Slide02,
  SlideAgentTeacher,
  SlideAgentParent,
  SlideAgentManagement,
  SlideAcademicDatabase,
  SlideDataLoop,
  Slide08,
  Slide09,
  Slide11,
  Slide10,
]

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
    <main className="vertical-deck">
      <div className="deck-progress-bar" aria-hidden="true">
        <span style={{ width: `${((active + 1) / slides.length) * 100}%` }} />
      </div>

      {slides.map((Slide, index) => (
        <section
          key={index}
          id={`slide-${index + 1}`}
          className="vertical-slide-section"
          data-slide-index={index}
        >
          <div className="vertical-slide-frame">
            <Slide />
            <div className="slide-counter absolute top-6 right-8 flex items-baseline gap-1 text-sm font-mono z-20">
              <span className="text-gray-900 font-semibold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-300">
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </section>
      ))}

      <nav className="vertical-progress" aria-label="页面导航">
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
    </main>
  )
}
