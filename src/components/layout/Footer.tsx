import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#3b82f6]/25 blur-3xl"
        aria-hidden
      />

      <div className="container-site section-pad relative grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            {site.name}
            <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{site.description}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <Link href="/features" className="transition hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#platforms" className="transition hover:text-white">
                Platforms
              </Link>
            </li>
            <li>
              <Link href="/#roles" className="transition hover:text-white">
                Roles
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Next step</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Ready to replace scattered chats and missed follow-ups?
          </p>
          <Link href="/#contact" className="btn-accent mt-5">
            Talk to sales
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-site section-pad flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Android for field work · Windows for desk accountability</p>
        </div>
      </div>
    </footer>
  );
}
