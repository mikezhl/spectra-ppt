import { CheckCircle2 } from "lucide-react";

export function VerticalSection({ index, total, title, children, className = "" }) {
  return (
    <section className={`vertical-section ${className}`}>
      <header className="vertical-section-head">
        <div className="vertical-section-kicker">
          <div className="vertical-rule" />
          <p className="vertical-caption vertical-index">
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>
        <h2 className="vertical-title">{title}</h2>
      </header>
      <div className="vertical-body">{children}</div>
    </section>
  );
}

export function VerticalCell({ title, children, meta, icon: Icon }) {
  return (
    <article className="v-cell">
      <header className="v-cell-head">
        {Icon ? <Icon className="v-icon" /> : null}
        <div>
          {meta ? <p className="vertical-caption v-meta">{meta}</p> : null}
          <h3 className="vertical-body-text v-cell-title">{title}</h3>
        </div>
      </header>
      {children ? <div className="vertical-caption v-cell-copy">{children}</div> : null}
    </article>
  );
}

export function VerticalList({ items }) {
  return (
    <ul className="v-list">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 className="v-check" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
