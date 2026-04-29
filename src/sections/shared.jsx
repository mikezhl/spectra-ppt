import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

export function SlideHeader({ index, total, title, subtitle, tight = false }) {
  return (
    <header
      className={`flex items-start justify-between ${tight ? "mb-8" : "mb-12"}`}
      data-reveal
    >
      <div className="max-w-[980px]">
        <div className="blue-rule mb-6" />
        <h2 className="t-title font-semibold text-[var(--ink)]">{title}</h2>
        {subtitle ? (
          <p className="t-body muted mt-4 max-w-[980px]">{subtitle}</p>
        ) : null}
      </div>
      <div className="t-caption deck-label tabular-nums">
        {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </header>
  );
}

export function Panel({ children, className = "", delay = 0 }) {
  return (
    <div
      className={`panel p-7 ${className}`}
      data-reveal
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function BulletList({ items, compact = false }) {
  return (
    <ul className={compact ? "space-y-2" : "space-y-3"}>
      {items.map((item) => (
        <li key={item} className="t-caption muted flex gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--microsoft-blue)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function MiniKicker({ children }) {
  return (
    <div className="t-caption deck-label mb-3 font-semibold uppercase">
      {children}
    </div>
  );
}

export function FlowStrip({ steps }) {
  return (
    <div className="panel-blue mt-8 flex items-center justify-between p-5" data-reveal>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-[8px] bg-white text-[var(--microsoft-blue)]">
              <span className="t-caption font-bold">{index + 1}</span>
            </div>
            <span className="t-body font-semibold text-[var(--ink)]">{step}</span>
          </div>
          {index < steps.length - 1 ? (
            <ChevronRight className="h-8 w-8 text-[var(--microsoft-blue)]" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}
