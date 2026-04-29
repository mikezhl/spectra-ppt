import { Banknote, ChartNoAxesColumnIncreasing } from "lucide-react";
import { BulletList, Panel, SlideHeader } from "./shared.jsx";

const market = [
  ["TAM", "~100亿", "中国 K12 教育信息化市场"],
  ["SAM", "~10亿", "1,000 所国际/高端民办学校 × 100万/校/年"],
  ["SOM", "~5亿", "2 年内目标占据 50% 国际学校市场份额"],
];

const financing = [
  "融资金额：200 万人民币",
  "出让股权：5%",
  "投后估值：约 4,000 万",
  "资金用途：产品研发、学校拓展、团队扩充",
  "目标：2 年内成为细分市场第一",
];

export function Section11MarketFinancials({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader
        index={index}
        total={total}
        title="市场规模与融资需求"
        subtitle="AI 教育正从工具走向基础设施，市场快速增长"
      />
      <div className="grid grid-cols-2 gap-7">
        <Panel delay={100}>
          <div className="mb-7 flex items-center gap-4">
            <div className="icon-box">
              <ChartNoAxesColumnIncreasing className="h-7 w-7" />
            </div>
            <h3 className="t-body font-semibold text-[var(--ink)]">市场规模</h3>
          </div>
          <div className="space-y-5">
            {market.map(([label, value, text], itemIndex) => (
              <div key={label} className="grid grid-cols-[120px_170px_1fr] items-center gap-4">
                <span className="t-body font-semibold text-[var(--microsoft-blue)]">
                  {label}
                </span>
                <span className="t-body font-semibold text-[var(--ink)]">{value}</span>
                <span className="t-caption muted">{text}</span>
                <div className="col-span-3 h-3 bg-[var(--microsoft-blue-soft)]">
                  <div
                    className="bar-fill h-3 bg-[var(--microsoft-blue)]"
                    style={{ width: `${100 - itemIndex * 26}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="panel-blue" delay={180}>
          <div className="mb-7 flex items-center gap-4">
            <div className="icon-box bg-white">
              <Banknote className="h-7 w-7" />
            </div>
            <h3 className="t-body font-semibold text-[var(--ink)]">融资需求</h3>
          </div>
          <BulletList items={financing} />
        </Panel>
      </div>
    </div>
  );
}
