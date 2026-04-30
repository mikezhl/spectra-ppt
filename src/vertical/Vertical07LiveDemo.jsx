import { Send } from "lucide-react";
import { VerticalSection } from "./VerticalShared.jsx";

export function Vertical07LiveDemo(props) {
  return (
    <VerticalSection {...props} title="试试看：向 Agent 提问">
      <div className="v-demo">
        <div className="v-demo-tabs">
          <button>学情分析</button>
          <button>教学建议</button>
          <button>校园管理</button>
        </div>
        <div className="v-demo-box">
          <p className="vertical-body-text">请帮我分析一下学生最近一个月的数学情况，并给出后续教学建议。</p>
          <Send className="v-send" />
        </div>
        <p className="vertical-caption v-demo-note">
          基于校内数据与教师知识图谱，由 Spectra Agent 生成。
        </p>
      </div>
    </VerticalSection>
  );
}
