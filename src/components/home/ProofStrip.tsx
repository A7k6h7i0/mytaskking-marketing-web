"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";

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
    bgColor: "bg-purple-600",
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
    bgColor: "bg-blue-600",
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
    bgColor: "bg-emerald-600",
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
    bgColor: "bg-amber-600",
  },
];

export function ProofStrip() {
  return (
    <section className="w-full bg-[#030e21] py-16 sm:py-20 md:py-24 text-white border-b border-slate-950">
      <div className="section-pad">
        <div className="container-site">
          {/* Top Split Section: Left Content, Right Mockup */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-center">
            {/* Left Column: Text & 4 Small Features */}
            <div className="w-full">
              <div className="inline-flex items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-400">
                PRODUCT EXPERIENCE
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] sm:text-4xl md:text-5xl">
                Experience every workflow before your team <span className="bg-gradient-to-r from-[#1f5eff] to-[#00a9c8] bg-clip-text text-transparent">goes live</span>.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                Explore communication, attendance, sales, task management and reporting — all inside one connected workspace.
              </p>

              {/* 4 Small Features Row below description */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {subFeatures.map((feat) => (
                  <div key={feat.title} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-400">
                      {feat.icon}
                    </div>
                    <span className="font-display text-[10px] font-bold text-white/90 leading-tight">
                      {feat.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Beautiful Laptop + Phone Mockup */}
            <div className="relative flex w-full items-center justify-center pt-6">
              {/* Soft background glow */}
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />
              
              {/* Central Laptop Mockup */}
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950 p-1 shadow-2xl">
                <Image
                  src="/media/product-experience-devices.png"
                  alt="MyTaskKing Laptop Dashboard"
                  width={1280}
                  height={600}
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          {/* 4 Workflow Cards Grid - Split Horizontally inside each card */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowCards.map((card) => (
              <div
                key={card.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-white/20 hover:shadow-2xl"
              >
                <div className="grid grid-cols-[1.1fr_0.9fr] gap-4 items-start">
                  {/* Left Side: Text, description, link */}
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${card.bgColor} shadow-sm`}>
                        {card.icon}
                      </div>
                      <h3 className="font-display text-sm font-extrabold text-white">
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-slate-400">
                      {card.description}
                    </p>
                  </div>

                  {/* Right Side: Phone Mockup */}
                  <div className="relative aspect-[9/18] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950 p-0.5 shadow-md">
                    <div className="relative h-full w-full overflow-hidden rounded-[0.9rem]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 30vw, 120px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>

                {/* Explore Link */}
                <div className="mt-5 border-t border-white/5 pt-3">
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 transition hover:text-blue-300"
                  >
                    Explore
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-4">
              {/* Sparkle Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
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
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-500"
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
          </div>
        </div>
      </div>
    </section>
  );
}
