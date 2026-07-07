# Spectra Deck Design

本文件定义 Spectra deck 的视觉系统、布局规则、组件用法、动效和响应式要求。项目运行和页面结构见 `README.md`。

## 设计目标

Spectra deck 是黑底、全屏、滚动式融资演示页面。视觉目标是冷静、克制、技术可信，重点服务产品叙事，不做营销落地页式装饰。

核心原则：

- 信息优先：视觉服务标题、导语、数据和结论。
- 结构稳定：每页保持标题、导语、主体、页脚的统一节奏。
- 样式集中：颜色、字体、字号、边框、卡片和响应式规则集中在 `src/index.css`。
- 组件复用：页面优先使用 `src/slides/shared.jsx`，不要在单页里重复造通用组件。

## 设计 Token

主要 token 位于 `src/index.css` 的 `:root`，它们是样式调整的入口。

颜色与层级：

- `--spectra-bg`：全局背景，当前为 `#000000`。
- `--spectra-text-primary`：主文字。
- `--spectra-text-secondary`：正文、说明和弱信息。
- `--spectra-text-muted`：导语和次强调信息。
- `--spectra-text-tertiary`：页码、编号和低权重辅助信息。
- `--spectra-accent`：正向强调色，只用于关键信号。
- `--spectra-accent-line`：强调色边线。

面板与线条：

- `--spectra-card`：通用低填充背景。
- `--spectra-card-strong`：按钮 hover 等轻微增强背景。
- `--spectra-line`：普通细线、分割线和弱边界。
- `--spectra-line-strong`：更高权重线条。
- `--spectra-panel-fill`：内容面板底色。
- `--spectra-panel-border`：内容面板边框颜色。
- `--spectra-panel-border-width`：内容面板边框线宽。
- `--spectra-panel-surface`：面板表面层，当前保持 `none`。
- `--spectra-radius`：统一圆角，当前为 `8px`。

字体与对齐：

- `--spectra-font`：正文与标题字体，英文优先 Calibri，中文使用微软雅黑。
- `--spectra-mono`：编号、页码和标签字体，当前与主字体保持同一体系。
- `--spectra-title-optical-shift`：大标题光学悬挂偏移，用于让标题视觉左边界与正文对齐。

## 页面结构

普通页面默认结构：

```jsx
import { SlideLead, SlideShell, SlideTitle } from './shared'

export default function SlideExample() {
  return (
    <SlideShell>
      <SlideTitle>页面标题</SlideTitle>
      <SlideLead>页面导语</SlideLead>
      {/* 页面主体 */}
    </SlideShell>
  )
}
```

封面页使用 `SlideShell className="slide-shell--cover"`，标题使用 `motion.h1` 和 `slide-cover-title`。

## 共享组件

共享组件位于 `src/slides/shared.jsx`：

- `SlideShell`：页面外壳。
- `SlideTitle`：页面主标题，内部使用 `motion.h2`。
- `SlideLead`：页面导语。
- `SlideCard`：标准内容卡片。
- `SlideCardTitle`：卡片、列和模块标题。
- `SlideColumn`：带编号的信息列。
- `SlideEmphasis`：导语中的行内强调。
- `SlideFooter`：页底补充信息区域。
- `SlideFooterText`：页底补充文本。
- `SlideNumber`：编号。
- `SlideBadge`：短标签。
- `fade`：统一 Framer Motion 入场动画。

页面文件可以组合这些组件，但不要复制它们的实现。

## 字体层级

页面内不要随意新增字号。优先使用已有 class：

- `slide-title`：页面主标题。
- `slide-title-muted`：标题中的弱化行。
- `slide-lead`：页面导语。
- `slide-cover-title`：封面主标题。
- `slide-cover-subtitle`：封面副标题。
- `slide-kicker`：短辅助文本。
- `slide-copy`：标准正文。
- `slide-copy-large`：较大正文。
- `slide-copy-heading`：正文区小标题。
- `slide-card-title`：卡片标题。
- `slide-label`：局部标签。
- `slide-emphasis`：行内强调。
- `slide-footer-text`：页脚补充文本。
- `slide-number`：编号。
- `slide-badge`：标签。
- `slide-node-title`：图形节点标题。
- `slide-node-copy`：图形节点说明。

