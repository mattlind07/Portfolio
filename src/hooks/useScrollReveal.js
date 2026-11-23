import { useEffect } from "react";

/**
 * Fades in every element marked with `data-reveal` as it scrolls into view.
 * Optional per-element delay: style={{ '--reveal-delay': '120ms' }}.
 *
 * Once an element has animated in, the attribute is removed so the element
 * goes back to its normal styles (keeps hover transitions snappy).
 * Re-runs whenever `key` changes (pass the route path).
 */
export default function useScrollReveal(key) {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    if (!elements.length) return;

    const finish = (el) => {
      el.removeAttribute("data-reveal");
      el.classList.remove("is-visible");
    };

    // Old browsers / reduced motion: just show everything
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduceMotion) {
      elements.forEach(finish);
      return;
    }

    const timers = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add("is-visible");
          const delay = parseInt(getComputedStyle(el).getPropertyValue("--reveal-delay"), 10) || 0;
          timers.push(setTimeout(() => finish(el), 700 + delay));
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [key]);
}
