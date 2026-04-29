export function Section01Cover({ index, total }) {
  return (
    <div className="slide-content flex flex-col">
      <div className="flex justify-between" data-reveal>
        <div className="t-caption deck-label font-semibold">AI School OS</div>
        <div className="t-caption deck-label tabular-nums">
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center text-center">
        <div className="max-w-[1040px]">
          <h1 className="t-title font-semibold text-[var(--ink)]" data-reveal>
            Spectra
          </h1>
          <p
            className="t-body mt-10 text-[var(--ink)]"
            data-reveal
            style={{ "--delay": "120ms" }}
          >
            AI 时代的学校操作系统
          </p>
          <p
            className="t-body muted mx-auto mt-5 max-w-[1000px]"
            data-reveal
            style={{ "--delay": "210ms" }}
          >
            让每一条教育数据都能被轻松录入、被深度理解、被每个人即时使用。
          </p>
          <p
            className="t-caption deck-label mt-8 font-semibold"
            data-reveal
            style={{ "--delay": "310ms" }}
          >
            智能教务管理系统
          </p>
        </div>
      </div>

      <div className="h-10" aria-hidden="true" />
    </div>
  );
}
