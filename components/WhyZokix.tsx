import Reveal from "./Reveal";

const points = [
  {
    n: "01",
    title: "AI Speed, Human Taste",
    desc: "Generators do the heavy lifting; our designers do the judging. You get volume without the generic look.",
  },
  {
    n: "02",
    title: "One Studio, Full Stack",
    desc: "Video, posts, web and brand under one roof: every asset speaks the same visual language.",
  },
  {
    n: "03",
    title: "Built on Modern Tech",
    desc: "Next.js, Tailwind, TypeScript and Motion power everything we ship: fast, responsive and future-proof.",
  },
  {
    n: "04",
    title: "Black & Pearl Standard",
    desc: "A signature finish: deep black canvases, pearl-white precision. Premium by default.",
  },
];

export default function WhyZokix() {
  return (
    <section id="why" className="border-b hairline">
      <div className="mx-auto max-w-6xl border-x hairline">
        <div className="border-b hairline bg-panel px-5 py-10 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-[0.15em] pearl-text md:text-4xl">
              WHY ZOKIX
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {points.map((p, i) => (
            <div
              key={p.n}
              className="border-b hairline p-8 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0 [&:last-child]:border-b-0"
            >
              <Reveal delay={i * 0.08}>
                <span className="font-display text-xs tracking-[0.3em] text-pearl-dim">
                  {p.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-wider text-pearl-bright">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pearl-dim">
                  {p.desc}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
