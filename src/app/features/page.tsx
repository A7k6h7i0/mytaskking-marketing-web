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
    <div className="site-atmosphere">
      <section className="relative overflow-hidden">
        <div className="mesh-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="container-site section-pad relative py-16 md:py-24">
          <p className="eyebrow">Features</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-ink sm:text-6xl sm:leading-[1.02]">
            Every capability, grouped the way buyers think.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Jump into a journey below. Each block is ready for real screenshots and short videos —
            so non-technical viewers understand the product without opening the app.
          </p>

          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Feature journeys">
            {featureJourneys.map((journey) => (
              <a
                key={journey.id}
                href={`#${journey.id}`}
                className="rounded-xl border border-line bg-paper/80 px-3.5 py-2 text-sm font-semibold text-ink-soft transition hover:border-accent/40 hover:text-accent"
              >
                {journey.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="container-site section-pad pb-20 md:pb-28">
        <FeatureJourneyGrid />
      </section>

      <section className="border-t border-line bg-ink py-12 text-paper">
        <div className="container-site section-pad flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-white/70">
            Want a guided tour for your sales or operations team?
          </p>
          <Link href="/#contact" className="btn-accent">
            Request a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
