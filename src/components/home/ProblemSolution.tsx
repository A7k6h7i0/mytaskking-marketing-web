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
    <section className="w-full py-16 sm:py-20 md:py-28">
      <div className="section-pad">
        <div className="container-site">
          <p className="eyebrow">What it solves</p>
          <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold text-ink sm:text-4xl md:text-5xl md:leading-[1.05]">
            Replace guesswork with one clear company system.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            MyTaskKing replaces scattered WhatsApp groups, missed follow-ups, and invisible remote
            work — so leaders run the business with clarity.
          </p>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-line bg-paper p-5 sm:rounded-3xl sm:p-7 md:p-8"
            >
              <p className="text-sm font-bold text-muted">Before</p>
              <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {before.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-2xl bg-ink p-5 text-paper sm:rounded-3xl sm:p-7 md:p-8"
            >
              <p className="text-sm font-bold text-accent">With MyTaskKing</p>
              <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/85 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
