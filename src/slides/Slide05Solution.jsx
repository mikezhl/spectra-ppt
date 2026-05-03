import { Archive, ArrowRight, ClipboardCheck, FileInput, Mic2, Puzzle, ScanLine, UserSearch } from "lucide-react";
import { SlideCanvas } from "./SlideShared.jsx";

const dataTypes = [
  ["课堂表现", "语音录入", Mic2, "老师语音快速录入课堂评价，AI 自动转文字、识别学生、分类标签。"],
  ["课后作业", "批改 + 出题", ClipboardCheck, "自动批改、错题本、知识点分析，并生成个性化练习。"],
  ["考试成绩", "智能识别", ScanLine, "识别分数与错题，生成个人报告、班级对比和知识点热力图。"],
  ["碎片化信息", "轻量录入", Puzzle, "社团、体育、日常活动，30 秒语音录入并关联个人档案。"],
];

const pipeline = [
  ["录入", FileInput, "真实教学事件"],
  ["LLM 识别学生", UserSearch, "结构化标签"],
  ["归档至个人档案", Archive, "长期画像"],
];

export function Slide05Solution(props) {
  return (
    <SlideCanvas
      {...props}
      title="数据层"
      subtitle="构建更完善的数据库；传统系统只录入成绩和出勤，我们覆盖全维度信息。"
      className="slide-dense"
    >
      <div className="slide-data-grid">
        {dataTypes.map(([title, meta, Icon, text]) => (
          <article key={title}>
            <div className="slide-card-head">
              <Icon className="slide-icon" />
              <div>
                <p className="slide-caption slide-card-meta">{meta}</p>
                <h3 className="slide-body">{title}</h3>
              </div>
            </div>
            <p className="slide-caption">{text}</p>
          </article>
        ))}
      </div>
      <ol className="slide-pipeline">
        {pipeline.map(([title, Icon, output], index) => (
          <li key={title}>
            <Icon className="slide-icon" />
            <span className="slide-body">{title}</span>
            <strong className="slide-caption">{output}</strong>
            {index < pipeline.length - 1 ? <ArrowRight className="slide-pipeline-arrow" /> : null}
          </li>
        ))}
      </ol>
    </SlideCanvas>
  );
}
