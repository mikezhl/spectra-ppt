import { motion } from 'framer-motion'

export { motion }

export function fade(delay = 0, duration = 0.6) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: 'easeOut' },
  }
}

function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function SlideShell({ children, className = '' }) {
  return <div className={joinClasses('slide-shell', className)}>{children}</div>
}

export function SlideTitle({ children, delay = 0.15, className = '' }) {
  return (
    <motion.h2 {...fade(delay)} className={joinClasses('slide-title', className)}>
      {children}
    </motion.h2>
  )
}

export function SlideLead({ children, delay = 0.25, className = '' }) {
  return (
    <motion.p {...fade(delay)} className={joinClasses('slide-lead', className)}>
      {children}
    </motion.p>
  )
}

export function SlideCard({ children, delay, className = '' }) {
  return (
    <motion.article {...fade(delay)} className={joinClasses('slide-card', className)}>
      {children}
    </motion.article>
  )
}

export function SlideCardTitle({ children, loose = false, className = '' }) {
  return (
    <h3 className={joinClasses('slide-card-title', loose && 'slide-card-title--loose', className)}>
      {children}
    </h3>
  )
}

export function SlideEmphasis({ children }) {
  return <span className="slide-emphasis">{children}</span>
}

export function SlideFooter({ children, delay = 0.7, className = '' }) {
  return (
    <motion.footer {...fade(delay)} className={joinClasses('slide-footer', className)}>
      {children}
    </motion.footer>
  )
}

export function SlideNumber({ children, className = '' }) {
  return <div className={joinClasses('slide-number', className)}>{children}</div>
}

export function SlideFooterText({ children }) {
  return <p className="slide-footer-text">{children}</p>
}

export function SlideBadge({ children, accent = false }) {
  return (
    <span className={joinClasses('slide-badge', accent && 'is-accent')}>
      {children}
    </span>
  )
}

export function SlideColumn({ no, title, children, delay, className = '' }) {
  return (
    <motion.article {...fade(delay)} className={joinClasses('slide-column', className)}>
      <SlideNumber className="mb-3">{no}</SlideNumber>
      <SlideCardTitle className="slide-card-title--column">{title}</SlideCardTitle>
      <div className="slide-column-body">{children}</div>
    </motion.article>
  )
}
