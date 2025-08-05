"use client";
import { motion, Variants } from "framer-motion";

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
      variants={variants}
      className={className}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}
