import { VerticalSection } from "./VerticalShared.jsx";

const milestones = [
  ["2026.05 — 06", "产品打磨", "与协和深度合作，共同完善核心功能", false],
  ["2026.06 中旬", "首次线下部署", "在协和暑期营地中投入使用", false],
  ["2026 年底", "2 所学校合作", "以协和为标杆，拓展第二所学校", true],
  ["2027", "规模化扩张", "向更多国际学校和教育集团横向拓展", true],
  ["2028", "30%+ 市场份额", "占据国际学校智能教务管理市场领先地位", true],
];

export function Vertical12Vision(props) {
  return (
    <VerticalSection {...props} title="里程碑与愿景：从 Design Partner 到市场第一">
      <div className="v-vision-grid">
        <ul className="v-timeline">
          {milestones.map(([time, title, desc, future]) => (
            <li key={title} className={future ? "is-future" : ""}>
              <span className="v-t-time vertical-caption">{time}</span>
              <span className="v-t-title vertical-body-text">{title}</span>
              <span className="v-t-desc vertical-caption">{desc}</span>
            </li>
          ))}
        </ul>
        <div className="v-vision-card">
          <h3 className="vertical-body-text">五年愿景</h3>
          <p className="vertical-caption">
            Spectra 将覆盖 <span className="v-highlight">30%+</span> 国际学校市场，
            成为 AI 时代学校的标配基础设施。
          </p>
          <p className="vertical-caption">
            从入学到毕业，每个学生都有完整的成长画像；
          </p>
          <p className="vertical-caption">
            从单校到集团，教育决策从经验驱动变为数据驱动。
          </p>
        </div>
      </div>
    </VerticalSection>
  );
}
