import { SlideCanvas, SlideMetric } from "./SlideShared.jsx";

export function Slide09TeamMarket(props) {
  return (
    <SlideCanvas {...props} title="团队与市场">
      <div className="slide-metric-row">
        <SlideMetric value="10年+" label="全栈与 Agent 经验" />
        <SlideMetric value="1000+" label="目标学校" />
        <SlideMetric value="100亿" label="TAM" />
      </div>
    </SlideCanvas>
  );
}
