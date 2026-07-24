"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PlatformSplit() {
  return (
    <section id="platforms" className="w-full scroll-mt-24 bg-sky/50 py-16 sm:py-20 md:py-28">
      <div className="section-pad">
        <div className="container-site">
          <p className="eyebrow">Platforms</p>
          <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold text-ink sm:text-4xl md:text-5xl md:leading-[1.05]">
            Android for the field. Windows for the desk.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            Each platform is intentional — calling and meetings on mobile, accountability and deep
            work on desktop.
          </p>

          <div className="mt-10 grid items-stretch gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-2xl border border-line bg-paper sm:rounded-3xl"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src="/media/features/feature-calls.png"
                  alt="MyTaskKing on Android"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">Android</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Full communication: chat, voice and video calls, meetings, telecaller dialling,
                  workday check-in/out, and more.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink/80">
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent">→</span>
                    <span>Voice / video calls and group meetings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent">→</span>
                    <span>Telecaller outbound + recordings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent">→</span>
                    <span>Emergency buzzer and custom alert sounds</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="overflow-hidden rounded-2xl border border-line bg-paper sm:rounded-3xl"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src="/media/features/feature-windows.png"
                  alt="MyTaskKing on Windows"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">Windows</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Sidebar workspace for chat, tasks, calendar, and reports — plus Work Activity
                  tracking. Live calls stay on mobile by design.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink/80">
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent">→</span>
                    <span>Full chat, tasks, and dashboard</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent">→</span>
                    <span>Work Activity captures + auto sign-out</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent">→</span>
                    <span>System tray — stay productive in the background</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
