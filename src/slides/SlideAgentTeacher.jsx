import { motion } from 'framer-motion'
import { Upload, FileText, CircleCheck, BarChart3, BookOpen, ArrowRight } from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const workflow = [
  { icon: Upload, title: '上传作业 / 扫描试卷', desc: '电子作业与纸质考试都可以进入系统' },
  { icon: CircleCheck, title: '确认不确定批改', desc: '老师只检查 AI 标记的少量异常结果' },
  { icon: BarChart3, title: '查看学情与训练', desc: '自动获得学生报告、班级报告和定制练习' },
]

const outputs = [
  '每道题得分与错题定位',
  '知识点掌握度与错因标签',
  '学生个人报告与班级报告',
  '针对薄弱知识点生成训练题',
  '同步给家长和管理层的结构化学情数据',
]

const questions = [
  '这个班本周最薄弱的知识点是什么？',
  '哪些学生在 mock 前有掉档风险？',
  '帮我生成 10 道 Mechanics 针对练习。',
]

export default function SlideAgentTeacher() {
  return (
    <div className="w-full h-full flex flex-col px-20 py-12 relative overflow-hidden">
      <motion.p {...fade(0.05)} className="text-ms-blue text-lg font-medium uppercase mb-2 relative z-10">
        Teacher Agent
      </motion.p>

      <motion.h2 {...fade(0.15)} className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10">
        老师端 Agent
      </motion.h2>

      <motion.p {...fade(0.2)} className="text-gray-400 text-lg max-w-5xl mb-7 relative z-10">
        把批改工作转化成可行动的学情分析，老师只需要上传作业或试卷，并确认 AI 不确定的结果。
      </motion.p>

      <div className="grid grid-cols-[0.95fr_1.05fr] gap-5 flex-1 relative z-10 min-h-0">
        <motion.div {...fade(0.28)} className="bg-card border border-card-border rounded-2xl p-6 flex flex-col">
          <p className="text-gray-300 text-xs uppercase font-mono mb-5">Teacher Workflow</p>
          <div className="flex-1 flex flex-col justify-between gap-4">
            {workflow.map((item, index) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-ms-blue" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-300 font-mono text-sm">0{index + 1}</span>
                    <h3 className="text-gray-900 text-2xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-500 text-[1.1rem] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade(0.35)} className="bg-card border border-card-border rounded-2xl p-6 flex flex-col">
          <p className="text-gray-300 text-xs uppercase font-mono mb-5">Agent Output</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {outputs.map((item, index) => (
              <div key={item} className="bg-ms-blue/[0.03] border border-ms-blue/10 rounded-xl px-4 py-3 flex gap-3 items-start">
                <FileText className="w-4 h-4 text-ms-blue mt-1 shrink-0" />
                <p className="text-gray-500 text-[1rem] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto border-t border-gray-100 pt-4">
            <p className="text-gray-300 text-xs uppercase font-mono mb-3">Agent Questions</p>
            <div className="grid grid-cols-3 gap-2">
              {questions.map((q) => (
                <div key={q} className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-100">
                  <p className="text-gray-500 text-[0.9rem] leading-relaxed">&ldquo;{q}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div {...fade(0.58)} className="mt-4 flex items-center gap-3 relative z-10">
        <div className="h-px flex-1 bg-gray-100" />
        <div className="flex items-center gap-2 text-gray-400 text-sm font-mono uppercase">
          <BookOpen className="w-4 h-4" />
          <span>Every marked paper becomes structured academic data</span>
          <ArrowRight className="w-4 h-4" />
        </div>
        <div className="h-px flex-1 bg-gray-100" />
      </motion.div>
    </div>
  )
}
