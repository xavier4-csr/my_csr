// Reusable wrapper that fades + slides its children in when scrolled into view.
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = { id: string; className?: string; children: ReactNode };

export function Section({ id, className = "", children }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`scroll-mt-24 py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
