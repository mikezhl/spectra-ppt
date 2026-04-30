import { BookOpen, Building2, UserRound, UsersRound } from "lucide-react";
import { VerticalCell, VerticalSection } from "./VerticalShared.jsx";

const agents = [
  ["学生 Agent", UserRound, "成长记录、个性推荐、问题答疑。"],
  ["教师 Agent", BookOpen, "评语助手、学情分析、报告生成。"],
  ["管理者 Agent", Building2, "数据看板、趋势分析、预警预测。"],
  ["家长 Agent", UsersRound, "成长报告、沟通助手、家庭建议。"],
];

export function Vertical06AgentLayer(props) {
  return (
    <VerticalSection {...props} title="每个人都有专属 Agent">
      <div className="v-grid-four">
        {agents.map(([title, icon, text]) => (
          <VerticalCell key={title} title={title} icon={icon}>
            {text}
          </VerticalCell>
        ))}
      </div>
    </VerticalSection>
  );
}
