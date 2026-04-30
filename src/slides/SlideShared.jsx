export function SlideCanvas({ index, total, title, children, marker }) {
  return (
    <section className="slide-canvas">
      <div className="slide-count">
        {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
      <div className="slide-marker">{marker ?? String(index).padStart(2, "0")}</div>
      <h2 className="slide-title">{title}</h2>
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
