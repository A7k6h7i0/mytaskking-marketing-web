"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function PlatformSplit() {
  return (
    <section id="platforms" className="w-full scroll-mt-[calc(var(--header-height)+1rem)] bg-white py-16 sm:py-20 md:py-24 border-b border-slate-100">
      <div className="section-pad">
        <div className="container-site">
          {/* Top Header & Circular Portrait Showcase */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <span className="h-0.5 w-6 bg-blue-600" />
                PLATFORMS
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] text-slate-900 sm:text-4xl md:text-5xl">
                Android for <span className="text-blue-600">the field</span>.<br />
                Windows for <span className="text-emerald-500">the desk</span>.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                Each platform is intentional — calling and meetings on mobile, accountability and deep work on desktop.
              </p>
            </div>

            {/* Right Circular Portrait Showcase */}
            <div className="relative flex items-center justify-center overflow-visible py-6">
              <div className="relative flex items-center gap-3 xs:gap-6 sm:gap-12">
                {/* Field Worker Circle */}
                <div className="relative shrink-0">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg xs:h-32 xs:w-32 sm:h-48 sm:w-48">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80"
                      alt="Field worker on mobile"
                      fill
                      sizes="(max-width: 640px) 128px, 192px"
                      className="object-cover"
                    />
                  </div>
                  {/* Floating Card Left */}
                  <div className="absolute -left-2 bottom-1 w-32 rounded-lg border border-slate-100 bg-white p-2 shadow-md xs:-left-6 xs:w-36 xs:p-2.5 sm:-left-16 sm:w-44 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 sm:h-6 sm:w-6">
                        <svg className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.523 15.3l-1.804-1.8a7.412 7.412 0 00.828-3.3c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5 3.358 7.5 7.5 7.5c1.238 0 2.4-.3 3.428-.828l1.8 1.804c.414.414 1.086.414 1.5 0l1.8-1.8c.414-.414.414-1.086 0-1.5zM9.047 15.3c-2.9 0-5.25-2.35-5.25-5.25s2.35-5.25 5.25-5.25 5.25 2.35 5.25 5.25-2.35 5.25-5.25 5.25z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 sm:text-xs">On the move</span>
                    </div>
                    <p className="mt-1 text-[8px] leading-relaxed text-slate-500 sm:mt-1.5 sm:text-[10px]">
                      Stay connected, update and communicate anytime, anywhere.
                    </p>
                  </div>
                </div>

                {/* Sync Icon in the middle */}
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-white text-blue-600 shadow-md sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 animate-spin-slow sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.228 9H18.01" />
                    </svg>
                  </div>
                </div>

                {/* Desk Worker Circle */}
                <div className="relative shrink-0">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg xs:h-32 xs:w-32 sm:h-48 sm:w-48">
                    <Image
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                      alt="Office worker on desktop"
                      fill
                      sizes="(max-width: 640px) 128px, 192px"
                      className="object-cover"
                    />
                  </div>
                  {/* Floating Card Right */}
                  <div className="absolute -right-2 bottom-1 w-32 rounded-lg border border-slate-100 bg-white p-2 shadow-md xs:-right-6 xs:w-36 xs:p-2.5 sm:-right-16 sm:w-44 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600 sm:h-6 sm:w-6">
                        <svg className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 3H4a2 2 0 00-2 2v11a2 2 0 002 2h4l-1 3v1h10v-1l-1-3h4a2 2 0 002-2V5a2 2 0 00-2-2zm0 13H4V5h16v11z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 sm:text-xs">At your desk</span>
                    </div>
                    <p className="mt-1 text-[8px] leading-relaxed text-slate-500 sm:mt-1.5 sm:text-[10px]">
                      Plan, analyze and manage your entire organization with clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Two Platform Cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Android Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.01)]">
              <div className="grid gap-8 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
                {/* Left Features */}
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-display text-lg font-extrabold text-slate-900">Android App</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight text-slate-900">
                    Built for people who are always moving.
                  </h3>

                  <ul className="mt-8 space-y-6">
                    <li className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.864l-.5 2.5a1 1 0 01-1.25.75L6.56 5.624a15.075 15.075 0 006.816 6.816l.864-1.25a1 1 0 011.25-.75l2.5.5a1 1 0 01.864 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-800">Make & receive calls</h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">One-tap calling and call history on the go.</p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-800">Check-ins & activity</h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">Location-based check-ins and real-time updates.</p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-800">Stay in the loop</h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">Chats, tasks and important notifications at your fingertips.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">
                  <div className="pointer-events-none absolute -inset-4 rounded-full bg-blue-500/5 blur-2xl" />
                  <div className="relative aspect-[9/18] w-full max-w-[200px] overflow-hidden rounded-[2rem] border-4 border-slate-900 bg-slate-950 p-1 shadow-xl">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.8rem]">
                      <Image
                        src="/media/features/feature-calls.png"
                        alt="Android App UI"
                        fill
                        sizes="(max-width: 640px) 200px, 240px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Windows Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.01)]">
              <div className="grid gap-8 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
                {/* Left Features */}
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-display text-lg font-extrabold text-slate-900">Windows App</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight text-slate-900">
                    Powerful desktop for deep work.
                  </h3>

                  <ul className="mt-8 space-y-6">
                    <li className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-800">Complete visibility</h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">Dashboards, reports and analytics in one place.</p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-800">Manage your team</h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">Tasks, timelines, check-ins and performance — clearly.</p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-800">Everything organized</h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">Documents, recordings and activity history — always accessible.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">
                  <div className="pointer-events-none absolute -inset-4 rounded-full bg-emerald-500/5 blur-2xl" />
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <Image
                        src="/media/features/feature-windows.png"
                        alt="Windows App UI"
                        fill
                        sizes="(max-width: 640px) 100vw, 480px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
