import { fade, motion, SlideEmphasis, SlideLead, SlideShell, SlideTitle } from './shared'

const nodes = [
  {
    no: '01',
    title: '日常输入',
    desc: '电子作业 · 扫描试卷 · 每月教案',
  },
  {
    no: '02',
    title: 'AI 结构化',
    desc: '得分 · 知识点 · 错因 · 课程进度',
  },
  {
    no: '03',
    title: '家长端 Agent',
    desc: '学情反馈 · 补强建议 · 升学建议',
  },
  {
    no: '04',
    title: '互动与训练',
    desc: '家长提问 · 定制题 · 训练结果',
  },
  {
    no: '05',
    title: '管理层 Agent',
    desc: '质量 · 风险 · 进度 · 家校服务',
  },
  {
    no: '06',
    title: '运营回流',
    desc: '问题热点 · 干预记录 · 教学调整',
  },
]

const topNodes = nodes.slice(0, 3)
const bottomNodes = [nodes[5], nodes[4], nodes[3]]

function LoopNode({ node, delay }) {
  return (
    <motion.article {...fade(delay)} className="loop-node">
      <span className="loop-node-index">{node.no}</span>
      <h3 className="loop-node-title">{node.title}</h3>
      <p className="loop-node-copy">{node.desc}</p>
    </motion.article>
  )
}

export default function SlideDataLoop() {
  return (
    <SlideShell>
      <SlideTitle>数据闭环</SlideTitle>

      <SlideLead>
        日常教学动作<SlideEmphasis>自动沉淀为三端 Agent 的数据底座</SlideEmphasis>——除了每月上传教学方案，无需维护额外系统。
      </SlideLead>

      <motion.div {...fade(0.35)} className="loop-board max-md:hidden">
        <div className="loop-grid">
          <LoopNode node={topNodes[0]} delay={0.4} />
          <div className="loop-arrow loop-arrow--right" aria-hidden="true" />
          <LoopNode node={topNodes[1]} delay={0.47} />
          <div className="loop-arrow loop-arrow--right" aria-hidden="true" />
          <LoopNode node={topNodes[2]} delay={0.54} />

          <div className="loop-arrow loop-arrow--up" aria-hidden="true" />
          <motion.div {...fade(0.55)} className="loop-core">
            <p className="loop-core-title">学校数据底座</p>
            <p className="loop-core-copy">一次采集 · 多端复用 · 随每届学生持续增厚</p>
          </motion.div>
          <div className="loop-arrow loop-arrow--down" aria-hidden="true" />

          <LoopNode node={bottomNodes[0]} delay={0.89} />
          <div className="loop-arrow loop-arrow--left" aria-hidden="true" />
          <LoopNode node={bottomNodes[1]} delay={0.8} />
          <div className="loop-arrow loop-arrow--left" aria-hidden="true" />
          <LoopNode node={bottomNodes[2]} delay={0.71} />
        </div>
      </motion.div>

      {/* 移动端降级：纵向列表，保证完整可读 */}
      <div className="md:hidden relative z-10">
        <div className="mb-6 pb-5 border-b border-card-border">
          <p className="loop-core-title">学校数据底座</p>
          <p className="loop-core-copy">一次采集 · 多端复用 · 随每届学生增厚</p>
        </div>
        <div className="space-y-4">
          {nodes.map((node) => (
            <div key={node.no} className="flex items-start gap-3">
              <span className="loop-node-index loop-node-index--inline">{node.no}</span>
              <div>
                <div className="slide-node-title">{node.title}</div>
                <div className="slide-node-copy">{node.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  )
}
