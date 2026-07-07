import { fade, motion, SlideEmphasis, SlideLead, SlideShell, SlideTitle } from './shared'

const milestones = [
  {
    time: '2026.05 — 06',
    title: '产品打磨',
    desc: '与协和深度合作，共同完善核心功能',
    active: true,
  },
  {
    time: '2026.06 中旬',
    title: '首次线下部署',
    desc: '在协和暑期营地投入使用，家长和老师首次体验产品',
    active: true,
  },
  {
    time: '2026 年底',
    title: '2 所学校合作',
    desc: '以协和为标杆，拓展第二所合作学校',
    active: false,
  },
  {
    time: '2027',
    title: '规模化扩张',
    desc: '向更多国际学校和教育集团横向拓展',
    active: false,
  },
  {
    time: '2 年内',
    title: '50%+ 市场份额',
    desc: '占据国际学校智能教务市场主导地位',
    active: false,
  },
]

export default function Slide10() {
  return (
    <SlideShell>
      <SlideTitle>里程碑</SlideTitle>

      <SlideLead>
        从<SlideEmphasis>Design Partner</SlideEmphasis>到市场第一——每一步都以真实学校的落地为节点。
      </SlideLead>

      <div className="milestone-track">
        <div className="milestone-line" />

        <div className="milestone-grid">
          {milestones.map((m, i) => (
            <motion.div key={i} {...fade(0.35 + i * 0.09)} className="milestone-item">
              <div
                className={`milestone-dot ${m.active ? 'is-active' : ''}`}
                aria-hidden="true"
              />
              <p className={`milestone-time ${m.active ? 'is-active' : ''}`}>
                {m.time}
              </p>
              <h3 className={`milestone-title ${m.active ? 'is-active' : ''}`}>{m.title}</h3>
              <p className="slide-copy">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  )
}
