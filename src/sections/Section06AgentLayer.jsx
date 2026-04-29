import { MessageCircle, ShieldCheck, UserCog } from "lucide-react";
import { BulletList, Panel, SlideHeader } from "./shared.jsx";

const agents = [
  {
    title: "家长端 Agent",
    subtitle: "微信小程序",
    icon: MessageCircle,
    items: ["随时查询成绩/作业/课堂表现", "每周学情周报推送", "成绩趋势可视化", "严格数据隔离"],
  },
  {
    title: "老师端 Agent",
    subtitle: "查询 + 分析 + 生成",
    icon: UserCog,
    items: ["学生全维度画像", "班级薄弱知识点分析", "自动生成评语和报告", "30 秒语音录入", "学情预警"],
  },
  {
    title: "学生端 Agent",
    subtitle: "成长记录 + 个性化学习",
    icon: ShieldCheck,
    items: ["自主创建社团/比赛/项目事件", "经历永久保存，毕业后可回看", "个性化作业", "升学时一键导出活动档案"],
  },
];

export function Section06AgentLayer({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader
        index={index}
        total={total}
        title="每个人都有专属 Agent"
        subtitle="Agent 访问数据库，为家长、老师和学生提供个性化服务"
      />
      <div className="grid grid-cols-3 gap-6">
        {agents.map((agent, agentIndex) => {
          const Icon = agent.icon;
          return (
            <Panel
              key={agent.title}
              className="data-line h-full"
              delay={agentIndex * 110}
            >
              <div className="icon-box mb-7">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="t-body font-semibold text-[var(--ink)]">
                {agent.title}
              </h3>
              <p className="t-caption deck-label mb-7 mt-2 font-semibold">
                {agent.subtitle}
              </p>
              <BulletList items={agent.items} compact />
            </Panel>
          );
        })}
      </div>
    </div>
  );
}
