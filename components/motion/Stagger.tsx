"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem } from "./variants";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  /** "mount": animate as soon as it renders. "view": animate once on scroll into view. */
  trigger?: "mount" | "view";
  /** Render as a semantic <ul> instead of a <div> (pair with StaggerItem as="li"). */
  as?: "div" | "ul";
};

/**
 * Container that staggers the entrance of its StaggerItem children.
 * Works with Server Component children via composition - only this
 * wrapper (and StaggerItem) needs to be a Client Component.
 */
export function StaggerGroup({
  children,
  className,
  trigger = "view",
  as = "div",
}: StaggerGroupProps) {
  const MotionTag = as === "ul" ? motion.ul : motion.div;

  if (trigger === "mount") {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Render as a semantic <li> instead of a <div> (pair with StaggerGroup as="ul"). */
  as?: "div" | "li";
}) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag className={className} variants={staggerItem}>
      {children}
    </MotionTag>
  );
}
