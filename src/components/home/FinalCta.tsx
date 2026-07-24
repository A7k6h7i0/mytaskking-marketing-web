import Link from "next/link";

export function FinalCta() {
  return (
    <section id="contact" className="w-full scroll-mt-[calc(var(--header-height)+1rem)]">
      <div className="brand-gradient-bg relative w-full overflow-hidden py-12 text-white sm:py-20 md:py-24">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-ink/20 blur-3xl"
          aria-hidden
        />

        <div className="section-pad relative">
          <div className="container-site grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/85">Next step</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-4xl md:text-5xl md:leading-[1.05]">
                Show your team what MyTaskKing can replace.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                Book a walkthrough for sales, operations, or leadership — or explore every feature
                on the Features page.
              </p>
            </div>

            <div className="btn-row-mobile flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink-soft"
              >
                Talk to sales
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-xl border border-white/45 bg-white/15 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/25"
              >
                Browse all features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
