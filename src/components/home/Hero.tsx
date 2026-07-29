"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { site } from "@/data/site";

const bottomFeatures = [
  {
    title: "Unified Communication",
    description: "Chat, calls, meetings — all in one place.",
    icon: (
      <svg className="h-5 w-5 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    bgColor: "bg-blue-50",
  },
  {
    title: "Complete Visibility",
    description: "Know who is working, who checked in, and what's in progress.",
    icon: (
      <svg className="h-5 w-5 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    bgColor: "bg-blue-50",
  },
  {
    title: "Lead Tracking",
    description: "Telecallers log every lead. No more lost follow-ups.",
    icon: (
      <svg className="h-5 w-5 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
    bgColor: "bg-blue-50",
  },
  {
    title: "Secure & Private",
    description: "Your data stays private. Only your team gets access.",
    icon: (
      <svg className="h-5 w-5 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    bgColor: "bg-blue-50",
  },
  {
    title: "Smarter Decisions",
    description: "Real-time insights to help you lead better.",
    icon: (
      <svg className="h-5 w-5 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
    bgColor: "bg-blue-50",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const wordItem: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.85, ease },
  },
};

const paraContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.9,
    },
  },
};

const paraWord: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease },
  },
};

// Renders text as words, each wrapped in an overflow-hidden mask
// so the word slides up from below on load (Solvior-style reveal).
function MaskedWords({
  text,
  className = "",
  wordClassName = "",
  variants = wordItem,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  variants?: Variants;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`inline-flex overflow-hidden align-bottom ${className}`}
        >
          <motion.span variants={variants} className={`inline-block ${wordClassName}`}>
            {word}
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f8fc] pb-16 pt-20 sm:pb-20 md:pb-24 lg:pt-24">
      {/* Concentric Orbit Lines Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none absolute right-[-15%] top-[-5%] -z-10 hidden h-[900px] w-[900px] items-center justify-center lg:flex"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-[#0075ff]/25"
        />
        <div className="absolute h-[550px] w-[550px] rounded-full border border-[#0075ff]/15" />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
          className="absolute h-[750px] w-[750px] rounded-full border border-dashed border-[#0075ff]/15"
        />
        <div className="absolute h-[950px] w-[950px] rounded-full border border-[#0075ff]/10" />
      </motion.div>

      {/* Soft Gradient Blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,117,255,0.18),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,86,179,0.14),transparent_65%)] blur-2xl"
      />

      <div className="section-pad relative w-full">
        <div className="container-site">
          {/* Main Hero Grid */}
          <div className="grid items-center gap-12 py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-14">
            {/* Left Content */}
            <div className="relative w-full min-w-0 max-w-2xl">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0075ff] shadow-[0_8px_24px_-12px_rgba(0,117,255,0.35)] ring-1 ring-[#0075ff]/15"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0075ff] opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0075ff]" />
                </span>
                ONE WORKSPACE. EVERYTHING TOGETHER.
              </motion.div>

              {/* Heading — word-by-word masked reveal */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={wordContainer}
                className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4rem]"
              >
                <MaskedWords text="Run your company in" />
                <span className="relative inline-flex overflow-hidden align-bottom">
                  <motion.span variants={wordItem} className="relative inline-block text-[#0075ff]">
                    one&nbsp;workspace
                  </motion.span>
                </span>
                <MaskedWords text=" — not scattered chats." />
              </motion.h1>

              {/* Underline divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.7, delay: 1.0, ease }}
                className="mt-6 h-1.5 w-24 origin-left rounded-full bg-gradient-to-r from-[#0075ff] to-[#0056b3]"
              />

              {/* Paragraph — word stagger */}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={paraContainer}
                className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
              >
                <MaskedWords
                  text="Teams chat, call, meet and manage tasks together. Telecallers log every lead. Managers see who checked in — and who is actually working."
                  variants={paraWord}
                />
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease }}
                className="btn-row-mobile mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
              >
                <Link
                  href={site.urls.demo}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#0075ff] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_-10px_rgba(0,117,255,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-10px_rgba(0,117,255,0.65)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request a demo
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#0056b3] to-[#0075ff] transition-transform duration-500 group-hover:translate-x-0" />
                </Link>
                <Link
                  href="/features"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0075ff]/40 hover:bg-white hover:text-[#0075ff] hover:shadow-md"
                >
                  Explore features
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-[#0075ff]/10">
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 1.5, ease }}
                className="mt-12 hidden items-center gap-4 lg:flex"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-300 pt-2"
                >
                  <motion.span
                    animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="h-2 w-1 rounded-full bg-[#0075ff]"
                  />
                </motion.div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Scroll to explore
                </span>
              </motion.div>
            </div>

            {/* Right Showcase — main image + rotating badge only */}
            <div className="relative w-full min-w-0">
              {/* Rotating Circular Text Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.9, type: "spring", stiffness: 120 }}
                className="absolute -left-6 top-[38%] z-30 hidden h-28 w-28 sm:flex sm:h-32 sm:w-32"
              >
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                  viewBox="0 0 200 200"
                  className="h-full w-full"
                >
                  <defs>
                    <path
                      id="circle-text-path"
                      d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    />
                  </defs>
                  <text fontSize="16" fontWeight="700" letterSpacing="4" fill="#051229">
                    <textPath href="#circle-text-path" startOffset="0">
                      MYTASKKING • WORK BETTER • TOGETHER •
                    </textPath>
                  </text>
                </motion.svg>
                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0075ff] text-white shadow-[0_10px_20px_-6px_rgba(0,117,255,0.55)]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>

              {/* Main Hero Image with organic rounded shape */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, type: "spring", stiffness: 90 }}
                className="relative mx-auto w-full max-w-md sm:max-w-lg"
              >
                <div className="relative">
                  {/* Backdrop blob */}
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-tl-[120px] rounded-br-[120px] rounded-tr-[40px] rounded-bl-[40px] bg-gradient-to-br from-[#0075ff] to-[#0056b3] opacity-90"
                  />
                  <div className="relative overflow-hidden rounded-tl-[120px] rounded-br-[120px] rounded-tr-[40px] rounded-bl-[40px] border-4 border-white bg-white shadow-[0_40px_80px_-24px_rgba(15,23,42,0.25)]">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                      alt="Team collaborating in one workspace"
                      width={1200}
                      height={1400}
                      priority
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="h-[440px] w-full object-cover sm:h-[520px]"
                    />
                  </div>
                </div>

              </motion.div>
            </div>
          </div>

          {/* Bottom Features Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-16 rounded-tl-[40px] rounded-br-[40px] rounded-tr-[10px] rounded-bl-[10px] border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:mt-20 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {bottomFeatures.map((feat, index) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.08 * index, ease }}
                  className="flex min-w-0 flex-col items-start"
                >
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feat.bgColor} shadow-sm`}>
                    {feat.icon}
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900 sm:text-base">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {feat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
