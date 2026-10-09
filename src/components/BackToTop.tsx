"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="fixed right-6 bottom-6 z-40 grid size-11 place-items-center rounded-full bg-brand text-white shadow-[0_10px_30px_-8px_var(--color-brand-glow)] transition-colors hover:bg-brand-deep"
        >
          <ArrowUp className="size-4" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
