"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT } from "./variants";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** "mount": animate as soon as the component renders (above-the-fold content).
   *  "view": animate once when it scrolls into view. */
  trigger?: "mount" | "view";
  delay?: number;
  y?: number;
};

/**
 * Fade + slide-up wrapper. Server Components can be passed in as `children`
 * (composition pattern), so pages stay Server Components while individual
 * sections still get an entrance animation.
 */
export default function Reveal({
  children,
  className,
  trigger = "view",
  delay = 0,
  y = 16,
}: RevealProps) {
  const initial = { opacity: 0, y };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: 0.5, delay, ease: EASE_OUT };

  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
