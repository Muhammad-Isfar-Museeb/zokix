import Link from "next/link";
import Reveal from "./Reveal";

export default function PortfolioPreview() {
  return (
    <section className="border-b hairline">
      <div className="dot-grid mx-auto max-w-6xl border-x hairline px-5 py-20 text-center">
        <Reveal>
          <p className="font-display text-xs tracking-[0.35em] text-pearl-dim">
            FEATURED CREATIVE
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-[0.12em] pearl-text md:text-5xl">
            ABDULLAH — DESIGN PORTFOLIO
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pearl-dim">
            Explore the work of our lead designer: thumbnails, posts, brand
            visuals and more — all in the Zokix signature style.
          </p>
          <Link
            href="/portfolio"
            className="btn-pearl mt-9 inline-block rounded-lg px-8 py-4 font-display text-sm font-bold tracking-widest"
          >
            OPEN PORTFOLIO
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
