import { SlideCanvas } from "./SlideShared.jsx";

export function Slide04Era(props) {
  return (
    <SlideCanvas {...props} title="教育信息化进入 Agent 时代">
      <div className="slide-timeline">
        <span>纸质时代</span>
        <span>信息化时代</span>
        <span className="is-active">Agent 时代</span>
      </div>
      <p className="slide-body">从“记录和存储”走向“理解和主动服务”。</p>
    </SlideCanvas>
  );
}
