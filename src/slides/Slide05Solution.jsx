import { SlideCanvas } from "./SlideShared.jsx";

export function Slide05Solution(props) {
  return (
    <SlideCanvas {...props} title="数据层 + Agent 层">
      <div className="slide-two-col">
        <div>
          <h3>全维度数据库</h3>
          <p>课堂、作业、考试、活动与碎片化信息。</p>
        </div>
        <div>
          <h3>每人专属 Agent</h3>
          <p>家长、老师、学生、管理者即时查询与生成。</p>
        </div>
      </div>
    </SlideCanvas>
  );
}
