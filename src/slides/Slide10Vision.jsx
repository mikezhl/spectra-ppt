import { SlideCanvas } from "./SlideShared.jsx";
import ceoAvatar from "../assets/founders/ceo-li-yi-avatar.jpg";
import ctoAvatar from "../assets/founders/cto-zhu-haolang-avatar.jpg";

const founders = [
  {
    initial: "李",
    avatar: ceoAvatar,
    avatarClass: "is-ceo",
    name: "李翼",
    role: "CEO / 创始人",
    items: [
      "牛津大学本硕",
      "18 岁创立首家教育机构，与上海及苏州近 10 所国际学校深度合作",
      "4 年国际教育行业经验，深入理解学校、老师与家长的真实需求",
      "曾任 A2A 初创公司 COO，入选硅谷 Founders Inc. 孵化器",
    ],
  },
  {
    initial: "朱",
    avatar: ctoAvatar,
    avatarClass: "is-cto",
    name: "朱浩朗",
    role: "CTO / 联合创始人",
    items: [
      "牛津大学本硕博",
      "10 年开发经验，全栈工程师",
      "OpenClaw Hackathon 获奖者",
      "独立开发智能师生匹配系统",
    ],
  },
];

const reasons = [
  ["行业经验", "CEO 4 年深耕国际教育，近 10 所学校合作基础"],
  ["客户信任", "Design Partner 已就位，不是冷启动"],
  ["技术能力", "CTO 10 年全栈 + Agent 实战经验"],
  ["校招能力", "牛津校友网络，可快速组建核心团队"],
];

export function Slide10Vision(props) {
  return (
    <SlideCanvas
      {...props}
      title="为什么是我们"
      subtitle="教育行业老兵 + 顶尖技术团队。"
      className="slide-dense"
    >
      <div className="slide-team-only">
        <div className="slide-team-stack">
          {founders.map(({ avatar, avatarClass, name, role, items }) => (
            <article key={name}>
              <div className="slide-team-head">
                <div className={`slide-avatar ${avatarClass}`}>
                  <img src={avatar} alt={`${name}头像`} />
                </div>
                <div>
                  <h3 className="slide-body">{name}</h3>
                  <p className="slide-caption">{role}</p>
                </div>
              </div>
              <ul className="slide-caption slide-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="slide-team-reasons">
          <h3 className="slide-caption slide-reasons-heading">为什么是我们来做？</h3>
          {reasons.map(([title, text]) => (
            <article key={title}>
              <strong className="slide-caption">{title}</strong>
              <p className="slide-caption">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </SlideCanvas>
  );
}
