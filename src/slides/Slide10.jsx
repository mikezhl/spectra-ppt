import { motion } from 'framer-motion'
import { Flag } from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const milestones = [
  {
    time: '2026.05 — 06',
    title: '产品打磨',
    desc: '与协和深度合作，共同完善核心功能',
    active: true,
  },
  {
    time: '2026.06 中旬',
    title: '首次线下部署',
    desc: '在协和暑期营地中投入使用，家长和老师首次体验产品',
    active: true,
  },
  {
    time: '2026 年底',
    title: '2 所学校合作',
    desc: '以协和为标杆案例，拓展第二所合作学校',
    active: false,
  },
  {
    time: '2027',
    title: '规模化扩张',
    desc: '向更多国际学校和教育集团横向拓展',
    active: false,
  },
  {
    time: '2 年内',
    title: '50%+ 市场份额',
    desc: '占据国际学校智能教务管理市场的主导地位',
    active: false,
  },
]

export default function Slide10() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slide-bg to-slide-bg-light flex flex-col px-20 py-12 relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-ms-blue/[0.06] rounded-full blur-[120px]" />

      <motion.p
        {...fade(0.05)}
        className="text-ms-blue text-lg font-medium tracking-widest uppercase mb-2 relative z-10"
      >
        Milestones
      </motion.p>

      <motion.h2
        {...fade(0.15)}
        className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10"
      >
        里程碑
      </motion.h2>

      <motion.p
        {...fade(0.2)}
        className="text-gray-400 text-xl mb-8 relative z-10"
      >
        从 Design Partner 到市场第一
      </motion.p>

      <div className="flex-1 relative z-10">
        <motion.div
          {...fade(0.25)}
          className="bg-card border border-card-border rounded-2xl px-10 py-8 h-full flex flex-col"
        >
          <div className="flex items-center gap-2 mb-6">
            <Flag className="w-5 h-5 text-ms-blue" />
            <h3 className="text-2xl font-semibold text-gray-900">发展路径</h3>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                {...fade(0.3 + i * 0.08)}
                className="flex items-start gap-5"
              >
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center pt-1.5">
                  <div className={`w-4 h-4 rounded-full shrink-0 ${
                    m.active ? 'bg-ms-blue' : 'bg-gray-300'
                  }`} />
                  {i < milestones.length - 1 && (
                    <div className={`w-0.5 flex-1 mt-1.5 ${
                      m.active ? 'bg-ms-blue/30' : 'bg-gray-200'
                    }`} />
                  )}
                </div>

                <div className="pb-4 flex-1">
                  <div className="flex items-baseline gap-4">
                    <span className={`text-[1rem] font-mono font-semibold ${
                      m.active ? 'text-ms-blue' : 'text-gray-400'
                    }`}>
                      {m.time}
                    </span>
                    <h4 className="text-[1.4rem] font-semibold text-gray-900">{m.title}</h4>
                  </div>
                  <p className="text-gray-500 text-[1.15rem] mt-1">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
