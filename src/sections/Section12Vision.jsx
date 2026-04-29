import { Flag, Milestone, Sparkles } from "lucide-react";
import { Panel, SlideHeader } from "./shared.jsx";

const milestones = [
  ["2026.05-06", "产品打磨", "与协和深度合作，完善核心功能"],
  ["2026.06 中旬", "首次线下部署", "在协和暑期营地中投入使用"],
  ["2026 年底", "2 所学校合作", "以协和为标杆，拓展第二所学校"],
  ["2027", "规模化扩张", "向更多国际学校和教育集团横向拓展"],
  ["2028", "30%+ 市场份额", "成为国际学校智能教务管理领先者"],
];

export function Section12Vision({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader
        index={index}
        total={total}
        title="里程碑与愿景"
        subtitle="从 Design Partner 到市场第一"
        tight
      />
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-7">
        <Panel delay={100}>
          <div className="mb-7 flex items-center gap-4">
            <div className="icon-box">
              <Milestone className="h-7 w-7" />
            </div>
            <h3 className="t-body font-semibold text-[var(--ink)]">发展路径</h3>
          </div>
          <div className="space-y-4">
            {milestones.map(([time, title, text], itemIndex) => (
              <div key={time} className="grid grid-cols-[170px_190px_1fr] gap-4 border-b border-[var(--line)] pb-4 last:border-b-0">
                <span className="t-caption deck-label font-semibold">{time}</span>
                <span className="t-caption font-semibold text-[var(--ink)]">{title}</span>
                <span className="t-caption muted">{text}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="panel-blue flex flex-col justify-between gap-10" delay={180}>
          <div>
            <div className="icon-box mb-7 bg-white">
              <Sparkles className="h-7 w-7" />
            </div>
            <h3 className="t-body mb-5 font-semibold text-[var(--ink)]">五年愿景</h3>
            <p className="t-body text-[var(--ink)]">
              Spectra 将覆盖 30% 以上的国际学校市场，成为 AI 时代学校的标配基础设施。
            </p>
          </div>
          <div className="border-t border-[#b9cce0] pt-6">
            <div className="mb-4 flex items-center gap-3 text-[var(--microsoft-blue)]">
              <Flag className="h-7 w-7" />
              <span className="t-caption font-semibold">从入学到毕业，每个学生都有完整成长画像。</span>
            </div>
            <p className="t-caption muted">
              从单校到集团，教育决策从经验驱动变为数据驱动。
            </p>
          </div>
        </Panel>
      </div>
    </div>
  );
}
