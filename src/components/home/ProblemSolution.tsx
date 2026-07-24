"use client";

import { motion } from "framer-motion";

const before = [
  "WhatsApp groups for every team and client",
  "Missed follow-ups and unlogged calls",
  "No idea who checked in or who is working",
];

const after = [
  "One private company workspace per organisation",
  "Leads, outcomes, and recordings in one pipeline",
  "Check-in, Work Activity, and login history for leaders",
];

export function ProblemSolution() {
  return (
    <section className="py-22 md:py-28">
      <div className="container-site section-pad">
        <p className="eyebrow">What it solves</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-ink sm:text-5xl sm:leading-[1.05]">
          Replace guesswork with one clear company system.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          MyTaskKing replaces scattered WhatsApp groups, missed follow-ups, and invisible remote
          work — so leaders run the business with clarity.
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-line bg-paper p-7 sm:p-8"
          >
            <p className="text-sm font-bold text-muted">Before</p>
            <ul className="mt-6 space-y-4">
              {before.map((item) => (
                <li key={item} className="flex gap-3 text-base text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl bg-ink p-7 text-paper sm:p-8"
          >
            <p className="text-sm font-bold text-accent">With MyTaskKing</p>
            <ul className="mt-6 space-y-4">
              {after.map((item) => (
                <li key={item} className="flex gap-3 text-base text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
