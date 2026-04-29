import { Building2, Handshake, Layers, Repeat2 } from "lucide-react";
import { BulletList, Panel, SlideHeader } from "./shared.jsx";

const columns = [
  {
    title: "目标市场与收入",
    icon: Building2,
    items: [
      "先切国际学校：付费意愿强、决策链短、新技术接受度高",
      "后扩民办/公立学校，形成更大教育数据基础设施",
      "SaaS 年费 + 家长增值订阅双轨收入",
    ],
  },
  {
    title: "合作路径与壁垒",
    icon: Handshake,
    items: [
      "已与上海协和国际高中达成 Design Partner 合作",
      "从单点高中切入，进入集团所有高中",
      "数据沉淀 + 行为习惯 + 信任关系形成切换成本",
    ],
  },
];

export function Section09BusinessModel({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader
        index={index}
        total={total}
        title="合作与商业模式"
        subtitle="2B 模式，面向学校收费"
      />
      <div className="grid grid-cols-2 gap-7">
        {columns.map((column, columnIndex) => {
          const Icon = column.icon;
          return (
            <Panel key={column.title} className="h-full" delay={columnIndex * 110}>
              <div className="mb-7 flex items-center justify-between">
                <div className="icon-box">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="t-caption deck-label font-semibold">
                  0{columnIndex + 1}
                </span>
              </div>
              <h3 className="t-body mb-7 font-semibold text-[var(--ink)]">
                {column.title}
              </h3>
              <BulletList items={column.items} />
            </Panel>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-[1fr_1fr_1fr] gap-5" data-reveal>
        {[
          ["SaaS 年费", Layers],
          ["家长增值订阅", Repeat2],
          ["Design Partner 扩张", Handshake],
        ].map(([label, Icon]) => (
          <div key={label} className="panel flex items-center gap-4 p-5">
            <Icon className="h-8 w-8 text-[var(--microsoft-blue)]" />
            <span className="t-body font-semibold text-[var(--ink)]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
