import { fade, motion, SlideFooter, SlideFooterText, SlideLead, SlideShell, SlideTitle } from './shared'

const founders = [
  {
    name: '李毅',
    latin: 'Yi Li',
    role: '联合创始人 · CEO',
    bio: '牛津大学材料科学 MEng。B2B 教育从零到一的创业者，高中毕业起运营培训机构并做到 15 万美元利润；深谙学校、老师与家长的真实需求，负责商业化与学校合作。',
  },
  {
    name: 'Haolang Zhu',
    latin: 'Haolang Zhu',
    role: '联合创始人 · CTO',
    bio: '牛津大学工程系机器人方向本硕博。独立开发并上线过多款 AI Agent 产品，具备扎实的全栈与 Agent 工程能力，负责 Spectra 的系统架构与产品实现，能把构想快速落成可用系统。',
  },
]

export default function Slide09() {
  return (
    <SlideShell>
      <SlideTitle>为把 AI 带进真实校园而组建的团队</SlideTitle>

      <SlideLead className="mb-12">
        一支同时懂<span className="slide-emphasis">教育行业</span>与
        <span className="slide-emphasis">Agent 技术</span>的创始团队——在
        B2B 教育里从零做到盈利，独立开发并上线过 Agent 产品，并已与上海知名国际高中达成
        Design Partner 合作。
      </SlideLead>

      <div className="relative z-10 max-w-6xl">
        <div className="grid grid-cols-2 gap-x-16">
          {founders.map((f, i) => (
            <motion.div key={f.latin} {...fade(0.4 + i * 0.1)}>
              <div className="flex items-baseline gap-3 mb-1.5">
                <h3 className="team-name">{f.name}</h3>
                {f.name !== f.latin && (
                  <span className="team-latin">{f.latin}</span>
                )}
              </div>
              <p className="slide-copy mb-4">{f.role}</p>
              <p className="slide-copy-large">{f.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideFooter delay={0.65} className="mt-12">
        <SlideFooterText>行业经验 × 客户信任 × 技术能力——很少有团队同时具备这三样。</SlideFooterText>
      </SlideFooter>
    </SlideShell>
  )
}