只有新的文字层级会跨页面复用时，才在 `src/index.css` 增加语义 class。

## 布局规则

Deck 框架：

- `deck`：整套演示容器。
- `deck-section`：单页视口容器，桌面端占满一屏并滚动吸附。
- `deck-frame`：单页内部画布。
- `deck-progress-bar`：顶部进度条。
- `deck-ui`、`deck-counter`、`deck-pagination`：右侧页码和页点导航。

页面内部：

- `slide-shell` 控制单页内边距、纵向结构和溢出。
- 标题区保持 `SlideTitle` 后接 `SlideLead`，中间不插入装饰分割线。
- 主体优先使用 `slide-grid`、`slide-grid--two`、`slide-grid--three`、`slide-grid--three-loose`。
- 信息分组优先用编号、卡片、列、网格和页脚表达。
- 不通过给单页正文或卡片额外缩进来修正标题对齐；标题对齐由 `--spectra-title-optical-shift` 控制。

专用布局：

- 数据闭环页使用 `loop-board`、`loop-grid`、`loop-node`、`loop-core`、`loop-arrow`。
- 里程碑页使用 `milestone-track`、`milestone-line`、`milestone-grid`、`milestone-item`、`milestone-dot`。
- 团队页使用 `team-name`、`team-latin`。

## 面板和边框

内容面板包括 `slide-card`、`slide-column`、`loop-node` 和 `loop-core`。

统一规则：

- 背景使用 `--spectra-panel-fill`。
- 边框使用 `--spectra-panel-border-width solid --spectra-panel-border`。
- 四边必须同色、同宽。
- 圆角使用 `--spectra-radius`。
- 不使用半透明描边、渐变描边、短角线、强顶边/弱底边、外发光、阴影或 ring。
- 不通过提高面板背景亮度解决边界问题，面板不能抢标题层级。

## 动效规则

所有入场动画统一使用 `fade(delay, duration)`：

```jsx
import { fade, motion } from './shared'

<motion.div {...fade(0.35)}>...</motion.div>
```

要求：

- 不在单页文件里重复定义动画 helper。
- 不新增动效库。
- 翻页、键盘事件、滚动观察和导航只放在 `App.jsx`。
- 单页不绑定全局滚动或键盘事件。

## 响应式规则

桌面端：

- `html` 使用纵向 scroll snap。
- 每个 `deck-section` 占满 `100vh / 100dvh`。
- 右侧页码和页点导航显示。

移动端：

- 取消 scroll snap。
- `deck-section` 改为自然高度。
- `slide-shell` 使用较小内边距。
- `slide-grid` 和常规 Tailwind grid 降为单列。
- 隐藏 `deck-ui`。
- 复杂图形必须提供可读降级内容，例如数据闭环页的移动端纵向列表。

## 禁止项

- 不恢复 Google Fonts；字体走系统字体链。
- 不恢复旧白底、竖版海报、固定画布或滚动长图方案。
- 不恢复旧命名，例如 `vertical-*`、`ms-blue`、`slide-canvas`。
- 不在页面里新增随意的 `text-[...]` 字号。
- 不把页面内容写进 `App.jsx`。
- 不在页面文件中重复定义通用卡片、标题、强调文本、页脚或动画。
- 不添加不服务信息表达的图片、图标、大渐变或装饰线。

## 视觉验收

基础命令：

```bash
npm run build
git diff --check
rg -n "DM Sans|JetBrains Mono|fonts.googleapis|panel-border-strong|border-bottom-color|slide-card::before|mask-composite|shadow-|ring-" src index.html
```

重点检查：

- 第 1 页：封面标题、副标题、底部 kicker 层级正常。
- 第 2 页：痛点卡片与标题左侧节奏一致。
- 第 7 页：数据闭环箭头、中心节点和移动端降级内容可读。
- 第 10 页：里程碑线条、节点和激活态层级正常。
- 面板四边 border 的颜色和线宽一致。
- 卡片标题、节点标题和里程碑标题没有被全局 `h3` 样式压低字重。
