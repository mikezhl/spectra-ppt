import { BookOpen, Building2, UserRound, UsersRound } from "lucide-react";
import { SlideCanvas } from "./SlideShared.jsx";

const agents = [
  {
    title: "家长端 Agent",
    meta: "微信小程序对话",
    icon: UsersRound,
    items: ["随时查询成绩 / 作业 / 课堂表现", "每周学情周报 + 严格数据隔离"],
  },
  {
    title: "老师端 Agent",
    meta: "查询 + 分析 + 生成",
    icon: BookOpen,
    items: ["学生画像 + 班级薄弱分析", "30 秒录入，自动生成评语和预警"],
  },
  {
    title: "学生端 Agent",
    meta: "成长记录 + 个性化学习",
    icon: UserRound,
    items: ["自主创建事件，经历永久保存", "个性化作业，升学导出档案"],
  },
  {
    title: "管理层 Agent",
    meta: "数据看板 + 决策支持",
    icon: Building2,
    items: ["全校学情趋势实时看板", "跨班级对比，异常预警归因"],
  },
];

export function Slide06Demo(props) {
  return (
    <SlideCanvas
      {...props}
      title="Agent 层"
      subtitle="每个人都有专属 Agent；Agent 访问数据库，为家长、老师、学生与管理层提供个性化服务。"
      className="slide-dense"
    >
      <div className="slide-agent-grid">
        {agents.map(({ title, meta, icon: Icon, items }) => (
          <article key={title}>
            <div className="slide-card-head">
              <Icon className="slide-icon" />
              <div>
                <p className="slide-caption slide-card-meta">{meta}</p>
                <h3 className="slide-body">{title}</h3>
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
    </SlideCanvas>
  );
}
