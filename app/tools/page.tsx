import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { categories } from "@/lib/toolsData";

const title = "AI Tools | Zokix";
const description =
  "The generators behind Zokix: video, image, web, WordPress, voice and utility tools, each on its own page.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ToolsHubPage() {
  return (
    <div className="pt-16">
      <section className="dot-grid relative overflow-hidden border-b hairline">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(236,231,222,0.16), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-6xl border-x hairline px-5 py-20 text-center md:py-24">
          <Reveal>
            <p className="font-display text-xs tracking-[0.4em] text-pearl-dim">
              THE GENERATORS BEHIND ZOKIX
            </p>
            <h1 className="pearl-text pearl-glow mt-5 font-display text-4xl font-black tracking-[0.1em] md:text-6xl">
              AI TOOLS
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pearl-dim">
              Every category lives on its own page. Pick one to explore the
              tools, what each is used for, and which ones are free.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-6xl border-x hairline">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Link
                key={c.slug}
                href={`/tools/${c.slug}`}
                className="group flex flex-col items-center border-b hairline px-6 py-12 text-center transition-colors hover:bg-white/[0.02] sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
              >
                <Reveal delay={(i % 4) * 0.08}>
                  <div className="flex flex-col items-center">
                    <div className="keycap inline-block">
                      <div className="keycap-face flex h-20 w-20 items-center justify-center">
                        <span className="pearl-text font-display text-lg font-black tracking-wider">
                          {c.mark}
                        </span>
                      </div>
                    </div>
                    <h2 className="mt-6 font-display text-sm font-bold tracking-[0.12em] text-pearl-bright">
                      {c.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-pearl-dim">
                      {c.blurb}
                    </p>
                    <span className="mt-4 font-display text-[10px] tracking-[0.3em] text-pearl-dim">
                      {c.tools.length} TOOLS →
                    </span>
                  </div>
                </Reveal>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
