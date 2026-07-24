"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhonePreviewCarousel } from "@/components/home/PhonePreviewCarousel";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="site-atmosphere relative w-full overflow-hidden">
      {/* Clear gap under sticky navbar so content never sits under it */}
      <div className="h-6 w-full sm:h-8 md:h-10" aria-hidden />

      <div className="relative w-full">
        <div className="mesh-glow pointer-events-none absolute inset-0 opacity-80" aria-hidden />

        {/* Full-bleed product plane — desktop only */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] xl:block"
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-l from-[#0a0f1c] via-[#121a2e]/95 to-transparent" />
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="absolute right-[clamp(1rem,4vw,3rem)] top-1/2 w-[min(380px,34vw)] -translate-y-1/2">
            <PhonePreviewCarousel showCaption={false} />
          </div>
        </div>

        <div className="section-pad relative w-full">
          <div className="container-site grid items-center gap-10 py-8 pb-14 sm:py-12 sm:pb-16 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 lg:py-16 xl:grid-cols-1 xl:py-20">
            <div className="w-full max-w-xl xl:max-w-[36rem]">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="font-display text-[2.35rem] font-bold leading-[0.95] text-ink sm:text-5xl md:text-6xl lg:text-[4rem]"
              >
                {site.name}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mt-5 font-display text-xl font-semibold leading-[1.2] text-ink-soft sm:mt-6 sm:text-2xl md:text-3xl"
              >
                Run your company in one secure workspace — not scattered chats.
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

            {/* Phone preview: mobile → large, hidden on xl where edge-bleed takes over */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="relative mx-auto w-full max-w-[260px] justify-self-center sm:max-w-[280px] xl:hidden"
            >
              <PhonePreviewCarousel />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
