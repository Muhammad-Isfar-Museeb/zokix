import Link from "next/link";
import Reveal from "./Reveal";
import { categories } from "@/lib/toolsData";

// the flagship generators get custom icons above; every other tool
// category from lib/toolsData shows in the second row below
const moreCategories = categories.filter((c) =>
  ["wordpress", "voice", "downloader", "converter", "bg-remover"].includes(c.slug)
);

const services = [
  {
    title: "Video Generation",
    href: "/tools/video",
    desc: "Cinematic AI-generated video ads, intros, reels and product showcases, rendered fast and cut sharp.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <rect x="2.5" y="5" width="14" height="14" rx="2.5" stroke="#ece7de" strokeWidth="1.6" />
        <path d="M16.5 10.5L21.5 7.5V16.5L16.5 13.5" stroke="#ece7de" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 9.8L12.2 12L8 14.2V9.8Z" fill="#ece7de" />
      </svg>
    ),
  },
  {
    title: "Post Generation",
    href: "/tools/image",
    desc: "Scroll-stopping social media posts, carousels and captions: on-brand content generated at scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#ece7de" strokeWidth="1.6" />
        <path d="M7 8.5H17" stroke="#ece7de" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 12H17" stroke="#ece7de" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 15.5H12.5" stroke="#ece7de" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Web Design Generator",
    href: "/tools/web-design",
    desc: "Full landing pages and interfaces designed by AI, refined by humans, from wireframe to launch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <rect x="2.5" y="4" width="19" height="16" rx="2.5" stroke="#ece7de" strokeWidth="1.6" />
        <path d="M2.5 8.5H21.5" stroke="#ece7de" strokeWidth="1.6" />
        <circle cx="5.5" cy="6.3" r="0.9" fill="#ece7de" />
        <circle cx="8.3" cy="6.3" r="0.9" fill="#ece7de" />
        <path d="M6 13L8.5 15.5L6 18" stroke="#ece7de" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 17.5H15" stroke="#ece7de" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Logo & Brand Design",
    href: "/tools/image",
    desc: "Metallic marks, wordmarks and full identity systems: brands built to cut through the noise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <path
          d="M12 2.5L14.6 8.6L21.5 9.4L16.4 13.9L17.9 20.5L12 17L6.1 20.5L7.6 13.9L2.5 9.4L9.4 8.6L12 2.5Z"
          stroke="#ece7de"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="ai-tools" className="border-b hairline">
      <div className="mx-auto max-w-6xl border-x hairline">
        <div className="border-b hairline bg-panel px-5 py-10 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-[0.15em] pearl-text md:text-4xl">
              AI TOOLS
            </h2>
            <p className="mt-3 text-sm tracking-wide text-pearl-dim">
              Four generators, plus every utility we swear by: templates, voice, downloads and more.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Link
              href={s.href}
              key={s.title}
              className="group flex flex-col items-center border-b hairline px-6 py-12 text-center transition-colors hover:bg-white/[0.02] sm:border-r lg:[&:nth-child(4)]:border-r-0"
            >
              <Reveal delay={i * 0.1}>
                <div className="keycap inline-block">
                  <div className="keycap-face flex h-20 w-20 items-center justify-center">
                    {s.icon}
                  </div>
                </div>
                <h3 className="mt-6 font-display text-sm font-bold tracking-[0.15em] text-pearl-bright">
                  {s.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pearl-dim">
                  {s.desc}
                </p>
                <span className="mt-4 inline-block font-display text-[10px] tracking-[0.3em] text-pearl-dim opacity-0 transition-opacity group-hover:opacity-100">
                  OPEN TOOLKIT →
                </span>
              </Reveal>
            </Link>
          ))}
        </div>

        {/* remaining tool categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {moreCategories.map((c, i) => (
            <Link
              href={`/tools/${c.slug}`}
              key={c.slug}
              className="group flex flex-col items-center border-b hairline px-4 py-10 text-center transition-colors hover:bg-white/[0.02] odd:border-r sm:border-r sm:[&:nth-child(3n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(5n)]:border-r-0"
            >
              <Reveal delay={(i % 5) * 0.08}>
                <div className="flex flex-col items-center">
                  <div className="keycap inline-block">
                    <div className="keycap-face flex h-16 w-16 items-center justify-center">
                      <span className="pearl-text font-display text-sm font-black tracking-wider">
                        {c.mark}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-xs font-bold tracking-[0.12em] text-pearl-bright">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-pearl-dim">
                    {c.blurb}
                  </p>
                  <span className="mt-3 font-display text-[9px] tracking-[0.3em] text-pearl-dim opacity-0 transition-opacity group-hover:opacity-100">
                    OPEN →
                  </span>
                </div>
              </Reveal>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
