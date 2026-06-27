import { motion } from 'framer-motion'
import {
  Building2, School, Users, CreditCard,
  Handshake, ArrowRight, Lock,
} from 'lucide-react'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

export default function Slide08() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slide-bg to-slide-bg-light flex flex-col px-20 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-ms-blue/[0.05] rounded-full blur-[120px]" />

      <motion.p
        {...fade(0.05)}
        className="text-ms-blue text-lg font-medium tracking-widest uppercase mb-2 relative z-10"
      >
        Business Model
      </motion.p>

      <motion.h2
        {...fade(0.15)}
        className="text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10"
      >
        合作与商业模式
      </motion.h2>

      <motion.p
        {...fade(0.2)}
        className="text-gray-400 text-xl mb-7 relative z-10"
      >
        2B 模式，面向学校收费
      </motion.p>

      <div className="flex-1 grid grid-cols-2 gap-5 relative z-10">
        {/* Left: Business Model */}
        <div className="flex flex-col gap-4">
          {/* Target Market */}
          <motion.div
            {...fade(0.25)}
            className="bg-card border border-card-border rounded-2xl px-7 py-5 flex-1"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center">
                <School className="w-5 h-5 text-ms-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">目标市场</h3>
            </div>

            <div className="space-y-3">
              <motion.div
                {...fade(0.3)}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-ms-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-ms-blue text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="text-gray-800 text-[1.1rem] font-medium">先切国际学校</p>
                  <p className="text-gray-400 text-[1rem] mt-0.5">付费意愿强、决策链短、对新技术接受度高</p>
                </div>
              </motion.div>

              <motion.div
                {...fade(0.38)}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-ms-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-ms-blue text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="text-gray-800 text-[1.1rem] font-medium">后扩民办 / 公立重点</p>
                  <p className="text-gray-400 text-[1rem] mt-0.5">核心逻辑相同，适配不同评估体系即可</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Revenue Model */}
          <motion.div
            {...fade(0.35)}
            className="bg-card border border-card-border rounded-2xl px-7 py-5 flex-1"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-ms-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">收费模式</h3>
            </div>

            <div className="space-y-3">
              <motion.div
                {...fade(0.4)}
                className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
              >
                <p className="text-gray-800 text-[1.1rem] font-medium mb-1">学校订阅制</p>
                <p className="text-gray-400 text-[1rem]">SaaS 年费模式，按学校规模阶梯定价</p>
              </motion.div>

              <motion.div
                {...fade(0.48)}
                className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
              >
                <p className="text-gray-800 text-[1.1rem] font-medium mb-1">混合模式（后期）</p>
                <p className="text-gray-400 text-[1rem]">家长可订阅增值服务（如详细学情分析），年费制，与学校收费形成双轨收入</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right: Partnership & Moat */}
        <div className="flex flex-col gap-4">
          {/* Partnership */}
          <motion.div
            {...fade(0.3)}
            className="bg-card border border-card-border rounded-2xl px-7 py-5 flex-1"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center">
                <Handshake className="w-5 h-5 text-ms-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">合作伙伴</h3>
            </div>

            <div className="space-y-3">
              <motion.p
                {...fade(0.35)}
                className="text-gray-600 text-[1rem] leading-relaxed"
              >
                目前正在与<span className="text-ms-blue font-semibold">上海一所国际高中</span>深度合作，一起设计这个系统，作为 Design Partner 共同打磨产品。
              </motion.p>

              <motion.div
                {...fade(0.42)}
                className="flex items-center gap-2 text-[1rem]"
              >
                <span className="text-gray-500 text-[1rem]">Design Partner</span>
                <ArrowRight className="w-4 h-4 text-ms-blue/40" />
                <span className="text-gray-500 text-[1rem]">集团所有高中</span>
                <ArrowRight className="w-4 h-4 text-ms-blue/40" />
                <span className="text-ms-blue font-medium text-[1rem]">横向拓展</span>
              </motion.div>

              <motion.p
                {...fade(0.48)}
                className="text-gray-400 text-[1rem] leading-relaxed"
              >
                以合作学校的成功案例为背书，逐步向更多国际学校和教育集团拓展
              </motion.p>
            </div>
          </motion.div>

          {/* Moat */}
          <motion.div
            {...fade(0.4)}
            className="bg-card border border-card-border rounded-2xl px-7 py-5 flex-1"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ms-blue/[0.08] border border-ms-blue/15 flex items-center justify-center">
                <Lock className="w-5 h-5 text-ms-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">切换成本壁垒</h3>
            </div>

            <div className="space-y-2.5">
              {[
                { label: '数据沉淀', desc: '运行越久，学生数据越厚，迁移成本越高' },
                { label: '行为习惯', desc: '老师和家长形成使用习惯，重新培训成本极高' },
                { label: '信任关系', desc: '学校把学生数据交给你，需要审批、法务、家长同意，换供应商需全部重走' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fade(0.48 + i * 0.06)}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5"
                >
                  <span className="text-ms-blue font-semibold text-[1rem] shrink-0 mt-0.5">{item.label}</span>
                  <p className="text-gray-400 text-[1rem] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
