"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Applies `prefers-reduced-motion` handling to every motion.* component in
 * the tree: Framer Motion swaps transform/layout animations for instant
 * (opacity-only) transitions automatically when the user has reduced motion
 * enabled. See references/pro-rules.md in the ui-ux-pro-max skill.
 */
export default function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
