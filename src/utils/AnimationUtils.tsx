import { useRef, useEffect } from "react";
import { useMotionValue, animate, useInView } from "framer-motion";

export function CountUp({
  from = 0,
  to,
  duration = 2,
  ease = "easeInOut",
  format = (n: number) => Math.round(n).toString(),
  delay = 0,
}: {
  from?: number;
  to: number;
  duration?: number;
  ease?: "easeIn" | "easeOut" | "easeInOut" | "linear";
  format?: (n: number) => string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(from);

  const inView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    // set initial text to match `from` to avoid hydration mismatch
    if (ref.current) ref.current.textContent = format(from);
  }, [from, format]);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(mv, to, {
      duration,
      ease,
      delay,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(v);
      },
    });

    return () => {
      controls.stop();
    };
  }, [inView, mv, to, duration, ease, format, delay]);

  return (
    <span className="m-0 p-0" ref={ref}>
      {format(0)}
    </span>
  );
}
