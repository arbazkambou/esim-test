"use client";
import { motion, Variants } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  custom?: number;
}

export default function RevealAuto({
  children,
  variants,
  className,
  custom,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.05 }}
      variants={variants}
      className={className}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}
