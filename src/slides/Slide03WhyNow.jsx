import { Cpu, Landmark, Timer } from "lucide-react";
import { SlideCanvas } from "./SlideShared.jsx";

const drivers = [
  {
    meta: "01",
    title: "技术成熟 + 成本骤降",
    icon: Cpu,
    text: "GPT-4 级模型与 Agent 框架让自然语言理解、多维数据关联、主动推理成为标配；推理成本每 6 个月下降 50%+。",
  },
  {
    meta: "02",
    title: "国家政策强力推动",
    icon: Landmark,
    text: "2024 教育强国规划、2025 教育数字化意见、2026 人工智能+教育行动计划，顶层设计到落地规范全部就位。",
  },
  {
    meta: "03",
    title: "国际学校数字化空白",
    icon: Timer,
    text: "1,000+ 所国际/高端学校仍在用上一代工具；没有产品同时解决“录不进”和“问不出”，窗口约 18 个月。",
  },
];

export function Slide03WhyNow(props) {
  return (
    <SlideCanvas
      {...props}
      title="为什么是现在"
      subtitle="教育仍是 AI 渗透最慢的领域之一。"
      className="slide-dense"
    >
      <div className="slide-driver-grid">
        {drivers.map(({ meta, title, icon: Icon, text }) => (
          <article key={title}>
            <div className="slide-driver-head">
              <Icon className="slide-icon" />
              <span className="slide-caption">{meta}</span>
            </div>
            <h3 className="slide-body">{title}</h3>
            <p className="slide-caption">{text}</p>
          </article>
        ))}
      </div>
    </SlideCanvas>
  );
}
