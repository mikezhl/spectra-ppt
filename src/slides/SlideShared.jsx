export function SlideCanvas({ index, total, title, subtitle, children, marker, className = "" }) {
  return (
    <section className={`slide-canvas ${className}`}>
      <div className="slide-count">
        {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
      <header className="slide-header">
        <div className="slide-marker">{marker ?? String(index).padStart(2, "0")}</div>
        <h2 className="slide-title">{title}</h2>
        {subtitle ? <p className="slide-caption slide-subtitle">{subtitle}</p> : null}
      </header>
      <div className="slide-content-area">{children}</div>
    </section>
  );
}

export function SlideMetric({ value, label }) {
  return (
    <div className="slide-metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
