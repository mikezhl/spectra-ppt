import { BookOpen, Building2, UserRound, UsersRound } from "lucide-react";
import { VerticalCell, VerticalList, VerticalSection } from "./VerticalShared.jsx";

const agents = [
  {
    title: "家长端 Agent",
    meta: "微信小程序对话",
    icon: UsersRound,
    items: [
      "随时查询成绩 / 作业 / 课堂表现",
      "每周学情周报推送",
      "成绩趋势可视化图表",
      "严格数据隔离",
    ],
  },
  {
    title: "老师端 Agent",
    meta: "查询 + 分析 + 生成",
    icon: BookOpen,
    items: [
      "学生全维度画像",
      "班级知识点薄弱分析",
      "自动生成评语和报告",
      "30 秒语音录入",
      "学情预警",
    ],
  },
  {
    title: "学生端 Agent",
    meta: "成长记录 + 个性化学习",
    icon: UserRound,
    items: [
      "自主创建事件：社团 / 比赛 / 项目",
      "所有经历永久保存，毕业后可回看",
      "个性化作业",
      "升学一键导出活动档案",
    ],
  },
  {
    title: "管理层 Agent",
    meta: "数据看板 + 决策支持",
    icon: Building2,
    items: [
      "全校学情趋势实时看板",
      "跨班级 / 年级数据横向对比",
      "异常信号预警与归因分析",
      "一键生成校务汇报材料",
    ],
  },
];

export function Vertical06AgentLayer(props) {
  return (
    <VerticalSection {...props} title="Agent 层：每个人都有专属 Agent">
      <p className="vertical-caption" style={{ margin: "0 0 30px", color: "var(--muted)" }}>
        Agent 访问数据库，为家长、老师、学生与管理层提供个性化服务。
      </p>
      <div className="v-grid-2x2">
        {agents.map(({ title, meta, icon: Icon, items }) => (
          <VerticalCell key={title} title={title} meta={meta} icon={Icon}>
            <VerticalList items={items} />
          </VerticalCell>
        ))}
      </div>
    </VerticalSection>
  );
}
