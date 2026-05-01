import { ClipboardCheck, Mic2, Puzzle, ScanLine } from "lucide-react";
import { VerticalCell, VerticalSection } from "./VerticalShared.jsx";

const data = [
  [
    "课堂表现",
    "语音录入",
    Mic2,
    "老师语音快速录入课堂评价，AI 自动转文字、识别学生、分类标签。",
  ],
  [
    "课后作业",
    "批改 + 出题",
    ClipboardCheck,
    "自动批改、错题本、知识点分析，根据掌握程度生成个性化练习题。",
  ],
  [
    "考试成绩",
    "智能识别",
    ScanLine,
    "识别分数与错题，个人报告 + 班级对比 + 知识点掌握热力图。",
  ],
  [
    "碎片化信息",
    "轻量录入",
    Puzzle,
    "社团、体育、日常活动，30 秒语音录入，自动关联学生档案。",
  ],
];

export function Vertical05DataLayer(props) {
  return (
    <VerticalSection {...props} title="数据层：构建更完善的数据库">
      <p className="vertical-caption" style={{ margin: "0 0 30px", color: "var(--muted)" }}>
        传统系统只录入成绩和出勤，我们覆盖全维度信息。
      </p>
      <div className="v-grid-four">
        {data.map(([title, meta, icon, text]) => (
          <VerticalCell key={title} title={title} meta={meta} icon={icon}>
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
