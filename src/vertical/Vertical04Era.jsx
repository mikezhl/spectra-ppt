import { VerticalSection } from "./VerticalShared.jsx";

const eras = [
  [
    "~2010",
    "纸质时代",
    [
      "成绩手写，评语手写",
      "家长会一学期一次",
      "信息留在纸上和脑子里",
    ],
  ],
  [
    "2010 – 2025",
    "信息化时代",
    [
      "纸质 → 电子表格",
      "线下 → 微信沟通",
      "解决了存储，没解决理解",
      "数字化 ≠ 智能化",
    ],
  ],
  [
    "现在",
    "Agent 时代",
    [
      "语音 / 自然语言，AI 自动归档",
      "对话式查询，想问什么问什么",
      "AI 关联多维数据、主动发现问题",
      "每个人都有专属 Agent",
    ],
  ],
];

export function Vertical04Era(props) {
  return (
    <VerticalSection {...props} title="教育信息化的三个时代">
      <div className="v-era-band">
        {eras.map(([time, title, items], index) => (
          <article key={title} className={index === 2 ? "is-current" : ""}>
            <p className="vertical-caption">{time}</p>
            <h3 className="vertical-body-text">{title}</h3>
            <ul className="v-list" style={{ marginTop: 18 }}>
              {items.map((item) => (
                <li key={item} className="vertical-caption">
                  <span>· {item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </VerticalSection>
  );
}
