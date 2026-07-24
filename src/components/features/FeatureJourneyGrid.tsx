import Link from "next/link";
import { featureJourneys } from "@/data/features";

export function FeatureJourneyGrid() {
  return (
    <div className="grid gap-10 md:gap-14">
      {featureJourneys.map((journey, index) => (
        <article
          key={journey.id}
          id={journey.id}
          className="scroll-mt-28 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
        >
          <div>
            <p className="eyebrow">Journey {String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              {journey.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{journey.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
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

          <div className="grid gap-5 rounded-3xl border border-line bg-paper p-4 sm:grid-cols-[1fr_1.15fr] sm:items-stretch sm:p-5">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-ink-soft to-[#243044]">
              <div className="flex aspect-[4/5] flex-col justify-between p-5 text-paper">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                    Media slot
                  </p>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold">
                    Screenshot / video
                  </span>
                </div>
                <div>
                  <p className="font-display text-xl font-bold">{journey.title}</p>
                  <p className="mt-1 text-xs text-white/60">
                    Drop files in <code className="text-accent">/public/media</code>
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-3 self-center px-1 py-2 sm:px-2">
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

      <div className="rounded-2xl border border-line bg-sky/60 px-5 py-5">
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
