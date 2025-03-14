"use client";
import { motion, Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  custom?: number;
}

export default function Reveal({
  children,
  variants,
  className,
  custom,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}
