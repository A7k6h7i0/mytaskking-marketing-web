import Image from "next/image";
import Link from "next/link";
import { featureJourneys, type FeatureJourney } from "@/data/features";

const mediaSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px";

function JourneyMedia({ journey }: { journey: FeatureJourney }) {
  const shots = [journey.image, ...(journey.gallery ?? [])];

  if (shots.length === 1) {
    return (
      <div className="relative h-full min-h-[240px] overflow-hidden rounded-xl bg-sky sm:min-h-[320px] sm:rounded-2xl">
        <Image
          src={shots[0]}
          alt={journey.title}
          fill
          sizes={mediaSizes}
          className="object-cover object-center"
        />
      </div>
    );
  }

  const [hero, ...rest] = shots;

  return (
    <div className="flex h-full min-h-[240px] flex-col gap-2 sm:min-h-[320px] sm:gap-3">
      <div className="relative min-h-[140px] flex-[1.35] overflow-hidden rounded-xl sm:rounded-2xl">
        <Image
          src={hero}
          alt={`${journey.title} overview`}
          fill
          sizes={mediaSizes}
          className="object-cover object-center"
        />
      </div>
      <div
        className={`grid min-h-[120px] flex-1 gap-2 sm:gap-3 ${
          rest.length > 1 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {rest.map((src, index) => (
          <div
            key={src}
            className={`relative min-h-[100px] overflow-hidden rounded-xl sm:rounded-2xl ${
              rest.length === 3 && index === 2 ? "col-span-2" : ""
            }`}
          >
            <Image
              src={src}
              alt={`${journey.title} detail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 220px"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeatureJourneyGrid() {
  return (
    <div className="grid gap-10 md:gap-14">
      {featureJourneys.map((journey, index) => (
        <article
          key={journey.id}
          id={journey.id}
          className="scroll-mt-[calc(var(--header-height)+1rem)] grid gap-5 sm:gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
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

          <div className="grid gap-4 rounded-2xl border border-line bg-paper p-3 sm:gap-5 sm:rounded-3xl sm:p-4 md:grid-cols-[1.05fr_1fr] md:items-stretch md:p-5">
            <JourneyMedia journey={journey} />

            <div className="flex flex-col justify-center gap-4 px-1 py-1 sm:px-2 sm:py-2">
              <ul className="space-y-2.5">
                {journey.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {journey.notes?.length ? (
                <div className="rounded-xl bg-sky/80 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                    On Windows by design
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {journey.notes.map((note) => (
                      <li key={note} className="text-xs leading-relaxed text-muted">
                        • {note}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </article>
      ))}

      <div className="rounded-2xl border border-line bg-sky/60 px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-sm text-muted">
          Want a walkthrough for your team?{" "}
          <Link href="/contact" className="font-bold text-accent-deep hover:text-ink">
            Request a demo
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
