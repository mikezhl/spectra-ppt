import { Crosshair, Shield, TableProperties, XCircle } from "lucide-react";
import { Panel, SlideHeader } from "./shared.jsx";

const competitors = [
  ["校宝在线", "体制内学校", "无", "表单填写", "固定报表"],
  ["校校", "培训机构", "无", "表单填写", "基础统计"],
  ["ManageBac", "国际学校", "无", "表单填写", "几乎无"],
  ["Spectra", "国际/高端学校", "Agent 全链路", "语音/自然语言", "AI 多维关联"],
];

const notes = [
  "传统教务 SaaS 偏行政管理，不具备 Agent 能力",
  "机构管理工具与学校绑定深度不足",
  "上一代国际学校系统，功能基础且体验粗糙",
];

export function Section08Competition({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader
        index={index}
        total={total}
        title="竞争格局"
        subtitle='没有产品同时解决“录不进”和“问不出”'
        tight
      />

      <div className="grid grid-cols-[420px_1fr] gap-7">
        <div className="space-y-5">
          {notes.map((note, noteIndex) => (
            <Panel key={note} className="flex items-start gap-4 p-5" delay={noteIndex * 90}>
              <div className="icon-box h-11 w-11">
                <XCircle className="h-6 w-6" />
              </div>
              <p className="t-caption muted">{note}</p>
            </Panel>
          ))}
          <Panel className="panel-blue p-5" delay={320}>
            <div className="mb-4 flex items-center gap-4">
              <div className="icon-box bg-white">
                <Crosshair className="h-7 w-7" />
              </div>
              <p className="t-body font-semibold text-[var(--ink)]">Spectra 定位</p>
            </div>
            <p className="t-caption muted">
              唯一一个从数据采集到 Agent 服务全链路打通的产品。
            </p>
          </Panel>
        </div>

        <Panel className="p-0" delay={110}>
          <div className="grid grid-cols-[1.1fr_1.1fr_1fr_1.25fr_1.25fr] border-b border-[var(--line)] bg-[var(--microsoft-blue-soft)]">
            {["产品", "目标客户", "AI 能力", "数据录入", "数据分析"].map((head) => (
              <div key={head} className="t-caption p-5 font-semibold text-[var(--ink)]">
                {head}
              </div>
            ))}
          </div>
          {competitors.map((row) => {
            const active = row[0] === "Spectra";
            return (
              <div
                key={row[0]}
                  className={`grid grid-cols-[1.1fr_1.1fr_1fr_1.25fr_1.25fr] border-b border-[var(--line)] last:border-b-0 ${
                  active ? "bg-[#f0f8ff]" : "bg-white"
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <div
                    key={cell}
                    className={`t-caption p-5 ${active ? "font-semibold text-[var(--microsoft-blue)]" : "muted"}`}
                  >
                    <div className="flex items-center gap-2">
                      {active && cellIndex === 0 ? (
                        <Shield className="h-5 w-5" />
                      ) : cellIndex === 0 ? (
                        <TableProperties className="h-5 w-5 text-[var(--muted)]" />
                      ) : null}
                      {cell}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </Panel>
      </div>
    </div>
  );
}
