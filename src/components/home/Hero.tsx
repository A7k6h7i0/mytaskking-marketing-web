"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhonePreviewCarousel } from "@/components/home/PhonePreviewCarousel";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="site-atmosphere relative min-h-[calc(100svh-4.5rem)] overflow-hidden">
      <div className="mesh-glow pointer-events-none absolute inset-0 opacity-80" aria-hidden />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0f1c] via-[#121a2e]/95 to-transparent" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -right-4 top-1/2 w-[min(440px,40vw)] -translate-y-1/2 scale-[1.08]">
          <PhonePreviewCarousel showCaption={false} />
        </div>
      </div>

      <div className="container-site section-pad relative grid min-h-[calc(100svh-4.5rem)] items-center py-16 lg:py-24">
        <div className="max-w-xl lg:max-w-[34rem]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-display text-5xl font-bold text-ink sm:text-6xl lg:text-[4.25rem] lg:leading-[0.95]"
          >
            {site.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 font-display text-[1.65rem] font-semibold leading-[1.15] text-ink-soft sm:text-3xl"
          >
            Run your company in one secure workspace — not scattered chats.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            Teams chat, call, meet, and manage tasks together. Telecallers log every lead.
            Managers see who checked in — and who is actually working.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
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
          className="relative mt-14 justify-self-center lg:hidden"
        >
          <PhonePreviewCarousel />
        </motion.div>
      </div>
    </section>
  );
}
