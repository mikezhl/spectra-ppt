import { VerticalSection } from "./VerticalShared.jsx";

export function Vertical09Business(props) {
  return (
    <VerticalSection {...props} title="商业模式：2B 模式，面向学校收费">
      <div className="v-biz-grid">
        <article>
          <h3 className="vertical-body-text">目标市场</h3>
          <p className="vertical-caption">
            先切国际学校 — 付费意愿强、决策链短、新技术接受度高；随后横向拓展民办与公立学校。
          </p>
          <h3 className="vertical-body-text">收费模式</h3>
          <p className="vertical-caption">
            SaaS 年费（按学校规模定价） + 家长端增值订阅 = 双轨收入。
          </p>
        </article>
        <article>
          <h3 className="vertical-body-text">合作伙伴</h3>
          <p className="vertical-caption">
            已与上海协和国际高中达成 Design Partner 合作 → 协和教育集团所有高中 → 横向拓展至其他学校。
          </p>
          <h3 className="vertical-body-text">切换成本壁垒</h3>
          <div className="v-pill-row">
            <span className="v-pill vertical-caption">数据沉淀</span>
            <span className="v-pill vertical-caption">行为习惯</span>
            <span className="v-pill vertical-caption">信任关系</span>
          </div>
          <p className="vertical-caption" style={{ marginTop: 16 }}>
            三层叠加，切换成本随时间指数增长。
          </p>
        </article>
      </div>
    </VerticalSection>
  );
}
