import { SlideCard, SlideCardTitle, SlideShell, SlideTitle } from './shared'

const stages = [
  {
    title: 'Design Partner · 暑期营',
    sections: [
      {
        head: '真实场景运行',
        body: (
          <>
            <span className="text-accent">已确认 </span>
            2026.06 中旬在协和暑期营投入使用，老师、家长与管理层首次全流程使用三端 Agent。
          </>
        ),
      },
      {
        head: '四类核心数据同步沉淀',
        body: '作业数据 · 考试数据 · 三端与 Agent 的交互数据 · 升学数据——从第一天起进入学校专属数据库。',
      },
    ],
  },
  {
    title: '数据强化 Agent',
    sections: [
      {
        head: '校本化打磨',
        body: '批改、错因标签与学情报告在本校真实作业上持续校准——不是通用模板，而是越用越准。',
      },
      {
        head: '一次采集，三端受益',
        body: '同一份数据同时强化老师、家长、管理层三端 Agent 的判断质量。',
      },
      {
        head: '飞轮效应',
        body: '越准 → 越信任 → 交互越多 → 数据越厚 → 越准。',
      },
    ],
  },
  {
    title: '2B 规模化合作',
    sections: [
      {
        head: '付费楔形：标杆案例',
        body: '以协和为可验证的标杆，切入付费意愿强、决策链短的国际学校，再扩展民办与公立重点。',
      },
      {
        head: '定价模式',
        body: 'SaaS 年费，按学校规模阶梯定价；后期家长可订阅增值服务，形成双轨收入。',
      },
      {
        head: '当前信号',
        body: (
          <>
            <span className="text-accent">Design Partner 已就位</span>
            ，暑期营 6 月部署；2026 年底目标第二所合作学校。
          </>
        ),
      },
    ],
  },
]

export default function Slide08() {
  return (
    <SlideShell>
      <SlideTitle>暑期营数据 → Agent 能力 → 2B 收入</SlideTitle>

      <div className="slide-grid slide-grid--three mt-10">
        {stages.map((stage, i) => (
          <SlideCard
            key={stage.title}
            delay={0.3 + i * 0.1}
            className="slide-card--large"
          >
            <SlideCardTitle loose>{stage.title}</SlideCardTitle>

            <div className="space-y-5">
              {stage.sections.map((s) => (
                <div key={s.head}>
                  <p className="slide-copy-heading mb-1.5">{s.head}</p>
                  <p className="slide-copy">{s.body}</p>
                </div>
              ))}
            </div>
          </SlideCard>
        ))}
      </div>
    </SlideShell>
  )
}
