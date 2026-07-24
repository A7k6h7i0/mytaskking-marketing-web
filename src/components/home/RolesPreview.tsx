import Link from "next/link";
import { roles } from "@/data/roles";

export function RolesPreview() {
  return (
    <section id="roles" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-site section-pad">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Roles</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold text-ink sm:text-5xl sm:leading-[1.05]">
              Built for how your company actually works.
            </h2>
          </div>
          <Link
            href="/features"
            className="text-sm font-bold text-accent transition hover:text-accent-deep"
          >
            See features by journey →
          </Link>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.id}
              className="group rounded-2xl border border-line bg-paper p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_20px_50px_-30px_rgba(10,15,28,0.35)]"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-accent/80 transition group-hover:w-12" />
              <h3 className="font-display text-lg font-bold text-ink">{role.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{role.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
