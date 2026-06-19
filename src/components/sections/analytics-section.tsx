import { technologies } from "@/data/portfolio";
import styles from "./analytics-section.module.css";

const heatmap = Array.from({ length: 280 }, (_, index) => {
  const wave = Math.abs(Math.sin(index * 0.41) * Math.cos(index * 0.13));
  return Math.max(0.08, Math.min(1, wave));
});

export function AnalyticsSection() {
  return (
    <section id="analytics" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className="reveal-up">
            Development <span className="accent">Insights</span>
          </h2>
          <p className="reveal-up">Real-time velocity and technical contribution signals across distributed systems.</p>
        </div>

        <div className={styles.grid}>
          <article className={`reveal-up glass ${styles.heatmapCard}`}>
            <h3>Contribution activity</h3>
            <div className={styles.heatmap} aria-label="Contribution heatmap preview">
              {heatmap.map((opacity, index) => (
                <span key={index} style={{ opacity }} />
              ))}
            </div>
            <div className={styles.legend}>
              <span>Learn more about my velocity</span>
              <div>
                <span>Less</span>
                {[0.12, 0.32, 0.62, 1].map((opacity) => (
                  <i key={opacity} style={{ opacity }} />
                ))}
                <span>More</span>
              </div>
            </div>
          </article>

          <article className={`reveal-up glass ${styles.techCard}`}>
            <h3>Top technologies</h3>
            <div className={styles.bars}>
              {technologies.map((technology) => (
                <div className={styles.barGroup} key={technology.name}>
                  <div>
                    <span>{technology.name}</span>
                    <strong>{technology.value}%</strong>
                  </div>
                  <span className={styles.track}>
                    <span style={{ width: `${technology.value}%` }} />
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
