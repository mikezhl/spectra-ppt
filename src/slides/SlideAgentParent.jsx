import { motion } from 'framer-motion'
import { TrendingUp, Target, GraduationCap, MessageCircle, Shield } from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const sections = [
  {
    icon: TrendingUp,
    title: '孩子现在怎么样？',
    points: ['当前学术水平', '成绩趋势', '是否存在下滑风险', '与目标成绩的差距'],
  },
  {
    icon: Target,
    title: '接下来怎么补？',
    points: ['主要薄弱知识点', '针对性训练题', '是否需要额外课程支持', '本周 / 本月学习建议'],
  },
  {
    icon: GraduationCap,
    title: '和大学申请有什么关系？',
    points: ['当前成绩与目标专业匹配度', '预测分风险', '历史申请数据对比', '专业方向和升学路径建议'],
  },
]

const questions = [
  '我孩子最近数学水平怎么样？',
  '接下来两周应该重点练什么？',
  '这个成绩会不会影响申请目标大学？',
  '和往年同类专业申请者相比，他处于什么位置？',
]

export default function SlideAgentParent() {
  return (
    <div className="w-full h-full flex flex-col px-20 py-10 relative overflow-hidden">
      <motion.p {...fade(0.05)} className="text-ms-blue text-lg font-medium uppercase mb-1 relative z-10">
        Parent Agent
      </motion.p>

      <motion.h2 {...fade(0.15)} className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10">
        家长端 Agent
      </motion.h2>

      <motion.p {...fade(0.2)} className="text-gray-400 text-lg max-w-5xl mb-5 relative z-10">
        把学情数据转化成家长能理解的判断和建议，定期反馈孩子当前水平、主要弱点、补强方向和升学风险。
      </motion.p>

      <div className="grid grid-cols-3 gap-4 relative z-10">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            {...fade(0.28 + index * 0.08)}
            className="bg-card border border-card-border rounded-2xl p-5 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center mb-4">
              <section.icon className="w-5 h-5 text-ms-blue" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{section.title}</h3>
            <div className="space-y-2">
              {section.points.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ms-blue mt-2 shrink-0" />
                  <p className="text-gray-500 text-[0.98rem] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade(0.58)} className="mt-4 grid grid-cols-[0.82fr_1.18fr] gap-4 relative z-10">
        <div className="bg-card border border-card-border rounded-xl px-4 py-3 flex items-center gap-3">
          <Shield className="w-5 h-5 text-ms-blue shrink-0" />
          <p className="text-gray-500 text-[0.94rem] leading-relaxed">
            平时给摘要，风险时提醒，主动问时再解释细节。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {questions.map((q) => (
            <div key={q} className="bg-ms-blue/[0.03] border border-ms-blue/10 rounded-lg px-3 py-2 flex items-start gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-ms-blue mt-1 shrink-0" />
              <p className="text-gray-500 text-[0.82rem] leading-snug">&ldquo;{q}&rdquo;</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
