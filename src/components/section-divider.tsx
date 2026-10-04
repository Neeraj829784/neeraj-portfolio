"use client";

import { motion } from "motion/react";

export function SectionDivider() {
  return (
    <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 py-8 md:px-6">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-px w-full origin-left bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute h-2 w-2 rounded-full bg-emerald-500/50"
      />
    </div>
  );
}
