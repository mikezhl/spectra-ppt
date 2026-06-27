import { useEffect } from 'react'
import {
  Clock, Heart, EyeOff, FileX, Search, BrainCog,
  FileText, Monitor, Bot, Mic, Award, Layers, ArrowRight,
  Users, GraduationCap, MessageCircle, BarChart3, CalendarCheck,
  FileEdit, Shield, Bell, Building2, School, CreditCard,
  Handshake, Lock, Briefcase, Code,
} from 'lucide-react'

const W = 750

export default function AppScroll() {
  useEffect(() => {
    const s = (el) => { el.style.overflow = 'visible'; el.style.height = 'auto'; el.style.width = W + 'px' }
    s(document.documentElement); s(document.body); s(document.getElementById('root'))
    document.body.style.background = '#ffffff'
  }, [])

  return (
    <div style={{ width: W, fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", "Microsoft YaHei", sans-serif' }}>
      <Cover />
      <Divider />
      <PainPoints />
      <Divider />
      <RootCause />
      <Divider />
      <Timeline />
      <Divider />
      <DataLayer />
      <Divider />
      <AgentLayer />
      <Divider />
      <LiveDemo />
      <Divider />
      <WhyUs />
      <Footer />
    </div>
  )
}

/* ── Shared ────────────────────────────────── */

const sectionStyle = { width: W, padding: '60px 48px', position: 'relative', boxSizing: 'border-box' }
const labelStyle = { color: '#0078D4', fontSize: 16, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }
const h2Style = { fontSize: 42, fontWeight: 700, color: '#111827', lineHeight: 1.2, marginBottom: 12, marginTop: 0 }
const subStyle = { fontSize: 22, color: '#9ca3af', marginBottom: 36, marginTop: 0 }
const cardStyle = { background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '28px 28px', marginBottom: 20 }
const cardTitleStyle = { fontSize: 28, fontWeight: 600, color: '#111827', marginBottom: 12, marginTop: 0 }
const textStyle = { fontSize: 22, lineHeight: 1.8, color: '#6b7280', margin: 0 }
const dotStyle = { width: 6, height: 6, borderRadius: '50%', background: '#0078D4', flexShrink: 0, marginTop: 12 }
const iconBoxStyle = { width: 48, height: 48, borderRadius: 12, background: 'rgba(0,120,212,0.08)', border: '1px solid rgba(0,120,212,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }

function BulletItem({ children, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
      <div style={{ ...dotStyle, background: color || '#0078D4' }} />
      <p style={textStyle}>{children}</p>
    </div>
  )
}

function Divider() {
  return <div style={{ width: W, height: 1, background: 'rgba(0,0,0,0.06)' }} />
}

function SectionLabel({ children }) {
  return <p style={labelStyle}>{children}</p>
}

function IconBox({ Icon, size = 22 }) {
  return (
    <div style={iconBoxStyle}>
      <Icon size={size} color="#0078D4" />
    </div>
  )
}

/* ── Slide 01: Cover ──────────────────────── */

function Cover() {
  return (
    <div style={{ width: W, height: 520, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <h1 style={{ fontSize: 96, fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>Spectra</h1>
      <p style={{ fontSize: 30, color: '#9ca3af', letterSpacing: '0.15em', marginTop: 16, marginBottom: 48 }}>智能教务管理系统</p>
    </div>
  )
}

/* ── Slide 02: Pain Points (vertical stack) ── */

function PainPoints() {
  const groups = [
    { icon: Clock, title: '老师', items: ['家长沟通低效，耗费大量精力', '学情跟踪困难，成绩在教务系统、表现在老师脑子里、活动记录在纸上，无法形成完整学生画像', '琐事繁多，写报告，填表，发通知，写评语花费大量时间'] },
    { icon: Heart, title: '家长', items: ['无法实时了解孩子的表现，学校反馈不及时', '收到的反馈模糊，评价敷衍，数据不足', '长期信息滞后'] },
    { icon: EyeOff, title: '管理层的盲区', items: ['数据分散，查询困难', '想看全校学情趋势，要手动拉表、人工汇总', '决策靠经验，缺乏数据支撑'] },
  ]

  return (
    <div style={sectionStyle}>
      <SectionLabel>Pain Points</SectionLabel>
      <h2 style={h2Style}>三方痛点</h2>
      {groups.map((g) => (
        <div key={g.title} style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <IconBox Icon={g.icon} />
            <h3 style={cardTitleStyle}>{g.title}</h3>
          </div>
          {g.items.map((item, i) => <BulletItem key={i}>{item}</BulletItem>)}
        </div>
      ))}
    </div>
  )
}

/* ── Slide 04: Root Cause (vertical stack) ── */

function RootCause() {
  const reasons = [
    { icon: FileX, num: '01', title: '最有价值的数据根本录不进传统系统', desc: '课堂观察、情绪状态、作业考试分析——这些最重要的信息都没有录入系统。门槛太高，老师没有精力每天写大量报告' },
    { icon: Search, num: '02', title: '数据存进去了，但问不出来', desc: '家长想知道"孩子最近数学怎么样"——需要老师人工汇总成绩趋势、作业表现、课堂参与，再组织语言回复。传统系统只能按固定维度出报表，无法响应个性化的、自然语言的提问。' },
    { icon: BrainCog, num: '03', title: '核心瓶颈：不是连接，是理解', desc: null },
  ]

  return (
    <div style={sectionStyle}>
      <SectionLabel>The Root Cause</SectionLabel>
      <h2 style={h2Style}>互联网时代为什么没有解决这些问题？</h2>
      {reasons.map((r) => (
        <div key={r.num} style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: 'rgba(0,120,212,0.2)', fontFamily: 'monospace' }}>{r.num}</span>
            <IconBox Icon={r.icon} />
            <h3 style={{ ...cardTitleStyle, marginBottom: 0 }}>{r.title}</h3>
          </div>
          {r.desc ? (
            <p style={textStyle}>{r.desc}</p>
          ) : (
            <p style={textStyle}>
              互联网解决了连接和存储问题。但学校场景需要的是：
              <span style={{ color: '#0078D4', fontWeight: 600 }}>理解</span>语音里提到了哪个学生，
              <span style={{ color: '#0078D4', fontWeight: 600 }}>关联</span>成绩下滑和出勤异常，
              <span style={{ color: '#0078D4', fontWeight: 600 }}>主动</span>在问题恶化前发出预警。
              这些能力在大语言模型和 Agent 技术成熟之前，无法以合理成本实现。
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

/* ── Slide 03: Timeline (vertical stack, shorter cards) ── */

function Timeline() {
  const eras = [
    { icon: FileText, period: '~2010', title: '纸质时代', points: ['成绩手写登记，评语手写', '家长靠家长会了解情况，一学期一次', '所有信息在纸上和老师脑子里'], active: false },
    { icon: Monitor, period: '2010–2025', title: '信息化时代', points: ['纸质表格 → 电子表格', '线下沟通 → 微信沟通', '解决了存储问题，没解决理解和分析问题', '做到了数字化，没做到智能化'], active: false },
    { icon: Bot, period: '现在', title: 'Agent 时代', points: ['输入：语音、标签、自然语言，系统自动理解和归档', '输出：对话式查询，想问什么问什么', 'AI 能理解非结构化信息、关联多维度数据、主动发现问题', '每个学生有班主任 Agent，每个老师有秘书 Agent'], active: true },
  ]

  return (
    <div style={sectionStyle}>
      <SectionLabel>Where We Are</SectionLabel>
      <h2 style={h2Style}>我们处在的位置</h2>
      {eras.map((era) => (
        <div key={era.title} style={{
          ...cardStyle,
          ...(era.active ? { background: 'rgba(0,120,212,0.04)', borderColor: 'rgba(0,120,212,0.2)' } : {}),
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <IconBox Icon={era.icon} />
            <div>
              <span style={{ fontSize: 18, fontFamily: 'monospace', color: era.active ? '#0078D4' : '#9ca3af' }}>{era.period}</span>
              <h3 style={{ ...cardTitleStyle, marginBottom: 0, color: era.active ? '#111827' : '#6b7280' }}>{era.title}</h3>
            </div>
          </div>
          {era.points.map((p, i) => <BulletItem key={i} color={era.active ? '#0078D4' : '#d1d5db'}>{p}</BulletItem>)}
        </div>
      ))}
    </div>
  )
}

/* ── Slide 05: Data Layer (vertical stack) ── */

function DataLayer() {
  const dataTypes = [
    { icon: Mic, title: '课堂表现', tag: '语音录入', desc: '任课老师上课后点击按钮，语音或文字快速录入课堂评价', details: ['语音自动转文字，识别涉及的学生', '行为、情绪、参与度自动分类标签'], example: '"小明今天回答了两个问题，挺积极的。小红下午好像不太开心。"' },
    { icon: FileText, title: '课后作业', tag: '自动分析', desc: '上传电子版作业，系统自动识别并分析', details: ['自动统计提交情况与完成率', '错题识别，自动生成错题本（标红圈）', '按知识点分析薄弱项'], example: null },
    { icon: Award, title: '考试成绩', tag: '智能识别', desc: '智能识别分数与错题，全自动生成分析', details: ['每道题对/错人数统计', '个人报告 + 班级横向对比', '知识点掌握度热力分析'], example: null },
    { icon: Layers, title: '碎片化信息', tag: '轻量录入', desc: '晚自习、体育活动、社团参与等日常信息', details: ['简单语言录入，30 秒完成', '自动关联到学生档案', '丰富学生画像维度'], example: null },
  ]

  return (
    <div style={sectionStyle}>
      <SectionLabel>Solution — Data Layer</SectionLabel>
      <h2 style={h2Style}>构建更完善的数据库</h2>
      <p style={subStyle}>传统系统只录入成绩和出勤，我们覆盖全维度信息</p>
      {dataTypes.map((item) => (
        <div key={item.title} style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <IconBox Icon={item.icon} />
              <h3 style={{ ...cardTitleStyle, marginBottom: 0 }}>{item.title}</h3>
            </div>
            <span style={{ fontSize: 16, color: 'rgba(0,120,212,0.7)', background: 'rgba(0,120,212,0.06)', padding: '4px 14px', borderRadius: 20, fontWeight: 500 }}>{item.tag}</span>
          </div>
          <p style={{ ...textStyle, marginBottom: 12 }}>{item.desc}</p>
          {item.details.map((d, i) => <BulletItem key={i}>{d}</BulletItem>)}
          {item.example && (
            <div style={{ marginTop: 14, padding: '12px 16px', background: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: 10 }}>
              <p style={{ ...textStyle, fontStyle: 'italic', color: '#9ca3af' }}>{item.example}</p>
            </div>
          )}
        </div>
      ))}
      {/* Flow */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 16, fontSize: 20 }}>
        <span style={{ color: '#9ca3af' }}>录入</span>
        <ArrowRight size={16} color="rgba(0,120,212,0.4)" />
        <span style={{ color: '#0078D4', fontWeight: 600 }}>LLM 识别学生</span>
        <ArrowRight size={16} color="rgba(0,120,212,0.4)" />
        <span style={{ color: '#9ca3af' }}>归档至个人档案</span>
      </div>
    </div>
  )
}

/* ── Slide 06: Agent Layer (vertical stack) ── */

function AgentLayer() {
  const parentFeatures = [
    { icon: MessageCircle, text: '随时查询孩子的成绩、作业、课堂表现' },
    { icon: CalendarCheck, text: '每周定期推送学情周报' },
    { icon: BarChart3, text: '成绩趋势可视化图表' },
    { icon: Shield, text: '严格数据隔离，只能看到自己孩子' },
  ]
  const teacherFeatures = [
    { icon: Users, text: '学生全维度画像：成绩、出勤、作业、课堂' },
    { icon: BarChart3, text: '班级分析：知识点薄弱、学科表现图表' },
    { icon: FileEdit, text: '自动生成个性化评语和学情报告' },
    { icon: Mic, text: '30 秒语音录入课堂反馈' },
    { icon: Bell, text: '学情预警，异常情况主动推送' },
  ]

  return (
    <div style={sectionStyle}>
      <SectionLabel>Solution — Agent Layer</SectionLabel>
      <h2 style={h2Style}>每个人都有专属 Agent</h2>
      <p style={subStyle}>Agent 访问数据库，为家长和老师提供个性化服务</p>

      {/* Parent */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
          <IconBox Icon={Users} />
          <div>
            <h3 style={{ ...cardTitleStyle, marginBottom: 0 }}>家长端 Agent</h3>
            <span style={{ fontSize: 18, color: '#9ca3af' }}>通过微信小程序对话</span>
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          {parentFeatures.map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <f.icon size={18} color="rgba(0,120,212,0.6)" />
              </div>
              <p style={textStyle}>{f.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #f3f4f6' }}>
          <p style={{ fontSize: 16, color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10, marginTop: 0 }}>示例提问</p>
          {['孩子最近数学怎么样？', '这学期有什么需要关注的？'].map((q, i) => (
            <div key={i} style={{ padding: '10px 14px', marginBottom: 8, borderRadius: 10, background: 'rgba(0,120,212,0.03)', border: '1px solid rgba(0,120,212,0.08)' }}>
              <p style={{ ...textStyle, fontSize: 20 }}>&ldquo;{q}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
          <IconBox Icon={GraduationCap} />
          <div>
            <h3 style={{ ...cardTitleStyle, marginBottom: 0 }}>老师端 Agent</h3>
            <span style={{ fontSize: 18, color: '#9ca3af' }}>查询 + 分析 + 生成</span>
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          {teacherFeatures.map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <f.icon size={18} color="rgba(0,120,212,0.6)" />
              </div>
              <p style={textStyle}>{f.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #f3f4f6' }}>
          <p style={{ fontSize: 16, color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10, marginTop: 0 }}>示例提问</p>
          {['小明最近整体情况怎么样？', '帮我生成小红这学期的评语'].map((q, i) => (
            <div key={i} style={{ padding: '10px 14px', marginBottom: 8, borderRadius: 10, background: 'rgba(0,120,212,0.03)', border: '1px solid rgba(0,120,212,0.08)' }}>
              <p style={{ ...textStyle, fontSize: 20 }}>&ldquo;{q}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Slide 07: Live Demo (static version) ── */

function LiveDemo() {
  const questions = [
    {
      q: '孩子这一个月数学怎么样？',
      answer: (
        <>
          <p style={textStyle}>最近一个月数学成绩<span style={{ color: '#0078D4', fontWeight: 600 }}>稳步上升</span>，从 78 分提高到 91 分：</p>
          <div style={{ marginTop: 14 }}>
            {[
              { label: '作业完成度', value: '92%', note: '近两周 1 次迟交' },
              { label: '课堂表现', value: '明显提升', note: '主动发言次数增加' },
              { label: '薄弱知识点', value: '函数与方程', note: '错误率较高，建议加强' },
            ].map((c) => (
              <div key={c.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '12px 16px', background: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: 10, marginBottom: 10 }}>
                <div>
                  <p style={{ fontSize: 18, color: '#9ca3af', margin: 0 }}>{c.label}</p>
                  <p style={{ fontSize: 22, color: '#0078D4', fontWeight: 600, margin: '4px 0 0' }}>{c.value}</p>
                </div>
                <p style={{ fontSize: 18, color: '#9ca3af', margin: 0, maxWidth: 280, textAlign: 'right' }}>{c.note}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      q: '最近有什么需要关注的？',
      answer: (
        <>
          <p style={textStyle}>综合最近一个月的数据，整体表现良好，有 <span style={{ color: '#d97706', fontWeight: 600 }}>2 项</span>需要关注：</p>
          <div style={{ marginTop: 14 }}>
            {[
              { color: '#10b981', text: '出勤正常，本月无缺勤记录' },
              { color: '#f59e0b', text: '英语成绩连续两次下降（88 → 82 → 79），建议关注' },
              { color: '#f59e0b', text: '上周有 1 次数学作业迟交' },
              { color: '#10b981', text: '数学成绩稳步上升，课堂表现积极' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', background: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: 10, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0, marginTop: 10 }} />
                <p style={textStyle}>{item.text}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
  ]

  return (
    <div style={sectionStyle}>
      <SectionLabel>Live Demo</SectionLabel>
      <h2 style={h2Style}>试试看：向 Agent 提问</h2>
      <p style={subStyle}>以下是 Agent 回答示例</p>
      {questions.map((item, i) => (
        <div key={i} style={{ ...cardStyle, padding: '28px 28px' }}>
          <div style={{ padding: '10px 16px', background: 'rgba(0,120,212,0.04)', border: '1px solid rgba(0,120,212,0.12)', borderRadius: 10, marginBottom: 20 }}>
            <p style={{ fontSize: 22, color: '#374151', fontWeight: 500, margin: 0 }}>&ldquo;{item.q}&rdquo;</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,120,212,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={14} color="#0078D4" />
            </div>
            <span style={{ fontSize: 18, color: '#6b7280', fontWeight: 500 }}>Spectra Agent</span>
          </div>
          {item.answer}
        </div>
      ))}
    </div>
  )
}

/* ── Slide 08: Business Model (vertical stack) ── */

function Business() {
  return (
    <div style={sectionStyle}>
      <SectionLabel>Business Model</SectionLabel>
      <h2 style={h2Style}>合作与商业模式</h2>
      <p style={subStyle}>2B 模式，面向学校收费</p>

      {/* Target Market */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <IconBox Icon={School} />
          <h3 style={cardTitleStyle}>目标市场</h3>
        </div>
        {[
          { num: '1', title: '先切国际学校', desc: '付费意愿强、决策链短、对新技术接受度高' },
          { num: '2', title: '后扩民办 / 公立重点', desc: '核心逻辑相同，适配不同评估体系即可' },
        ].map((item) => (
          <div key={item.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,120,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
              <span style={{ color: '#0078D4', fontSize: 16, fontWeight: 700 }}>{item.num}</span>
            </div>
            <div>
              <p style={{ fontSize: 22, fontWeight: 500, color: '#1f2937', margin: '0 0 4px' }}>{item.title}</p>
              <p style={{ ...textStyle, color: '#9ca3af' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <IconBox Icon={CreditCard} />
          <h3 style={cardTitleStyle}>收费模式</h3>
        </div>
        {[
          { title: '学校订阅制', desc: 'SaaS 年费模式，按学校规模阶梯定价' },
          { title: '混合模式（后期）', desc: '家长可订阅增值服务（如详细学情分析），年费制，与学校收费形成双轨收入' },
        ].map((item) => (
          <div key={item.title} style={{ padding: '14px 18px', background: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: 10, marginBottom: 12 }}>
            <p style={{ fontSize: 22, fontWeight: 500, color: '#1f2937', margin: '0 0 6px' }}>{item.title}</p>
            <p style={{ ...textStyle, color: '#9ca3af' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Partner */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <IconBox Icon={Handshake} />
          <h3 style={cardTitleStyle}>合作伙伴</h3>
        </div>
        <p style={textStyle}>目前正在与<span style={{ color: '#0078D4', fontWeight: 600 }}>上海一所国际高中</span>深度合作，一起设计这个系统，作为 Design Partner 共同打磨产品。</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16, fontSize: 20, flexWrap: 'wrap' }}>
          <span style={{ color: '#6b7280' }}>Design Partner</span>
          <ArrowRight size={16} color="rgba(0,120,212,0.4)" />
          <span style={{ color: '#6b7280' }}>集团所有高中</span>
          <ArrowRight size={16} color="rgba(0,120,212,0.4)" />
          <span style={{ color: '#0078D4', fontWeight: 600 }}>横向拓展</span>
        </div>
      </div>

      {/* Moat */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <IconBox Icon={Lock} />
          <h3 style={cardTitleStyle}>切换成本壁垒</h3>
        </div>
        {[
          { label: '数据沉淀', desc: '运行越久，学生数据越厚，迁移成本越高' },
          { label: '行为习惯', desc: '老师和家长形成使用习惯，重新培训成本极高' },
          { label: '信任关系', desc: '学校把学生数据交给你，需要审批、法务、家长同意，换供应商需全部重走' },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '12px 18px', background: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: 10, marginBottom: 10 }}>
            <span style={{ color: '#0078D4', fontWeight: 600, fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.label}</span>
            <p style={{ ...textStyle, color: '#9ca3af' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Slide 09: Why Us (vertical stack) ────── */

function WhyUs() {
  const reasons = [
    { icon: Briefcase, title: '极强的行业经验', desc: '创始人从高中毕业后开始运营 B2B 培训机构，深耕教育行业多年，深刻理解学校、老师和家长的真实需求与痛点' },
    { icon: Handshake, title: 'Design Partner 已就位', desc: '已与一所知名高中达成 Design Partner 合作，共同打磨产品；同时有其他学校对产品表达了强烈兴趣' },
    { icon: GraduationCap, title: '牛津团队，高速迭代', desc: '团队成员均为牛津大学本硕博，具备强技术能力，能够快速迭代、持续交付' },
    { icon: Code, title: 'Agent 开发实战经验', desc: '核心技术人员具备极强的开发能力，独立开发过 Agent 产品，能快速将构想落地为可用系统' },
  ]

  return (
    <div style={sectionStyle}>
      <SectionLabel>Why Us</SectionLabel>
      <h2 style={h2Style}>为什么是我们来做？</h2>
      <p style={subStyle}>行业经验 + 客户信任 + 技术能力</p>
      {reasons.map((r) => (
        <div key={r.title} style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <IconBox Icon={r.icon} />
            <h3 style={{ ...cardTitleStyle, marginBottom: 0 }}>{r.title}</h3>
          </div>
          <p style={textStyle}>{r.desc}</p>
        </div>
      ))}
    </div>
  )
}

/* ── Footer ───────────────────────────────── */

function Footer() {
  return (
    <div style={{ width: W, padding: '40px 48px 60px', textAlign: 'center', boxSizing: 'border-box' }}>
      <p style={{ fontSize: 18, color: '#d1d5db', margin: 0 }}>Spectra — 智能教务管理系统</p>
    </div>
  )
}
