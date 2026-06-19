"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/portfolio";
import styles from "./nav-bar.module.css";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Primary navigation">
        <a className={styles.logo} href="#hero" aria-label="Santanu home">
          SANTANU<span>.</span>
        </a>

        <div className={styles.desktopLinks}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className={`magnetic-button ${styles.resume}`} href="#contact">
            Resume
          </a>
        </div>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className={styles.mobilePanel}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
