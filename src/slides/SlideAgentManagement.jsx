import { motion } from 'framer-motion'
import { BarChart3, CalendarCheck, Bell, Users, MessageCircle } from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const modules = [
  {
    icon: BarChart3,
    title: '教学质量',
    points: ['成绩提升 / 下滑', 'topic 掌握度', '班级与年级对比'],
  },
  {
    icon: CalendarCheck,
    title: '课程进度',
    points: ['term plan vs 实际覆盖', '进度落后预警', 'mock 前覆盖风险'],
  },
  {
    icon: Bell,
    title: '学生风险',
    points: ['成绩掉档', '长期薄弱知识点', '申请目标不匹配'],
  },
  {
    icon: Users,
    title: '教师工作与支持',
    points: ['批改量与报告', '学生提升情况', '及时反馈与教学支持'],
  },
  {
    icon: MessageCircle,
    title: '家校服务',
    points: ['高频提问家长', '反复出现问题', '沟通压力班级'],
  },
]

const questions = [
  '这个年级本月最需要关注的学科是什么？',
  '哪些班级 mock 前存在掉档风险？',
  '哪些 topic 全年级掌握最差？',
  '哪些班级家校沟通压力最大？',
]

export default function SlideAgentManagement() {
  return (
    <div className="w-full h-full flex flex-col px-20 py-12 relative overflow-hidden">
      <motion.p {...fade(0.05)} className="text-ms-blue text-lg font-medium uppercase mb-2 relative z-10">
        Management Agent
      </motion.p>

      <motion.h2 {...fade(0.15)} className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10">
        管理层 Agent
      </motion.h2>

      <motion.p {...fade(0.2)} className="text-gray-400 text-lg max-w-5xl mb-7 relative z-10">
        把教学数据转化成学校级运营视图，让管理层提前发现教学质量、学生风险、课程进度和家校服务中的问题。
      </motion.p>

      <div className="grid grid-cols-5 gap-3 flex-1 relative z-10 min-h-0">
        {modules.map((module, index) => (
          <motion.div
            key={module.title}
            {...fade(0.28 + index * 0.06)}
            className="bg-card border border-card-border rounded-2xl p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center">
                <module.icon className="w-5 h-5 text-ms-blue" />
              </div>
              <span className="text-gray-300 font-mono text-xs">0{index + 1}</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{module.title}</h3>
            <div className="space-y-3">
              {module.points.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-ms-blue mt-2 shrink-0" />
                  <p className="text-gray-500 text-[0.98rem] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade(0.62)} className="mt-5 grid grid-cols-[0.8fr_1.2fr] gap-4 relative z-10">
        <div className="bg-card border border-card-border rounded-xl px-5 py-4">
          <p className="text-gray-300 text-xs uppercase font-mono mb-2">Principle</p>
          <p className="text-gray-500 text-[1rem] leading-relaxed">
            管理层不看每一道题或每一条聊天，而是看学校哪里有效、哪里有风险、哪里需要介入。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {questions.map((q) => (
            <div key={q} className="bg-ms-blue/[0.03] border border-ms-blue/10 rounded-lg px-3 py-2">
              <p className="text-gray-500 text-[0.9rem] leading-relaxed">&ldquo;{q}&rdquo;</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
