import { motion } from 'framer-motion'
import {
  Globe, DollarSign, PieChart, TrendingUp, Rocket,
} from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

export default function Slide11() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slide-bg to-slide-bg-light flex flex-col px-20 py-12 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-ms-blue/[0.05] rounded-full blur-[120px]" />

      <motion.p
        {...fade(0.05)}
        className="text-ms-blue text-lg font-medium tracking-widest uppercase mb-2 relative z-10"
      >
        Market & Funding
      </motion.p>

      <motion.h2
        {...fade(0.15)}
        className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10"
      >
        市场规模与融资需求
      </motion.h2>

      <motion.p
        {...fade(0.2)}
        className="text-gray-400 text-xl mb-7 relative z-10"
      >
        AI 教育正从工具走向基础设施，市场快速增长
      </motion.p>

      <div className="flex-1 grid grid-cols-2 gap-5 relative z-10">
        {/* Left: Market Size */}
        <motion.div
          {...fade(0.25)}
          className="bg-card border border-card-border rounded-2xl px-7 py-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-5">
            <Globe className="w-5 h-5 text-ms-blue" />
            <h3 className="text-2xl font-semibold text-gray-900">市场规模</h3>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            {/* TAM */}
            <div className="pb-4 border-b border-gray-100">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm font-bold tracking-wider text-gray-400">TAM</span>
                <span className="text-gray-400 text-sm">潜在市场总量</span>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-1">~100 亿</p>
              <p className="text-gray-500 text-[1rem]">中国 K12 教育信息化市场（含公立 + 民办 + 国际学校）</p>
            </div>

            {/* SAM */}
            <div className="py-4 border-b border-gray-100">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm font-bold tracking-wider text-ms-blue/60">SAM</span>
                <span className="text-gray-400 text-sm">可服务市场</span>
              </div>
              <p className="text-4xl font-bold text-ms-blue/70 mb-1">~10 亿</p>
              <p className="text-gray-500 text-[1rem]">约 1,000 所国际/高端民办学校 &times; 100 万/校/年</p>
            </div>

            {/* SOM */}
            <div className="pt-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm font-bold tracking-wider text-ms-blue">SOM</span>
                <span className="text-gray-400 text-sm">可获得市场</span>
              </div>
              <p className="text-4xl font-bold text-ms-blue mb-1">~5 亿</p>
              <p className="text-gray-500 text-[1rem]">2 年内目标：占据 50% 国际学校市场份额</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Funding */}
        <motion.div
          {...fade(0.35)}
          className="bg-card border border-card-border rounded-2xl px-7 py-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-5">
            <DollarSign className="w-5 h-5 text-ms-blue" />
            <h3 className="text-2xl font-semibold text-gray-900">融资需求</h3>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-baseline gap-2 mb-1">
              <p className="text-5xl font-bold text-gray-900">500 万</p>
              <p className="text-gray-400 text-xl">人民币</p>
            </div>
            <div className="flex items-baseline gap-2 mb-8">
              <p className="text-gray-500 text-xl">出让</p>
              <p className="text-3xl font-bold text-ms-blue">10%</p>
              <p className="text-gray-500 text-xl">股权</p>
            </div>

            <div className="space-y-5 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center shrink-0">
                  <PieChart className="w-5 h-5 text-ms-blue/60" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-[1.15rem]">投后估值 ~5,000 万</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-ms-blue/60" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-[1.15rem]">资金用途</p>
                  <p className="text-gray-400 text-[0.95rem]">产品研发、学校拓展、团队扩充</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-ms-blue/[0.06] border border-ms-blue/10 flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5 text-ms-blue/60" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-[1.15rem]">目标</p>
                  <p className="text-gray-400 text-[0.95rem]">2 年内成为细分市场第一</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
