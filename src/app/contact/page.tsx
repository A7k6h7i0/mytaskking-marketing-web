import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a MyTaskKing demo for sales, operations, or leadership — or talk to our team.",
};

const contactOptions = [
  {
    title: "Talk to sales",
    body: "Ask about pricing, rollout, and whether MyTaskKing fits your company size and roles.",
    href: "mailto:hello@mytaskking.com?subject=MyTaskKing%20sales%20enquiry",
    label: "Email hello@mytaskking.com",
    external: true,
  },
  {
    title: "Request a demo",
    body: "Book a walkthrough for sales, operations, or leadership — see chat, calls, workday, and telecaller in action.",
    href: "mailto:hello@mytaskking.com?subject=MyTaskKing%20demo%20request",
    label: "Request a demo by email",
    external: true,
  },
  {
    title: "Explore the product",
    body: "Prefer to browse first? Review every capability and every role before you book time.",
    href: "/features",
    label: "Browse all features",
    external: false,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="site-atmosphere w-full">
      <div className="h-6 w-full sm:h-8 md:h-10" aria-hidden />

      <section className="relative w-full overflow-hidden">
        <div className="mesh-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="section-pad relative">
          <div className="container-site py-10 sm:py-14 md:py-20">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 max-w-3xl font-display text-2xl font-bold text-ink sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.02]">
              Show your team what MyTaskKing can replace.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
              Reach out for a demo, ask a sales question, or explore the product first — whichever
              step fits your team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad w-full pb-16 sm:pb-20 md:pb-28">
        <div className="container-site grid gap-4 sm:gap-5 lg:grid-cols-3">
          {contactOptions.map((option) => (
            <article
              key={option.title}
              className="flex flex-col rounded-2xl border border-line bg-paper p-5 sm:rounded-3xl sm:p-6"
            >
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{option.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{option.body}</p>
              {option.external ? (
                <a href={option.href} className="btn-accent mt-6 w-full text-center">
                  {option.label}
                </a>
              ) : (
                <Link href={option.href} className="btn-ghost mt-6 w-full text-center">
                  {option.label}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="w-full border-t border-line bg-ink py-10 text-paper sm:py-12">
        <div className="section-pad">
          <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-white/70">
              Looking for role-specific access? See what each seat includes.
            </p>
            <Link href="/roles" className="btn-accent w-full sm:w-auto">
              View roles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
