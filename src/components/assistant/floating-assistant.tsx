"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import { assistantPrompts } from "@/data/portfolio";
import styles from "./floating-assistant.module.css";

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`} aria-hidden={!open}>
        <div className={styles.panelHeader}>
          <span>
            <Bot size={17} />
          </span>
          <strong>AI Strategist</strong>
        </div>
        <p>I&apos;ve analyzed Santanu&apos;s portfolio. How can I help you today?</p>
        <div>
          {assistantPrompts.map((prompt) => (
            <button type="button" key={prompt}>
              &quot;{prompt}&quot;
            </button>
          ))}
        </div>
      </div>

      <button
        className={styles.toggle}
        type="button"
        aria-label={open ? "Close AI strategist" : "Open AI strategist"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <Bot size={28} />
      </button>
    </div>
  );
}
