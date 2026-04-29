import { useMemo, useState } from "react";
import { AlertTriangle, BarChart3, MessageSquareText } from "lucide-react";
import { Panel, SlideHeader } from "./shared.jsx";

const demos = [
  {
    question: "孩子这一个月数学怎么样？",
    icon: BarChart3,
    answer: "数学表现稳定上升，最近 4 次作业完成度 94%。代数应用题仍是薄弱点，建议本周追加 12 道同类练习。",
    metrics: [
      ["成绩趋势", "82 → 88"],
      ["作业完成度", "94%"],
      ["课堂表现", "积极"],
      ["薄弱知识点", "代数应用题"],
    ],
    bars: [78, 84, 81, 88],
  },
  {
    question: "最近有什么需要关注的？",
    icon: AlertTriangle,
    answer: "过去两周英语写作提交延迟 2 次，数学错题集中在同一知识点。系统建议老师在周五前安排一次 10 分钟反馈。",
    metrics: [
      ["英语写作", "延迟 2 次"],
      ["数学错题", "集中"],
      ["情绪记录", "正常"],
      ["建议动作", "周五反馈"],
    ],
    bars: [70, 66, 92, 83],
  },
  {
    question: "课堂表现怎么样？",
    icon: MessageSquareText,
    answer: "各科老师记录显示，学生在科学讨论中主动发言增加，历史课注意力稳定，数学课在复杂题拆解时需要更多提示。",
    metrics: [
      ["科学", "主动发言"],
      ["历史", "稳定"],
      ["数学", "需提示"],
      ["综合", "向好"],
    ],
    bars: [86, 82, 68, 84],
  },
];

export function Section07LiveDemo({ index, total }) {
  const [active, setActive] = useState(0);
  const demo = demos[active];
  const Icon = demo.icon;
  const chartBars = useMemo(() => demo.bars, [demo.bars]);

  return (
    <div className="slide-content">
      <SlideHeader
        index={index}
        total={total}
        title="试试看：向 Agent 提问"
        subtitle="从查询、分析到行动建议，家校沟通变成一次自然对话"
        tight
      />
      <div className="grid grid-cols-[420px_1fr] gap-7">
        <Panel delay={80}>
          <p className="t-body mb-7 font-semibold text-[var(--ink)]">选择问题</p>
          <div className="space-y-4">
            {demos.map((item, itemIndex) => {
              const QuestionIcon = item.icon;
              return (
                <button
                  key={item.question}
                  className={`ghost-button t-caption flex w-full items-center gap-4 rounded-[8px] p-5 text-left font-semibold ${
                    active === itemIndex ? "is-active" : ""
                  }`}
                  onClick={() => setActive(itemIndex)}
                >
                  <QuestionIcon className="h-6 w-6 shrink-0" />
                  {item.question}
                </button>
              );
            })}
          </div>
        </Panel>

        <Panel className="panel-blue" delay={160}>
          <div className="mb-7 flex items-center gap-5">
            <div className="icon-box bg-white">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <p className="t-caption deck-label font-semibold">Spectra Agent</p>
              <h3 className="t-body font-semibold text-[var(--ink)]">
                {demo.question}
              </h3>
            </div>
          </div>

          <p className="t-body mb-7 text-[var(--ink)]">{demo.answer}</p>

          <div className="grid grid-cols-4 gap-4">
            {demo.metrics.map(([label, value]) => (
              <div key={label} className="rounded-[8px] border border-[#c8d8e8] bg-white p-4">
                <p className="t-caption muted">{label}</p>
                <p className="t-body mt-2 font-semibold text-[var(--ink)]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex h-28 items-end gap-5 border-b border-[#b9cce0]">
            {chartBars.map((bar, barIndex) => (
              <div
                key={barIndex}
                className="bar-fill w-24 bg-[var(--microsoft-blue)]"
                style={{
                  height: `${bar}%`,
                  animationDelay: `${barIndex * 90}ms`,
                }}
              />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
