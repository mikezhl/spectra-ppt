import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { demoScenarios } from "../demoScenarios.js";
import { SlideCanvas } from "./SlideShared.jsx";

export function Slide07Competition(props) {
  const [active, setActive] = useState(0);
  const result = demoScenarios[active];

  return (
    <SlideCanvas
      {...props}
      title="试试看"
      subtitle="向 Agent 提问，获得可解释、可行动的学情反馈。"
      className="slide-dense"
    >
      <div className="slide-demo-qa">
        <div className="slide-demo-tabs" role="tablist" aria-label="Agent 示例问题">
          {demoScenarios.map(({ role, question }, index) => (
            <button
              key={question}
              type="button"
              className={`slide-caption ${active === index ? "is-active" : ""}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span>{role}</span>
              <strong>{question}</strong>
            </button>
          ))}
        </div>
        <article className="slide-demo-answer">
          <div className="slide-agent-result-top">
            <div>
              <p className="slide-caption slide-agent-name">Spectra Agent</p>
              <p className="slide-caption slide-agent-context">{result.context}</p>
            </div>
            <Sparkles className="slide-icon" />
          </div>
          <p className="slide-body slide-demo-headline">{result.headline}</p>
          <p className="slide-caption slide-demo-copy">{result.answer}</p>
          <div className="slide-demo-proof">
            <div className="slide-agent-chart" aria-label="Agent 分析图表">
              {result.chart.map(([label, value]) => (
                <div className="slide-agent-chart-row" key={label}>
                  <span className="slide-caption">{label}</span>
                  <div>
                    <i style={{ width: `${value}%` }} />
                  </div>
                  <strong className="slide-caption">{value}</strong>
                </div>
              ))}
            </div>
            <div className="slide-demo-stats">
              {result.metrics.map(([value, label]) => (
                <div key={label}>
                  <strong className="slide-caption">{value}</strong>
                  <span className="slide-caption">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="slide-agent-actions">
            <p className="slide-caption">建议下一步</p>
            <ul className="slide-caption">
              {result.actions.map((action) => (
                <li key={action}>
                  <CheckCircle2 className="slide-check" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </SlideCanvas>
  );
}
