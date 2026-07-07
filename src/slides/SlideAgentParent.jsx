import { SlideColumn, SlideEmphasis, SlideFooter, SlideFooterText, SlideLead, SlideShell, SlideTitle } from './shared'

const sections = [
  {
    no: '01',
    title: '孩子现在怎么样？',
    points: ['当前学术水平与成绩趋势', '是否存在下滑风险', '与目标成绩的差距'],
  },
  {
    no: '02',
    title: '接下来怎么补？',
    points: ['主要薄弱知识点', '针对性训练题', '本周 / 本月学习建议'],
  },
  {
    no: '03',
    title: '对升学意味着什么？',
    points: ['成绩与目标专业的匹配度', '历史申请数据对比', '专业方向与升学路径建议'],
  },
]

export default function SlideAgentParent() {
  return (
    <SlideShell>
      <SlideTitle>家长端 Agent</SlideTitle>

      <SlideLead>
        把学情数据翻译成<SlideEmphasis>家长能理解的判断与建议</SlideEmphasis>——不再隔着一道信息黑箱。
      </SlideLead>

      <div className="slide-grid slide-grid--three-loose">
        {sections.map((section, i) => (
          <SlideColumn key={section.no} no={section.no} title={section.title} delay={0.35 + i * 0.1}>
            <div className="space-y-2.5">
              {section.points.map((point) => (
                <p key={point} className="slide-copy-large">
                  {point}
                </p>
              ))}
            </div>
          </SlideColumn>
        ))}
      </div>

      <SlideFooter delay={0.68}>
        <SlideFooterText>
          平时给摘要，风险时主动提醒；家长随时可以问——「孩子最近数学怎么样？」「会不会影响申请目标大学？」
        </SlideFooterText>
      </SlideFooter>
    </SlideShell>
  )
}
