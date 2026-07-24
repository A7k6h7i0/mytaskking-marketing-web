"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/platforms", label: "Platforms" },
  { href: "/roles", label: "Roles" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-line/80 bg-paper/95 shadow-[0_8px_30px_-20px_rgba(10,31,68,0.35)] backdrop-blur-xl">
      <div className="section-pad">
        <div className="container-site flex h-16 items-center justify-between gap-2 sm:gap-3">
          <BrandLogo priority />

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-2.5 py-2 text-sm font-medium transition-colors hover:bg-sky/70 hover:text-ink ${
                    active ? "bg-sky text-ink" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:block">
            <Link href={site.urls.demo} className="btn-accent !px-4 !py-2 text-sm">
              Request demo
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-paper text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
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
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line bg-paper xl:hidden"
        >
          <nav className="section-pad flex flex-col gap-1 py-3" aria-label="Mobile">
            <div className="container-site flex flex-col gap-1">
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-3 py-2.5 text-base font-medium hover:bg-sky ${
                      active ? "bg-sky text-ink" : "text-ink"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href={site.urls.demo}
                className="btn-accent mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Request demo
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
