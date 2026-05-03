import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./index.css";
import { Vertical01Hero } from "./vertical/Vertical01Hero.jsx";
import { Vertical02Problem } from "./vertical/Vertical02Problem.jsx";
import { Vertical03WhyNow } from "./vertical/Vertical03WhyNow.jsx";
import { Vertical04Era } from "./vertical/Vertical04Era.jsx";
import { Vertical05DataLayer } from "./vertical/Vertical05DataLayer.jsx";
import { Vertical06AgentLayer } from "./vertical/Vertical06AgentLayer.jsx";
import { Vertical07LiveDemo } from "./vertical/Vertical07LiveDemo.jsx";
import { Vertical08Competition } from "./vertical/Vertical08Competition.jsx";
import { Vertical09Business } from "./vertical/Vertical09Business.jsx";
import { Vertical10Team } from "./vertical/Vertical10Team.jsx";
import { Vertical11MarketAsk } from "./vertical/Vertical11MarketAsk.jsx";
import { Vertical12Vision } from "./vertical/Vertical12Vision.jsx";
import { Slide01Hero } from "./slides/Slide01Hero.jsx";
import { Slide02Problem } from "./slides/Slide02Problem.jsx";
import { Slide03WhyNow } from "./slides/Slide03WhyNow.jsx";
import { Slide04Era } from "./slides/Slide04Era.jsx";
import { Slide05Solution } from "./slides/Slide05Solution.jsx";
import { Slide06Demo } from "./slides/Slide06Demo.jsx";
import { Slide07Competition } from "./slides/Slide07Competition.jsx";
import { Slide08Business } from "./slides/Slide08Business.jsx";
import { Slide09TeamMarket } from "./slides/Slide09TeamMarket.jsx";
import { Slide10Vision } from "./slides/Slide10Vision.jsx";
import { Slide11MarketAsk } from "./slides/Slide11MarketAsk.jsx";
import { Slide12Vision } from "./slides/Slide12Vision.jsx";

const STAGE_WIDTH = 1440;
const SLIDE_HEIGHT = 810;

const verticalSections = [
  Vertical01Hero,
  Vertical02Problem,
  Vertical03WhyNow,
  Vertical04Era,
  Vertical05DataLayer,
  Vertical06AgentLayer,
  Vertical07LiveDemo,
  Vertical08Competition,
  Vertical09Business,
  Vertical10Team,
  Vertical11MarketAsk,
  Vertical12Vision,
];

const slideSections = [
  Slide01Hero,
  Slide02Problem,
  Slide03WhyNow,
  Slide04Era,
  Slide05Solution,
  Slide06Demo,
  Slide07Competition,
  Slide08Business,
  Slide09TeamMarket,
  Slide10Vision,
  Slide11MarketAsk,
  Slide12Vision,
];

function useWidthScale(width) {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const update = () => {
      setScale(Math.min(1, window.innerWidth / width));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [width]);

  return scale;
}

function useSlideScale() {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const update = () => {
      const scaleX = window.innerWidth / STAGE_WIDTH;
      const scaleY = window.innerHeight / SLIDE_HEIGHT;
      setScale(Math.min(1, scaleX, scaleY));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}

function useSlideNavigation(active, setActive, count, mode) {
  useEffect(() => {
    if (mode !== "slides") return undefined;
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        setActive((value) => Math.min(count - 1, value + 1));
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        setActive((value) => Math.max(0, value - 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, count, mode, setActive]);
}

function ModeToggle({ mode, setMode }) {
  return (
    <div className="mode-toggle" aria-label="版本切换">
      <button
        className={mode === "vertical" ? "is-active" : ""}
        onClick={() => setMode("vertical")}
      >
        竖版
      </button>
      <button
        className={mode === "slides" ? "is-active" : ""}
        onClick={() => setMode("slides")}
      >
        横版
      </button>
    </div>
  );
}

function VerticalVersion() {
  const scale = useWidthScale(STAGE_WIDTH);
  const sections = useMemo(() => verticalSections, []);

  return (
    <div
      className="vertical-shell"
      style={{
        "--vertical-scale": scale,
        "--stage-width": `${STAGE_WIDTH}px`,
        "--scaled-stage-width": `${STAGE_WIDTH * scale}px`,
      }}
    >
      <div className="vertical-stage">
        {sections.map((Section, index) => (
          <Section
            key={index}
            index={index + 1}
            total={sections.length}
          />
        ))}
      </div>
    </div>
  );
}

function SlideVersion({ active, setActive }) {
  const scale = useSlideScale();
  const ActiveSlide = slideSections[active];
  const goPrevious = () => setActive((value) => Math.max(0, value - 1));
  const goNext = () => setActive((value) => Math.min(slideSections.length - 1, value + 1));

  return (
    <div
      className="slide-shell"
      style={{
        "--slide-scale": scale,
        "--slide-width": `${STAGE_WIDTH}px`,
        "--slide-height": `${SLIDE_HEIGHT}px`,
        "--scaled-slide-width": `${STAGE_WIDTH * scale}px`,
        "--scaled-slide-height": `${SLIDE_HEIGHT * scale}px`,
      }}
    >
      <div className="slide-spacer">
        <div className="slide-stage">
          <ActiveSlide
            index={active + 1}
            total={slideSections.length}
          />
        </div>
      </div>
      <div className="slide-arrows" aria-label="幻灯片切换">
        <button
          className="slide-arrow is-left"
          type="button"
          aria-label="上一页"
          disabled={active === 0}
          onClick={goPrevious}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          className="slide-arrow is-right"
          type="button"
          aria-label="下一页"
          disabled={active === slideSections.length - 1}
          onClick={goNext}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <div className="slide-dots" aria-label="幻灯片进度">
        {slideSections.map((_, index) => (
          <button
            key={index}
            className={active === index ? "is-active" : ""}
            aria-label={`切换到第 ${index + 1} 页`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [mode, setMode] = useState("vertical");
  const [activeSlide, setActiveSlide] = useState(0);

  useSlideNavigation(activeSlide, setActiveSlide, slideSections.length, mode);

  useEffect(() => {
    document.body.classList.toggle("is-slide-mode", mode === "slides");
    document.documentElement.classList.toggle("is-slide-mode", mode === "slides");
    if (mode === "slides") window.scrollTo(0, 0);
    return () => {
      document.body.classList.remove("is-slide-mode");
      document.documentElement.classList.remove("is-slide-mode");
    };
  }, [mode]);

  return (
    <main className={`app-root ${mode === "slides" ? "is-slides" : "is-vertical"}`}>
      <ModeToggle mode={mode} setMode={setMode} />
      {mode === "vertical" ? (
        <VerticalVersion />
      ) : (
        <SlideVersion active={activeSlide} setActive={setActiveSlide} />
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
