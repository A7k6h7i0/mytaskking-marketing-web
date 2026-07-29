"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  type Variants,
} from "framer-motion";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------------------------- Count-up counter --------------------------- */
// Animates a number from 0 up to `to` whenever the target enters the viewport,
// resetting each time it leaves so the count replays on every scroll-in.
function CountUp({
  to,
  duration = 2.4,
  className,
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");

  useMotionValueEvent(rounded, "change", (v) => setDisplay(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
    value.set(0);
    setDisplay("0");
  }, [inView, to, duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* ------------------------- Data derived from content ---------------------- */
const platformChecklist = [
  "Calling and meetings on mobile",
  "Accountability and deep work on desktop",
  "One workspace, real-time sync across every device",
];

const clientAvatars = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
];

/* -------------------- Animation variants (heading + text) ----------------- */

// Typewriter — chars appear one at a time like a keystroke (opacity flip only,
// no motion), with a stagger that reads left-to-right.
const typingContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
};

const typingChar: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

// Slow slide-in from the right — used for the paragraph and checklist items.
const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease },
  },
};

const listContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.28, delayChildren: 0.65 },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, ease },
  },
};

/* ----------------------- Typed line helper (heading) ---------------------- */
function TypedLine({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {Array.from(text).map((ch, i) => (
        <motion.span key={i} variants={typingChar} className="inline-block">
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ============================================================================
   Android / Windows Platform Cards — data + reusable card component
   ========================================================================== */

type PlatformFeature = { title: string; description: string; icon: ReactNode };

const androidFeatures: PlatformFeature[] = [
  {
    title: "Make & receive calls",
    description: "One-tap calling and call history on the go.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.864l-.5 2.5a1 1 0 01-1.25.75L6.56 5.624a15.075 15.075 0 006.816 6.816l.864-1.25a1 1 0 011.25-.75l2.5.5a1 1 0 01.864 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Check-ins & activity",
    description: "Location-based check-ins and real-time updates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Stay in the loop",
    description: "Chats, tasks and important notifications at your fingertips.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

const windowsFeatures: PlatformFeature[] = [
  {
    title: "Complete visibility",
    description: "Dashboards, reports and analytics in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
  },
  {
    title: "Manage your team",
    description: "Tasks, timelines, check-ins and performance — clearly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Everything organized",
    description: "Documents, recordings and activity history — always accessible.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H5z" />
      </svg>
    ),
  },
];

// Distinctive brand-style icons for the platform header pill
const androidPlatformIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.6 9.48l1.84-3.18a.4.4 0 10-.7-.4l-1.86 3.23a11.53 11.53 0 00-9.76 0L5.26 5.9a.4.4 0 10-.7.4L6.4 9.48A10.87 10.87 0 001 18h22a10.87 10.87 0 00-5.4-8.52zM7 15.25a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
  </svg>
);

const windowsPlatformIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

type PlatformCardProps = {
  label: string;
  version: string;
  tagline: string;
  platformIcon: ReactNode;
  features: PlatformFeature[];
  device: { src: string; alt: string; kind: "phone" | "laptop" };
  containerCorners: string;
  entranceDelay?: number;
};

function PlatformCard({
  label,
  version,
  tagline,
  platformIcon,
  features,
  device,
  containerCorners,
  entranceDelay = 0,
}: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.85, delay: entranceDelay, ease }}
      className={`group relative overflow-hidden ${containerCorners} border border-[#0075ff]/15 bg-gradient-to-br from-white via-blue-50/40 to-blue-100/40 p-6 shadow-[0_20px_60px_-30px_rgba(0,117,255,0.25)] transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(0,117,255,0.4)] sm:p-9`}
    >
      {/* Decorative floating blobs + subtle dot grid */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0075ff]/[0.08] blur-3xl transition-opacity duration-500 group-hover:bg-[#0075ff]/[0.14]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-[#4d9bff]/[0.06] blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_center,#0075ff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        {/* CONTENT COLUMN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: entranceDelay + 0.3,
              },
            },
          }}
        >
          {/* Header pill: platform icon + label + version tag */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -32 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
            }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#0075ff]/20 bg-white/85 py-1.5 pl-1.5 pr-3.5 shadow-sm backdrop-blur"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#0075ff] to-[#4d9bff] text-white shadow-[0_6px_16px_-4px_rgba(0,117,255,0.55)]">
              <div className="h-4 w-4">{platformIcon}</div>
            </div>
            <span className="font-display text-sm font-extrabold text-slate-900">{label}</span>
            <span className="rounded-full bg-[#0075ff]/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#0075ff]">
              {version}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
            }}
            className="mt-6 font-display text-2xl font-extrabold leading-tight text-slate-900 sm:text-[1.7rem]"
          >
            {tagline}
          </motion.h3>

          {/* Feature list — each item slides in from the left with stagger */}
          <ul className="mt-8 space-y-3">
            {features.map((feat) => (
              <motion.li
                key={feat.title}
                variants={{
                  hidden: { opacity: 0, x: -36 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
                }}
                whileHover={{ x: 4 }}
                className="group/item flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-[#0075ff]/20 hover:bg-white/80 hover:shadow-[0_10px_30px_-16px_rgba(0,117,255,0.35)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0075ff] to-[#4d9bff] text-white shadow-[0_8px_20px_-6px_rgba(0,117,255,0.55)] transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-3">
                  <div className="h-5 w-5">{feat.icon}</div>
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-base font-bold text-slate-900">{feat.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{feat.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* DEVICE COLUMN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 1, delay: entranceDelay + 0.4, ease }}
          className="relative flex items-center justify-center py-4"
        >
          {/* Multi-layered halo */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-br from-[#0075ff]/25 via-[#4d9bff]/15 to-transparent blur-3xl"
          />

          {/* Device — phone or laptop mockup */}
          {device.kind === "phone" ? (
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[9/18] w-full max-w-[220px] overflow-hidden rounded-[2rem] border-4 border-slate-900 bg-slate-950 p-1 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.55)]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem]">
                <Image
                  src={device.src}
                  alt={device.alt}
                  fill
                  sizes="(max-width: 640px) 220px, 280px"
                  className="object-cover"
                />
                {/* Shine sweep */}
                <motion.div
                  aria-hidden
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.5 }}
                  className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[16/10] w-full max-w-[440px] overflow-hidden rounded-2xl border-[3px] border-slate-900 bg-slate-950 p-1 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.55)]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={device.src}
                  alt={device.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 480px"
                  className="object-cover"
                />
                <motion.div
                  aria-hidden
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.5 }}
                  className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
            </motion.div>
          )}

          {/* Floating "Live" badge (top-right) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-1 top-4 z-10 flex items-center gap-2 rounded-full border border-[#0075ff]/20 bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur sm:right-2"
          >
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-emerald-500"
            />
            <span className="text-[10px] font-bold text-slate-900">Live</span>
          </motion.div>

          {/* Floating rating badge (bottom-left) */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-1 -left-1 z-10 flex items-center gap-1.5 rounded-full border border-[#0075ff]/20 bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur sm:left-2"
          >
            <svg className="h-3 w-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[10px] font-bold text-slate-900">4.9 rating</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PlatformSplit() {
  return (
    <section
      id="platforms"
      className="relative w-full scroll-mt-[calc(var(--header-height)+1rem)] overflow-hidden border-b border-slate-100 bg-white py-16 sm:py-20 md:py-28"
    >
      {/* Soft radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-32 -z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,117,255,0.08),transparent_65%)] blur-2xl"
      />

      <div className="section-pad relative">
        <div className="container-site">
          {/* Top intro — image stack (left) + content column (right) */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* LEFT: Image composition */}
            <div className="relative order-2 lg:order-1">
              {/* Large main image — desktop / deep-work context.
                  Square-friendly Unsplash portrait, centered so the subject
                  sits cleanly inside the circular frame. */}
              <div
                className="relative overflow-hidden rounded-full border-4 border-white shadow-[0_30px_70px_-20px_rgba(15,23,42,0.25)]"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src="/media/platform-desktop.png"
                    alt="Focused deep work on Windows desktop with the MyTaskKing dashboard"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Small overlapping circular image — mobile / field context */}
              <div className="absolute -bottom-6 right-0 z-20 w-[42%] max-w-[220px] sm:-bottom-8 sm:right-4 sm:w-[44%]">
                <div className="relative overflow-hidden rounded-full border-4 border-white shadow-[0_24px_48px_-16px_rgba(15,23,42,0.3)]">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/media/platform-mobile.png"
                      alt="Field team member checking in on the Android app"
                      fill
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Small blue dot accent */}
              <div
                aria-hidden
                className="absolute -left-2 top-1/4 h-3.5 w-3.5 rounded-full bg-[#0075ff] shadow-[0_0_0_6px_rgba(0,117,255,0.15)]"
              />
            </div>

            {/* RIGHT: Content stack */}
            <div className="order-1 lg:order-2">
              {/* Sub-title badge */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0075ff]">
                <span className="h-px w-8 bg-[#0075ff]" />
                Platforms
              </div>

              {/* Heading — typewriter reveal, char-by-char with a blinking
                  caret at the end that pulses after the text finishes typing. */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                variants={typingContainer}
                className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
              >
                <TypedLine text="Android for " />
                <TypedLine text="the field." className="text-[#0075ff]" />
                <br />
                <TypedLine text="Windows for " />
                <TypedLine text="the desk." className="text-slate-700" />
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1, 1, 0, 1, 0, 1] }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 1.6, delay: 1.4, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                  className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-[#0075ff] align-baseline"
                />
              </motion.h2>

              {/* Description — slides in slowly from the right */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                variants={slideFromRight}
                transition={{ duration: 1.1, delay: 0.5, ease }}
                className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base"
              >
                Each platform is intentional — calling and meetings on mobile, accountability
                and deep work on desktop.
              </motion.p>

              {/* Feature box: checklist + button */}
              <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* Checklist — each item slides in from the right, one after another */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-80px" }}
                  variants={listContainer}
                  className="space-y-3"
                >
                  {platformChecklist.map((item) => (
                    <motion.li
                      key={item}
                      variants={listItem}
                      className="flex items-center gap-3 text-sm font-medium text-slate-800 sm:text-base"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#0075ff]/10 text-[#0075ff]">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12l4 4 8-10" />
                          <path d="M10 12l4 4 8-10" />
                        </svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <Link
                  href={site.urls.platforms}
                  className="group inline-flex items-center gap-3 self-start rounded-full bg-[#051229] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0075ff]"
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
                  Explore platforms
                </Link>
              </div>

              {/* Client experience row — the whole row fades in slowly,
                  each avatar pops in staggered, and the "5,000" counts up
                  from 0 the moment the row enters the viewport. */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
                  },
                }}
                className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-8"
              >
                {/* Avatar thumbnails + plus — each avatar scales & fades in */}
                <ul className="flex items-center -space-x-3">
                  {clientAvatars.map((src) => (
                    <motion.li
                      key={src}
                      variants={{
                        hidden: { opacity: 0, scale: 0.6, y: 12 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { duration: 0.75, ease },
                        },
                      }}
                      className="relative h-12 w-12 overflow-hidden rounded-full ring-4 ring-white shadow-md"
                    >
                      <Image
                        src={src}
                        alt="Team member"
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </motion.li>
                  ))}
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, scale: 0.6, y: 12 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.75, ease },
                      },
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0075ff] text-white ring-4 ring-white shadow-md"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.li>
                </ul>

                {/* Big number stat — counts up from 0 to 5,000 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease },
                    },
                  }}
                >
                  <div className="flex items-baseline gap-1 font-display text-4xl font-black leading-none text-slate-900 sm:text-5xl">
                    <CountUp to={5000} duration={2.4} />
                    <span className="text-[#0075ff]">+</span>
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-wider text-slate-500 sm:text-sm">
                    Active users on
                    <br />
                    {site.name}.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Two Platform Cards — Android + Windows.
              Each card is a rich, gradient-tinted panel with a decorative
              backdrop, an animated header pill (icon + name + version),
              a stagger-animated feature list, a floating device mockup
              with periodic shine sweep, and floating "Live" + "4.9" badges. */}
          <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <PlatformCard
              label="Android App"
              version="Mobile"
              tagline="Built for people who are always moving."
              platformIcon={androidPlatformIcon}
              features={androidFeatures}
              device={{
                src: "/media/features/feature-calls.png",
                alt: "MyTaskKing Android app UI",
                kind: "phone",
              }}
              containerCorners="rounded-tl-[60px] rounded-tr-[20px] rounded-br-[60px] rounded-bl-[20px]"
              entranceDelay={0}
            />
            <PlatformCard
              label="Windows App"
              version="Desktop"
              tagline="Powerful desktop for deep work."
              platformIcon={windowsPlatformIcon}
              features={windowsFeatures}
              device={{
                src: "/media/features/feature-windows.png",
                alt: "MyTaskKing Windows app UI",
                kind: "laptop",
              }}
              containerCorners="rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px]"
              entranceDelay={0.15}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
