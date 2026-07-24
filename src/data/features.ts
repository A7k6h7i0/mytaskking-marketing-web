export type FeatureJourney = {
  id: string;
  title: string;
  summary: string;
  platforms: Array<"Android" | "Windows" | "Both">;
  highlights: string[];
};

export const featureJourneys: FeatureJourney[] = [
  {
    id: "communicate",
    title: "Communicate",
    summary:
      "Team chat, client channels, voice notes, and live calls — without scattered WhatsApp groups.",
    platforms: ["Android"],
    highlights: [
      "Direct messages, group chats, and client channels",
      "Text, files, photos, and voice notes",
      "Voice and video calls with accept / decline alerts",
      "Group video meetings — create, join by ID, return live",
      "Emergency buzzer and org custom ringing tones",
    ],
  },
  {
    id: "workday",
    title: "Workday & attendance",
    summary:
      "A clear daily rhythm: plan, break, report, and streak — so managers know who showed up.",
    platforms: ["Both"],
    highlights: [
      "Check-in with a written daily plan",
      "Lunch break tracking",
      "Check-out with end-of-day report",
      "Workday streak tracking",
    ],
  },
  {
    id: "productivity",
    title: "Work & productivity",
    summary:
      "Tasks, calendar, dashboard, and search in one workspace your whole team actually uses.",
    platforms: ["Both"],
    highlights: [
      "Create, assign, accept, complete, filter, and search tasks",
      "Task reports — submit and review",
      "Shared calendar — week and month views",
      "Dashboard with today’s tasks, meetings, and weekly stats",
      "Notifications inbox and saved items",
    ],
  },
  {
    id: "telecaller",
    title: "Telecaller CRM",
    summary:
      "Every lead, call, outcome, and recording in one pipeline — built for outbound teams.",
    platforms: ["Android"],
    highlights: [
      "Lead pipeline — New through Won / Lost",
      "One-tap outbound calls via phone dialler",
      "Call logging and recording upload",
      "Post-call outcome, notes, and recording workflow",
      "Windows: view and manage leads (calling on mobile)",
    ],
  },
  {
    id: "accountability",
    title: "Desktop accountability",
    summary:
      "Windows keeps desk staff focused: work checks, captures, and scheduled sign-out.",
    platforms: ["Windows"],
    highlights: [
      "Periodic “Are you working?” checks with desktop capture",
      "Admin-set interval from 2 minutes to 1 hour",
      "Scheduled auto sign-out (admins exempt)",
      "System tray — stay running in the background",
      "Live calls and meetings stay on mobile — by design",
    ],
  },
  {
    id: "org-admin",
    title: "Organisation admin",
    summary:
      "People, recordings, AI review, analytics, and workspace settings under one roof.",
    platforms: ["Both"],
    highlights: [
      "Add and manage employees and client accounts",
      "Work Activity and Login Activity review",
      "Call recordings and AI Review insights",
      "Deleted chats — review and restore",
      "Custom buzzer, ringing tone, and role permissions",
    ],
  },
  {
    id: "onboarding",
    title: "Registration, KYC & payments",
    summary:
      "Companies self-register, pass KYC, start a trial, and pay — Sales Head reviews every step.",
    platforms: ["Both"],
    highlights: [
      "Public organisation registration wizard",
      "KYC with two government IDs and photo upload",
      "Approve → 7-day free trial starts automatically",
      "Razorpay checkout at payment.mytaskking.com",
      "Subscription states from trial through paid and expired",
    ],
  },
];
