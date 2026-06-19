import { stackPanels } from "@/data/portfolio";
import { TechOrbit } from "@/components/three/tech-orbit";
import styles from "./tech-section.module.css";

export function TechSection() {
  return (
    <section id="tech" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className="reveal-up">
            Tech <span className="accent">Ecosystem</span> Orbit
          </h2>
          <p className="reveal-up">
            A modular, scalable foundation architected for stability, high-velocity shipping, and maintainable
            operations.
          </p>
        </div>

        <div className={styles.grid} style={{ position: "relative" }}>
          {/* Responsive SVG Connecting Lines */}
          <TechConnectors />

          <div className={styles.panelColumn}>
            {stackPanels.slice(0, 2).map(({ title, description, icon: Icon }) => (
              <article className={`reveal-up glass ${styles.panel}`} key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className={`reveal-up ${styles.orbit}`}>
            <div className={styles.halo} aria-hidden="true" />
            <div className={styles.hudRing} aria-hidden="true" />
            <div className={styles.scanPlate} aria-hidden="true" />
            <div className={styles.orbitLayer}>
              <TechOrbit />
            </div>
          </div>

          <div className={styles.panelColumn}>
            {stackPanels.slice(2).map(({ title, description, icon: Icon }) => (
              <article className={`reveal-up glass ${styles.panel}`} key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechConnectors() {
  return (
    <svg className={styles.connectorSvg} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id="glow-lines" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0, 229, 255, 0.04)" />
          <stop offset="60%" stopColor="rgba(0, 229, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(0, 229, 255, 0.8)" />
        </linearGradient>
        <linearGradient id="gradient-right" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(0, 229, 255, 0.04)" />
          <stop offset="60%" stopColor="rgba(0, 229, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(0, 229, 255, 0.8)" />
        </linearGradient>
      </defs>

      {/* Left side connectors: Top/Bottom Panels merging to the center */}
      <path
        d="M 29 26 L 31.5 26 C 33 26, 33.5 27, 33.5 28.5 L 33.5 47.5 C 33.5 49, 34 50, 35.5 50 L 36.2 50
           M 29 74 L 31.5 74 C 33 74, 33.5 73, 33.5 71.5 L 33.5 52.5 C 33.5 51, 34 50, 35.5 50"
        stroke="url(#gradient-left)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow-lines)"
        vectorEffect="non-scaling-stroke"
      />
      {/* Right side connectors: Top/Bottom Panels merging to the center */}
      <path
        d="M 71 26 L 68.5 26 C 67 26, 66.5 27, 66.5 28.5 L 66.5 47.5 C 66.5 49, 66 50, 64.5 50 L 63.8 50
           M 71 74 L 68.5 74 C 67 74, 66.5 73, 66.5 71.5 L 66.5 52.5 C 66.5 51, 66 50, 64.5 50"
        stroke="url(#gradient-right)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow-lines)"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
