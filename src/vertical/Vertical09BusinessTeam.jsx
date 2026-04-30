import { VerticalSection } from "./VerticalShared.jsx";

export function Vertical09BusinessTeam(props) {
  return (
    <VerticalSection {...props} title="合作与商业模式 / 团队">
      <div className="v-split">
        <div>
          <p className="vertical-body-text">2B 学校 SaaS + 家长增值订阅</p>
          <p className="vertical-caption">
            先切国际学校，以 Design Partner 深度共创形成数据沉淀、行为习惯和信任壁垒。
          </p>
        </div>
        <div className="v-numbers">
          <div><strong>15+</strong><span>核心成员目标</span></div>
          <div><strong>10年+</strong><span>技术与教育行业经验</span></div>
          <div><strong>80%+</strong><span>研发占比</span></div>
        </div>
      </div>
    </VerticalSection>
  );
}
