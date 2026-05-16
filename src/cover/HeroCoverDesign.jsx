import { Bot, Database, MessageSquareText, School2 } from "lucide-react";

const metrics = [
  ["2026", "Angel Round"],
  ["协和", "Design Partner"],
  ["AI", "原生学校 Agent"],
];

const systemNodes = [
  {
    title: "数据层",
    text: "课堂、作业、考试、活动与日常反馈",
    icon: Database,
    tone: "default",
  },
  {
    title: "Agent 层",
    text: "家长、老师、学生与管理层即时查询",
    icon: Bot,
    tone: "default",
  },
  {
    title: "学校 OS",
    text: "从录入到理解，再到主动服务",
    icon: School2,
    tone: "blue",
  },
  {
    title: "Ask anything",
    text: "把学校数据变成每个人可用的答案。",
    icon: MessageSquareText,
    tone: "black",
  },
];

function PageCount({ index, total }) {
  return (
    <span className="home-cover-count">
      {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  );
}

function SystemStack() {
  return (
    <div className="home-cover-system" aria-label="Spectra 系统示意">
      {systemNodes.map(({ title, text, icon: Icon, tone }, index) => (
        <div className="home-cover-node-wrap" key={title}>
          <article className={`home-cover-node is-${tone}`}>
            <Icon className="home-cover-icon" aria-hidden="true" />
            <div>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          </article>
          {index < systemNodes.length - 1 ? (
            <div className="home-cover-connector" aria-hidden="true" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function MetricStrip() {
  return (
    <div className="home-cover-metrics" aria-label="融资与产品状态">
      {metrics.map(([value, label]) => (
        <div className="home-cover-metric" key={value}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function HeroCoverDesign({ variant, index, total }) {
  const isSlide = variant === "slide";
  const shellClass = isSlide
    ? "slide-canvas slide-home-cover"
    : "vertical-hero vertical-home-cover";

  return (
    <section className={`${shellClass} home-cover home-cover--${variant}`}>
      <div className="home-cover-slide-top">
        <p className="home-cover-marker">AI School OS</p>
        <PageCount index={index} total={total} />
      </div>

      <div className="home-cover-layout">
        <div className="home-cover-copy">
          <h1 className="home-cover-title">Spectra</h1>
          <p className="home-cover-subtitle">AI 时代的学校操作系统</p>
          <div className="home-cover-rule" />
          <p className="home-cover-lede">
            让每一条教育数据都能被轻松录入、被深度理解、被每个人即时使用。
          </p>
          <p className="home-cover-meta">智能教务管理系统 · 李翼 CEO</p>
          <MetricStrip />
        </div>

        <SystemStack />
      </div>
    </section>
  );
}
