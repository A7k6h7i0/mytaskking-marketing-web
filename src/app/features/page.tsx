import type { Metadata } from "next";
import Link from "next/link";
import { FeatureJourneyGrid } from "@/components/features/FeatureJourneyGrid";
import { featureJourneys } from "@/data/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore MyTaskKing feature journeys — communication, workday, tasks, telecaller CRM, desktop accountability, admin tools, and organisation onboarding.",
};

export default function FeaturesPage() {
  return (
    <div className="site-atmosphere w-full">
      <div className="h-6 w-full sm:h-8 md:h-10" aria-hidden />

      <section className="relative w-full overflow-hidden">
        <div className="mesh-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="section-pad relative">
          <div className="container-site py-10 sm:py-14 md:py-20">
            <p className="eyebrow">Features</p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold text-ink sm:text-5xl md:text-6xl md:leading-[1.02]">
              Every capability, grouped the way buyers think.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
              Jump into a journey below. Each block is ready for real screenshots and short videos —
              so non-technical viewers understand the product without opening the app.
            </p>

            <nav
              className="mt-8 flex flex-wrap gap-2 sm:mt-10"
              aria-label="Feature journeys"
            >
              {featureJourneys.map((journey) => (
                <a
                  key={journey.id}
                  href={`#${journey.id}`}
                  className="rounded-xl border border-line bg-paper/80 px-3 py-2 text-xs font-semibold text-ink-soft transition hover:border-accent/40 hover:text-accent sm:px-3.5 sm:text-sm"
                >
                  {journey.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="section-pad w-full pb-16 sm:pb-20 md:pb-28">
        <div className="container-site">
          <FeatureJourneyGrid />
        </div>
      </section>

      <section className="w-full border-t border-line bg-ink py-10 text-paper sm:py-12">
        <div className="section-pad">
          <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-white/70">
              Want a guided tour for your sales or operations team?
            </p>
            <Link href="/#contact" className="btn-accent w-full sm:w-auto">
              Request a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
