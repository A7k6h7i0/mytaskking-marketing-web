"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------ Character reveal helpers ------------------------ */
const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
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

// Splits text into per-character animated spans, each in an overflow mask
function AnimatedChars({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="inline-block whitespace-nowrap align-bottom">
          {Array.from(word).map((char, ci) => (
            <span key={ci} className="inline-block overflow-hidden align-bottom">
              <motion.span variants={charItem} className="inline-block">
                {char}
              </motion.span>
            </span>
          ))}
          {wi < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}

/* ------------------------ SVG line-draw icon paths ------------------------ */
type IconPath = { d: string; delay?: number };

const drawTransition = (delay = 0) => ({
  pathLength: { duration: 1.4, ease, delay },
  opacity: { duration: 0.4, delay },
});

function LineDrawIcon({
  paths,
  size = 72,
}: {
  paths: IconPath[];
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
    >
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1 },
          }}
          transition={drawTransition(p.delay ?? i * 0.15)}
        />
      ))}
    </motion.svg>
  );
}

/* -------------------------------- Features -------------------------------- */
const subFeatures: {
  title: string;
  description: string;
  paths: IconPath[];
}[] = [
  {
    title: "Private & Secure",
    description:
      "Your workspace stays private. Only your team gets access — no third parties, no leaks.",
    paths: [
      // Shield outer
      {
        d: "M40 8 L66 18 V38 C66 54 55 66 40 72 C25 66 14 54 14 38 V18 Z",
      },
      // Shield inner
      {
        d: "M40 18 L58 25 V38 C58 49 51 58 40 62 C29 58 22 49 22 38 V25 Z",
      },
      // Lock body
      { d: "M34 42 H46 V54 H34 Z" },
      // Lock shackle
      { d: "M36 42 V38 A4 4 0 0 1 44 38 V42" },
    ],
  },
  {
    title: "Everything in One Place",
    description:
      "Chat, calls, meetings, tasks, leads and check-ins live inside one clean workspace.",
    paths: [
      // Outer square
      { d: "M8 8 H72 V72 H8 Z" },
      // Rotated inner (diamond)
      { d: "M40 16 L64 40 L40 64 L16 40 Z" },
      // Center dot square
      { d: "M34 34 H46 V46 H34 Z" },
      // Corner marks
      { d: "M8 24 H16" },
      { d: "M64 8 V16" },
      { d: "M72 56 H64" },
      { d: "M16 72 V64" },
    ],
  },
  {
    title: "Full Visibility",
    description:
      "See who checked in, who is on a call and what's actually moving — in real time.",
    paths: [
      // Outer eye (elongated ring)
      {
        d: "M6 40 C18 22 32 16 40 16 C48 16 62 22 74 40 C62 58 48 64 40 64 C32 64 18 58 6 40 Z",
      },
      // Inner iris circle
      { d: "M40 26 A14 14 0 1 1 39.99 26" },
      // Pupil
      { d: "M40 34 A6 6 0 1 1 39.99 34" },
      // Highlight
      { d: "M44 32 A2 2 0 1 1 43.99 32" },
    ],
  },
  {
    title: "Smarter Decisions",
    description:
      "Real-time insights and clear reports so managers can lead with confidence, not guesswork.",
    paths: [
      // Chart baseline
      { d: "M10 66 H70" },
      // Chart bars
      { d: "M20 66 V50" },
      { d: "M32 66 V42" },
      { d: "M44 66 V34" },
      { d: "M56 66 V22" },
      // Trend arrow
      { d: "M14 46 L28 38 L40 44 L60 20" },
      // Arrow head
      { d: "M50 20 H60 V30" },
    ],
  },
];

/* ----------------------------- Before / With ------------------------------ */
type CompareItem = { title: string; description: string; icon: ReactNode };

const beforeItems: CompareItem[] = [
  {
    title: "Scattered WhatsApp groups",
    description: "Important conversations get lost in endless chats.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5l14 14" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Missed follow-ups",
    description: "Leads slip through the cracks and opportunities are lost.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.864l-.5 2.5a1 1 0 01-1.25.75L6.56 5.624a15.075 15.075 0 006.816 6.816l.864-1.25a1 1 0 011.25-.75l2.5.5a1 1 0 01.864 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3l6 6M21 3l-6 6" />
      </svg>
    ),
  },
  {
    title: "No visibility",
    description: "No idea who is working or what's actually happening.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
  },
  {
    title: "Unorganized data",
    description: "Files, notes, and updates are everywhere — never in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z" />
      </svg>
    ),
  },
];

