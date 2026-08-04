import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Abdullah's Portfolio | Zokix",
  description:
    "Portfolio of Abdullah, graphic designer at Zokix. Thumbnails, social posts, branding and creative design.",
};

const skills = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Canva Pro",
  "Thumbnail Design",
  "Social Media Design",
  "Brand Identity",
  "Typography",
  "AI-Assisted Design",
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "250+", label: "Designs Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "4", label: "Design Disciplines" },
];

const works = [
  {
    title: "30 Cold Cases, Solved",
    tag: "YOUTUBE THUMBNAIL",
    img: "/work/work-cold-cases-30-solved.png",
  },
  {
    title: "10 Cold Crime Cases, Solved",
    tag: "YOUTUBE THUMBNAIL",
    img: "/work/work-cold-crime-cases-10-solved.png",
  },
  {
    title: "High-Converting WordPress Websites",
    tag: "WEB / AD DESIGN",
    img: "/work/work-wordpress-websites.png",
  },
  {
    title: "The Dark Side of Reddit",
    tag: "YOUTUBE THUMBNAIL",
    img: "/work/work-dark-side-of-reddit.png",
  },
  {
    title: "$500,000 Money Story",
    tag: "YOUTUBE THUMBNAIL",
    img: "/work/work-500k-money-story.png",
  },
];

const services = [
  {
    title: "Thumbnail Design",
    desc: "High-CTR YouTube thumbnails engineered to get the click.",
  },
  {
    title: "Social Media Design",
    desc: "Posts, carousels and stories that keep feeds on-brand.",
  },
  {
    title: "Brand & Logo Design",
    desc: "Identity systems from mark to full brand guidelines.",
  },
  {
    title: "Custom Graphics",
    desc: "Banners, posters, ads: any visual, any format.",
  },
];

const testimonials = [
  {
    quote:
      "Abdullah's thumbnails doubled our click-through rate within a month. Sharp eye, fast delivery.",
    name: "Content Creator Client",
  },
  {
    quote:
      "Every post he designs feels premium. Our brand finally looks the way it should.",
    name: "E-commerce Brand Client",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <section className="border-b hairline">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/work/abdullah-portfolio-hero.webp"
          alt="Abdullah's Portfolio"
          className="h-auto w-full object-cover"
        />
      </section>

      {/* Hero */}
      <section className="dot-grid relative overflow-hidden border-b hairline">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(236,231,222,0.16), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-6xl border-x hairline px-5 py-24 text-center md:py-32">
          <Reveal>
            <p className="font-display text-xs tracking-[0.4em] text-pearl-dim">
              ZOKIX PRESENTS
            </p>
            <h1 className="pearl-text pearl-glow mt-5 font-display text-5xl font-black tracking-[0.08em] md:text-7xl">
              ABDULLAH
            </h1>
            <p className="mt-5 font-display text-sm tracking-[0.3em] text-pearl-bright md:text-base">
              GRAPHIC DESIGNER &amp; VISUAL CREATIVE
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-pearl-dim">
              I design visuals that stop the scroll: thumbnails, social posts,
              brand identities and everything in between. Clean execution,
              bold impact, delivered on time.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#work"
                className="btn-pearl rounded-lg px-7 py-3.5 font-display text-sm font-bold tracking-widest"
              >
                SEE MY WORK
              </a>
              <a
                href="mailto:abdullahtahir1357@gmail.com"
                className="btn-ghost rounded-lg px-7 py-3.5 font-display text-sm font-bold tracking-widest"
              >
                HIRE ME
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-2 border-x hairline md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="border-b hairline px-6 py-10 text-center odd:border-r md:border-b-0 md:border-r md:last:border-r-0"
            >
              <Reveal delay={i * 0.08}>
                <p className="pearl-text font-display text-4xl font-black">
                  {s.value}
                </p>
                <p className="mt-2 text-xs tracking-[0.2em] text-pearl-dim">
                  {s.label.toUpperCase()}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* About + skills */}
      <section className="border-b hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-1 border-x hairline md:grid-cols-2">
          <div className="border-b hairline p-10 md:border-b-0 md:border-r">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-[0.15em] pearl-text">
                ABOUT ME
              </h2>
              <p className="mt-5 leading-relaxed text-pearl-dim">
                I&apos;m Abdullah, a graphic designer focused on digital-first
                creative, the kind of visuals that live on feeds, channels and
                storefronts. My work blends strong typography, sharp
                composition and modern AI tooling to move fast without losing
                craft.
              </p>
              <p className="mt-4 leading-relaxed text-pearl-dim">
                As part of the Zokix studio, I bring the black &amp; pearl
                standard to every project: premium finish, zero clutter.
              </p>
            </Reveal>
          </div>
          <div className="p-10">
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-bold tracking-[0.15em] pearl-text">
                SKILLS &amp; TOOLS
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="btn-ghost rounded-md px-4 py-2 text-xs tracking-wide"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Work grid */}
      <section id="work" className="border-b hairline">
        <div className="mx-auto max-w-6xl border-x hairline">
          <div className="border-b hairline bg-panel px-5 py-10 text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-[0.15em] pearl-text md:text-4xl">
                SELECTED WORK
              </h2>
              <p className="mt-3 text-sm text-pearl-dim">
                A snapshot of recent projects across every discipline.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((w, i) => (
              <div
                key={w.title}
                className="group border-b hairline p-6 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
              >
                <Reveal delay={i * 0.06}>
                  <div className="keycap">
                    <div className="keycap-face relative aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={w.img}
                        alt={w.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 font-display text-[10px] tracking-[0.35em] text-pearl-dim backdrop-blur-sm transition-colors group-hover:text-pearl-bright">
                        {w.tag}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold tracking-[0.12em] text-pearl-bright">
                    {w.title.toUpperCase()}
                  </h3>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-6xl border-x hairline">
          <div className="border-b hairline bg-panel px-5 py-10 text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-[0.15em] pearl-text md:text-4xl">
                WHAT I OFFER
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="border-b hairline p-8 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <Reveal delay={i * 0.08}>
                  <h3 className="font-display text-sm font-bold tracking-[0.12em] text-pearl-bright">
                    {s.title.toUpperCase()}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-pearl-dim">
                    {s.desc}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-1 border-x hairline md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="border-b hairline p-10 last:border-b-0 md:border-b-0 md:first:border-r"
            >
              <Reveal delay={i * 0.1}>
                <p className="pearl-text font-display text-4xl">&ldquo;</p>
                <p className="mt-2 leading-relaxed text-pearl">{t.quote}</p>
                <p className="mt-5 text-xs tracking-[0.2em] text-pearl-dim">
                  • {t.name.toUpperCase()}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Hire CTA */}
      <section id="hire" className="border-b hairline">
        <div className="dot-grid mx-auto max-w-6xl border-x hairline px-5 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-[0.15em] pearl-text md:text-4xl">
              LET&apos;S CREATE SOMETHING
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pearl-dim">
              Have a project in mind? Reach out and let&apos;s make it look
              incredible.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:zokixai@gmail.com"
                className="btn-pearl inline-block rounded-lg px-8 py-4 font-display text-sm font-bold tracking-widest"
              >
                GET IN TOUCH
              </a>
              <a
                href="https://instagram.com/abd.ullah._.07"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-block rounded-lg px-8 py-4 font-display text-sm font-bold tracking-widest"
              >
                INSTAGRAM
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
