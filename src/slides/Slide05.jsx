import { motion } from 'framer-motion'
import { Mic, FileText, Award, Layers, ArrowRight } from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const dataTypes = [
  {
    icon: Mic,
    title: '课堂表现',
    tag: '语音录入',
    desc: '任课老师上课后点击按钮，语音或文字快速录入课堂评价',
    details: [
      '语音自动转文字，识别涉及的学生',
      '行为、情绪、参与度自动分类标签',
    ],
    example: '"小明今天回答了两个问题，挺积极的。小红下午好像不太开心。"',
  },
  {
    icon: FileText,
    title: '课后作业',
    tag: '批改 + 个性化出题',
    desc: '上传电子版作业，系统自动批改并分析',
    details: [
      '自动统计提交情况与完成率',
      '错题识别，自动生成错题本',
      '按知识点分析薄弱项',
      '根据掌握程度，自动生成个性化练习题',
    ],
    example: null,
  },
  {
    icon: Award,
    title: '考试成绩',
    tag: '智能识别',
    desc: '智能识别分数与错题，全自动生成分析',
    details: [
      '每道题对/错人数统计',
      '个人报告 + 班级横向对比',
      '知识点掌握度热力分析',
    ],
    example: null,
  },
  {
    icon: Layers,
    title: '碎片化信息',
    tag: '轻量录入',
    desc: '晚自习、体育活动、社团参与等日常信息',
    details: [
      '简单语言录入，30 秒完成',
      '自动关联到学生档案',
      '丰富学生画像维度',
    ],
    example: null,
  },
]

export default function Slide05() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slide-bg to-slide-bg-light flex flex-col px-20 py-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-ms-blue/[0.05] rounded-full blur-[120px]" />

      <motion.p
        {...fade(0.05)}
        className="text-ms-blue text-lg font-medium tracking-widest uppercase mb-2 relative z-10"
      >
        Solution — Data Layer
      </motion.p>

      <motion.h2
        {...fade(0.15)}
        className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10"
      >
        构建更完善的数据库
      </motion.h2>

      <motion.p
        {...fade(0.2)}
        className="text-gray-400 text-xl mb-7 relative z-10"
      >
        传统系统只录入成绩和出勤，我们覆盖全维度信息
      </motion.p>

      {/* 2×2 grid */}
      <div className="flex-1 grid grid-cols-2 gap-4 relative z-10">
        {dataTypes.map((item, i) => (
          <motion.div
            key={item.title}
            {...fade(0.25 + i * 0.08)}
            className="bg-card border border-card-border rounded-2xl px-6 py-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-ms-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              </div>
              <span className="text-sm text-ms-blue/70 bg-ms-blue/[0.06] px-2.5 py-0.5 rounded-full font-medium">
                {item.tag}
              </span>
            </div>

            <p className="text-gray-500 text-[1.2rem] leading-relaxed mb-3">{item.desc}</p>

            <div className="space-y-1.5 flex-1">
              {item.details.map((d, di) => (
                <div key={di} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-ms-blue/50 mt-2 shrink-0" />
                  <p className="text-gray-400 text-[1.1rem] leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            {item.example && (
              <div className="mt-3 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100">
                <p className="text-gray-400 text-[1.05rem] italic">{item.example}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom flow */}
      <motion.div
        {...fade(0.6)}
        className="mt-4 flex items-center justify-center gap-3 relative z-10"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-ms-blue/15" />
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-ms-blue/[0.04] border border-ms-blue/10 text-lg">
          <span className="text-gray-400">录入</span>
          <ArrowRight className="w-3.5 h-3.5 text-ms-blue/40" />
          <span className="text-ms-blue font-medium">LLM 识别学生</span>
          <ArrowRight className="w-3.5 h-3.5 text-ms-blue/40" />
          <span className="text-gray-400">归档至个人档案</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-ms-blue/15" />
      </motion.div>
    </div>
  )
}
