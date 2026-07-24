import type { Metadata } from "next";
import Link from "next/link";
import { RolesGrid } from "@/components/roles/RolesGrid";
import { roles } from "@/data/roles";

export const metadata: Metadata = {
  title: "Roles",
  description:
    "See how MyTaskKing works for employees, managers, telecallers, clients, org admins, and platform super admins.",
};

export default function RolesPage() {
  return (
    <div className="site-atmosphere w-full">
      <div className="h-6 w-full sm:h-8 md:h-10" aria-hidden />

      <section className="relative w-full overflow-hidden">
        <div className="mesh-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="section-pad relative">
          <div className="container-site py-10 sm:py-14 md:py-20">
            <p className="eyebrow">Roles</p>
            <h1 className="mt-4 max-w-3xl font-display text-2xl font-bold text-ink sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.02]">
              Built for how your company actually works.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
              Every seat gets the tools that match the job — from field employees and telecallers to
              managers and platform admins.
            </p>

            <nav className="mt-8 flex flex-wrap gap-2 sm:mt-10" aria-label="Roles">
              {roles.map((role) => (
                <a
                  key={role.id}
                  href={`#${role.id}`}
                  className="rounded-xl border border-line bg-paper/80 px-3 py-2 text-xs font-semibold text-ink-soft transition hover:border-accent/40 hover:text-accent-deep sm:px-3.5 sm:text-sm"
                >
                  {role.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="section-pad w-full pb-16 sm:pb-20 md:pb-28">
        <div className="container-site">
          <RolesGrid />
        </div>
      </section>

      <section className="w-full border-t border-line bg-ink py-10 text-paper sm:py-12">
        <div className="section-pad">
          <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-white/70">
              Want a walkthrough tailored to your team’s roles?
            </p>
            <Link href="/contact" className="btn-accent w-full sm:w-auto">
              Request a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
