"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";

// Feature list for the bottom bar
const bottomFeatures = [
  {
    title: "Unified Communication",
    description: "Chat, calls, meetings — all in one place.",
    icon: (
      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    bgColor: "bg-blue-50",
  },
  {
    title: "Complete Visibility",
    description: "Know who is working, who checked in, and what's in progress.",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    bgColor: "bg-emerald-50",
  },
  {
    title: "Lead Tracking",
    description: "Telecallers log every lead. No more lost follow-ups.",
    icon: (
      <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
    bgColor: "bg-purple-50",
  },
  {
    title: "Secure & Private",
    description: "Your data stays private. Only your team gets access.",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    bgColor: "bg-amber-50",
  },
  {
    title: "Smarter Decisions",
    description: "Real-time insights to help you lead better.",
    icon: (
      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
    bgColor: "bg-blue-50",
  },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3f8fc] via-[#e8f3fa] to-[#ffffff] pb-12 pt-20 sm:pb-16 md:pb-20 lg:pt-24">
      {/* Concentric Orbit Lines Background */}
      <div className="absolute right-[-10%] top-[10%] -z-10 hidden h-[800px] w-[800px] items-center justify-center lg:flex">
        <div className="absolute h-[350px] w-[350px] rounded-full border border-slate-200/40" />
        <div className="absolute h-[550px] w-[550px] rounded-full border border-slate-200/30" />
        <div className="absolute h-[750px] w-[750px] rounded-full border border-slate-200/20" />
        <div className="absolute h-[950px] w-[950px] rounded-full border border-slate-200/10" />
      </div>

      <div className="section-pad relative w-full">
        <div className="container-site">
          {/* Main Hero Grid */}
          <div className="grid items-center gap-12 py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:py-16">
            {/* Left Content */}
            <div className="w-full max-w-2xl min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 ring-1 ring-blue-100"
              >
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                ONE WORKSPACE. EVERYTHING TOGETHER.
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="font-display text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl"
              >
                Run your company in <span className="bg-gradient-to-r from-[#1f5eff] to-[#00a9c8] bg-clip-text text-transparent">one workspace</span> — not scattered chats.
              </motion.h1>

              {/* Small horizontal gradient line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-5 h-1.5 w-24 origin-left rounded-full bg-gradient-to-r from-[#1f5eff] to-[#8fd400]"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
              >
                Teams chat, call, meet and manage tasks together. Telecallers log every lead.
                Managers see who checked in — and who is actually working.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="btn-row-mobile mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
              >
                <Link
                  href={site.urls.demo}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1f5eff] via-[#00a9c8] to-[#8fd400] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(31,94,255,0.25)] transition hover:opacity-95 hover:scale-[1.01]"
                >
                  Request a demo →
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.01]"
                >
                  Explore features
                </Link>
              </motion.div>
            </div>

            {/* Right Showcase Image with Floating Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="relative w-full min-w-0"
            >
              {/* Floating Checkmark Icon (Purple) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute left-[5%] top-[15%] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-purple-200 bg-purple-50 text-purple-500 shadow-md sm:h-12 sm:w-12"
              >
                <svg className="h-5 w-5 text-purple-500 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              {/* Floating People Icon (Green) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute right-[10%] top-[-5%] z-10 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-500 shadow-md sm:h-14 sm:w-14"
              >
                <svg className="h-6 w-6 text-emerald-500 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </motion.div>

              {/* Floating Chat Icon (Blue) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                className="absolute -right-2 top-[40%] z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-md sm:h-14 sm:w-14"
              >
                <svg className="h-6 w-6 text-blue-500 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.div>

              {/* Floating Stats Icon (Orange) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="absolute -right-4 bottom-[15%] z-10 flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-500 shadow-md sm:h-14 sm:w-14"
              >
                <svg className="h-6 w-6 text-orange-500 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </motion.div>

              <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-2.5 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] sm:p-3">
                <Image
                  src="/media/hero-devices.png"
                  alt="MyTaskKing on phone and laptop"
                  width={1280}
                  height={720}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Features Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-12 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)] sm:mt-16 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {bottomFeatures.map((feat, index) => (
                <div key={feat.title} className="flex flex-col items-start min-w-0">
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feat.bgColor} shadow-sm`}>
                    {feat.icon}
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900 sm:text-base">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
