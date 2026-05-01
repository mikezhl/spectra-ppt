import { GraduationCap, School, UserRound, UsersRound } from "lucide-react";
import { VerticalCell, VerticalList, VerticalSection } from "./VerticalShared.jsx";

const roles = [
  {
    title: "老师",
    icon: GraduationCap,
    items: [
      "家长沟通低效，耗费大量精力",
      "学情分散：成绩在系统、表现在脑子里、活动在纸上",
      "写报告、填表、发通知、写评语占据大量时间",
    ],
  },
  {
    title: "家长",
    icon: UsersRound,
    items: [
      "无法实时了解孩子表现，学校反馈不及时",
      "收到的反馈模糊、评价敷衍、数据不足",
      "长期处于信息滞后状态",
    ],
  },
  {
    title: "管理层",
    icon: School,
    items: [
      "数据分散，查询困难",
      "想看全校趋势要手动拉表、人工汇总",
      "决策靠经验，缺乏数据支撑",
    ],
  },
  {
    title: "学生",
    icon: UserRound,
    items: [
      "高中大量有价值的经历没有被系统记录",
      "毕业后难以回忆、难以呈现",
      "作业千人一面，缺乏个性化学习路径",
    ],
  },
];

export function Vertical02Problem(props) {
  return (
    <VerticalSection {...props} title="四方痛点：学校里每个人都在受苦">
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
