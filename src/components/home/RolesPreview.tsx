"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

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
type Role = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  image: string;
  icon: React.ReactNode;
};

const roleCards: Role[] = [
  {
    id: "employee",
    name: "Employee",
    description:
      "Day-to-day work stays in one place — chat, tasks, workday, meetings, and calendar.",
    highlights: [
      "Personal tasks & reminders",
      "Team chat & announcements",
      "Daily check-ins & calendar",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "manager",
    name: "Manager",
    description:
      "Everything employees get — plus clients, team oversight, and clearer follow-through.",
    highlights: [
      "Team & client management",
      "Task delegation & tracking",
      "Reports & performance insights",
    ],
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "telecaller",
    name: "Telecaller",
    description:
      "A focused sales workspace for leads, one-tap calls, outcomes, and recordings.",
    highlights: [
      "Lead list & quick actions",
      "One-tap calls & notes",
      "Call recordings & outcomes",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.864l-.5 2.5a1 1 0 01-1.25.75L6.56 5.624a15.075 15.075 0 006.816 6.816l.864-1.25a1 1 0 011.25-.75l2.5.5a1 1 0 01.864 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    id: "client",
    name: "Client",
    description:
      "A simple seat for external partners — stay in the conversation without internal clutter.",
    highlights: [
      "Project updates & messages",
      "Share files & feedback",
      "Stay informed, always",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "org-admin",
    name: "Org Admin",
    description:
      "Full workspace control — people, recordings, AI review, activity, and company settings.",
    highlights: [
      "User & role management",
      "Activity logs & recordings",
      "Workspace & security settings",
    ],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: "super-admin",
    name: "Platform Super Admin",
    description:
      "Everything above — plus create, approve, brand, and oversee every organisation.",
    highlights: [
      "Multi-org & billing control",
      "Branding & customisation",
      "Approve & audit everything",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const TOTAL = roleCards.length;
const AUTOPLAY_MS = 4200;

/* ---------------------- Circular carousel positioning ---------------------
   Given `index` and `activeIndex`, returns a signed distance in the range
   [-half, +half] so the carousel wraps seamlessly (card 0 sits at offset +1
   when the last card is active, not -5). */
function circularOffset(index: number, active: number, total: number): number {
  let diff = index - active;
  const half = total / 2;
  if (diff > half) diff -= total;
  if (diff <= -half) diff += total;
  return diff;
}

/* Maps a signed offset to visual state. On narrow viewports the peek offset
   shrinks so adjacent cards still appear substantially behind the active
   one instead of drifting off the screen. */
function cardStateFor(offset: number, isCompact: boolean) {
  const abs = Math.abs(offset);
  const sign = offset < 0 ? -1 : offset > 0 ? 1 : 0;

  if (abs === 0) {
    return { x: "0%", scale: 1, opacity: 1, rotateY: "0deg", blur: 0 };
  }

  if (isCompact) {
    if (abs === 1) return { x: `${sign * 32}%`, scale: 0.9, opacity: 0.55, rotateY: `${sign * 8}deg`, blur: 2 };
    if (abs === 2) return { x: `${sign * 62}%`, scale: 0.78, opacity: 0.2, rotateY: `${sign * 12}deg`, blur: 4 };
    return { x: `${sign * 95}%`, scale: 0.66, opacity: 0, rotateY: `${sign * 15}deg`, blur: 6 };
  }

  if (abs === 1) return { x: `${sign * 55}%`, scale: 0.85, opacity: 0.7, rotateY: `${sign * 12}deg`, blur: 1.5 };
  if (abs === 2) return { x: `${sign * 105}%`, scale: 0.72, opacity: 0.3, rotateY: `${sign * 16}deg`, blur: 3 };
  return { x: `${sign * 150}%`, scale: 0.6, opacity: 0, rotateY: `${sign * 20}deg`, blur: 6 };
}

/* --------------------------- Glass card tile ------------------------------ */
function CardTile({
  role,
  index,
  offset,
  isActive,
  isCompact,
  onSelect,
}: {
  role: Role;
  index: number;
  offset: number;
  isActive: boolean;
  isCompact: boolean;
  onSelect: () => void;
}) {
  const state = cardStateFor(offset, isCompact);

  return (
    <div
      className="absolute left-1/2 top-1/2 w-[min(92vw,780px)] -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: TOTAL - Math.abs(offset) }}
    >
      <motion.button
        type="button"
        onClick={onSelect}
        aria-hidden={!isActive}
        aria-label={isActive ? undefined : `Show ${role.name}`}
        animate={{
          x: state.x,
          scale: state.scale,
          opacity: state.opacity,
          rotateY: state.rotateY,
          filter: `blur(${state.blur}px)`,
        }}
        whileTap={isActive ? undefined : { scale: state.scale * 1.05 }}
        transition={{ duration: 0.75, ease }}
        style={{
          transformOrigin: "center center",
          cursor: isActive ? "default" : "pointer",
        }}
        className="block w-full text-left focus:outline-none"
      >
        {/* Glass card wrapper */}
        <div
          className={`glass-card relative overflow-hidden rounded-[1.75rem] border p-5 backdrop-blur-2xl transition-shadow duration-500 sm:rounded-[2rem] sm:p-8 md:p-10 ${
            isActive
              ? "border-white/70 bg-gradient-to-br from-white/85 via-blue-50/70 to-white/70 shadow-[0_45px_90px_-30px_rgba(0,117,255,0.55)]"
              : "border-white/50 bg-gradient-to-br from-white/70 via-white/55 to-white/50 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.28)]"
          }`}
        >
          {/* --- Coloured light blobs INSIDE the card (glass glow) --------- */}
          <div
            aria-hidden
            className={`pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl transition-opacity duration-700 ${
              isActive ? "bg-[#0075ff]/40 opacity-100" : "bg-[#0075ff]/25 opacity-80"
            }`}
          />
          <div
            aria-hidden
            className={`pointer-events-none absolute -bottom-24 -left-14 h-52 w-52 rounded-full blur-3xl transition-opacity duration-700 ${
              isActive ? "bg-fuchsia-400/25 opacity-100" : "bg-fuchsia-400/15 opacity-70"
            }`}
          />
          <div
            aria-hidden
            className={`pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-700 ${
              isActive ? "bg-cyan-300/25 opacity-100" : "bg-cyan-300/10 opacity-0"
            }`}
          />

          {/* Top-edge glass highlight — hairline of light along the rim */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
          />
          {/* Bottom-edge subtle reflection */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          {/* External glow ring when active */}
          {isActive && (
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-none absolute -inset-1 -z-10 rounded-[2.2rem] bg-gradient-to-br from-[#0075ff]/40 via-[#4d9bff]/25 to-fuchsia-400/20 blur-2xl"
            />
          )}

          <div className="relative grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:items-center">
            {/* Text side */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-[0_12px_24px_-8px_rgba(0,117,255,0.6)] transition-colors sm:h-12 sm:w-12 ${
                    isActive ? "bg-[#0075ff]" : "bg-slate-400/80"
                  }`}
                >
                  {role.icon}
                </div>
                <span className="font-display text-3xl font-black text-slate-300 sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-extrabold text-slate-900 sm:mt-5 sm:text-2xl md:text-[1.85rem] md:leading-tight">
                {role.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm md:text-base">
                {role.description}
              </p>

              <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                {role.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 sm:gap-3 sm:text-sm"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0075ff] sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 sm:mt-7">
                <Link
                  href={`/roles#${role.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#051229] px-4 py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0075ff] sm:px-5 sm:py-3 sm:text-sm"
                >
                  Explore role
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image side — hidden on very small screens to keep the card
                readable; shown from `sm:` upwards */}
            <div className="order-1 hidden md:order-2 md:block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] border border-white/50 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] sm:aspect-[5/4] sm:rounded-[1.5rem]">
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
        </div>
      </motion.button>
    </div>
  );
}

/* ------------------------------- Main section ----------------------------- */
export function RolesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCompact, setIsCompact] = useState(false);
  const isInView = useInView(sectionRef, { margin: "-25%", once: false });

  // Detect narrow viewports so the peek offset can shrink
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Auto-play while section is on screen. Runs continuously — no hover pause
  // — so the carousel keeps cycling; users can tap any peek card to jump.
  useEffect(() => {
    if (!isInView) return;
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % TOTAL);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isInView]);

  const next = () => setActiveIndex((i) => (i + 1) % TOTAL);
  const prev = () => setActiveIndex((i) => (i - 1 + TOTAL) % TOTAL);

  return (
    <section
      ref={sectionRef}
      id="roles"
      className="relative w-full scroll-mt-[calc(var(--header-height)+1rem)] overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20 md:py-24"
    >
      {/* Ambient background lights — brand blue + fuchsia + cyan */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-24 -z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,117,255,0.18),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 -z-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.14),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 -z-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)] blur-2xl"
      />

      {/* Header row */}
      <div className="section-pad relative">
        <div className="container-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0075ff] sm:text-xs">
                <span className="h-px w-6 bg-[#0075ff] sm:w-8" />
                Roles
              </div>

              <h2 className="mt-3 font-display text-2xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:mt-4 sm:text-3xl md:text-4xl">
                Built for how your company{" "}
                <span className="text-[#0075ff]">actually works.</span>
              </h2>

              <div className="mt-4 hidden flex-wrap gap-2.5 lg:flex">
                {subFeatures.map((feat) => (
                  <div
                    key={feat.title}
                    className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur"
                  >
                    {feat.icon}
                    {feat.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Counter + segmented progress */}
            <div className="flex items-center gap-3 self-start sm:gap-4 lg:self-auto">
              <span className="font-display text-xs font-bold text-slate-400 sm:text-sm">
                <span className="text-slate-900">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                {" / "}
                {String(TOTAL).padStart(2, "0")}
              </span>
              <div className="flex h-1 w-24 items-center gap-0.5 sm:w-36">
                {roleCards.map((r, i) => (
                  <div
                    key={r.id}
                    className={`h-full flex-1 rounded-full transition-colors duration-500 ${
                      i === activeIndex ? "bg-[#0075ff]" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal coverflow carousel — auto-scrolls continuously; tap any
          peek card to jump-highlight it. Cards use glassmorphism + colored
          inner lighting for a premium glass feel. */}
      <div
        className="relative mx-auto mt-8 min-h-[440px] w-full sm:mt-10 sm:min-h-[560px] md:mt-14 md:min-h-[640px]"
        style={{ perspective: "1600px" }}
      >
        {roleCards.map((role, i) => (
          <CardTile
            key={role.id}
            role={role}
            index={i}
            offset={circularOffset(i, activeIndex, TOTAL)}
            isActive={i === activeIndex}
            isCompact={isCompact}
            onSelect={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {/* Prev / Next controls + dot indicators */}
      <div className="section-pad relative mt-8 sm:mt-10">
        <div className="container-site flex items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous role"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#0075ff]/40 hover:text-[#0075ff] sm:h-11 sm:w-11"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot indicators — clickable */}
          <div className="flex items-center gap-1.5 px-2 sm:gap-2 sm:px-3">
            {roleCards.map((role, i) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Show ${role.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-[#0075ff] sm:w-8"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next role"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#0075ff]/40 hover:text-[#0075ff] sm:h-11 sm:w-11"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
