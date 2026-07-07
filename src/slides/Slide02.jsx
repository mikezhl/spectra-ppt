import { SlideCard, SlideCardTitle, SlideEmphasis, SlideLead, SlideNumber, SlideShell, SlideTitle } from './shared'

const painPoints = [
  {
    no: '01',
    lead: '老师',
    text: '批改吞掉大量时间；作业与考试表现只存在脑子里，成绩与表现靠手动录入，重复又耗时。',
  },
  {
    no: '02',
    lead: '学生',
    text: '进度与学情人人不同，刷的却是同一套题——薄弱点从未被针对性地补上。',
  },
  {
    no: '03',
    lead: '家长',
    text: '孩子在校表现无法及时获知，信息密度低；升学路径只能依赖中介，没有数据支撑。',
  },
  {
    no: '04',
    lead: '管理层',
    text: '教学质量与学生成绩无法实时掌握，决策依赖经验与直觉，缺乏证据。',
  },
]

export default function Slide02() {
  return (
    <SlideShell>
      <SlideTitle>
        <span className="block slide-title-muted">当各行各业都在被 AI 重塑，</span>
        <span className="block">教学最核心的环节，仍停留在手工与经验。</span>
      </SlideTitle>

      <SlideLead delay={0.3} className="mb-10">
        作业表现、学情变化——<SlideEmphasis>最重要的教学数据，从未被系统记录</SlideEmphasis>。老师、家长与管理层，都在凭记忆和直觉做判断。
      </SlideLead>

      <div className="slide-grid slide-grid--two slide-pain-grid">
        {painPoints.map((item, i) => (
          <SlideCard key={item.lead} delay={0.42 + i * 0.08} className="slide-pain-card">
            <SlideNumber className="mb-3">{item.no}</SlideNumber>
            <SlideCardTitle>{item.lead}</SlideCardTitle>
            <p className="slide-copy-large">{item.text}</p>
          </SlideCard>
        ))}
      </div>
    </SlideShell>
  )
}
