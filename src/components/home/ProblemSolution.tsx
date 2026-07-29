"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 4 features below description
const subFeatures = [
  {
    title: "Private & Secure",
    description: "Only your team gets access.",
    icon: (
      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Everything in One Place",
    description: "Chat, calls, tasks, leads, check-ins & more.",
    icon: (
      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Full Visibility",
    description: "Know who is working, what's pending.",
    icon: (
      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Smarter Decisions",
    description: "Real-time insights that drive results.",
    icon: (
      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

// Before MyTaskKing list
const beforeItems = [
  {
    title: "Scattered WhatsApp groups",
    description: "Important conversations get lost in endless chats.",
    image: "/media/features/feature-chat.png",
  },
  {
    title: "Missed follow-ups",
    description: "Leads slip through the cracks and opportunities are lost.",
    image: "/media/features/feature-telecaller.png",
  },
  {
    title: "No visibility",
    description: "No idea who is working or what's actually happening.",
    image: "/media/features/feature-workday.png",
  },
  {
    title: "Unorganized data",
    description: "Files, notes, and updates are everywhere — never in one place.",
    image: "/media/features/feature-tasks.png",
  },
];

// With MyTaskKing list
const withItems = [
  {
    title: "One private workspace",
    description: "Everything your team needs, securely in one place.",
    image: "/media/features/feature-windows.png",
  },
  {
    title: "Leads in one pipeline",
    description: "Track every lead, outcome and follow-up in one view.",
    image: "/media/features/feature-telecaller.png",
  },
  {
    title: "Real-time check-ins",
    description: "Know who is working, where, and on what.",
    image: "/media/features/feature-workday.png",
  },
  {
    title: "Managers in control",
    description: "Clear insights, reports, and activity history at your fingertips.",
    image: "/media/features/feature-admin.png",
  },
];

// Bottom Stats Strip
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

export function ProblemSolution() {
  return (
    <section className="w-full bg-slate-50/50 py-16 sm:py-20 md:py-24 border-b border-slate-100">
      <div className="section-pad">
        <div className="container-site">
          {/* Top Split Layout: Content Left, Mockup Right */}
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
            {/* Left Column */}
            <div className="w-full">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <span className="h-0.5 w-6 bg-blue-600" />
                WHAT IT SOLVES
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] text-slate-900 sm:text-4xl md:text-5xl">
                Replace guesswork with <span className="bg-gradient-to-r from-[#1f5eff] to-[#00a9c8] bg-clip-text text-transparent">one clear company</span> system.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                MyTaskKing replaces scattered WhatsApp groups, missed follow-ups, and invisible remote
                work with one company workspace. Everything stays private, organised, and easy to track.
              </p>

              {/* 4 Feature Grid below description */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {subFeatures.map((feat) => (
                  <div key={feat.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-slate-900">{feat.title}</h4>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Beautiful Mockup */}
            <div className="relative w-full">
              {/* Soft colorful background orb */}
              <div
                className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-emerald-500/10 blur-3xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.08)]">
                <Image
                  src="/media/what-it-solves-devices.png"
                  alt="MyTaskKing Dashboard"
                  width={1280}
                  height={720}
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Before vs With Comparison Section */}
          <div className="relative mt-16 sm:mt-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
              {/* Left Card: Before MyTaskKing */}
              <div className="relative rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.02)]">
                {/* Red cross badge */}
                <div className="absolute left-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-500 ring-1 ring-rose-200 sm:left-8 sm:top-8">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>

                <div className="pl-12 sm:pl-14">
                  <h3 className="font-display text-lg font-extrabold text-slate-900 sm:text-xl">
                    Before MyTaskKing
                  </h3>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {beforeItems.map((item) => (
                      <div key={item.title} className="flex flex-col items-start">
                        <div className="relative mb-3 h-12 w-12 overflow-hidden rounded-full border border-slate-100 bg-slate-50 shadow-sm">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="48px"
                            className="object-cover grayscale opacity-80"
                          />
                        </div>
                        <h4 className="font-display text-sm font-bold text-slate-800">{item.title}</h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Card: With MyTaskKing */}
              <div className="relative rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.02)]">
                {/* Green checkmark badge */}
                <div className="absolute left-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 ring-1 ring-emerald-200 sm:left-8 sm:top-8">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="pl-12 sm:pl-14">
                  <h3 className="font-display text-lg font-extrabold text-slate-900 sm:text-xl">
                    With MyTaskKing
                  </h3>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {withItems.map((item) => (
                      <div key={item.title} className="flex flex-col items-start">
                        <div className="relative mb-3 h-12 w-12 overflow-hidden rounded-full border border-slate-100 bg-slate-50 shadow-sm">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <h4 className="font-display text-sm font-bold text-slate-800">{item.title}</h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating VS Badge in the center */}
            <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 font-display text-sm font-black text-white shadow-md">
                VS
              </div>
            </div>
          </div>

          {/* Bottom Stats Strip */}
          <div className="mt-12 rounded-2xl bg-[#0a1f44] px-6 py-5 text-white sm:mt-16 sm:px-8">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
              {statsStrip.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-400">
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
