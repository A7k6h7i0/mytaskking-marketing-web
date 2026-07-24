"use client";

import { motion } from "framer-motion";
import { DeviceFrame } from "@/components/ui/DeviceFrame";

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
              className="rounded-2xl border border-line bg-paper p-5 sm:rounded-3xl sm:p-6 md:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-[140px_1fr] sm:items-center sm:gap-8">
                <DeviceFrame label="Android" className="mx-auto max-w-[140px] sm:mx-0">
                  <div className="flex h-full flex-col bg-[#f7f8fc] p-3 pt-8">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-accent">
                      Mobile
                    </p>
                    <p className="mt-1 font-display text-sm font-bold text-ink">Live calls</p>
                    <div className="mt-3 space-y-1.5 text-[10px] text-ink/80">
                      <p className="rounded-lg bg-white px-2 py-1.5 shadow-sm">Incoming call</p>
                      <p className="rounded-lg bg-white px-2 py-1.5 shadow-sm">Lead dialler</p>
                      <p className="rounded-lg bg-white px-2 py-1.5 shadow-sm">Check-in plan</p>
                    </div>
                  </div>
                </DeviceFrame>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">Android</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Full communication: chat, voice and video calls, meetings, telecaller dialling,
                    workday check-in/out, and organisation registration.
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
                      <span>Emergency buzzer and custom ringback</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-2xl border border-line bg-paper p-5 sm:rounded-3xl sm:p-6 md:p-8"
            >
              <DeviceFrame variant="desktop" label="Windows desktop">
                <div className="flex h-full bg-gradient-to-br from-[#1a2236] to-[#0f1524] text-white">
                  <aside className="hidden w-[28%] border-r border-white/10 p-3 text-[10px] text-white/65 sm:block">
                    <p className="mb-3 font-semibold text-accent">Workspace</p>
                    {["Dashboard", "Chat", "Tasks", "Calendar", "Settings"].map((item) => (
                      <p key={item} className="rounded-md px-1.5 py-1">
                        {item}
                      </p>
                    ))}
                  </aside>
                  <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-4">
                    <p className="text-xs font-semibold">Work Activity</p>
                    <p className="mt-2 rounded-xl border border-white/10 bg-white/5 p-3 text-[11px] leading-relaxed text-white/75">
                      Are you working? Desktop capture runs on the interval your admin sets — from
                      2 minutes to 1 hour.
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-3">
                      <span className="rounded-lg bg-accent px-2.5 py-1 text-[10px] font-semibold">
                        Still working
                      </span>
                      <span className="rounded-lg bg-white/10 px-2.5 py-1 text-[10px]">
                        Need a break
                      </span>
                    </div>
                  </div>
                </div>
              </DeviceFrame>
              <div className="mt-6">
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
                    <span>Sales Head: Home · Organisations · Notes · Settings</span>
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
