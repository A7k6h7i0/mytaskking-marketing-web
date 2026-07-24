"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { proofClips } from "@/data/features";

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
            Chat, calls, check-in, and leads — a quick look at how MyTaskKing works day to day.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {proofClips.map((clip, index) => (
              <motion.div
                key={clip.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/5]">
                  <Image
                    src={clip.image}
                    alt={clip.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-lg font-bold sm:text-xl">{clip.title}</p>
                    <p className="mt-1 text-xs text-white/75">{clip.caption}</p>
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
