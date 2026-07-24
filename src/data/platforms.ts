export type Platform = {
  id: string;
  name: string;
  summary: string;
  image: string;
  highlights: string[];
  notes?: string[];
};

export const platforms: Platform[] = [
  {
    id: "android",
    name: "Android",
    summary:
      "Built for the field — full communication, live calls, meetings, telecaller dialling, and the daily workday rhythm.",
    image: "/media/features/feature-calls.png",
    highlights: [
      "Team chat — direct messages, groups, and client channels",
      "Voice and video calls from chat with accept/decline alerts",
      "Group video meetings — create rooms, join by ID, return live",
      "Call history with notes and call-back",
      "Emergency buzzer and org custom alert / ring-back tones",
      "Telecaller outbound dialling, logging, and recordings",
      "Daily check-in, lunch break, check-out, and streak tracking",
      "Tasks, calendar, dashboard, and notifications",
    ],
  },
  {
    id: "windows",
    name: "Windows",
    summary:
      "Built for the desk — a full sidebar workspace for chat, tasks, calendar, and Work Activity, without live-call distraction.",
    image: "/media/features/feature-windows.png",
    highlights: [
      "Sidebar workspace — dashboard, chat, tasks, calendar, notifications, settings",
      "Full team chat with attachments and task links",
      "Task board, reports, and employee directory",
      "Call and meeting history — view and add notes",
      "Work Activity — “Are you working?” checks with desktop capture",
      "Scheduled auto sign-out (admins exempt)",
      "System tray — open, sign out, quit, or stay in the background",
      "Theme and appearance settings",
    ],
    notes: [
      "No live voice or video calls on Windows — use mobile",
      "No joining or creating live meetings — use mobile",
      "Telecaller outbound dialling — mobile only",
    ],
  },
];
