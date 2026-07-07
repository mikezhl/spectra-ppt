# Spectra PPT

Spectra PPT 是 Spectra OS 的融资演示 deck，面向国际学校场景，展示老师端、家长端、管理层 Agent 与学校数据底座的产品逻辑。

项目使用 Vite、React、Tailwind CSS v4 和 Framer Motion 实现黑底全屏滚动演示。

## 运行

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 页面顺序

页面顺序以 `src/slides/index.js` 为准：

1. `Slide01.jsx`：封面，Spectra OS
2. `Slide02.jsx`：教学数据缺失带来的核心痛点
3. `SlideAgentTeacher.jsx`：老师端 Agent，把批改转化成学情分析
4. `SlideAgentParent.jsx`：家长端 Agent，把学情数据转化成判断和建议
5. `SlideAgentManagement.jsx`：管理层 Agent，形成学校级运营视图
6. `SlideAcademicDatabase.jsx`：学校专属数据库
7. `SlideDataLoop.jsx`：数据闭环
8. `Slide09.jsx`：团队
9. `Slide08.jsx`：暑期营数据、Agent 能力和 2B 收入
10. `Slide10.jsx`：里程碑

## 目录结构

```text
src/
  App.jsx                 # deck 翻页、键盘事件、滚动观察、页码和导航
  main.jsx                # React 入口
  index.css               # 全局 token、布局、组件样式和响应式规则
  slides/
    index.js              # 页面导入和展示顺序
    shared.jsx            # 共享动画、页面结构组件和通用内容组件
    Slide*.jsx            # 单页内容
```

## 文件边界

- `src/App.jsx` 只负责 deck 容器、翻页交互、滚动观察、页码和导航。
- `src/slides/index.js` 只负责导入页面并定义展示顺序。
- `src/slides/shared.jsx` 负责共享组件和 `fade` 动画 helper。
- `src/slides/Slide*.jsx` 只写单页内容、数据和该页必要结构。
- `src/index.css` 负责全局设计 token、deck 框架、slide 组件样式、专用图形样式和响应式规则。
- 视觉、布局、动效和组件规则见 `design.md`。

## 修改页面

1. 在 `src/slides/` 新建或修改单页文件。
2. 优先复用 `src/slides/shared.jsx` 中的 `SlideShell`、`SlideTitle`、`SlideLead`、`SlideCard`、`SlideCardTitle`、`SlideColumn`、`SlideFooter` 等组件。
3. 需要调整页面顺序时，只改 `src/slides/index.js`。
4. 需要新增样式时，优先在 `src/index.css` 中增加可复用的语义 class。
5. 不在页面文件里重复定义通用动画、卡片、标题、页脚或字号规则。
6. 修改后运行构建检查。

## 检查

```bash
npm run build
git diff --check
```
