import { SlideCanvas, SlideMetric } from "./SlideShared.jsx";

export function Slide01Hero(props) {
  return (
    <SlideCanvas {...props} title="Spectra" marker="AI School OS">
      <p className="slide-body">AI 时代的学校操作系统</p>
      <p className="slide-caption slide-hero-copy">
        让教育数据被轻松录入、深度理解、即时使用。
      </p>
      <div className="slide-metric-row">
        <SlideMetric value="1000+" label="国际/高端学校" />
        <SlideMetric value="AI" label="原生 Agent" />
        <SlideMetric value="2B" label="学校 SaaS" />
      </div>
    </SlideCanvas>
  );
}
