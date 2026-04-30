import { VerticalSection } from "./VerticalShared.jsx";

const rows = [
  ["AI 原生", "是", "部分", "否", "否"],
  ["统一教育数据库", "是", "部分", "否", "部分"],
  ["自然语言录入", "深", "中", "浅", "中"],
  ["开放与扩展", "开放", "部分开放", "封闭", "封闭"],
  ["用户体验", "极简现代", "复杂", "单点较好", "传统"],
];

export function Vertical08Competition(props) {
  return (
    <VerticalSection {...props} title="竞争格局">
      <div className="v-table">
        <div className="v-table-head">
          <span />
          <span>Spectra</span>
          <span>综合平台型厂商</span>
          <span>单点工具型产品</span>
          <span>传统软件厂商</span>
        </div>
        {rows.map((row) => (
          <div className="v-table-row" key={row[0]}>
            {row.map((cell) => (
              <span key={cell}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </VerticalSection>
  );
}
