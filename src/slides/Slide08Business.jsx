import { SlideCanvas } from "./SlideShared.jsx";

export function Slide08Business(props) {
  return (
    <SlideCanvas {...props} title="商业模式">
      <div className="slide-two-col">
        <div><h3>SaaS 年费</h3><p>面向学校收费，先从国际学校切入。</p></div>
        <div><h3>增值订阅</h3><p>家长端报告、提醒与长期成长档案。</p></div>
      </div>
    </SlideCanvas>
  );
}
