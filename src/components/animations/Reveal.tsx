"use client";
import { motion, Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  custom?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  variants,
  className,
  custom,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants}
      className={className}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}
