import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { PlatformSplit } from "@/components/home/PlatformSplit";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ProofStrip } from "@/components/home/ProofStrip";
import { RolesPreview } from "@/components/home/RolesPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <PlatformSplit />
      <RolesPreview />
      <ProofStrip />
      <FinalCta />
    </>
  );
}
