import { VerticalSection } from "./VerticalShared.jsx";

const founders = [
  {
    initial: "李",
    name: "李翼",
    role: "CEO / 创始人",
    items: [
      "牛津大学本硕",
      "18 岁创立首家教育机构，与上海及苏州近 10 所国际学校深度合作",
      "4 年国际教育行业经验，深入理解学校、老师与家长的真实需求",
      "曾任 A2A 初创公司 COO，入选硅谷 Founders Inc. 孵化器",
    ],
  },
  {
    initial: "朱",
    name: "朱浩朗",
    role: "CTO / 联合创始人",
    items: [
      "牛津大学本硕博",
      "10 年开发经验，全栈工程师",
      "OpenClaw Hackathon 获奖者",
      "独立开发智能师生匹配系统",
    ],
  },
];

const reasons = [
  ["行业经验", "CEO 4 年深耕国际教育，已有近 10 所学校合作基础"],
  ["客户信任", "Design Partner 已就位，不是冷启动"],
  ["技术能力", "CTO 10 年全栈 + Agent 实战经验，能快速将构想落地"],
  ["校招能力", "牛津校友网络，可快速组建核心团队"],
];

export function Vertical10Team(props) {
  return (
    <VerticalSection {...props} title="为什么是我们：教育行业老兵 + 顶尖技术团队">
      <div className="v-team">
        {founders.map(({ initial, name, role, items }) => (
          <article key={name}>
            <div className="v-team-head">
              <div className="v-team-avatar vertical-body-text">{initial}</div>
              <div>
                <h3 className="vertical-body-text v-team-name">{name}</h3>
                <p className="vertical-caption v-team-role">{role}</p>
              </div>
            </div>
            <ul className="v-list">
              {items.map((item) => (
                <li key={item} className="vertical-caption">
                  <span>· {item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="v-team-why">
        <h3 className="vertical-body-text">为什么是我们来做？</h3>
        <div className="v-grid-four" style={{ borderTop: 0, borderLeft: 0 }}>
          {reasons.map(([title, text]) => (
            <div
              key={title}
              style={{
                padding: "20px 24px",
                borderRight: "1px solid var(--line)",
                background: "var(--white)",
              }}
            >
              <p className="vertical-caption" style={{ color: "var(--blue)", fontWeight: 780, margin: 0 }}>
                {title}
              </p>
              <p className="vertical-caption" style={{ color: "var(--muted)", margin: "8px 0 0" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </VerticalSection>
  );
}
