"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function GsapPortfolioRuntime() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // Initialize Lenis smooth scroll
    let lenis: Lenis | null = null;
    if (!reduceMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const updateGsap = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(updateGsap);
      gsap.ticker.lagSmoothing(0);

      cleanups.push(() => {
        gsap.ticker.remove(updateGsap);
        lenis?.destroy();
      });
    }

    const context = gsap.context(() => {
      if (!reduceMotion) {
        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((element) => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          });
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
        const target = Number(element.dataset.count ?? 0);
        const suffix = element.dataset.suffix ?? "+";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: reduceMotion ? 0.01 : 1.8,
          ease: "power2.out",
          snap: { value: 1 },
          onUpdate: () => {
            element.textContent = `${Math.floor(counter.value)}${suffix}`;
          },
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".magnetic-button").forEach((button) => {
        const handleMove = (event: MouseEvent) => {
          const rect = button.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          gsap.to(button, {
            x: x * 0.25,
            y: y * 0.25,
            duration: 0.18,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(button, { x: 0, y: 0, duration: 0.25, ease: "power2.out" });
        };

        button.addEventListener("mousemove", handleMove);
        button.addEventListener("mouseleave", handleLeave);
        cleanups.push(() => {
          button.removeEventListener("mousemove", handleMove);
          button.removeEventListener("mouseleave", handleLeave);
        });
      });

      // Card Stacking scroll-scrub animations
      if (!reduceMotion) {
        const cards = gsap.utils.toArray<HTMLElement>(".project-card");
        cards.forEach((card, index) => {
          if (index < cards.length - 1) {
            const nextCard = cards[index + 1];
            gsap.to(card, {
              scale: 0.96,
              ease: "none",
              scrollTrigger: {
                trigger: nextCard,
                start: "top 95%",
                end: "top 7.5rem",
                scrub: true,
              },
            });
          }
        });
      }
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  return null;
}
