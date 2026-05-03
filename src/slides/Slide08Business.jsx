import { SlideCanvas } from "./SlideShared.jsx";

const headers = ["维度", "ManageBac", "Toddle", "校宝在线", "校校 Campus", "Spectra"];

const rows = [
  ["核心定位", "IB 课程管理", "IB 新替代", "本土 SaaS", "语培 + 国际校", "AI Agent 教务中台"],
  ["目标客户", "IB 国际学校", "IB 国际学校", "体制内 / 培训", "国际 / 语培", "国际 / 高端学校"],
  ["国际课程支持", "IB 深度", "IB 深度", "几乎无", "浅", "原生设计"],
  ["微信沟通", "零", "零", "通知推送", "小程序通知", "对话式 Agent"],
  ["数据录入", "表单填写", "表单填写", "表单填写", "表单填写", "语音 / 自然语言"],
  ["AI 能力", "基础写作助手", "6 个 AI 工具", "批改 + 模考", "作文批改", "Agent 全链路"],
  ["产品哲学", "让老师填表", "让老师填表", "让老师填表", "让老师填表", "让 Agent 替老师干活"],
];

export function Slide08Business(props) {
  return (
    <SlideCanvas
      {...props}
      title="AI Agent 教务中台是无人区"
      subtitle="传统系统解决了存储，没解决理解；Spectra 从数据采集到 Agent 服务全链路打通。"
      className="slide-dense"
    >
      <div className="slide-comparison-table">
        <div className="slide-comparison-head">
          {headers.map((header) => (
            <span key={header}>{header}</span>
          ))}
        </div>
        {rows.map((row) => (
          <div className="slide-comparison-row" key={row[0]}>
            {row.map((cell, index) => (
              <span key={`${row[0]}-${index}`}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="slide-insight-row">
        <article>
          <h3 className="slide-caption slide-insight-title">vs ManageBac：补中国那一半</h3>
          <p className="slide-caption">
            ManageBac 管 IB 课程，Spectra 管家校沟通、日常运营与中国合规。
          </p>
        </article>
        <article>
          <h3 className="slide-caption slide-insight-title">vs 校宝 / 校校：一代产品代差</h3>
          <p className="slide-caption">
            竞品仍是“传统 SaaS + AI 模块”，Spectra 是 Agent 原生架构。
          </p>
        </article>
      </div>
    </SlideCanvas>
  );
}
