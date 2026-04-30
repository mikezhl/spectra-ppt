import { SlideCanvas } from "./SlideShared.jsx";

const items = ["老师：琐事过载", "家长：反馈滞后", "管理层：数据孤岛", "学生：成长无档案"];

export function Slide02Problem(props) {
  return (
    <SlideCanvas {...props} title="问题不是没有数据，而是数据用不起来">
      <div className="slide-four-grid">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </SlideCanvas>
  );
}
