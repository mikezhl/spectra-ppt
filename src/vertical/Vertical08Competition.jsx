import { VerticalSection } from "./VerticalShared.jsx";

const headers = ["维度", "ManageBac", "Toddle", "校宝在线", "校校 Campus", "Spectra"];

const rows = [
  ["核心定位", "IB 课程管理", "IB 新替代", "本土 SaaS 龙头", "语培 + 国际校", "AI Agent 教务中台"],
  ["目标客户", "IB 国际学校", "IB 国际学校", "体制内 / 培训", "国际 / 语培", "国际 / 高端学校"],
  ["国际课程支持", "IB 深度", "IB 深度", "几乎无", "浅", "原生设计"],
  ["微信家校沟通", "零", "零", "通知推送", "小程序通知", "对话式 Agent"],
  ["数据录入", "表单填写", "表单填写", "表单填写", "表单填写", "语音 / 自然语言"],
  ["AI 能力", "基础写作助手", "6 个 AI 工具", "批改 + 模考", "标化作文批改", "Agent 全链路"],
  ["产品哲学", "让老师填表", "让老师填表", "让老师填表", "让老师填表", "让 Agent 替老师干活"],
];

export function Vertical08Competition(props) {
  return (
    <VerticalSection {...props} title="竞争格局：AI Agent 教务中台是无人区">
      <p className="vertical-caption" style={{ margin: "0 0 26px", color: "var(--muted)" }}>
        第一层（IB 课程管理）与第二层（本土校务 SaaS）之间存在产品哲学的代差 —
        一层是&ldquo;让老师在系统里填表&rdquo;，我们要做的第三层是&ldquo;让 Agent 替老师干活&rdquo;。
      </p>
      <div className="v-table">
        <div className="v-table-head">
          {headers.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        {rows.map((row) => (
          <div className="v-table-row" key={row[0]}>
            {row.map((cell, i) => (
              <span key={`${row[0]}-${i}`}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="v-biz-grid" style={{ marginTop: 36 }}>
        <article>
          <h3 className="vertical-body-text">vs ManageBac：补中国那一半</h3>
          <p className="vertical-caption">
            ManageBac 管 IB 课程（西方一半），Spectra 管家校沟通、日常运营与中国合规（中国一半）— 不替代、不硬碰。
          </p>
        </article>
        <article>
          <h3 className="vertical-body-text">vs 校宝 / 校校：一代产品代差</h3>
          <p className="vertical-caption">
            校宝走美团模式（2,000 元/校/年、12 万广度客户）、校校仍是&ldquo;传统 SaaS + AI 模块&rdquo;；
            Spectra 以 Agent 原生架构，做深度服务生意。
          </p>
        </article>
      </div>
    </VerticalSection>
  );
}
