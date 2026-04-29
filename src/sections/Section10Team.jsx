import { Award, Network, UserRoundCheck } from "lucide-react";
import { BulletList, Panel, SlideHeader } from "./shared.jsx";

const founders = [
  {
    name: "李翼",
    role: "CEO / 创始人",
    items: [
      "牛津大学本硕",
      "18 岁创立第一家教育机构，与沪苏近 10 所国际学校深度合作",
      "4 年国际教育行业经验，理解学校、老师和家长真实需求",
      "曾任 A2A 初创公司 COO，入选硅谷孵化器 Founders Inc",
    ],
  },
  {
    name: "朱浩朗",
    role: "CTO / 联合创始人",
    items: [
      "牛津大学本硕博",
      "10 年开发经验，全栈工程师",
      "OpenClaw Hackathon 获奖",
      "曾独立开发智能师生匹配系统",
    ],
  },
];

export function Section10Team({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader
        index={index}
        total={total}
        title="为什么是我们来做？"
        subtitle="教育行业老兵 + 顶尖技术团队"
        tight
      />
      <div className="grid grid-cols-2 gap-7">
        {founders.map((founder, founderIndex) => (
          <Panel key={founder.name} className="h-full" delay={founderIndex * 110}>
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="t-title font-semibold text-[var(--ink)]">
                  {founder.name}
                </h3>
                <p className="t-caption deck-label mt-3 font-semibold">
                  {founder.role}
                </p>
              </div>
              <div className="icon-box">
                <UserRoundCheck className="h-7 w-7" />
              </div>
            </div>
            <BulletList items={founder.items} compact />
          </Panel>
        ))}
      </div>

      <div className="mt-7 grid grid-cols-4 gap-5" data-reveal>
        {[
          ["行业经验", "CEO 4 年深耕国际教育"],
          ["客户信任", "Design Partner 已就位"],
          ["技术能力", "CTO 10 年全栈 + Agent 实战"],
          ["校招能力", "牛津校友网络"],
        ].map(([title, text], itemIndex) => (
          <div key={title} className="panel p-5">
            {itemIndex % 2 === 0 ? (
              <Award className="mb-4 h-7 w-7 text-[var(--microsoft-blue)]" />
            ) : (
              <Network className="mb-4 h-7 w-7 text-[var(--microsoft-blue)]" />
            )}
            <p className="t-body font-semibold text-[var(--ink)]">{title}</p>
            <p className="t-caption muted mt-2">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
