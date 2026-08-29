"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT } from "./variants";

/**
 * Hero visual: fades/scales in once, then floats gently forever.
 * Opacity/scale and the y-loop use separate transitions so the one-off
 * entrance doesn't fight with the continuous idle motion.
 */
export default function FloatingCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, ease: EASE_OUT, delay: 0.15 },
        scale: { duration: 0.6, ease: EASE_OUT, delay: 0.15 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.75 },
      }}
    >
      {children}
    </motion.div>
  );
}
