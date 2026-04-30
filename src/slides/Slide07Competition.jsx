import { SlideCanvas } from "./SlideShared.jsx";

export function Slide07Competition(props) {
  return (
    <SlideCanvas {...props} title="竞争格局">
      <div className="slide-position">
        <span>传统系统</span>
        <strong>Spectra</strong>
        <span>单点 AI 工具</span>
      </div>
      <p className="slide-body">唯一打通数据采集到 Agent 服务的全链路产品。</p>
    </SlideCanvas>
  );
}
