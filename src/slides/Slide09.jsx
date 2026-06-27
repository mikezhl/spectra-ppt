import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code, Handshake } from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const reasons = [
  {
    icon: Briefcase,
    title: '极强的行业经验',
    desc: '创始人从高中毕业后开始运营 B2B 培训机构，深耕教育行业多年，深刻理解学校、老师和家长的真实需求与痛点',
  },
  {
    icon: Handshake,
    title: 'Design Partner 已就位',
    desc: '已与一所知名高中达成 Design Partner 合作，共同打磨产品；同时有其他学校对产品表达了强烈兴趣',
  },
  {
    icon: GraduationCap,
    title: '牛津团队，高速迭代',
    desc: '团队成员均为牛津大学本硕博，具备强技术能力，能够快速迭代、持续交付',
  },
  {
    icon: Code,
    title: 'Agent 开发实战经验',
    desc: '核心技术人员具备极强的开发能力，独立开发过 Agent 产品，能快速将构想落地为可用系统',
  },
]

export default function Slide09() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slide-bg to-slide-bg-light flex flex-col px-20 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-ms-blue/[0.05] rounded-full blur-[120px]" />

      <motion.p
        {...fade(0.05)}
        className="text-ms-blue text-lg font-medium tracking-widest uppercase mb-2 relative z-10"
      >
        Why Us
      </motion.p>

      <motion.h2
        {...fade(0.15)}
        className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10"
      >
        为什么是我们来做？
      </motion.h2>

      <motion.p
        {...fade(0.2)}
        className="text-gray-400 text-xl mb-8 relative z-10"
      >
        行业经验 + 客户信任 + 技术能力
      </motion.p>

      <div className="flex-1 grid grid-cols-2 gap-5 relative z-10">
        {reasons.map((item, i) => (
          <motion.div
            key={item.title}
            {...fade(0.25 + i * 0.1)}
            className="bg-card border border-card-border rounded-2xl px-7 py-6 flex flex-col"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-ms-blue" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">{item.title}</h3>
            </div>

            <p className="text-gray-500 text-[1.35rem] leading-relaxed flex-1">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
