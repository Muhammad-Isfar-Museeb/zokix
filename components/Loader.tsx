"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { BrandLogo, BrandWordmark } from "./Brand";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // only play the full intro on the first visit of the session
    if (sessionStorage.getItem("zokix-visited")) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("zokix-visited", "1");
    const t = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: [0.6, 1.05, 1], rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrandLogo className="pearl-glow h-24" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-8"
          >
            <BrandWordmark className="h-12" />
          </motion.div>

          <div className="mt-8 h-px w-48 overflow-hidden bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.9, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-transparent via-pearl to-pearl-bright"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 font-display text-[10px] tracking-[0.4em] text-pearl-dim"
          >
            LOADING EXPERIENCE
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
