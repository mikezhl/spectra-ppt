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

const assets = [
  {
    no: '01',
    title: '作业数据',
    desc: '电子作业 · 每道题得分 · 知识点与错因 · 订正情况',
  },
  {
    no: '02',
    title: '考试数据',
    desc: '扫描试卷 · mock / 月考 · 成绩趋势 · 预测分风险',
  },
  {
    no: '03',
    title: '教案与课程数据',
    desc: '每月教学方案 · term plan · topic 覆盖 · 考试节点',
  },
  {
    no: '04',
    title: '学生笔记与过程',
    desc: '错题整理 · 训练完成情况 · 订正质量 · 长期知识点画像',
  },
  {
    no: '05',
    title: '家校互动数据',
    desc: '提问频率 · 高频关注问题 · 转人工记录 · 沟通压力',
  },
  {
    no: '06',
    title: '往届升学数据',
    desc: '历史成绩 · 申请专业 · offer 与录取 · 当前学生对比',
  },
]

export default function SlideAcademicDatabase() {
  return (
    <SlideShell>
      <SlideTitle>学校专属数据库</SlideTitle>

      <SlideLead>
        作业、考试、教案、笔记、家校互动与升学结果——持续沉淀为<SlideEmphasis>学校自己的数据资产</SlideEmphasis>。
      </SlideLead>

      <div className="slide-grid slide-grid--three">
        {assets.map((asset, i) => (
          <SlideCard
            key={asset.no}
            delay={0.35 + i * 0.06}
          >
            <SlideNumber className="mb-3">{asset.no}</SlideNumber>
            <SlideCardTitle>{asset.title}</SlideCardTitle>
            <p className="slide-copy">{asset.desc}</p>
          </SlideCard>
        ))}
      </div>

      <SlideFooter delay={0.75}>
        <SlideFooterText>数据随每一届学生持续增厚——系统运行越久，越难被替代。</SlideFooterText>
      </SlideFooter>
    </SlideShell>
  )
}
