import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { PlatformSplit } from "@/components/home/PlatformSplit";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ProofStrip } from "@/components/home/ProofStrip";
import { RolesPreview } from "@/components/home/RolesPreview";

export default function HomePage() {
  // The sticky slide-over cascade is *scoped* to a dedicated wrapper that
  // contains ONLY Hero + What-it-solves. CSS `position: sticky` sticks within
  // its containing block, so limiting the containing block to just these two
  // sections guarantees the effect ends the instant the wrapper's bottom
  // scrolls past — after which Platforms, Product experience, Roles, and
  // Final CTA all flow normally in sequence, one after another, with nothing
  // pinned or covering them.
  return (
    <>
      {/* Sticky cascade zone: Hero pins, then "What it solves" slides up and
          covers it. Both stickies release together when this wrapper ends. */}
      <div className="relative isolate">
        <div className="sticky top-[var(--header-height)] z-0 bg-[#f5f8fc]">
          <Hero />
        </div>
        <div className="sticky top-[var(--header-height)] z-10 -mt-6 overflow-hidden rounded-t-[40px] bg-slate-50 shadow-[0_-24px_60px_-24px_rgba(15,23,42,0.18)] sm:-mt-10 sm:rounded-t-[56px]">
          <ProblemSolution />
        </div>
      </div>

      {/* Everything below is a plain in-flow sequence: no pin, no cover.
          Product experience now sits above Roles. */}
      <PlatformSplit />
      <ProofStrip />
      <RolesPreview />
      <FinalCta />
    </>
  );
}
