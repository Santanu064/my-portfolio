import { ArrowUpRight } from "lucide-react";
import { heroCapabilities, metrics } from "@/data/portfolio";
import { HeroSphere } from "@/components/three/hero-sphere";
import styles from "./hero-section.module.css";

export function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className="reveal-up eyebrow">
            <span className="pulse-dot" />
            Available for strategic partnerships
          </div>
          <div className={styles.titleBlock}>
            <p className="reveal-up">Santanu Ghosh</p>
            <h1 className="reveal-up">
              Full Stack <span>Engineer.</span>
            </h1>
          </div>
          <p className={`reveal-up ${styles.lede}`}>
            Engineering high-performance ecosystems and intelligent automation for scale-hungry startups. Focused on
            operational efficiency, product clarity, and measurable ROI.
          </p>
          <div className={`reveal-up ${styles.actions}`}>
            <a className="magnetic-button primary-button" href="#work">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>
            <a className="magnetic-button ghost-button" href="#contact">
              Start a Conversation
            </a>
          </div>
          <div className={`reveal-up ${styles.capabilities}`} aria-label="Core capabilities">
            {heroCapabilities.map(({ label, icon: Icon }) => (
              <span key={label}>
                <Icon size={14} />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className={`reveal-up ${styles.visual}`}>
          <HeroSphere />
        </div>
      </div>

      <div className={`container ${styles.metrics}`}>
        {metrics.map((metric) => (
          <div className="reveal-up" key={metric.label}>
            <strong data-count={metric.value} data-suffix={metric.suffix}>
              0{metric.suffix}
            </strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
