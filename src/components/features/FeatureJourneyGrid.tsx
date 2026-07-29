"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featureJourneys, type FeatureJourney } from "@/data/features";

const mediaSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px";
const easeOut = [0.22, 1, 0.36, 1] as const;

function JourneyMedia({ journey }: { journey: FeatureJourney }) {
  const shots = [journey.image, ...(journey.gallery ?? [])];

  if (shots.length === 1) {
    return (
      <div className="relative h-full min-h-[220px] overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2 sm:min-h-[300px]">
        <Image
          src={shots[0]}
          alt={journey.title}
          fill
          sizes={mediaSizes}
          className="object-contain"
        />
      </div>
    );
  }

  const [hero, ...rest] = shots;

  return (
    <div className="flex h-full min-h-[220px] flex-col gap-2 sm:min-h-[300px] sm:gap-3">
      <div className="relative min-h-[130px] flex-[1.35] overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2">
        <Image
          src={hero}
          alt={`${journey.title} overview`}
          fill
          sizes={mediaSizes}
          className="object-contain"
        />
      </div>
      <div
        className={`grid min-h-[110px] flex-1 gap-2 sm:gap-3 ${
          rest.length > 1 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {rest.map((src, index) => (
          <div
            key={src}
            className={`relative min-h-[90px] overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-1.5 ${
              rest.length === 3 && index === 2 ? "col-span-2" : ""
            }`}
          >
            <Image
              src={src}
              alt={`${journey.title} detail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 220px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeatureJourneyGrid() {
  return (
    <div className="grid gap-16 sm:gap-20 md:gap-24">
      {featureJourneys.map((journey, index) => {
        const isReversed = index % 2 === 1;

        return (
          <article
            key={journey.id}
            id={journey.id}
            className="scroll-mt-[calc(var(--header-height)+1.5rem)] grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
          >
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 56 : -56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className={`flex flex-col justify-center ${isReversed ? "lg:order-2" : "lg:order-1"}`}
            >
              <p className="eyebrow">Journey {String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-slate-900 sm:mt-4 sm:text-3xl md:text-4xl">
                {journey.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                {journey.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {journey.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isReversed ? -56 : 56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
              className={`grid gap-6 rounded-xl border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.01)] md:grid-cols-[1.05fr_1fr] md:items-stretch md:p-6 ${
                isReversed ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <JourneyMedia journey={journey} />

              <div className="flex flex-col justify-center gap-4 px-1 py-1 sm:px-2 sm:py-2">
                <ul className="space-y-3">
                  {journey.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {journey.notes?.length ? (
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 mt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      On Windows by design
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {journey.notes.map((note) => (
                        <li key={note} className="text-xs leading-relaxed text-slate-500">
                          • {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </article>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-5"
      >
        <p className="text-sm text-slate-600">
          Want a walkthrough for your team?{" "}
          <Link href="/contact" className="font-semibold text-accent hover:text-accent-deep">
            Request a demo
          </Link>
          .
        </p>
      </motion.div>
    </div>
  );
}
