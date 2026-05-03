import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { demoScenarios } from "../demoScenarios.js";
import { VerticalSection } from "./VerticalShared.jsx";

export function Vertical07LiveDemo(props) {
  const [active, setActive] = useState(0);
  const result = demoScenarios[active];

  return (
    <VerticalSection {...props} title="试试看：向 Agent 提问">
      <div className="v-demo-qa">
        <div className="v-demo-qlist" role="tablist" aria-label="Agent 示例问题">
          {demoScenarios.map(({ role, question }, index) => (
            <button
              key={question}
              type="button"
              className={`vertical-caption ${active === index ? "is-active" : ""}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span>{role}</span>
              <strong>{question}</strong>
            </button>
          ))}
        </div>
        <article className="v-demo-answer">
          <div className="v-agent-result-top">
            <div>
              <p className="vertical-caption v-agent-name">Spectra Agent</p>
              <p className="vertical-caption v-agent-context">{result.context}</p>
            </div>
            <Sparkles className="v-agent-spark" />
          </div>
          <div className="v-agent-narrative">
            <p className="vertical-body-text v-demo-headline">{result.headline}</p>
            <p className="vertical-caption">{result.answer}</p>
          </div>
          <div className="v-agent-chart" aria-label="Agent 分析图表">
            {result.chart.map(([label, value]) => (
              <div className="v-agent-chart-row" key={label}>
                <span className="vertical-caption">{label}</span>
                <div>
                  <i style={{ width: `${value}%` }} />
                </div>
                <strong className="vertical-caption">{value}</strong>
              </div>
            ))}
          </div>
          <div className="v-demo-stats">
            {result.metrics.map(([value, label]) => (
              <div key={label}>
                <strong className="vertical-body-text">{value}</strong>
                <span className="vertical-caption">{label}</span>
              </div>
            ))}
          </div>
          <div className="v-agent-actions">
            <p className="vertical-caption">建议下一步</p>
            <ul>
              {result.actions.map((action) => (
                <li key={action} className="vertical-caption">
                  <CheckCircle2 className="v-agent-check" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </VerticalSection>
  );
}
