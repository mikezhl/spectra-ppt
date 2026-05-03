import { Bot, Database, MessageSquareText, School2 } from "lucide-react";
import { SlideCanvas, SlideMetric } from "./SlideShared.jsx";

const coverPillars = [
  ["数据层", "课堂、作业、考试、活动与日常反馈", Database],
  ["Agent 层", "家长、老师、学生与管理层即时查询", Bot],
  ["学校 OS", "从录入到理解，再到主动服务", School2],
];

export function Slide01Hero(props) {
  return (
    <SlideCanvas
      {...props}
      title="Spectra"
      subtitle="AI 时代的学校操作系统"
      marker="AI School OS"
      className="slide-cover"
    >
      <div className="slide-cover-grid">
        <div className="slide-cover-copy">
          <p className="slide-caption slide-hero-copy">
            让每一条教育数据都能被轻松录入、被深度理解、被每个人即时使用。
          </p>
          <div className="slide-cover-meta">
            <span className="slide-caption">智能教务管理系统</span>
            <span className="slide-caption">李翼 CEO</span>
          </div>
          <div className="slide-metric-row slide-cover-metrics">
            <SlideMetric value="2026" label="Angel Round" />
            <SlideMetric value="协和" label="Design Partner" />
            <SlideMetric value="AI" label="原生学校 Agent" />
          </div>
        </div>

        <div className="slide-cover-visual" aria-label="Spectra 系统示意">
          <div className="slide-cover-system">
            {coverPillars.map(([title, text, Icon]) => (
              <article className="slide-cover-node" key={title}>
                <Icon className="slide-icon" />
                <div>
                  <strong className="slide-body">{title}</strong>
                  <span className="slide-caption">{text}</span>
                </div>
              </article>
            ))}
            <div className="slide-cover-agent">
              <MessageSquareText className="slide-icon" />
              <div>
                <strong className="slide-body">Ask anything</strong>
                <span className="slide-caption">把学校数据变成每个人可用的答案。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideCanvas>
  );
}
