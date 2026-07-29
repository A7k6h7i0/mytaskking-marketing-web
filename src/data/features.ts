export type FeatureJourney = {
  id: string;
  title: string;
  summary: string;
  platforms: Array<"Android" | "Windows" | "Both">;
  image: string;
  /** Extra unique shots stacked in the media panel when the list is tall */
  gallery?: string[];
  highlights: string[];
  notes?: string[];
};

export const featureJourneys: FeatureJourney[] = [
  {
    id: "communicate",
    title: "Communication",
    summary:
      "Team chat, client channels, voice notes, and live calls — without scattered WhatsApp groups.",
    platforms: ["Android"],
    image: "/media/features/feature-chat.png",
    highlights: [
      "Team chat — direct messages, group chats, and client channels",
      "Text, files, photos, and voice notes",
      "Voice and video calls from chat",
      "Incoming call alerts with accept/decline",
      "Group video meetings — create rooms, join by ID, return to live sessions",
      "Call history with notes and call-back",
      "Emergency buzzer on calls (org custom alert sounds; org admin uploads MP3)",
      "Outgoing ring back uses org custom ringing tone when uploaded (device default otherwise)",
    ], 
  },
  {
    id: "calls-meetings",
    title: "Calls & meetings",
    summary:
      "Accept calls instantly, host group video meetings, and keep a clear history with notes and call-back.",
    platforms: ["Android"],
    image: "/media/features/feature-calls.png",
    highlights: [
      "Voice and video calls from chat",
      "Incoming call alerts with accept / decline",
      "Group video meetings — create, join by ID, return live",
      "Call history with notes and call-back",
      "Emergency buzzer — org custom alert sounds (admin uploads MP3)",
      "Custom outgoing ring-back tone per organisation",
    ],
  },
  {
    id: "productivity",
    title: "Work & productivity",
    summary:
      "Tasks, reports, calendar, dashboard, search, and themes — everything your team needs day to day.",
    platforms: ["Both"],
    image: "/media/features/feature-tasks.png",
    highlights: [
      "Task management — create, assign, accept, complete, filter, and search",
      "Task reports — submit and review",
      "Shared calendar — week and month views",
      "Dashboard — daily overview, check-in reminder, today’s tasks, live meetings, weekly stats, leaderboard",
      "Global search — people, messages, and files (hidden for Sales Head)",
      "Notifications inbox and saved items",
      "Light / dark themes and colour themes",
    ],
  },
  {
    id: "workday",
    title: "Daily workday",
    summary:
      "A clear daily rhythm: plan in the morning, track breaks, report at close, and build a streak.",
    platforms: ["Both"],
    image: "/media/features/feature-workday.png",
    highlights: [
      "Check-in with a written daily plan",
      "Lunch break tracking",
      "Check-out with end-of-day report",
      "Workday streak tracking",
    ],
  },
  {
    id: "people",
    title: "People",
    summary:
      "Find anyone in the company fast — start a chat, open client channels, and keep directories tidy.",
    platforms: ["Both"],
    image: "/media/features/feature-people.png",
    highlights: [
      "Employee directory — search and start a chat",
      "Client directory for managers and admins — channels and accounts",
    ],
  },
  {
    id: "profile",
    title: "Profile & security",
    summary:
      "Keep your profile up to date and manage every device where you are signed in.",
    platforms: ["Both"],
    image: "/media/features/feature-profile.png",
    highlights: [
      "Profile photo, availability status, phone number",
      "Active sessions — see and manage signed-in devices",
    ],
  },
  {
    id: "windows",
    title: "Windows desktop",
    summary:
      "A full sidebar workspace for desk staff — chat, tasks, dashboard, and Work Activity — without live call distraction.",
    platforms: ["Windows"],
    image: "/media/features/feature-windows.png",
    gallery: [
      "/media/features/feature-tasks.png",
      "/media/features/feature-chat.png",
      "/media/features/feature-workday.png",
    ],
    highlights: [
      "Sidebar workspace — dashboard, chat, tasks, calendar, notifications, settings, profile",
      "Full team chat — messages, attachments, and task links",
      "Task board and task details",
      "Call and meeting history — view and add notes",
      "Dashboard, announcements, saved items, employee directory",
      "Reports and clients for managers and admins",
      "System tray — open, sign out, or quit; minimize to background",
      "Work Activity — “Are you working?” checks with desktop capture (2 min to 1 hour)",
      "Scheduled auto sign-out (admins exempt)",
      "Theme and appearance settings",
    ],
    notes: [
      "No live voice or video calls on Windows — use mobile",
      "No joining or creating live meetings — use mobile",
      "Call and meeting lists are history only",
      "Telecaller outbound dialling — mobile only",
    ],
  },
  {
    id: "telecaller",
    title: "Telecaller",
    summary:
      "A dedicated sales workspace for leads, one-tap calls, outcomes, and recordings — built for outbound teams.",
    platforms: ["Android"],
    image: "/media/features/feature-telecaller.png",
    highlights: [
      "Dedicated workspace — Chat, Leads, Home, Calls, More",
      "Lead pipeline — New, Contacted, Interested, Follow-up, Won, Lost",
      "Search and filter leads",
      "One-tap outbound calls via phone dialler",
      "Call logging and recording upload",
      "Post-call outcome, notes, and recording workflow",
      "Add new leads",
      "On Windows: view and manage leads (search, filter, bulk assign) — calling stays on mobile",
    ],
  },
  {
    id: "org-admin",
    title: "Organisation admin",
    summary:
      "Run people, clients, recordings, AI insights, analytics, and workspace settings from one admin seat.",
    platforms: ["Both"],
    image: "/media/features/feature-admin.png",
    gallery: [
      "/media/features/feature-people.png",
      "/media/features/feature-orgs.png",
      "/media/features/feature-profile.png",
    ],
    highlights: [
      "Add, edit, and remove employees — Admin, Manager, Coordinator, Employee, Telecaller",
      "Create and manage client accounts and channels",
      "Employee directory and session oversight",
      "Work Activity — review desktop captures and notes by employee and date",
      "Login Activity — who signed in, when, from which device",
      "Call recordings — team calls, meetings, telecaller uploads",
      "AI Review — summaries and insights from recordings",
      "Deleted chats — review and restore removed messages",
      "Analytics — messages, users, calls, tasks, attendance, telecaller performance",
      "Talk time and live activity reports",
      "Announcements",
      "Emergency call buzzer — on/off, custom sounds, head office name",
      "Desktop Work Activity interval — 2 min, 5 min, 15 min, 30 min, 1 hour",
      "Role-based permissions for tasks, chat, calls, and files",
      "Exempt from Windows scheduled auto sign-out",
    ],
  },
  {
    id: "organisations",
    title: "Organisations",
    summary:
      "Every company gets a private workspace — separate chat, tasks, calls, leads, files, and attendance.",
    platforms: ["Both"],
    image: "/media/features/feature-orgs.png",
    highlights: [
      "Each company has a private, isolated workspace",
      "Sign in with Organisation ID, User ID, and password",
      "Self-service company registration — pending until approved",
      "Organisation status — Pending, Active, or Suspended",
      "Company branding — colours and identity",
      "All data kept separate per organisation",
    ],
  },
  {
    id: "super-admin",
    title: "Platform Super Admin",
    summary:
      "Full control across every customer organisation — create, approve, brand, and oversee the platform.",
    platforms: ["Both"],
    image: "/media/features/feature-admin.png",
    highlights: [
      "View and manage all customer organisations",
      "Create organisations and admin accounts",
      "Approve, reject, activate, or suspend any company",
      "Update organisation name and branding",
      "Cross-organisation visibility for recordings and AI Review",
      "Full platform navigation including Organisations",
      "Exempt from Windows scheduled auto sign-out",
    ],
  },
];

export const proofClips = [
  {
    title: "Team chat",
    caption: "Channels, files, voice notes",
    image: "/media/features/feature-chat.png",
  },
  {
    title: "Calls & meetings",
    caption: "Accept, decline, join live",
    image: "/media/features/feature-calls.png",
  },
  {
    title: "Daily check-in",
    caption: "Plan, break, streak",
    image: "/media/features/feature-workday.png",
  },
  {
    title: "Lead pipeline",
    caption: "New → Won with outcomes",
    image: "/media/features/feature-telecaller.png",
  },
] as const;
