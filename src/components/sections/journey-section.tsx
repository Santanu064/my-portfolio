"use client";

import { Monitor, Database, Bot, Infinity } from "lucide-react";
import styles from "./journey-section.module.css";

export function JourneySection() {
  return (
    <section id="journey" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        {/* Left Column: Timeline & Stats */}
        <div className={styles.leftCol}>
          <h2 className="reveal-up">
            The <span className="accent">Journey</span>
          </h2>

          <div className={styles.timeline}>
            <div className={`${styles.timelineItem} reveal-up`}>
              <div className={styles.timelineMarker}>
                <span className={`${styles.dot} ${styles.dotActive}`} />
                <span className={styles.line} />
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.dateActive}>2021 — PRESENT</span>
                <h3>Senior Full-Stack Freelancer</h3>
                <p>
                  Shipped over 40+ production applications for startups globally, specializing in TypeScript ecosystems and cloud architecture.
                </p>
              </div>
            </div>

            <div className={`${styles.timelineItem} reveal-up`}>
              <div className={styles.timelineMarker}>
                <span className={styles.dot} />
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.date}>2018 — 2021</span>
                <h3>Lead Engineer @ Techflow</h3>
                <p>
                  Scaled a SaaS platform from 0 to 1M monthly active users. Managed a team of 12 developers.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.stats} reveal-up`}>
            <div className={styles.statItem}>
              <strong data-count="42" data-suffix="">0</strong>
              <span>PROJECTS</span>
            </div>
            <div className={styles.statItem}>
              <strong data-count="31" data-suffix="">0</strong>
              <span>CLIENTS</span>
            </div>
            <div className={styles.statItem}>
              <strong data-count="6" data-suffix="">0</strong>
              <span>YEARS</span>
            </div>
          </div>
        </div>

        {/* Right Column: Cards Grid */}
        <div className={styles.rightCol}>
          <div className={styles.cardsGrid}>
            <article className={`reveal-up glass ${styles.card} ${styles.cardActive}`}>
              <div className={styles.iconWrapper}>
                <Monitor size={24} />
              </div>
              <h3>Web Apps</h3>
              <p>
                High-performance React/Next.js applications with a focus on UX and accessibility.
              </p>
            </article>

            <article className={`reveal-up glass ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <Database size={24} />
              </div>
              <h3>Architecture</h3>
              <p>
                Scalable backend systems using Node.js, NestJS, and robust database design.
              </p>
            </article>

            <article className={`reveal-up glass ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <Bot size={24} />
              </div>
              <h3>AI Integration</h3>
              <p>
                Implementing LLMs and vector databases to create intelligent automation tools.
              </p>
            </article>

            <article className={`reveal-up glass ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <Infinity size={24} />
              </div>
              <h3>DevOps</h3>
              <p>
                CI/CD pipelines, Dockerization, and cloud deployment on AWS/Vercel.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
