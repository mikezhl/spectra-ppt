import { fade, motion, SlideShell } from './shared'

export default function Slide01() {
  return (
    <SlideShell className="slide-shell--cover">
      <motion.h1
        {...fade(0.05, 0.7)}
        className="slide-cover-title"
      >
        Spectra OS
      </motion.h1>

      <motion.p
        {...fade(0.2, 0.7)}
        className="slide-cover-subtitle"
      >
        面向家长、老师与管理层的 AI 教学运营系统
      </motion.p>

      <motion.p
        {...fade(0.35, 0.7)}
        className="slide-kicker slide-kicker--footer"
      >
        International Schools · AI Native Infrastructure
      </motion.p>
    </SlideShell>
  )
}
