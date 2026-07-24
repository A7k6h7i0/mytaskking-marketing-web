import Link from "next/link";
import { featureJourneys } from "@/data/features";

export function FeatureJourneyGrid() {
  return (
    <div className="grid gap-10 md:gap-14">
      {featureJourneys.map((journey, index) => (
        <article
          key={journey.id}
          id={journey.id}
          className="scroll-mt-28 grid gap-5 sm:gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
        >
          <div>
            <p className="eyebrow">Journey {String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:mt-4 sm:text-3xl md:text-4xl">
              {journey.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
              {journey.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              {journey.platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-lg bg-sky px-2.5 py-1 text-xs font-bold text-ink-soft"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 rounded-2xl border border-line bg-paper p-3 sm:gap-5 sm:rounded-3xl sm:p-4 md:grid-cols-[1fr_1.15fr] md:items-stretch md:p-5">
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-ink via-ink-soft to-[#243044] sm:rounded-2xl">
              <div className="flex aspect-[16/10] flex-col justify-between p-4 text-paper sm:aspect-[4/5] sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                    Media slot
                  </p>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold">
                    Screenshot / video
                  </span>
                </div>
                <div>
                  <p className="font-display text-lg font-bold sm:text-xl">{journey.title}</p>
                  <p className="mt-1 text-xs text-white/60">
                    Drop files in <code className="text-accent">/public/media</code>
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-3 self-center px-1 py-1 sm:px-2 sm:py-2">
              {journey.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      <div className="rounded-2xl border border-line bg-sky/60 px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-sm text-muted">
          Need a role-specific walkthrough for Sales Head, Org Admin, or Telecaller?{" "}
          <Link href="/#contact" className="font-bold text-accent hover:text-accent-deep">
            Request a demo
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
