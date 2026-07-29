"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------ Character reveal helpers ------------------------ */
const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

const charItem: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.55, ease },
  },
};

function AnimatedChars({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="inline-block whitespace-nowrap align-bottom">
          {Array.from(word).map((char, ci) => (
            <span key={ci} className="inline-block overflow-hidden align-bottom">
              <motion.span variants={charItem} className="inline-block">
                {char}
              </motion.span>
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </>
  );
}

// 4 small features in a row
const subFeatures = [
  {
    title: "Enterprise Security",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "99.9% Uptime",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "5000+ Active Users",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "GDPR Compliant",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

// 4 Workflow Cards
const workflowCards = [
  {
    title: "Team Communication",
    description: "Real-time messaging, file sharing, mentions and reactions.",
    image: "/media/features/feature-chat.png",
    icon: (
      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    bgColor: "bg-[#0075ff]",
  },
  {
    title: "Video Meetings",
    description: "HD video calls, screen sharing and recording for seamless collaboration.",
    image: "/media/features/feature-calls.png",
    icon: (
      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    bgColor: "bg-[#0075ff]",
  },
  {
    title: "Smart Check-ins",
    description: "GPS-enabled check-ins, attendance tracking and automated reminders.",
    image: "/media/features/feature-workday.png",
    icon: (
      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bgColor: "bg-[#0075ff]",
  },
  {
    title: "Lead Pipeline",
    description: "Visual pipeline tracking, follow-ups and conversion insights.",
    image: "/media/features/feature-telecaller.png",
    icon: (
      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    bgColor: "bg-[#0075ff]",
  },
];

export function ProofStrip() {
  return (
    <section className="w-full bg-[#030e21] py-16 sm:py-20 md:py-24 text-white border-b border-slate-950">
      <div className="section-pad">
        <div className="container-site">
          {/* Header row — eyebrow fades down, heading reveals letter-by-letter,
              CTA button appears top-right on desktop (Solvior "Latest news" pattern) */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.5, ease }}
                className="inline-flex items-center justify-center rounded-full border border-[#0075ff]/30 bg-[#0075ff]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0075ff]"
              >
                Product experience
              </motion.div>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-60px" }}
                variants={headingContainer}
                className="mt-4 font-display text-3xl font-extrabold leading-[1.15] sm:text-4xl md:text-5xl"
              >
                <AnimatedChars text="Experience every workflow before your team" />{" "}
                <span className="text-[#0075ff]">
                  <AnimatedChars text="goes live." />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.25, ease }}
                className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base"
              >
                Explore communication, attendance, sales, task management and reporting — all inside one connected workspace.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="hidden shrink-0 lg:block"
            >
              <Link
                href="/features"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#030e21] transition hover:-translate-y-0.5 hover:bg-[#0075ff] hover:text-white"
              >
                <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-[#0075ff] text-white transition-colors group-hover:bg-white group-hover:text-[#0075ff]">
                  <svg
                    className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  <svg
                    className="absolute h-3 w-3 -translate-x-4 transition-transform duration-300 group-hover:translate-x-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
                Explore all features
              </Link>
            </motion.div>
          </div>

          {/* Main split — 4 workflow cards stacked in the left column, big
              circular product image in the right column, all on one line. */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:items-center">
            {/* LEFT: 4 workflow cards stacked vertically */}
            <div className="flex flex-col gap-4">
              {workflowCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease }}
                  className="group grid grid-cols-[110px_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/[0.07] sm:grid-cols-[130px_1fr] sm:gap-5 sm:p-5"
                >
                  {/* Card image — with a diagonal shine sweep on hover */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 110px, 130px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  </div>

                  {/* Card content */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${card.bgColor} shadow-sm`}>
                        {card.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0075ff]">
                        Workflow {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-sm font-extrabold text-white sm:text-base">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                      {card.description}
                    </p>

                    <Link
                      href="/features"
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0075ff] transition hover:text-blue-300"
                    >
                      Explore
                      <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT: big circular product image — square-friendly team-work
                photo that sits cleanly inside the round frame (no cropping). */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative flex w-full items-center justify-center"
            >
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-white/10 bg-slate-950 p-1 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/media/product-experience.png"
                    alt="Team collaborating on the MyTaskKing workflow dashboard"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sub-features row — placed BELOW the workflow-cards + image row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {subFeatures.map((feat) => (
              <div key={feat.title} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#0075ff]">
                  {feat.icon}
                </div>
                <span className="font-display text-[10px] font-bold text-white/90 leading-tight">
                  {feat.title}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Explore more — mobile only, matches Solvior's bottom-centered fallback */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-10 flex justify-center lg:hidden"
          >
            <Link
              href="/features"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#030e21] transition hover:-translate-y-0.5 hover:bg-[#0075ff] hover:text-white"
            >
              <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-[#0075ff] text-white transition-colors group-hover:bg-white group-hover:text-[#0075ff]">
                <svg
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <svg
                  className="absolute h-3 w-3 -translate-x-4 transition-transform duration-300 group-hover:translate-x-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              Explore all features
            </Link>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-col gap-6 rounded-tl-[40px] rounded-br-[40px] rounded-tr-[10px] rounded-bl-[10px] border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
              <div className="flex items-center gap-4">
              {/* Sparkle Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0075ff]/10 text-[#0075ff]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-white">Ready to explore every workflow?</h4>
                <p className="text-xs text-slate-400 sm:text-sm mt-0.5">See how MyTaskKing can transform the way your team works.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={site.urls.demo}
                className="inline-flex items-center justify-center rounded-xl bg-[#0075ff] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-500"
              >
                Request Demo →
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
              >
                {/* Play Icon */}
                <svg className="h-4 w-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch 2-min Tour
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
