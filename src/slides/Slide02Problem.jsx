import { GraduationCap, School, UserRound, UsersRound } from "lucide-react";
import { SlideCanvas } from "./SlideShared.jsx";

const roles = [
  {
    title: "老师",
    icon: GraduationCap,
    items: ["家长沟通低效，耗费大量精力", "学情散落在系统、脑子和纸上", "报告、表格、通知、评语挤占教学时间"],
  },
  {
    title: "家长",
    icon: UsersRound,
    items: ["无法实时了解孩子表现", "反馈模糊、评价敷衍、数据不足", "长期处于信息滞后状态"],
  },
  {
    title: "管理层",
    icon: School,
    items: ["数据分散，查询困难", "全校趋势依赖手动拉表汇总", "决策靠经验，缺乏数据支撑"],
  },
  {
    title: "学生",
    icon: UserRound,
    items: ["有价值经历没有被系统记录", "毕业后难以回忆、难以呈现", "作业千人一面，缺少个性化路径"],
  },
];

export function Slide02Problem(props) {
  return (
    <SlideCanvas
      {...props}
      title="四方痛点"
      subtitle="学校里每个人都在受苦。"
      className="slide-dense"
    >
      <div className="slide-role-grid">
        {roles.map(({ title, icon: Icon, items }) => (
          <article key={title}>
            <header>
              <Icon className="slide-icon" />
              <h3 className="slide-body">{title}</h3>
            </header>
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
