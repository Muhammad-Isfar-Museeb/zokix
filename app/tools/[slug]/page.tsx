import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { categories, getCategory } from "@/lib/toolsData";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "AI Tools | Zokix" };
  const title = `${category.title} | Zokix AI Tools`;
  return {
    title,
    description: category.blurb,
    openGraph: {
      title,
      description: category.blurb,
      url: `/tools/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: category.blurb,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="dot-grid relative overflow-hidden border-b hairline">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(236,231,222,0.16), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-6xl border-x hairline px-5 py-16 text-center md:py-20">
          <Reveal>
            <Link
              href="/tools"
              className="font-display text-xs tracking-[0.35em] text-pearl-dim transition-colors hover:text-pearl-bright"
            >
              ← ALL AI TOOLS
            </Link>
            <h1 className="pearl-text pearl-glow mt-5 font-display text-3xl font-black tracking-[0.1em] md:text-5xl">
              {category.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pearl-dim">
              {category.blurb}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tools with usage */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-6xl border-x hairline">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {category.tools.map((t, i) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center border-b hairline px-6 py-10 text-center transition-colors hover:bg-white/[0.02] sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <Reveal delay={(i % 3) * 0.07}>
                  <div className="flex flex-col items-center">
                    <div className="keycap inline-block">
                      <div className="keycap-face flex h-20 w-20 items-center justify-center">
                        {t.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={t.logo}
                            alt={`${t.name} logo`}
                            className="h-10 w-10 object-contain"
                          />
                        ) : (
                          <span className="pearl-text font-display text-base font-black tracking-wider">
                            {t.mark}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-center gap-2">
                      <h2 className="font-display text-sm font-bold tracking-[0.1em] text-pearl-bright">
                        {t.name.toUpperCase()}
                      </h2>
                      {t.free && (
                        <span className="rounded border border-pearl/40 px-1.5 py-0.5 font-display text-[9px] font-bold tracking-[0.2em] text-pearl">
                          FREE
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-[10px] tracking-[0.25em] text-pearl-dim">
                      {t.tag}
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-pearl-dim">
                      {t.usage}
                    </p>
                    <span className="mt-4 font-display text-[10px] tracking-[0.3em] text-pearl-dim opacity-0 transition-opacity group-hover:opacity-100">
                      OPEN TOOL →
                    </span>
                  </div>
                </Reveal>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Links to every other tool category */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-6xl border-x hairline">
          <div className="border-b hairline bg-panel px-5 py-8 text-center">
            <Reveal>
              <h2 className="font-display text-xl font-bold tracking-[0.2em] pearl-text md:text-2xl">
                EXPLORE OTHER AI TOOLS
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 px-5 py-10">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/tools/${c.slug}`}
                className="btn-ghost rounded-lg px-5 py-3 font-display text-xs font-bold tracking-[0.15em]"
              >
                {c.title}
              </Link>
            ))}
            <Link
              href="/tools"
              className="btn-pearl rounded-lg px-5 py-3 font-display text-xs font-bold tracking-[0.15em]"
            >
              ALL TOOLS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
