import { VerticalSection } from "./VerticalShared.jsx";

export function Vertical10MarketVision(props) {
  return (
    <VerticalSection {...props} title="市场规模与愿景">
      <div className="v-split">
        <div className="v-market">
          <p><strong>&gt;800</strong><span>亿元，中国 K12 教育信息化与服务市场</span></p>
          <p><strong>1000</strong><span>万人民币，本轮融资需求</span></p>
          <p><strong>10%</strong><span>拟出让股权</span></p>
        </div>
        <div className="v-vision">
          <p>让教育因数据而更公平、更高效、更有温度。</p>
          <span>2027+ 成为 AI 时代的学校操作系统</span>
        </div>
      </div>
    </VerticalSection>
  );
}
