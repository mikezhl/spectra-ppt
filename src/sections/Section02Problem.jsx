import { GraduationCap, School, UserRound, UsersRound } from "lucide-react";
import { BulletList, Panel, SlideHeader } from "./shared.jsx";

const roles = [
  {
    title: "老师",
    icon: GraduationCap,
    items: [
      "家长沟通低效，耗费大量精力",
      "学情数据分散，无法形成完整学生画像",
      "报告、填表、通知、评语占用大量时间",
    ],
  },
  {
    title: "家长",
    icon: UsersRound,
    items: [
      "无法实时了解孩子表现",
      "反馈模糊，评价敷衍，数据不足",
      "长期信息滞后，问题发现太晚",
    ],
  },
  {
    title: "管理层",
    icon: School,
    items: [
      "数据分散，查询困难",
      "全校趋势依赖人工拉表汇总",
      "决策靠经验，缺乏数据支撑",
    ],
  },
  {
    title: "学生",
    icon: UserRound,
    items: [
      "高中经历没有被系统性记录",
      "毕业后难以回忆和导出成长档案",
      "作业千人一面，缺乏个性化路径",
    ],
  },
];

export function Section02Problem({ index, total }) {
  return (
    <div className="slide-content">
      <SlideHeader index={index} total={total} title="四方痛点" />
      <div className="grid grid-cols-4 gap-6">
        {roles.map((role, roleIndex) => {
          const Icon = role.icon;
          return (
            <Panel
              key={role.title}
              className="h-full"
              delay={roleIndex * 90}
            >
              <div className="icon-box mb-7">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="t-body mb-7 font-semibold text-[var(--ink)]">
                {role.title}
              </h3>
              <BulletList items={role.items} />
            </Panel>
          );
        })}
      </div>
    </div>
  );
}
