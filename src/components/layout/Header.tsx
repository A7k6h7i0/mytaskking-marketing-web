"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/features", label: "Features" },
  { href: "/#platforms", label: "Platforms" },
  { href: "/#roles", label: "Roles" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="section-pad pt-3">
        <div className="container-site flex h-14 items-center justify-between gap-4 rounded-2xl border border-line bg-paper/75 px-4 shadow-[0_8px_30px_-18px_rgba(10,15,28,0.35)] backdrop-blur-xl sm:px-5">
          <Link href="/" className="font-display text-[1.05rem] font-bold text-ink">
            {site.name}
            <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-sky/70 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href={site.urls.demo} className="btn-accent !px-4 !py-2 text-sm">
              Request demo
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-paper text-ink md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="relative flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`h-0.5 w-full origin-center bg-ink transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span className={`h-0.5 w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-0.5 w-full origin-center bg-ink transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="section-pad mt-2 md:hidden">
          <div className="container-site rounded-2xl border border-line bg-paper p-4 shadow-lg">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2.5 text-base font-medium text-ink hover:bg-sky"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={site.urls.demo}
                className="btn-accent mt-2"
                onClick={() => setOpen(false)}
              >
                Request demo
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
