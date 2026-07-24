import { roles } from "@/data/roles";

export function RolesGrid() {
  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
      {roles.map((role, index) => (
        <article
          key={role.id}
          id={role.id}
          className="scroll-mt-[calc(var(--header-height)+1rem)] rounded-2xl border border-line bg-paper p-5 sm:rounded-3xl sm:p-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-deep">
            Role {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">{role.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{role.blurb}</p>
          <ul className="mt-5 space-y-2.5">
            {role.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
