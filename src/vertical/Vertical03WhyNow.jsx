import { Cpu, Landmark, Timer } from "lucide-react";
import { VerticalCell, VerticalSection } from "./VerticalShared.jsx";

const drivers = [
  ["01", "技术成熟 + 成本骤降", Cpu, "GPT-4 级模型、Agent 框架和推理成本下降，让教育数据理解首次可规模化。"],
  ["02", "政策强力推动", Landmark, "AI+教育已从顶层规划进入行动计划，智能化学校管理成为明确方向。"],
  ["03", "国际学校数字化空白", Timer, "上一代工具只解决存储，未解决自然录入、深度理解和即时查询。"],
];

export function Vertical03WhyNow(props) {
  return (
    <VerticalSection {...props} title="为什么是现在">
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
