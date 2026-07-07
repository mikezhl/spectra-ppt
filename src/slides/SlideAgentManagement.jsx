import { SlideCard, SlideCardTitle, SlideEmphasis, SlideLead, SlideNumber, SlideShell, SlideTitle } from './shared'

const modules = [
  {
    no: '01',
    title: '教学质量',
    desc: '成绩提升与下滑 · topic 掌握度 · 班级与年级对比',
  },
  {
    no: '02',
    title: '课程进度',
    desc: 'term plan vs 实际覆盖 · 进度落后预警 · mock 前覆盖风险',
  },
  {
    no: '03',
    title: '学生风险',
    desc: '成绩掉档 · 长期薄弱知识点 · 申请目标不匹配',
  },
  {
    no: '04',
    title: '教师工作与支持',
    desc: '批改量与报告 · 学生提升情况 · 教学支持是否及时',
  },
  {
    no: '05',
    title: '学生心理预警',
    desc: '识别可能出现心理问题的学生 · 及时反馈家长与管理层',
  },
]

export default function SlideAgentManagement() {
  return (
    <SlideShell>
      <SlideTitle>管理层 Agent</SlideTitle>

      <SlideLead>
        把教学数据汇成<SlideEmphasis>学校级运营视图</SlideEmphasis>——哪里有效、哪里有风险、哪里需要介入，一目了然。
      </SlideLead>

      <div className="slide-grid slide-grid--three">
        {modules.map((module, i) => (
          <SlideCard
            key={module.no}
            delay={0.35 + i * 0.07}
          >
            <SlideNumber className="mb-3">{module.no}</SlideNumber>
            <SlideCardTitle>{module.title}</SlideCardTitle>
            <p className="slide-copy">{module.desc}</p>
          </SlideCard>
        ))}

        <SlideCard delay={0.7} className="slide-card--prompt">
          <p className="slide-label">示例提问</p>
          <div className="space-y-2">
            <p className="slide-copy">「这个年级本月最需要关注的学科是什么？」</p>
            <p className="slide-copy">「哪些班级 mock 前存在掉档风险？」</p>
            <p className="slide-copy">「哪些学生近期需要心理关注？」</p>
          </div>
        </SlideCard>
      </div>
    </SlideShell>
  )
}
