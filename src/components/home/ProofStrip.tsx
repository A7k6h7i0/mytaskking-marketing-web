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
    <section className="w-full bg-ink py-16 text-paper sm:py-20 md:py-28">
      <div className="section-pad">
        <div className="container-site">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Product proof</p>
          <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold sm:text-4xl md:text-5xl md:leading-[1.05]">
            See the product before you install it.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:mt-5 sm:text-base md:text-lg">
            Preview frames today. Phase 2 swaps these for real Android and Windows screenshots and
            short silent clips.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {clips.map((clip, index) => (
              <motion.div
                key={clip.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${clip.tone} p-4 sm:aspect-[4/5]`}>
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
                      <p className="font-display text-lg font-bold sm:text-xl">{clip.title}</p>
                      <p className="mt-1 text-xs text-white/75">{clip.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