const withItems: CompareItem[] = [
  {
    title: "One private workspace",
    description: "Everything your team needs, securely in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Leads in one pipeline",
    description: "Track every lead, outcome and follow-up in one view.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M6 8h12M9 12h6M11 16h2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v4" />
      </svg>
    ),
  },
  {
    title: "Real-time check-ins",
    description: "Know who is working, where, and on what.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Managers in control",
    description: "Clear insights, reports, and activity history at your fingertips.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
  },
];

const statsStrip = [
  {
    label: "Trusted by growing teams",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: "99.9% Uptime",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "256-bit Data Encryption",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    label: "5000+ Active Users",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    label: "24/7 Customer Support",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.864l-.5 2.5a1 1 0 01-1.25.75L6.56 5.624a15.075 15.075 0 006.816 6.816l.864-1.25a1 1 0 011.25-.75l2.5.5a1 1 0 01.864 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

/* --------------------------- Card entrance stagger ------------------------ */
const gridContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.35 },
  },
};

const gridCard: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

export function ProblemSolution() {
  return (
    <section className="relative w-full overflow-hidden border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20 md:py-28">
      {/* Soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-24 -z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,117,255,0.10),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-20 -z-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,86,179,0.08),transparent_65%)] blur-2xl"
      />

      <div className="section-pad relative">
        <div className="container-site">
          {/* Centered header */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0075ff]"
            >
              <span className="h-px w-8 bg-[#0075ff]" />
              What it solves
              <span className="h-px w-8 bg-[#0075ff]" />
            </motion.div>

            {/* Character-by-character heading */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              variants={headingContainer}
              className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            >
              <AnimatedChars text="Replace guesswork with" />{" "}
              <span className="text-[#0075ff]">
                <AnimatedChars text="one clear company" />
              </span>{" "}
              <AnimatedChars text="system." />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
            >
              MyTaskKing replaces scattered WhatsApp groups, missed follow-ups, and invisible
              remote work with one company workspace. Everything stays private, organised,
              and easy to track.
            </motion.p>
          </div>

          {/* 4-card feature grid with animated line-draw icons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            variants={gridContainer}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
          >
            {subFeatures.map((feat, idx) => (
              <motion.div
                key={feat.title}
                variants={gridCard}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.15)] transition-all duration-500 hover:border-[#0075ff]/30 hover:shadow-[0_28px_60px_-24px_rgba(0,117,255,0.35)] sm:p-8"
              >
                {/* Hover-fill background */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-0 origin-bottom scale-y-0 bg-gradient-to-b from-[#0075ff]/[0.03] to-[#0075ff]/[0.08] transition-transform duration-500 ease-out group-hover:scale-y-100"
                />

                {/* Card number */}
                <div className="absolute right-5 top-5 font-display text-[2rem] font-black leading-none text-slate-100 transition-colors duration-300 group-hover:text-[#0075ff]/20">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Animated line-draw icon */}
                <div className="relative mb-6 text-[#0075ff] transition-transform duration-500 group-hover:-translate-y-1">
                  <LineDrawIcon paths={feat.paths} />
                </div>

                <h3 className="relative font-display text-lg font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#051229] sm:text-xl">
                  {feat.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                  {feat.description}
                </p>

                {/* Bottom underline */}
                <div className="relative mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:text-[#0075ff]">
                  <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-12" />
                  Learn more
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ================== Before vs With Comparison ==================
              Two premium cards side-by-side. The Before card is tinted with a
              muted red/slate wash to feel "chaotic"; the With card is tinted
              with the brand blue to feel bright and organised. Each of the 4
              items inside is now a tile with its own semantic icon, and
              slides in with a stagger — Before items from the LEFT, With
              items from the RIGHT. A pulsing "VS" badge floats between them
              on desktop. */}
          <div className="relative mt-16 sm:mt-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
              {/* -------------------- Before MyTaskKing --------------------- */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease,
                      staggerChildren: 0.12,
                      delayChildren: 0.25,
                    },
                  },
                }}
                className="group relative overflow-hidden rounded-3xl border border-rose-200/60 bg-gradient-to-br from-rose-50/70 via-white to-slate-50 p-6 shadow-[0_20px_60px_-30px_rgba(244,63,94,0.25)] sm:p-9"
              >
                {/* Decorative floating blobs */}
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-rose-100/50 blur-3xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-slate-100/70 blur-3xl" />

                {/* Header pill */}
                <div className="relative mb-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-400 text-white shadow-[0_10px_24px_-8px_rgba(244,63,94,0.55)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-white/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-500 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                      The problem
                    </span>
                    <h3 className="mt-1 font-display text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
                      Before <span className="text-rose-500">MyTaskKing</span>
                    </h3>
                  </div>
                </div>

                {/* Items grid — each tile slides in from the LEFT */}
                <div className="relative grid gap-4 sm:grid-cols-2">
                  {beforeItems.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.7, ease },
                        },
                      }}
                      whileHover={{ y: -3 }}
                      className="group/item relative flex flex-col rounded-2xl border border-rose-100/70 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-rose-200 hover:shadow-[0_16px_40px_-24px_rgba(244,63,94,0.4)] sm:p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 text-rose-500 ring-1 ring-inset ring-rose-200/60 transition-transform duration-300 group-hover/item:scale-105">
                          <div className="h-5 w-5">{item.icon}</div>
                        </div>
                        <h4 className="font-display text-sm font-bold text-slate-900 sm:text-base">
                          {item.title}
                        </h4>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* --------------------- With MyTaskKing ---------------------- */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease,
                      staggerChildren: 0.12,
                      delayChildren: 0.4,
                    },
                  },
                }}
                className="group relative overflow-hidden rounded-3xl border border-[#0075ff]/25 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 p-6 shadow-[0_20px_60px_-30px_rgba(0,117,255,0.35)] sm:p-9"
              >
                {/* Decorative floating blobs */}
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-100/60 blur-3xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-blue-50/80 blur-3xl" />

                {/* Header pill */}
                <div className="relative mb-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0075ff] to-[#4d9bff] text-white shadow-[0_10px_24px_-8px_rgba(0,117,255,0.55)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0075ff]/25 bg-white/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0075ff] backdrop-blur-sm">
                      <motion.span
                        aria-hidden
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="h-1.5 w-1.5 rounded-full bg-[#0075ff]"
                      />
                      The solution
                    </span>
                    <h3 className="mt-1 font-display text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
                      With <span className="text-[#0075ff]">MyTaskKing</span>
                    </h3>
                  </div>
                </div>

                {/* Items grid — each tile slides in from the RIGHT */}
                <div className="relative grid gap-4 sm:grid-cols-2">
                  {withItems.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.7, ease },
                        },
                      }}
                      whileHover={{ y: -3 }}
                      className="group/item relative flex flex-col rounded-2xl border border-[#0075ff]/15 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#0075ff]/40 hover:shadow-[0_16px_40px_-24px_rgba(0,117,255,0.5)] sm:p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0075ff] to-[#4d9bff] text-white shadow-[0_10px_20px_-8px_rgba(0,117,255,0.5)] transition-transform duration-300 group-hover/item:scale-105">
                          <div className="h-5 w-5">{item.icon}</div>
                        </div>
                        <h4 className="font-display text-sm font-bold text-slate-900 sm:text-base">
                          {item.title}
                        </h4>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating VS badge — pulses gently and rotates in on view */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            >
              <div className="relative flex h-14 w-14 items-center justify-center">
                {/* Outer pulse ring */}
                <motion.span
                  aria-hidden
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-[#0075ff]/40"
                />
                {/* Middle pulse ring */}
                <motion.span
                  aria-hidden
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.2, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute inset-0 rounded-full bg-[#0075ff]/50"
                />
                {/* Core badge */}
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#0075ff] to-[#4d9bff] font-display text-sm font-black text-white shadow-[0_10px_30px_-8px_rgba(0,117,255,0.6)]">
                  VS
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Strip */}
          <div className="mt-12 rounded-2xl bg-[#051229] px-6 py-5 text-white sm:mt-16 sm:px-8">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
              {statsStrip.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#0075ff]">
                    {stat.icon}
                  </div>
                  <span className="font-display text-xs font-bold tracking-wide text-white/90 sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
