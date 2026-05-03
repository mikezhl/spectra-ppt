import { SlideCanvas } from "./SlideShared.jsx";

const eras = [
  {
    time: "~2010",
    title: "纸质时代",
    items: ["成绩手写，评语手写", "家长会一学期一次", "信息留在纸上和脑子里"],
  },
  {
    time: "2010 - 2025",
    title: "信息化时代",
    items: ["纸质转电子表格", "线下转微信沟通", "解决存储，没解决理解"],
  },
  {
    time: "现在",
    title: "Agent 时代",
    items: ["语音 / 自然语言录入", "想问什么问什么", "每个人都有专属 Agent"],
  },
];

export function Slide04Era(props) {
  return (
    <SlideCanvas
      {...props}
      title="教育信息化的三个时代"
      subtitle="从记录和存储走向理解和主动服务。"
      className="slide-dense"
    >
      <div className="slide-era-band">
        {eras.map(({ time, title, items }, index) => (
          <article key={title} className={index === 2 ? "is-active" : ""}>
            <p className="slide-caption">{time}</p>
            <h3 className="slide-body">{title}</h3>
            <ul className="slide-caption slide-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="slide-caption slide-era-note">数字化终于进入智能化。</p>
    </SlideCanvas>
  );
}
