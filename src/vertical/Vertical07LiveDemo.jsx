import { VerticalSection } from "./VerticalShared.jsx";

const questions = [
  "孩子最近数学怎么样？",
  "最近有什么需要关注的？",
  "课堂表现怎么样？",
];

const stats = [
  ["92%", "作业完成度"],
  ["明显提升", "课堂表现"],
  ["函数与方程", "薄弱知识点"],
  ["加强练习", "系统建议"],
];

export function Vertical07LiveDemo(props) {
  return (
    <VerticalSection {...props} title="试试看：向 Agent 提问">
      <div className="v-demo-qa">
        <div className="v-demo-qlist">
          {questions.map((q) => (
            <button key={q} className="vertical-caption">
              {q}
            </button>
          ))}
        </div>
        <div className="v-demo-answer">
          <p className="vertical-caption" style={{ color: "var(--blue)", margin: 0, fontWeight: 780 }}>
            Spectra Agent
          </p>
          <p className="vertical-body-text v-demo-headline" style={{ margin: 0 }}>
            最近一个月数学成绩稳步上升，从 78 → 91 分。
          </p>
          <div className="v-demo-stats">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong className="vertical-body-text">{value}</strong>
                <span className="vertical-caption">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VerticalSection>
  );
}
