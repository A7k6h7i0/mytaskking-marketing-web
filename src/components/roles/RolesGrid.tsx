"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { roles } from "@/data/roles";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function RolesGrid() {
  return (
    <div className="grid gap-16 sm:gap-20 md:gap-24">
      {roles.map((role, index) => {
        const isReversed = index % 2 === 1;

        return (
          <article
            key={role.id}
            id={role.id}
            className="scroll-mt-[calc(var(--header-height)+1.5rem)] grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
          >
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 56 : -56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className={`flex flex-col justify-center ${isReversed ? "lg:order-2" : "lg:order-1"}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-deep">
                Role {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
                {role.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                {role.blurb}
              </p>
              <ul className="mt-5 space-y-3">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isReversed ? -56 : 56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
              className={`relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.01)] sm:p-3 ${
                isReversed ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <Image
                src={role.image}
                alt={`MyTaskKing for ${role.name}`}
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-lg object-contain"
              />
            </motion.div>
          </article>
        );
      })}
    </div>
  );
}
