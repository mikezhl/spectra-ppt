import { VerticalSection } from "./VerticalShared.jsx";

const tiers = [
  ["~ 100 亿", "TAM · 中国 K12 教育信息化市场"],
  ["~ 10 亿", "SAM · 1,000 所国际 / 高端学校 × 100 万 / 校 / 年"],
  ["~ 5 亿", "SOM · 2 年内目标 50% 市场份额"],
];

const askLines = [
  ["融资金额", "200 万人民币"],
  ["出让股权", "5%"],
  ["投后估值", "~ 4,000 万"],
  ["资金用途", "产品研发 · 学校拓展 · 团队扩充"],
  ["2 年目标", "细分市场 No.1"],
];

export function Vertical11MarketAsk(props) {
  return (
    <VerticalSection {...props} title="市场规模与融资需求">
      <p className="vertical-caption" style={{ margin: "0 0 30px", color: "var(--muted)" }}>
        AI 教育正从工具走向基础设施，市场快速增长。
      </p>
      <div className="v-market-split">
        <div className="v-market-col">
          <h3 className="vertical-body-text">市场规模</h3>
          {tiers.map(([value, label]) => (
            <div className="v-market-tier" key={label}>
              <strong className="vertical-body-text">{value}</strong>
              <span className="vertical-caption">{label}</span>
            </div>
          ))}
        </div>
        <div className="v-market-col">
          <h3 className="vertical-body-text">融资需求</h3>
          <div className="v-ask">
            <p className="v-ask-big vertical-title">200 万</p>
            <p className="vertical-caption" style={{ opacity: 0.85, margin: 0 }}>
              人民币 · 出让 5% 股权
            </p>
            {askLines.map(([k, v]) => (
              <div className="v-ask-line vertical-caption" key={k}>
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VerticalSection>
  );
}
