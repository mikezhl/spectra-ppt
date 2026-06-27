import { motion } from 'framer-motion'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: 'easeOut' },
})

export default function Slide01() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden px-16 text-center">
      <motion.p
        {...fade(0.05)}
        className="text-gray-400 text-sm font-mono uppercase mb-7"
      >
        SPECTRA · SMART CAMPUS OS
      </motion.p>

      <motion.h1
        {...fade(0.15)}
        className="text-[7rem] font-bold text-gray-900 tracking-tight leading-none mb-7"
      >
        Spectra
      </motion.h1>

      <motion.p
        {...fade(0.3)}
        className="text-3xl text-gray-400 max-w-4xl leading-relaxed"
      >
        面向家长、老师与管理层的 AI 教学运营系统
      </motion.p>

      <motion.p
        {...fade(0.45)}
        className="text-gray-400 text-sm font-mono uppercase mt-12"
      >
        International Schools · AI Native Infrastructure
      </motion.p>
    </div>
  )
}
