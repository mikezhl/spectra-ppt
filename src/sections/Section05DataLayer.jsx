import { ClipboardCheck, Mic2, Puzzle, ScanLine } from "lucide-react";
import { BulletList, FlowStrip, Panel, SlideHeader } from "./shared.jsx";

const dataTypes = [
  {
    title: "课堂表现",
    icon: Mic2,
    lead: "语音录入",
    items: ["老师快速录入", "AI 识别学生", "自动分类标签"],
  },
  {
    title: "课后作业",
    icon: ClipboardCheck,
    lead: "批改 + 个性化出题",
    items: ["自动批改", "错题本与知识点分析", "按掌握程度生成练习题"],
  },
  {
    title: "考试成绩",
    icon: ScanLine,
    lead: "智能识别",
    items: ["识别分数与错题", "个人报告", "班级对比与热力分析"],
  },
  {
    title: "碎片化信息",
    icon: Puzzle,
    lead: "轻量录入",
    items: ["社团、体育、日常", "30 秒语音录入", "自动关联学生档案"],
  },
];

export function Section05DataLayer({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader
        index={index}
        total={total}
        title="构建更完善的数据库"
        subtitle="传统系统只录入成绩和出勤，Spectra 覆盖全维度教育信息"
        tight
      />
      <div className="grid grid-cols-2 gap-6">
        {dataTypes.map((item, itemIndex) => {
          const Icon = item.icon;
          return (
            <Panel key={item.title} className="h-full" delay={itemIndex * 80}>
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h3 className="t-body font-semibold text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="t-caption deck-label mt-2 font-semibold">
                    {item.lead}
                  </p>
                </div>
                <div className="icon-box">
                  <Icon className="h-7 w-7" />
                </div>
              </div>
              <BulletList items={item.items} compact />
            </Panel>
          );
        })}
      </div>
      <FlowStrip steps={["录入", "LLM 识别学生", "归档至个人档案"]} />
    </div>
  );
}
