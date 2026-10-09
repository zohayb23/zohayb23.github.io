"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type Token = { word: string; strong: boolean };

function tokenize(text: string): Token[] {
  return text
    .split("**")
    .flatMap((chunk, i) =>
      chunk
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => ({ word, strong: i % 2 === 1 })),
    );
}

function Word({
  token,
  progress,
  range,
  tone,
}: {
  token: Token;
  progress: MotionValue<number>;
  range: [number, number];
  tone: "light" | "dark";
}) {
  const reduceMotion = useReducedMotion();
  const opacity = useTransform(progress, range, [0.25, 1]);
  const strongClass = tone === "light" ? "text-ink font-medium" : "text-white font-medium";
  const softClass = tone === "light" ? "text-body-soft" : "text-neutral-300";
  return (
    <motion.span style={reduceMotion ? undefined : { opacity }} className={token.strong ? strongClass : softClass}>
      {token.word}{" "}
    </motion.span>
  );
}

/** Paragraph whose words light up as it scrolls into view. Wrap emphasized words in **double asterisks**. */
export function RevealText({
  text,
  className,
  tone = "light",
}: {
  text: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.55"] });
  const tokens = tokenize(text);
  return (
    <p ref={ref} className={className}>
      {tokens.map((token, i) => (
        <Word
          key={i}
          token={token}
          progress={scrollYProgress}
          range={[i / tokens.length, (i + 1) / tokens.length]}
          tone={tone}
        />
      ))}
    </p>
  );
}

export function CountUp({ value, duration = 1.6 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}
