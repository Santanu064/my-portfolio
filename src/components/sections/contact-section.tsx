import { Send } from "lucide-react";
import { contactLinks } from "@/data/portfolio";
import styles from "./contact-section.module.css";

export function ContactSection() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 className="reveal-up">
            Let&apos;s Build <span>Something Exceptional</span> Together.
          </h2>
          <p className="reveal-up">
            Currently reviewing build inquiries for Q3. Whether you&apos;re scaling an existing platform or architecting
            from zero, let&apos;s map the cleanest route forward.
          </p>
          <div className={styles.links}>
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a className="reveal-up" href={href} key={label}>
                <span>
                  <Icon size={22} />
                </span>
                <strong>
                  <small>{label}</small>
                  {value}
                </strong>
              </a>
            ))}
          </div>
        </div>

        <form className={`reveal-up glass ${styles.form}`}>
          <div className={styles.formGrid}>
            <label>
              <span>Full name</span>
              <input name="name" placeholder="Enter your name" autoComplete="name" />
            </label>
            <label>
              <span>Email address</span>
              <input name="email" placeholder="email@company.com" type="email" autoComplete="email" />
            </label>
          </div>
          <label>
            <span>Project brief</span>
            <textarea name="brief" placeholder="Goals, timeline, and current challenges..." rows={5} />
          </label>
          <button className="magnetic-button" type="submit">
            Initiate Transmission
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
