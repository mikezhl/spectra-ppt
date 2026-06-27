import { motion } from 'framer-motion'
import { FileText, Brain, Database, Users, BarChart3, MessageCircle, RefreshCw } from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const loopNodes = [
  {
    icon: FileText,
    title: '日常输入',
    desc: '电子作业、扫描试卷、每月教案',
    className: 'left-1/2 top-0 -translate-x-1/2',
  },
  {
    icon: Brain,
    title: 'AI 结构化',
    desc: '得分、知识点、错因、课程进度',
    className: 'right-0 top-[78px]',
  },
  {
    icon: Users,
    title: '家长端 Agent',
    desc: '学情反馈、补强建议、升学建议',
    className: 'right-0 bottom-[66px]',
  },
  {
    icon: MessageCircle,
    title: '互动与训练',
    desc: '家长提问、定制题、训练结果',
    className: 'left-1/2 bottom-0 -translate-x-1/2',
  },
  {
    icon: BarChart3,
    title: '管理层 Agent',
    desc: '质量、风险、进度、家校服务',
    className: 'left-0 bottom-[66px]',
  },
  {
    icon: RefreshCw,
    title: '运营回流',
    desc: '问题热点、干预记录、教学调整',
    className: 'left-0 top-[78px]',
  },
]

function LoopNode({ item, index }) {
  return (
    <motion.div
      {...fade(0.24 + index * 0.08)}
      className={`absolute w-[254px] bg-card border border-card-border rounded-2xl p-4 flex flex-col ${item.className}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-xl bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 text-ms-blue" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
      </div>
      <p className="text-gray-500 text-[0.95rem] leading-relaxed">{item.desc}</p>
    </motion.div>
  )
}

export default function SlideDataLoop() {
  return (
    <div className="w-full h-full flex flex-col px-20 py-10 relative overflow-hidden">
      <motion.p {...fade(0.05)} className="text-ms-blue text-lg font-medium uppercase mb-1 relative z-10">
        Data Loop
      </motion.p>

      <motion.h2 {...fade(0.15)} className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10">
        数据闭环
      </motion.h2>

      <motion.p {...fade(0.2)} className="text-gray-400 text-lg max-w-5xl mb-4 relative z-10">
        让日常教学动作自动沉淀为三端 Agent 的数据底座；除了老师每月上传教学方案，不需要额外维护一套复杂系统。
      </motion.p>

      <motion.div {...fade(0.25)} className="relative z-10 flex-1 min-h-0">
        <div className="relative mx-auto h-[430px] w-full max-w-[1060px]">
          <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 1060 430" aria-hidden="true">
            <defs>
              <marker id="loop-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.44)" />
              </marker>
            </defs>
            <path d="M 630 62 C 735 68 826 98 902 154" stroke="rgba(255,255,255,0.26)" strokeWidth="1.2" fill="none" markerEnd="url(#loop-arrow)" />
            <path d="M 948 183 C 990 230 988 260 948 305" stroke="rgba(255,255,255,0.26)" strokeWidth="1.2" fill="none" markerEnd="url(#loop-arrow)" />
            <path d="M 882 352 C 782 402 660 407 596 382" stroke="rgba(255,255,255,0.26)" strokeWidth="1.2" fill="none" markerEnd="url(#loop-arrow)" />
            <path d="M 464 382 C 352 408 248 388 178 352" stroke="rgba(255,255,255,0.26)" strokeWidth="1.2" fill="none" markerEnd="url(#loop-arrow)" />
            <path d="M 112 304 C 72 260 72 218 112 174" stroke="rgba(255,255,255,0.26)" strokeWidth="1.2" fill="none" markerEnd="url(#loop-arrow)" />
            <path d="M 158 154 C 236 92 342 66 430 62" stroke="rgba(255,255,255,0.26)" strokeWidth="1.2" fill="none" markerEnd="url(#loop-arrow)" />
            <ellipse cx="530" cy="218" rx="270" ry="142" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
          </svg>

          <motion.div
            {...fade(0.34)}
            className="absolute left-1/2 top-1/2 flex h-[150px] w-[290px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-card-border bg-card px-8 text-center"
          >
            <Database className="mb-3 h-8 w-8 text-ms-blue" />
            <h3 className="text-2xl font-semibold text-gray-900">Academic Database</h3>
            <p className="mt-2 text-gray-500 text-[0.92rem] leading-relaxed">
              一次采集，多端复用，数据随每一届学生持续增厚
            </p>
          </motion.div>

          {loopNodes.map((item, index) => (
            <LoopNode key={item.title} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
