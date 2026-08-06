import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-b hairline">
      <div className="mx-auto max-w-6xl border-x hairline px-5 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-[0.15em] pearl-text md:text-4xl">
            START A PROJECT
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pearl-dim">
            Tell us what you need: a video, a content engine, a website or a
            whole brand. We&apos;ll take it from there.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:zokixai@gmail.com"
              className="btn-pearl rounded-lg px-8 py-4 font-display text-sm font-bold tracking-widest"
            >
              ZOKIXAI@GMAIL.COM
            </a>
            <a
              href="https://wa.me/923411534889"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost rounded-lg px-8 py-4 font-display text-sm font-bold tracking-widest"
            >
              WHATSAPP
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
