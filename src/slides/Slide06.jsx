import { motion } from 'framer-motion'
import {
  Users, GraduationCap, BookOpen, MessageCircle, BarChart3,
  CalendarCheck, FileEdit, Shield, Mic, Bell,
  PenTool, FolderHeart, Sparkles,
} from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const parentFeatures = [
  { icon: BookOpen, text: '根据知识点掌握情况生成定制练习题' },
  { icon: BarChart3, text: '看到孩子成绩、作业与薄弱点变化' },
  { icon: CalendarCheck, text: '及时收到阶段性学情反馈' },
  { icon: Shield, text: '严格数据隔离，只能看到自己孩子' },
]

const parentQueries = [
  '孩子最近数学怎么样？',
  '这学期有什么需要关注的？',
]

const teacherFeatures = [
  { icon: FileEdit, text: '理科作业与测验自动批改，减少重复劳动' },
  { icon: BarChart3, text: '自动统计错题、完成率与知识点薄弱项' },
  { icon: Users, text: '快速看到班级和单个学生的学情变化' },
  { icon: Mic, text: '把课堂反馈、评语、报告生成工作压缩到几分钟' },
  { icon: Bell, text: '异常学生和高频薄弱点主动提示' },
]

const teacherQueries = [
  '小明最近整体情况怎么样？',
  '帮我生成小红这学期的评语',
]

const studentFeatures = [
  { icon: BarChart3, text: '全校教学质量、班级表现、知识点掌握情况一屏可见' },
  { icon: Bell, text: '识别学业风险、家校压力与长期未闭环事项' },
  { icon: Users, text: '看见教师工作量、教学成果与学生支持贡献' },
  { icon: Shield, text: '把分散在作业、反馈、问答里的数据沉淀成管理资产' },
]

const studentQueries = [
  '这个年级本周最需要关注什么？',
  '哪些班级的知识点掌握出现异常？',
]

export default function Slide06() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slide-bg to-slide-bg-light flex flex-col px-20 py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ms-blue/[0.06] rounded-full blur-[120px]" />

      <motion.p
        {...fade(0.05)}
        className="text-ms-blue text-lg font-medium tracking-widest uppercase mb-2 relative z-10"
      >
        Solution — Agent Layer
      </motion.p>

      <motion.h2
        {...fade(0.15)}
        className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10"
      >
        三端共同沉淀学校数据
      </motion.h2>

      <motion.p
        {...fade(0.2)}
        className="text-gray-400 text-xl mb-6 relative z-10"
      >
        家长获得个性化学习支持，老师减少重复劳动，管理层看见学校真实运行情况
      </motion.p>

      {/* Three columns */}
      <div className="flex-1 grid grid-cols-3 gap-4 relative z-10">
        {/* Parent Agent */}
        <motion.div
          {...fade(0.25)}
          className="bg-card border border-card-border rounded-2xl px-5 py-5 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center">
              <Users className="w-5 h-5 text-ms-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">家长端</h3>
              <p className="text-gray-400 text-[0.95rem] mt-0.5">个性化训练 + 学情反馈</p>
            </div>
          </div>

          <div className="space-y-2.5 flex-1">
            {parentFeatures.map((item, i) => (
              <motion.div
                key={i}
                {...fade(0.3 + i * 0.06)}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-md bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-ms-blue/60" />
                </div>
                <p className="text-gray-500 text-[1.05rem]">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fade(0.55)}
            className="mt-3 pt-3 border-t border-gray-100"
          >
            <p className="text-gray-300 text-xs uppercase tracking-wider mb-2">示例提问</p>
            <div className="flex flex-col gap-1.5">
              {parentQueries.map((q, i) => (
                <div key={i} className="px-2.5 py-1.5 rounded-lg bg-ms-blue/[0.03] border border-ms-blue/8">
                  <p className="text-gray-500 text-[0.95rem]">&ldquo;{q}&rdquo;</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Teacher Agent */}
        <motion.div
          {...fade(0.3)}
          className="bg-card border border-card-border rounded-2xl px-5 py-5 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-ms-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">老师端</h3>
              <p className="text-gray-400 text-[0.95rem] mt-0.5">自动批改 + 学情整理</p>
            </div>
          </div>

          <div className="space-y-2.5 flex-1">
            {teacherFeatures.map((item, i) => (
              <motion.div
                key={i}
                {...fade(0.35 + i * 0.06)}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-md bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-ms-blue/60" />
                </div>
                <p className="text-gray-500 text-[1.05rem]">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fade(0.6)}
            className="mt-3 pt-3 border-t border-gray-100"
          >
            <p className="text-gray-300 text-xs uppercase tracking-wider mb-2">示例提问</p>
            <div className="flex flex-col gap-1.5">
              {teacherQueries.map((q, i) => (
                <div key={i} className="px-2.5 py-1.5 rounded-lg bg-ms-blue/[0.03] border border-ms-blue/8">
                  <p className="text-gray-500 text-[0.95rem]">&ldquo;{q}&rdquo;</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Management View */}
        <motion.div
          {...fade(0.35)}
          className="bg-card border border-card-border rounded-2xl px-5 py-5 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-ms-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">管理层端</h3>
              <p className="text-gray-400 text-[0.95rem] mt-0.5">教学质量 + 学校运营驾驶舱</p>
            </div>
          </div>

          <div className="space-y-2.5 flex-1">
            {studentFeatures.map((item, i) => (
              <motion.div
                key={i}
                {...fade(0.4 + i * 0.06)}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-md bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-ms-blue/60" />
                </div>
                <p className="text-gray-500 text-[1.05rem]">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fade(0.65)}
            className="mt-3 pt-3 border-t border-gray-100"
          >
            <p className="text-gray-300 text-xs uppercase tracking-wider mb-2">示例提问</p>
            <div className="flex flex-col gap-1.5">
              {studentQueries.map((q, i) => (
                <div key={i} className="px-2.5 py-1.5 rounded-lg bg-ms-blue/[0.03] border border-ms-blue/8">
                  <p className="text-gray-500 text-[0.95rem]">&ldquo;{q}&rdquo;</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
