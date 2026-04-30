import { ClipboardCheck, Mic2, Puzzle, ScanLine } from "lucide-react";
import { VerticalCell, VerticalSection } from "./VerticalShared.jsx";

const data = [
  ["课堂表现", Mic2, "语音录入，AI 识别学生并自动归档标签。"],
  ["课后作业", ClipboardCheck, "自动批改、错题本、知识点分析与个性化练习。"],
  ["考试成绩", ScanLine, "识别分数与错题，生成个人报告和班级对比。"],
  ["碎片化信息", Puzzle, "社团、体育、日常事件，30 秒轻量录入。"],
];

export function Vertical05DataLayer(props) {
  return (
    <VerticalSection {...props} title="构建更完善的数据库">
      <div className="v-grid-four">
        {data.map(([title, icon, text]) => (
          <VerticalCell key={title} title={title} icon={icon}>
            {text}
          </VerticalCell>
        ))}
      </div>
      <div className="v-metric-strip">
        <span>录入</span>
        <span>LLM 识别学生</span>
        <span>归档至个人档案</span>
      </div>
    </VerticalSection>
  );
}
