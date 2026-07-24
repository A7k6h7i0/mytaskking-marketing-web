"use client";

import { motion } from "framer-motion";

const clips = [
  { title: "Team chat", caption: "Channels, files, voice notes", tone: "from-[#ff6a4d] to-[#ff3b1f]" },
  { title: "Incoming call", caption: "Accept or decline alerts", tone: "from-[#3b82f6] to-[#1d4ed8]" },
  { title: "Daily check-in", caption: "Plan written before work starts", tone: "from-[#0ea5e9] to-[#0284c7]" },
  { title: "Lead pipeline", caption: "New → Won with outcomes", tone: "from-[#111827] to-[#1f2937]" },
];

export function ProofStrip() {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <div className="container-site section-pad">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Product proof</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-5xl sm:leading-[1.05]">
          See the product before you install it.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Preview frames today. Phase 2 swaps these for real Android and Windows screenshots and
          short silent clips.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clips.map((clip, index) => (
            <motion.div
              key={clip.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`aspect-[4/5] bg-gradient-to-br ${clip.tone} p-4`}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-white/20 bg-black/15 p-4 backdrop-blur-[2px] transition group-hover:bg-black/25">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
                      Media
                    </p>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs">
                      ▶
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold">{clip.title}</p>
                    <p className="mt-1 text-xs text-white/75">{clip.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
