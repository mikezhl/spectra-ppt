export function Vertical01Hero({ index, total }) {
  return (
    <section className="vertical-hero" data-v-reveal>
      <div className="vertical-hero-top">
        <span>Spectra · Angel Round · 2026</span>
        <span>{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>
      <div className="vertical-hero-grid">
        <div>
          <h1 className="vertical-hero-title">Spectra</h1>
          <p className="vertical-hero-subtitle">AI 时代的学校操作系统</p>
          <div className="vertical-rule" />
          <p className="vertical-hero-copy">
            让每一条教育数据都能被轻松录入、被深度理解、被每个人即时使用。
          </p>
          <p className="vertical-hero-copy">智能教务管理系统 · 李翼 CEO</p>
        </div>
        <div className="vertical-construct" aria-hidden="true">
          <span className="construct-line h1" />
          <span className="construct-line h2" />
          <span className="construct-line v1" />
          <span className="construct-line v2" />
          <span className="construct-blue" />
          <span className="construct-soft" />
          <span className="construct-dots" />
        </div>
      </div>
    </section>
  );
}
