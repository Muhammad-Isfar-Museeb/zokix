"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BrandLogo, BrandWordmark } from "./Brand";

export default function Hero() {
  return (
    <section className="dot-grid relative overflow-hidden border-b hairline pt-16">
      {/* radial pearl glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(236,231,222,0.18), transparent)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-24 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrandLogo className="pearl-glow h-24 md:h-32" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8"
        >
          <BrandWordmark className="h-24 md:h-36" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-pearl-dim md:text-xl"
        >
          AI-powered creative tech studio. We generate videos, social posts,
          web designs and brand identities — engineered in black &amp; pearl.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#ai-tools"
            className="btn-pearl rounded-lg px-7 py-3.5 font-display text-sm font-bold tracking-widest"
          >
            EXPLORE AI TOOLS
          </Link>
          <Link
            href="/portfolio"
            className="btn-ghost rounded-lg px-7 py-3.5 font-display text-sm font-bold tracking-widest"
          >
            VIEW PORTFOLIO
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
