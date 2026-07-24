"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

// Animates the numeric portion of a stat value (e.g. "$60M+", "~$7M", "6")
// while preserving the surrounding prefix/suffix characters.
export function CountUp({ value }: { value: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numStr = match ? match[2] : value;
  const suffix = match ? match[3] : "";
  const target = parseFloat(numStr.replace(/,/g, "")) || 0;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (inView) mv.set(target);
  }, [inView, target, mv]);

  React.useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(
        latest.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      );
    });
  }, [spring, decimals]);

  if (!match) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
