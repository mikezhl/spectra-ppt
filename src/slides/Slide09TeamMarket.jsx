import { SlideCanvas } from "./SlideShared.jsx";

const business = [
  {
    title: "目标市场",
    text: "先切国际学校 — 付费意愿强、决策链短、新技术接受度高；随后横向拓展民办与公立学校。",
  },
  {
    title: "收费模式",
    text: "SaaS 年费（按学校规模定价） + 家长端增值订阅，形成学校端与家庭端双轨收入。",
  },
  {
    title: "合作伙伴",
    text: "已与上海协和国际高中达成 Design Partner 合作，再进入协和教育集团所有高中，之后横向拓展至其他学校。",
  },
  {
    title: "切换成本壁垒",
    text: "数据沉淀、行为习惯、信任关系三层叠加，切换成本随时间指数增长。",
    pills: ["数据沉淀", "行为习惯", "信任关系"],
  },
];

export function Slide09TeamMarket(props) {
  return (
    <SlideCanvas
      {...props}
      title="商业模式"
      subtitle="2B 模式，面向学校收费。"
      className="slide-dense"
    >
      <div className="slide-business-only-grid">
        {business.map(({ title, text, pills }) => (
          <article key={title}>
            <h3 className="slide-body">{title}</h3>
            <p className="slide-caption">{text}</p>
            {pills ? (
              <div className="slide-pill-row">
                {pills.map((pill) => (
                  <span className="slide-caption" key={pill}>{pill}</span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </SlideCanvas>
  );
}
