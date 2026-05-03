import { SlideCanvas } from "./SlideShared.jsx";

const tiers = [
  ["~ 100 亿", "TAM · 中国 K12 教育信息化市场"],
  ["~ 10 亿", "SAM · 1,000 所国际 / 高端学校 × 100 万 / 校 / 年"],
  ["~ 5 亿", "SOM · 2 年内目标 50% 市场份额"],
];

const askLines = [
  ["出让股权", "5%"],
  ["投后估值", "~ 4,000 万"],
  ["资金用途", "产品研发 · 学校拓展 · 团队扩充"],
  ["2 年目标", "细分市场 No.1"],
];

export function Slide11MarketAsk(props) {
  return (
    <SlideCanvas
      {...props}
      title="市场规模与融资需求"
      subtitle="AI 教育正从工具走向基础设施，市场快速增长。"
      className="slide-dense"
    >
      <div className="slide-market-ask-only">
        <section className="slide-market-panel">
          <h3 className="slide-body">市场规模</h3>
          {tiers.map(([value, label]) => (
            <div className="slide-market-tier" key={label}>
              <strong className="slide-body">{value}</strong>
              <span className="slide-caption">{label}</span>
            </div>
          ))}
        </section>
        <section className="slide-ask-panel">
          <div>
            <strong className="slide-ask-value">200 万</strong>
            <span className="slide-caption">人民币 · Angel Round</span>
          </div>
          {askLines.map(([key, value]) => (
            <p className="slide-caption" key={key}>
              <span>{key}</span>
              <strong>{value}</strong>
            </p>
          ))}
        </section>
      </div>
    </SlideCanvas>
  );
}
