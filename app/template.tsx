"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

// re-mounts on every navigation (unlike layout.tsx), so this fade
// plays each time a page is accessed
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
