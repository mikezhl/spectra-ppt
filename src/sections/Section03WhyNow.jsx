import { BadgeCheck, BrainCircuit, Clock3, Landmark } from "lucide-react";
import { BulletList, MiniKicker, Panel, SlideHeader } from "./shared.jsx";

const drivers = [
  {
    title: "技术成熟 + 成本骤降",
    icon: BrainCircuit,
    items: [
      "GPT-4 级模型与 Agent 框架让自然语言理解、多维关联、主动推理成为标配",
      "推理成本快速下降，大规模部署已具备经济性",
      "教育仍是 AI 渗透最少的领域之一",
    ],
  },
  {
    title: "国家政策强力推动",
    icon: Landmark,
    items: [
      "2024-2035 教育强国建设将 AI+教育列为战略方向",
      "2025 教育数字化意见明确智能化路线",
      "2026 人工智能+教育行动计划鼓励 AI 赋能学校管理",
    ],
  },
  {
    title: "国际学校数字化空白",
    icon: Clock3,
    items: [
      "1,000+ 所国际/高端民办学校仍依赖上一代工具",
      "没有产品同时解决录入门槛高和数据用不起来",
      "先发优势形成数据壁垒，窗口期约 18 个月",
    ],
  },
];

export function Section03WhyNow({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader
        index={index}
        total={total}
        title="为什么是现在？"
        subtitle="AI 已经改变了几乎所有行业，但教育是渗透最慢的领域之一"
        tight
      />

      <Panel className="mb-6 flex items-center gap-5 bg-white" delay={80}>
        <div className="icon-box">
          <BadgeCheck className="h-7 w-7" />
        </div>
        <p className="t-body font-semibold text-[var(--ink)]">
          AI 技术成熟、政策体系就位、国际学校工具断层，三条曲线正在同一时间交汇。
        </p>
      </Panel>

      <div className="grid grid-cols-3 gap-6">
        {drivers.map((driver, driverIndex) => {
          const Icon = driver.icon;
          return (
            <Panel key={driver.title} delay={driverIndex * 110}>
              <div className="mb-6 flex items-center gap-4">
                <div className="icon-box">
                  <Icon className="h-7 w-7" />
                </div>
                <MiniKicker>{`0${driverIndex + 1}`}</MiniKicker>
              </div>
              <h3 className="t-body mb-6 font-semibold text-[var(--ink)]">
                {driver.title}
              </h3>
              <BulletList items={driver.items} compact />
            </Panel>
          );
        })}
      </div>
    </div>
  );
}
