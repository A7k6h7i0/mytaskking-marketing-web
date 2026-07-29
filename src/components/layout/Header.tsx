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
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="section-pad">
        <div className="container-site flex h-16 items-center justify-between gap-3">
          <BrandLogo priority size="nav" className="scale-95 sm:scale-100 origin-left" />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:block">
            <Link
              href={site.urls.demo}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1f5eff] via-[#00a9c8] to-[#8fd400] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:opacity-95 hover:scale-[1.01]"
            >
              Request demo
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 xl:hidden hover:bg-slate-50"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="relative flex h-3 w-3.5 flex-col justify-between">
              <span
                className={`h-0.5 w-full origin-center bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-0.5 w-full origin-center bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-slate-100 bg-white xl:hidden"
        >
          <nav className="section-pad flex flex-col gap-1 py-4" aria-label="Mobile">
            <div className="container-site flex flex-col gap-1">
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                      active ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href={site.urls.demo}
                className="mt-3 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1f5eff] via-[#00a9c8] to-[#8fd400] py-2.5 text-sm font-bold text-white shadow-sm transition hover:opacity-95"
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
