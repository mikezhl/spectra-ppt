import { GraduationCap, School, UserRound, UsersRound } from "lucide-react";
import { VerticalCell, VerticalList, VerticalSection } from "./VerticalShared.jsx";

const roles = [
  {
    title: "老师",
    icon: GraduationCap,
    items: ["家长沟通低效", "学情数据分散", "报告、表格、通知消耗大量时间"],
  },
  {
    title: "家长",
    icon: UsersRound,
    items: ["反馈滞后", "评价模糊", "无法获得个性化建议"],
  },
  {
    title: "管理层",
    icon: School,
    items: ["数据孤岛", "全校趋势依赖人工汇总", "决策缺少数据支撑"],
  },
  {
    title: "学生",
    icon: UserRound,
    items: ["成长经历缺少记录", "学习路径千人一面", "升学材料难以沉淀"],
  },
];

export function Vertical02Problem(props) {
  return (
    <VerticalSection {...props} title="四方痛点">
      <div className="v-grid-four">
        {roles.map((role) => (
          <VerticalCell key={role.title} title={role.title} icon={role.icon}>
            <VerticalList items={role.items} />
          </VerticalCell>
        ))}
      </div>
    </VerticalSection>
  );
}
