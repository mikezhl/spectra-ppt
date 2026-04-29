import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Section01Cover } from "./sections/Section01Cover.jsx";
import { Section02Problem } from "./sections/Section02Problem.jsx";
import { Section03WhyNow } from "./sections/Section03WhyNow.jsx";
import { Section04Era } from "./sections/Section04Era.jsx";
import { Section05DataLayer } from "./sections/Section05DataLayer.jsx";
import { Section06AgentLayer } from "./sections/Section06AgentLayer.jsx";
import { Section07LiveDemo } from "./sections/Section07LiveDemo.jsx";
import { Section08Competition } from "./sections/Section08Competition.jsx";
import { Section09BusinessModel } from "./sections/Section09BusinessModel.jsx";
import { Section10Team } from "./sections/Section10Team.jsx";
import { Section11MarketFinancials } from "./sections/Section11MarketFinancials.jsx";
import { Section12Vision } from "./sections/Section12Vision.jsx";

const FONT_TOKENS = {
  title: "t-title",
  body: "t-body",
  caption: "t-caption",
};

const STAGE_WIDTH = 1440;

const deckSections = [
  Section01Cover,
  Section02Problem,
  Section03WhyNow,
  Section04Era,
  Section05DataLayer,
  Section06AgentLayer,
  Section07LiveDemo,
  Section08Competition,
  Section09BusinessModel,
  Section10Team,
  Section11MarketFinancials,
  Section12Vision,
];

function useRevealMotion() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { root: null, threshold: 0.14 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useFixedStageScale() {
  const stageRef = useRef(null);
  const [metrics, setMetrics] = useState({ height: 0, scale: 1 });

  useLayoutEffect(() => {
    const updateMetrics = () => {
      const viewportGutter = window.innerWidth < STAGE_WIDTH ? 12 : 0;
      const scale = Math.min(
        1,
        Math.max(0.24, (window.innerWidth - viewportGutter) / STAGE_WIDTH),
      );
      const height = stageRef.current?.offsetHeight ?? 0;
      setMetrics({ height, scale });
    };

    updateMetrics();
    const observer = new ResizeObserver(updateMetrics);
    if (stageRef.current) observer.observe(stageRef.current);
    window.addEventListener("resize", updateMetrics);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  return { stageRef, ...metrics };
}

function DeckFrame({ children, index }) {
  return (
    <section
      id={`slide-${index}`}
      className={`deck-frame section-${index}`}
      aria-label={`Spectra pitch deck section ${index}`}
    >
      {children}
    </section>
  );
}

function App() {
  useRevealMotion();
  const { height, scale, stageRef } = useFixedStageScale();

  const sections = useMemo(() => deckSections, []);

  return (
    <main
      className="deck-shell"
      style={{
        "--stage-height": `${height * scale}px`,
        "--stage-scale": scale,
        "--stage-width": `${STAGE_WIDTH}px`,
        "--scaled-stage-width": `${STAGE_WIDTH * scale}px`,
      }}
    >
      <div className="stage-spacer">
        <div className="deck-stage" ref={stageRef}>
          {sections.map((Section, index) => (
            <DeckFrame key={index} index={index + 1}>
              <Section
                index={index + 1}
                total={sections.length}
                fonts={FONT_TOKENS}
              />
            </DeckFrame>
          ))}
        </div>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
