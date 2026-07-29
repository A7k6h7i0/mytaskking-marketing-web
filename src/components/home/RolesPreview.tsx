"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/* ---------------------------- 4 small features ---------------------------- */
const subFeatures = [
  {
    title: "Secure & Reliable",
    icon: (
      <svg className="h-4 w-4 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Role-based Access",
    icon: (
      <svg className="h-4 w-4 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Anywhere Access",
    icon: (
      <svg className="h-4 w-4 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Real-time Insights",
    icon: (
      <svg className="h-4 w-4 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
  },
];

/* -------------------------------- 6 role cards ----------------------------- */
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
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
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
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
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.864l-.5 2.5a1 1 0 01-1.25.75L6.56 5.624a15.075 15.075 0 006.816 6.816l.864-1.25a1 1 0 011.25-.75l2.5.5a1 1 0 01.864 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
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
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const TOTAL = roleCards.length;

function RoleSlide({
  role,
  index,
  isActive,
  scrollYProgress,
}: {
  role: (typeof roleCards)[number];
  index: number;
  isActive: boolean;
  scrollYProgress: MotionValue<number>;
}) {
  // Cinematic depth stack: cards sit "behind" the active one with progressive
  // 3D depth (scaled down, tilted back, faded), then rise forward into place,
  // stay at rest, and finally tilt forward + lift away as the next card takes
  // over. Multiple cards are visible at once, giving a physical-deck feel.
  const step = 1 / TOTAL;
  const start = index * step;
  const end = (index + 1) * step;

  const isFirst = index === 0;
  const isLast = index === TOTAL - 1;

  // Seven key progress checkpoints around this card's active window
  const p0 = start - 2 * step;   // deep in the back of the stack
  const p1 = start - step;       // one slot behind the active card
  const p2 = start - 0.3 * step; // rising toward the front
  const p3 = start;              // arrives — active begins
  const p4 = end;                // active ends
  const p5 = end + 0.3 * step;   // tilting forward, starting to leave
  const p6 = end + 0.6 * step;   // fully gone

  type Keyframe = {
    p: number;
    y: string;
    scale: number;
    rotX: string;
    opacity: number;
  };

  let keyframes: Keyframe[];

  if (isFirst) {
    // No enter phase — starts at active
    keyframes = [
      { p: p3, y: "0px", scale: 1, rotX: "0deg", opacity: 1 },
      { p: p4, y: "0px", scale: 1, rotX: "0deg", opacity: 1 },
      { p: p5, y: "-40px", scale: 1.04, rotX: "-12deg", opacity: 0.5 },
      { p: p6, y: "-90px", scale: 1.1, rotX: "-22deg", opacity: 0 },
    ];
  } else if (isLast) {
    // No leave phase — stays active till end
    keyframes = [
      { p: p0, y: "70px", scale: 0.78, rotX: "16deg", opacity: 0 },
      { p: p1, y: "34px", scale: 0.88, rotX: "9deg", opacity: 0.4 },
      { p: p2, y: "10px", scale: 0.96, rotX: "3deg", opacity: 0.85 },
      { p: p3, y: "0px", scale: 1, rotX: "0deg", opacity: 1 },
      { p: p4, y: "0px", scale: 1, rotX: "0deg", opacity: 1 },
    ];
  } else {
    keyframes = [
      { p: p0, y: "70px", scale: 0.78, rotX: "16deg", opacity: 0 },
      { p: p1, y: "34px", scale: 0.88, rotX: "9deg", opacity: 0.4 },
      { p: p2, y: "10px", scale: 0.96, rotX: "3deg", opacity: 0.85 },
      { p: p3, y: "0px", scale: 1, rotX: "0deg", opacity: 1 },
      { p: p4, y: "0px", scale: 1, rotX: "0deg", opacity: 1 },
      { p: p5, y: "-40px", scale: 1.04, rotX: "-12deg", opacity: 0.5 },
      { p: p6, y: "-90px", scale: 1.1, rotX: "-22deg", opacity: 0 },
    ];
  }

  // Web Animations API (used internally by Framer Motion) rejects keyframe
  // offsets outside [0, 1]. Keep only points inside this range — useTransform
  // will clamp to the first/last output for progress values beyond them.
  const inRange = keyframes.filter((kf) => kf.p >= 0 && kf.p <= 1);
  const safeKeyframes = inRange.length >= 2 ? inRange : keyframes;

  const inputRange = safeKeyframes.map((kf) => kf.p);
  const yOutput = safeKeyframes.map((kf) => kf.y);
  const scaleOutput = safeKeyframes.map((kf) => kf.scale);
  const rotateXOutput = safeKeyframes.map((kf) => kf.rotX);
  const opacityOutput = safeKeyframes.map((kf) => kf.opacity);

  const y = useTransform(scrollYProgress, inputRange, yOutput);
  const scale = useTransform(scrollYProgress, inputRange, scaleOutput);
  const rotateX = useTransform(scrollYProgress, inputRange, rotateXOutput);
  const opacity = useTransform(scrollYProgress, inputRange, opacityOutput);

  return (
    <motion.div
      style={{
        y,
        scale,
        rotateX,
        opacity,
        pointerEvents: isActive ? "auto" : "none",
        // Later cards paint UNDER earlier ones, so the active card is always
        // on top of the queued stack peeking from behind.
        zIndex: TOTAL - index,
        transformOrigin: "center bottom",
      }}
      aria-hidden={!isActive}
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-8"
    >
      <div
        className={`grid w-full max-w-5xl grid-cols-1 items-center gap-8 rounded-[2rem] border bg-white p-6 transition-shadow duration-500 sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:p-10 ${
          isActive
            ? "border-slate-200/80 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.4)]"
            : "border-slate-200/60 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.25)]"
        }`}
      >
        {/* Text side */}
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0075ff] text-white shadow-[0_12px_24px_-8px_rgba(0,117,255,0.6)]">
              {role.icon}
            </div>
            <span className="font-display text-3xl font-black text-slate-100 sm:text-4xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-5 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
            {role.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {role.description}
          </p>

          <ul className="mt-6 space-y-3">
            {role.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#0075ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Link
              href={`/roles#${role.id}`}
              className="group inline-flex items-center gap-2 rounded-full bg-[#051229] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0075ff]"
            >
              Explore role
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Image side */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] sm:aspect-[5/4]">
            <Image
              src={role.image}
              alt={role.name}
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function RolesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(TOTAL - 1, Math.max(0, Math.floor(v * TOTAL)));
    setActiveIndex(idx);
  });

  return (
    <section
      ref={sectionRef}
      id="roles"
      className="relative z-[100] isolate w-full scroll-mt-[calc(var(--header-height)+1rem)]"
      style={{ height: `${TOTAL * 100}vh` }}
    >
      {/* Pinned, fully opaque viewport — nothing behind shows through while active */}
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden border-b border-slate-100 bg-slate-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-24 -z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,117,255,0.1),transparent_65%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-10 -z-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,86,179,0.08),transparent_65%)] blur-2xl"
        />

        {/* Header row — static, no entrance animation (only the cards animate) */}
        <div className="section-pad relative shrink-0 pt-8 sm:pt-10">
          <div className="container-site">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0075ff]">
                  <span className="h-px w-8 bg-[#0075ff]" />
                  Roles
                </div>

                <h2 className="mt-4 font-display text-2xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                  Built for how your company{" "}
                  <span className="text-[#0075ff]">actually works.</span>
                </h2>

                <div className="mt-4 hidden flex-wrap gap-2.5 lg:flex">
                  {subFeatures.map((feat) => (
                    <div
                      key={feat.title}
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-sm"
                    >
                      {feat.icon}
                      {feat.title}
                    </div>
                  ))}
                </div>
              </div>

              {/* Live counter + progress bar (scroll-driven, functional not decorative) */}
              <div className="flex items-center gap-4 self-start lg:self-auto">
                <span className="font-display text-sm font-bold text-slate-400">
                  <span className="text-slate-900">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  {" / "}
                  {String(TOTAL).padStart(2, "0")}
                </span>
                <div className="h-1 w-24 overflow-hidden rounded-full bg-slate-200 sm:w-32">
                  <motion.div
                    className="h-full origin-left rounded-full bg-[#0075ff]"
                    style={{ scaleX: scrollYProgress }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical card stack — one role replaces the next as you scroll.
            `perspective` on the parent turns each card's rotateX into a real
            3D tilt (backward peek / forward flip-away) instead of a flat
            squish. */}
        <div
          className="relative min-h-0 flex-1"
          style={{ perspective: "1400px" }}
        >
          {roleCards.map((role, index) => (
            <RoleSlide
              key={role.id}
              role={role}
              index={index}
              isActive={index === activeIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="relative z-10 flex shrink-0 items-center justify-center gap-2 pb-6">
          {roleCards.map((role, index) => (
            <span
              key={role.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-[#0075ff]" : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
