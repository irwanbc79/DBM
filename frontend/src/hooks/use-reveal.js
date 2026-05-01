import { useEffect, useRef, useState } from "react";

// Adds .is-visible to elements with .reveal once they enter viewport
export const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

// Animated counter
export const useCountUp = (end, duration = 1600, start = 0) => {
  const [val, setVal] = useState(start);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            setVal(Math.round(start + (end - start) * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    obs.observe(node);
    return () => obs.disconnect();
  }, [end, duration, start]);
  return [val, ref];
};
