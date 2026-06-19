import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <a className={styles.logo} href="#hero">
            SANTANU<span>.</span>
          </a>
          <p>© 2026 Precision engineered</p>
        </div>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
        <p className={styles.location}>
          Based in India
          <br />
          Serving the world
        </p>
      </div>
    </footer>
  );
}
