import Image from "next/image";
import { platforms } from "@/data/platforms";

export function PlatformsGrid() {
  return (
    <div className="grid gap-8 md:gap-12">
      {platforms.map((platform, index) => (
        <article
          key={platform.id}
          id={platform.id}
          className="scroll-mt-[calc(var(--header-height)+1rem)] grid gap-5 rounded-2xl border border-line bg-paper p-3 sm:gap-6 sm:rounded-3xl sm:p-4 lg:grid-cols-[1.05fr_1fr] lg:items-stretch lg:p-5"
        >
          <div className="relative min-h-[220px] overflow-hidden rounded-xl bg-sky sm:min-h-[280px] sm:rounded-2xl">
            <Image
              src={platform.image}
              alt={`MyTaskKing on ${platform.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>

          <div className="flex flex-col justify-center px-1 py-1 sm:px-2 sm:py-2">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-deep">
              Platform {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
              {platform.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{platform.summary}</p>

            <ul className="mt-5 space-y-2.5">
              {platform.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {platform.notes?.length ? (
              <div className="mt-5 rounded-xl bg-sky/80 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                  On Windows by design
                </p>
                <ul className="mt-2 space-y-1.5">
                  {platform.notes.map((note) => (
                    <li key={note} className="text-xs leading-relaxed text-muted">
                      • {note}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
