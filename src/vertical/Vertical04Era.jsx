import { VerticalSection } from "./VerticalShared.jsx";

const eras = [
  ["~2010", "纸质时代", "成绩手写，评语手写，信息留在纸上和脑子里。"],
  ["2010-2025", "信息化时代", "纸质转表格，系统完成存储，但没有完成理解。"],
  ["现在", "Agent 时代", "自然语言录入，对话式查询，多维关联与主动服务。"],
];

export function Vertical04Era(props) {
  return (
    <VerticalSection {...props} title="教育信息化的三个时代">
      <div className="v-era-band">
        {eras.map(([time, title, text], index) => (
          <article key={title} className={index === 2 ? "is-current" : ""}>
            <p className="vertical-caption">{time}</p>
            <h3 className="vertical-body-text">{title}</h3>
            <p className="vertical-caption">{text}</p>
          </article>
        ))}
      </div>
    </VerticalSection>
  );
}
