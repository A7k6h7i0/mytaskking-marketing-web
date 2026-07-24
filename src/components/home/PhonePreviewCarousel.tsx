"use client";

import { motion } from "framer-motion";

const screens = [
  {
    title: "Dashboard",
    accent: "Today",
    lines: [
      { label: "Check-in reminder", meta: "Due now" },
      { label: "Today’s tasks", meta: "6 open" },
      { label: "Live meeting", meta: "1 active" },
      { label: "Weekly streak", meta: "12 days" },
    ],
  },
  {
    title: "Team chat",
    accent: "Live",
    lines: [
      { label: "Ops channel", meta: "12 unread" },
      { label: "Client · Acme", meta: "File shared" },
      { label: "Voice note", meta: "0:42" },
      { label: "Q3 report.pdf", meta: "New" },
    ],
  },
  {
    title: "Lead pipeline",
    accent: "Sales",
    lines: [
      { label: "New leads", meta: "18" },
      { label: "Follow-up", meta: "9" },
      { label: "Interested", meta: "4" },
      { label: "Won this week", meta: "3" },
    ],
  },
];

type PhonePreviewCarouselProps = {
  showCaption?: boolean;
};

export function PhonePreviewCarousel({ showCaption = true }: PhonePreviewCarouselProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-accent/20 blur-3xl" aria-hidden />
      <DeviceShell showCaption={showCaption}>
        <motion.div
          className="flex h-full w-[300%]"
          animate={{ x: ["0%", "-33.333%", "-66.666%", "0%"] }}
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, times: [0, 0.3, 0.65, 1] }}
        >
          {screens.map((screen) => (
            <div key={screen.title} className="flex h-full w-1/3 flex-col bg-[#f7f8fc] p-4 pt-10">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                  {screen.accent}
                </p>
                <span className="rounded-md bg-ink px-2 py-0.5 text-[9px] font-semibold text-white">
                  MyTaskKing
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">{screen.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {screen.lines.map((line) => (
                  <li
                    key={line.label}
                    className="flex items-center justify-between rounded-xl border border-black/5 bg-white px-3 py-2.5 shadow-[0_8px_20px_-16px_rgba(10,15,28,0.45)]"
                  >
                    <span className="text-[12px] font-semibold text-ink">{line.label}</span>
                    <span className="text-[10px] font-medium text-muted">{line.meta}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto rounded-xl bg-ink px-3 py-2.5 text-center text-[11px] font-semibold text-white">
                Product preview
              </div>
            </div>
          ))}
        </motion.div>
      </DeviceShell>
    </div>
  );
}

function DeviceShell({
  children,
  showCaption,
}: {
  children: React.ReactNode;
  showCaption: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[2.1rem] border-[7px] border-[#121826] bg-[#121826] shadow-[0_40px_100px_-28px_rgba(10,15,28,0.7)]">
        <div className="relative aspect-[9/19] overflow-hidden bg-white">
          <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#121826]" />
          {children}
        </div>
      </div>
      {showCaption ? (
        <p className="mt-3 text-center text-xs font-medium text-muted">
          Preview UI — real screenshots come in Phase 2
        </p>
      ) : null}
    </div>
  );
}
