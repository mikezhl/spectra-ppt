import { motion } from 'framer-motion'
import { Clock, Heart, EyeOff } from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const painPoints = [
  {
    icon: Clock,
    title: '老师',
    items: [
      '理科作业、测验批改占用大量重复时间',
      '错题、知识点、班级薄弱项需要手动统计',
      '写反馈、整理学情、生成评语长期依赖人工',
    ],
  },
  {
    icon: Heart,
    title: '家长',
    items: [
      '不知道孩子具体卡在哪些知识点',
      '课后训练千人一面，无法贴合个人薄弱项',
      '学情反馈不连续，沟通常常滞后',
    ],
  },
  {
    icon: EyeOff,
    title: '管理层',
    items: [
      '教学数据散落在作业、Excel、沟通记录和老师经验中',
      '很难实时判断全校教学质量和学生风险',
      '老师工作量、学生支持、家校服务缺乏统一证据',
    ],
  },
]

export default function Slide02() {
  return (
    <div className="w-full h-full flex flex-col px-20 py-14 relative overflow-hidden">
      <motion.p
        {...fade(0.05)}
        className="text-ms-blue text-lg font-medium tracking-widest uppercase mb-2 relative z-10"
      >
        Pain Points
      </motion.p>

      <motion.h2
        {...fade(0.15)}
        className="text-6xl font-bold text-gray-900 mb-10 relative z-10"
      >
        三端痛点
      </motion.h2>

      <div className="flex-1 grid grid-cols-3 gap-5 relative z-10">
        {painPoints.map((group, gi) => (
          <motion.div
            key={group.title}
            {...fade(0.25 + gi * 0.1)}
            className="bg-card border border-card-border rounded-2xl p-7 flex flex-col"
          >
            <div className="w-11 h-11 rounded-xl bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center mb-4">
              <group.icon className="w-5.5 h-5.5 text-ms-blue" />
            </div>

            <h3 className="text-3xl font-semibold text-gray-900 mb-5">{group.title}</h3>

            <div className="space-y-4 flex-1">
              {group.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-ms-blue mt-2.5 shrink-0" />
                  <p className="text-gray-600 text-[1.15rem] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
