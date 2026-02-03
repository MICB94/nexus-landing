"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimateInViewProps = {
  children: ReactNode;
  className?: string;
  animationClass?: "animate-on-scroll" | "animate-on-scroll-soft";
  rootMargin?: string;
};

export default function AnimateInView({
  children,
  className = "",
  animationClass = "animate-on-scroll",
  rootMargin = "0px 0px -40px 0px",
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={`${animationClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
