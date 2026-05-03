import {
  Archive,
  ArrowRight,
  ClipboardCheck,
  FileInput,
  Mic2,
  Puzzle,
  ScanLine,
  UserSearch,
} from "lucide-react";
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

const pipeline = [
  {
    title: "录入",
    icon: FileInput,
    text: "老师用语音、文字、成绩单或作业批改记录，把真实教学事件轻量写入系统。",
    output: "原始事件",
  },
  {
    title: "LLM 识别学生",
    icon: UserSearch,
    text: "模型解析姓名、班级、课程、知识点与情绪线索，并完成学生身份消歧。",
    output: "结构化标签",
  },
  {
    title: "归档至个人档案",
    icon: Archive,
    text: "所有信息沉淀到个人成长档案，成为家长、老师与学生 Agent 的可查询记忆。",
    output: "长期画像",
  },
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
      <ol className="v-data-pipeline" aria-label="数据进入个人档案的顺序">
        {pipeline.map(({ title, icon: Icon, text, output }, index) => (
          <li key={title} className="v-data-step">
            <div className="v-data-step-head">
              <Icon className="v-data-step-icon" />
              <div>
                <span className="vertical-caption v-data-step-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="vertical-body-text">{title}</h3>
              </div>
            </div>
            <p className="vertical-caption">{text}</p>
            <span className="vertical-caption v-data-step-output">{output}</span>
            {index < pipeline.length - 1 ? (
              <ArrowRight className="v-data-arrow" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </VerticalSection>
  );
}
