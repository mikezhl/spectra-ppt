import {
  SlideCard,
  SlideCardTitle,
  SlideEmphasis,
  SlideFooter,
  SlideFooterText,
  SlideLead,
  SlideNumber,
  SlideShell,
  SlideTitle,
} from './shared'

const cards = [
  {
    no: '01',
    chip: 'Upload',
    title: '上传作业 / 扫描试卷',
    desc: '电子作业与纸质考试都可以进入系统，老师不需要改变现有的教学习惯。',
  },
  {
    no: '02',
    chip: 'AI + Review',
    title: '自动批改，仅需确认',
    desc: 'AI 批改并标记不确定项，老师只检查异常，批改时间压缩到几分钟。',
  },
  {
    no: '03',
    chip: 'Generated',
    title: '学情自动生成',
    desc: '每道题得分、错题定位、知识点掌握度，自动汇成学生与班级报告。',
  },
  {
    no: '04',
    chip: 'Adaptive',
    title: '个性化训练',
    desc: '针对薄弱知识点自动生成训练题，学情数据同步给家长与管理层。',
  },
]

export default function SlideAgentTeacher() {
  return (
    <SlideShell>
      <SlideTitle>老师端 Agent</SlideTitle>

      <SlideLead>
        把批改工作转化成<SlideEmphasis>可行动的学情分析</SlideEmphasis>——老师只需要上传作业或试卷，并确认 AI 不确定的结果。
      </SlideLead>

      <div className="slide-grid slide-grid--two">
        {cards.map((card, i) => (
          <SlideCard
            key={card.no}
            delay={0.35 + i * 0.08}
            className="slide-card--large"
          >
            <SlideNumber className="mb-4">{card.no}</SlideNumber>
            <SlideCardTitle>{card.title}</SlideCardTitle>
            <p className="slide-copy-large">{card.desc}</p>
          </SlideCard>
        ))}
      </div>

      <SlideFooter>
        <SlideFooterText>每一份批改过的作业，都沉淀为可复用的结构化学情数据。</SlideFooterText>
      </SlideFooter>
    </SlideShell>
  )
}
