import { SlideCanvas } from "./SlideShared.jsx";

export function Slide03WhyNow(props) {
  return (
    <SlideCanvas {...props} title="为什么是现在">
      <div className="slide-three-points">
        <article><strong>01</strong><span>模型成熟，成本下降</span></article>
        <article><strong>02</strong><span>AI+教育政策就位</span></article>
        <article><strong>03</strong><span>国际学校窗口期打开</span></article>
      </div>
    </SlideCanvas>
  );
}
