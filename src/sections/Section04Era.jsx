import { Bot, FileText, Table2 } from "lucide-react";
import { BulletList, Panel, SlideHeader } from "./shared.jsx";

const eras = [
  {
    title: "纸质时代",
    years: "~2010",
    icon: FileText,
    items: ["成绩手写，评语手写", "家长会一学期一次", "信息在纸上和脑子里"],
  },
  {
    title: "信息化时代",
    years: "2010-2025",
    icon: Table2,
    items: ["纸质转成电子表格", "微信沟通替代线下通知", "解决了存储，没解决理解"],
  },
  {
    title: "Agent 时代",
    years: "现在",
    icon: Bot,
    items: [
      "语音/自然语言输入，AI 自动理解归档",
      "对话式查询，想问什么问什么",
      "每个学生有班主任 Agent，每个老师有秘书 Agent",
    ],
  },
];

export function Section04Era({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader index={index} total={total} title="教育信息化的三个时代" />
      <div className="grid grid-cols-3 gap-6">
        {eras.map((era, eraIndex) => {
          const Icon = era.icon;
          const active = era.title === "Agent 时代";
          return (
            <Panel
              key={era.title}
              className={`h-full ${active ? "panel-blue" : ""}`}
              delay={eraIndex * 100}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="icon-box bg-white">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="t-caption deck-label font-semibold">
                  {era.years}
                </span>
              </div>
              <h3 className="t-body mb-7 font-semibold text-[var(--ink)]">
                {era.title}
              </h3>
              <BulletList items={era.items} />
            </Panel>
          );
        })}
      </div>

      <div className="mt-10 px-4" data-reveal>
        <div className="relative h-3 bg-[#d9e2ec]">
          <div className="bar-fill h-3 w-full bg-[var(--microsoft-blue)]" />
          <div className="absolute right-0 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full border-4 border-white bg-[var(--microsoft-blue)]" />
        </div>
        <div className="mt-4 grid grid-cols-3 t-caption font-semibold text-[var(--muted)]">
          <span>记录</span>
          <span className="text-center">存储</span>
          <span className="text-right text-[var(--microsoft-blue)]">理解与主动服务</span>
        </div>
      </div>
    </div>
  );
}
