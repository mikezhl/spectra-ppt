import { motion } from 'framer-motion'
import { BookOpen, FileText, CalendarCheck, PenTool, MessageCircle, GraduationCap } from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const assets = [
  {
    icon: BookOpen,
    title: '作业数据',
    points: ['电子作业', '每道题得分', '知识点与错因', '订正情况'],
  },
  {
    icon: FileText,
    title: '考试数据',
    points: ['扫描试卷', 'mock / 月考', '成绩趋势', '预测分风险'],
  },
  {
    icon: CalendarCheck,
    title: '教案与课程数据',
    points: ['每月教学方案', 'term plan', 'topic 覆盖', '考试节点'],
  },
  {
    icon: PenTool,
    title: '学生笔记与过程',
    points: ['错题整理', '训练完成情况', '订正质量', '长期知识点画像'],
  },
  {
    icon: MessageCircle,
    title: '家校互动数据',
    points: ['提问频率', '高频关注问题', '转人工记录', '沟通压力'],
  },
  {
    icon: GraduationCap,
    title: '往届升学数据',
    points: ['历史成绩', '申请专业', 'offer 与录取', '当前学生对比'],
  },
]

export default function SlideAcademicDatabase() {
  return (
    <div className="w-full h-full flex flex-col px-20 py-12 relative overflow-hidden">
      <motion.p {...fade(0.05)} className="text-ms-blue text-lg font-medium uppercase mb-2 relative z-10">
        Academic Database
      </motion.p>

      <motion.h2 {...fade(0.15)} className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10">
        学校专属数据库
      </motion.h2>

      <motion.p {...fade(0.2)} className="text-gray-400 text-lg max-w-5xl mb-6 relative z-10">
        让学校拥有自己的专属数据资产，把作业、考试、教案、笔记、家校互动和升学结果持续沉淀下来。
      </motion.p>

      <div className="grid grid-cols-3 gap-4 flex-1 relative z-10 min-h-0">
        {assets.map((asset, index) => (
          <motion.div
            key={asset.title}
            {...fade(0.28 + index * 0.05)}
            className="bg-card border border-card-border rounded-2xl px-5 py-4 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center">
                  <asset.icon className="w-5 h-5 text-ms-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{asset.title}</h3>
              </div>
              <span className="text-gray-300 font-mono text-xs">0{index + 1}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-auto">
              {asset.points.map((point) => (
                <div key={point} className="bg-ms-blue/[0.03] border border-ms-blue/10 rounded-lg px-3 py-2">
                  <p className="text-gray-500 text-[0.9rem] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade(0.65)} className="mt-5 flex items-center gap-4 relative z-10">
        <div className="h-px flex-1 bg-gray-100" />
        <p className="text-gray-400 text-sm font-mono uppercase">
          The database compounds with every cohort
        </p>
        <div className="h-px flex-1 bg-gray-100" />
      </motion.div>
    </div>
  )
}
