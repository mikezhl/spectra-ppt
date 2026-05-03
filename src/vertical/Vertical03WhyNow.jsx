import { Cpu, Landmark, Timer } from "lucide-react";
import { VerticalCell, VerticalSection } from "./VerticalShared.jsx";

const drivers = [
  [
    "01",
    "技术成熟 + 成本骤降",
    Cpu,
    "GPT-4 级模型与 Agent 框架让自然语言理解、多维数据关联、主动推理成为标配。推理成本每 6 个月下降 50%+，大规模部署已经经济可行。",
  ],
  [
    "02",
    "国家政策强力推动",
    Landmark,
    "2024《教育强国规划纲要》· 2025《九部门教育数字化意见》· 2026《人工智能+教育行动计划》— 顶层设计到落地规范全部就位。",
  ],
  [
    "03",
    "国际学校数字化空白",
    Timer,
    "1,000+ 所国际/高端学校仍在用上一代工具，没有产品同时解决\"录不进\"和\"问不出\"。先发即数据壁垒，窗口约 18 个月。",
  ],
];

export function Vertical03WhyNow(props) {
  return (
    <VerticalSection
      {...props}
      title={
        <>
          为什么是现在：AI 改变了所有行业，<br />
          唯独教育还没被触及
        </>
      }
    >
      <div className="v-grid-three">
        {drivers.map(([meta, title, icon, text]) => (
          <VerticalCell key={title} title={title} meta={meta} icon={icon}>
            {text}
          </VerticalCell>
        ))}
      </div>
    </VerticalSection>
  );
}
