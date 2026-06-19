import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { projectFilters, projects } from "@/data/portfolio";
import styles from "./case-studies-section.module.css";

export function CaseStudiesSection() {
  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className="reveal-up">
              Strategic <span className="accent">Case Studies</span>
            </h2>
            <p className="reveal-up">
              Engineering solutions that solve mission-critical business challenges and drive operational excellence.
            </p>
          </div>
        </div>

        <div className={`reveal-up ${styles.filterRow}`}>
          <div className={styles.filters} aria-label="Project filters">
            {projectFilters.map((filter, index) => (
              <button className={index === 0 ? styles.activeFilter : undefined} key={filter} type="button">
                {filter}
              </button>
            ))}
          </div>
          <a className={styles.viewAll} href="#contact">
            View all projects
            <ArrowRight size={16} />
          </a>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article className={`${styles.project} project-card`} key={project.title}>
              <div className={index % 2 === 0 ? styles.media : `${styles.media} ${styles.mediaRight}`}>
                <div className={`glass ${styles.browser}`}>
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    width={1100}
                    height={688}
                    sizes="(max-width: 980px) 100vw, 52vw"
                  />
                </div>
              </div>
              <div className={styles.projectCopy}>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <CasePoint title="Business Problem" body={project.problem} />
                <CasePoint title="The Solution" body={project.solution} />
                <CasePoint title="Architecture" body={project.architecture} />
                {project.link && (
                  <div className={styles.actions}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveButton}
                    >
                      Launch Live Project
                      <ArrowRight size={14} />
                    </a>
                  </div>
                )}
                <div className={styles.impact}>
                  <h4>Business Impact</h4>
                  <div>
                    {project.impact.map((item) => (
                      <span key={item.label}>
                        <strong>{item.value}</strong>
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasePoint({ title, body }: { title: string; body: string }) {
  return (
    <div className={styles.casePoint}>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
