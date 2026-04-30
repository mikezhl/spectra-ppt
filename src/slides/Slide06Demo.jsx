import { SlideCanvas } from "./SlideShared.jsx";

export function Slide06Demo(props) {
  return (
    <SlideCanvas {...props} title="试试看：向 Agent 提问">
      <div className="slide-demo-card">
        <p>“孩子这一个月数学怎么样？”</p>
        <span>成绩趋势 + 作业完成度 + 课堂表现 + 薄弱知识点</span>
      </div>
    </SlideCanvas>
  );
}
