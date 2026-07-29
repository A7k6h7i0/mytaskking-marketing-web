"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// 4 small features in a row
const subFeatures = [
  {
    title: "Secure & Reliable",
    icon: (
      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Role-based Access",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Anywhere Access",
    icon: (
      <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Real-time Insights",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
  },
];

// 6 Role Cards
const roleCards = [
  {
    id: "employee",
    name: "Employee",
    description: "Day-to-day work stays in one place — chat, tasks, workday, meetings, and calendar.",
    highlights: [
      "Personal tasks & reminders",
      "Team chat & announcements",
      "Daily check-ins & calendar",
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    floatingIcon: (
      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    bgColor: "bg-blue-50 text-blue-600",
    borderGlow: "group-hover:border-blue-200",
  },
  {
    id: "manager",
    name: "Manager",
    description: "Everything employees get — plus clients, team oversight, and clearer follow-through.",
    highlights: [
      "Team & client management",
      "Task delegation & tracking",
      "Reports & performance insights",
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    floatingIcon: (
      <svg className="h-3 w-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
    bgColor: "bg-emerald-50 text-emerald-600",
    borderGlow: "group-hover:border-emerald-200",
  },
  {
    id: "telecaller",
    name: "Telecaller",
    description: "A focused sales workspace for leads, one-tap calls, outcomes, and recordings.",
    highlights: [
      "Lead list & quick actions",
      "One-tap calls & notes",
      "Call recordings & outcomes",
    ],
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.864l-.5 2.5a1 1 0 01-1.25.75L6.56 5.624a15.075 15.075 0 006.816 6.816l.864-1.25a1 1 0 011.25-.75l2.5.5a1 1 0 01.864 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    floatingIcon: (
      <svg className="h-3 w-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.864l-.5 2.5a1 1 0 01-1.25.75L6.56 5.624a15.075 15.075 0 006.816 6.816l.864-1.25a1 1 0 011.25-.75l2.5.5a1 1 0 01.864 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    bgColor: "bg-purple-50 text-purple-600",
    borderGlow: "group-hover:border-purple-200",
  },
  {
    id: "client",
    name: "Client",
    description: "A simple seat for external partners — stay in the conversation without internal clutter.",
    highlights: [
      "Project updates & messages",
      "Share files & feedback",
      "Stay informed, always",
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    floatingIcon: (
      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    bgColor: "bg-blue-50 text-blue-600",
    borderGlow: "group-hover:border-blue-200",
  },
  {
    id: "org-admin",
    name: "Org Admin",
    description: "Full workspace control — people, recordings, AI review, activity, and company settings.",
    highlights: [
      "User & role management",
      "Activity logs & recordings",
      "Workspace & security settings",
    ],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    floatingIcon: (
      <svg className="h-3 w-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
    bgColor: "bg-amber-50 text-amber-600",
    borderGlow: "group-hover:border-amber-200",
  },
  {
    id: "super-admin",
    name: "Platform Super Admin",
    description: "Everything above — plus create, approve, brand, and oversee every organisation.",
    highlights: [
      "Multi-org & billing control",
      "Branding & customisation",
      "Approve & audit everything",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    floatingIcon: (
      <svg className="h-3 w-3 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    bgColor: "bg-rose-50 text-rose-600",
    borderGlow: "group-hover:border-rose-200",
  },
];

export function RolesPreview() {
  return (
    <section id="roles" className="w-full scroll-mt-[calc(var(--header-height)+1rem)] bg-slate-50/20 py-16 sm:py-20 md:py-24 border-b border-slate-100">
      <div className="section-pad">
        <div className="container-site">
          {/* Top Split Section: Left Content, Right Mockup */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-center">
            {/* Left Column: Text & 4 Small Features */}
            <div className="w-full">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <span className="h-0.5 w-6 bg-blue-600" />
                ROLES
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] text-slate-900 sm:text-4xl md:text-5xl">
                Built for how your company <span className="text-blue-600">actually works</span>.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                Every team has a different role to play. MyTaskKing brings everyone together in one workspace — aligned, informed, and in control.
              </p>

              {/* 4 Small Features Row below description */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {subFeatures.map((feat) => (
                  <div key={feat.title} className="flex flex-col items-center justify-center rounded-xl border border-slate-200/60 bg-white p-3 shadow-[0_2px_10px_rgba(0,0,0,0.01)] text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-700 mb-2">
                      {feat.icon}
                    </div>
                    <span className="font-display text-[10px] font-bold text-slate-800 leading-tight">
                      {feat.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Beautiful Laptop + Phone + Plant Composition */}
            <div className="relative flex w-full items-center justify-center pt-6">
              {/* Soft background glow */}
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/5 blur-3xl" />
              
              {/* Central Laptop Mockup */}
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
                <Image
                  src="/media/roles-devices.png"
                  alt="MyTaskKing Laptop Dashboard"
                  width={1280}
                  height={600}
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          {/* 6 Role Cards Grid */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roleCards.map((role) => (
              <div
                key={role.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)] ${role.borderGlow}`}
              >
                <div className="grid grid-cols-[1.2fr_0.8fr] gap-4 items-start">
                  {/* Left Side: Text, description, highlights */}
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${role.bgColor}`}>
                        {role.icon}
                      </div>
                      <h3 className="font-display text-sm font-extrabold text-slate-900 sm:text-base">
                        {role.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-slate-500">
                      {role.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="mt-4 space-y-2">
                      {role.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[10px] text-slate-700 font-semibold leading-tight">
                          <svg className="h-3.5 w-3.5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side: Portrait Image or UI Graphic */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                    {role.id === "org-admin" ? (
                      /* Org Admin UI Graphic */
                      <div className="relative flex h-full w-full flex-col justify-between bg-slate-50 p-2.5">
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-10 rounded-full bg-slate-200" />
                          <div className="flex items-center gap-1.5 rounded bg-white p-1 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-slate-100" />
                            <div className="h-1 w-8 rounded-full bg-slate-200" />
                          </div>
                          <div className="flex items-center gap-1.5 rounded bg-white p-1 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-slate-100" />
                            <div className="h-1 w-6 rounded-full bg-slate-200" />
                          </div>
                        </div>
                        {/* Lock Shield Overlay */}
                        <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-center justify-center bg-gradient-to-t from-slate-900/80 to-slate-900/40 text-white">
                          <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                      </div>
                    ) : role.id === "super-admin" ? (
                      /* Platform Super Admin UI Graphic */
                      <div className="flex h-full w-full flex-col justify-between bg-white p-2.5">
                        <div className="space-y-1">
                          <span className="text-[8px] font-bold text-slate-400">Total Orgs</span>
                          <p className="text-xs font-black text-slate-900">128</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[8px] font-bold text-slate-400">Active Users</span>
                          <p className="text-xs font-black text-slate-900">5,230</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[8px] font-bold text-slate-400">Revenue</span>
                          <p className="text-xs font-black text-rose-500">$48,820</p>
                        </div>
                        {/* Mini Pink Line Chart */}
                        <div className="h-6 w-full">
                          <svg className="h-full w-full text-rose-500" viewBox="0 0 100 30" fill="none">
                            <path d="M0,25 Q20,5 40,18 T80,8 T100,2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      /* Standard Portrait Image */
                      <Image
                        src={role.image}
                        alt={role.name}
                        fill
                        sizes="(max-width: 768px) 30vw, 120px"
                        className="object-cover"
                      />
                    )}

                    {/* Floating Mini Icon on top-right of the visual */}
                    <div className={`absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white shadow-sm ${role.bgColor}`}>
                      {role.floatingIcon}
                    </div>
                  </div>
                </div>

                {/* Explore Link */}
                <div className="mt-5 border-t border-slate-100 pt-3">
                  <Link
                    href={`/roles#${role.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition hover:text-blue-700"
                  >
                    Explore role
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
