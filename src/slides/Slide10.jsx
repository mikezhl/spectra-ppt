import { fade, motion, SlideShell, SlideTitle } from './shared'

const allocations = [
  {
    pct: '40%',
    label: '产品与 Agent 研发',
    desc: '三端 Agent 与批改、学情引擎的校本化打磨，多 Agent 运行时与学校数据底座建设。',
  },
  {
    pct: '25%',
    label: '校园部署与运营',
    desc: '协和暑期营 6 月全流程部署，驻校支持，四类核心数据从第一天起持续沉淀。',
  },
  {
    pct: '20%',
    label: '团队扩充',
    desc: 'Agent 工程与教研运营关键岗位补强，保障两所学校同时交付的工程带宽。',
  },
  {
    pct: '15%',
    label: '市场与学校拓展',
    desc: '以协和为可验证标杆打磨案例，签约第二所合作学校，切入决策链短的国际学校。',
  },
]

const kpis = [
  {
    value: '1 所标杆校',
    desc: '协和暑期营三端 Agent 全流程落地',
  },
  {
    value: '4 类数据资产',
    desc: '作业 · 考试 · 交互 · 升学持续入库',
  },
  {
    value: '2 所付费学校',
    desc: '2026 年底前完成第二所签约',
  },
  {
    value: '50%+ 份额',
    desc: '2 年内国际学校智能教务市场目标',
  },
]

export default function Slide10() {
  return (
    <SlideShell className="slide-shell--deploy">
      <motion.p {...fade(0.1)} className="slide-kicker">
        融资规划 — 战略资金配置（¥200 万 · 出让 5%）
      </motion.p>

      <SlideTitle delay={0.18}>6 个月部署与 KPI</SlideTitle>

      <div className="alloc-grid">
        {allocations.map((a, i) => (
          <motion.article
            key={a.label}
            {...fade(0.35 + i * 0.08)}
            className="slide-card alloc-card"
          >
            <div className="alloc-head">
              <span className="alloc-pct">{a.pct}</span>
              <h3 className="alloc-label">{a.label}</h3>
            </div>
            <p className="slide-copy">{a.desc}</p>
          </motion.article>
        ))}
      </div>

      <motion.div {...fade(0.7)} className="kpi-strip">
        <p className="slide-kicker kpi-strip-kicker">6 个月 KPI</p>
        <div className="kpi-grid">
          {kpis.map((k) => (
            <div key={k.value}>
              <p className="kpi-value">{k.value}</p>
              <p className="kpi-desc">{k.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </SlideShell>
  )
}
