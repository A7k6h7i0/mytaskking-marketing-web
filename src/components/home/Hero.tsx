"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="site-atmosphere relative w-full overflow-hidden">
      <div className="relative w-full">
        <div className="mesh-glow pointer-events-none absolute inset-0 opacity-80" aria-hidden />

        <div className="section-pad relative w-full">
          <div className="container-site grid items-center gap-8 py-8 pb-12 sm:gap-10 sm:py-10 sm:pb-14 md:gap-12 md:py-12 md:pb-16 lg:min-h-[calc(100svh-var(--header-height))] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-16">
            <div className="w-full max-w-xl min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-4 inline-flex max-w-full rounded-2xl bg-paper/80 p-2.5 shadow-[0_12px_40px_-24px_rgba(10,31,68,0.45)] ring-1 ring-line backdrop-blur sm:mb-5 sm:p-3"
              >
                <Image
                  src={site.logo}
                  alt={site.name}
                  width={220}
                  height={72}
                  priority
                  className="h-10 w-auto max-w-full object-contain sm:h-12 md:h-14"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="font-display text-lg font-semibold leading-[1.25] text-ink-soft sm:text-xl md:text-2xl lg:text-3xl"
              >
                Run your company in one workspace — not scattered chats.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg"
              >
                Teams chat, call, meet, and manage tasks together. Telecallers log every lead.
                Managers see who checked in — and who is actually working.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="btn-row-mobile mt-7 flex flex-wrap items-center gap-3 sm:mt-9"
              >
                <Link href={site.urls.demo} className="btn-accent">
                  Request a demo
                </Link>
                <Link href="/features" className="btn-ghost">
                  Explore features
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="relative w-full min-w-0"
            >
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue/20 via-accent/15 to-lime/20 blur-2xl sm:-inset-6"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_30px_80px_-28px_rgba(10,31,68,0.45)] sm:rounded-3xl">
                <Image
                  src="/media/hero-devices.png"
                  alt="MyTaskKing on phone and laptop"
                  width={1280}
                  height={720}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
