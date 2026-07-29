export type Role = {
  id: string;
  name: string;
  blurb: string;
  image: string;
  highlights: string[];
};

export const roles: Role[] = [
  {
    id: "employee",
    name: "Employee",
    blurb: "Day-to-day work stays in one place — chat, tasks, workday, meetings, and calendar.",
    image: "/media/features/feature-workday.png",
    highlights: [
      "Team chat, files, and voice notes",
      "Tasks, calendar, and dashboard",
      "Daily check-in, lunch break, and check-out",
      "Voice / video calls and group meetings",
    ],
  },
  {
    id: "manager",
    name: "Manager",
    blurb: "Everything employees get — plus clients, team oversight, and clearer follow-through.",
    image: "/media/features/feature-tasks.png",
    highlights: [
      "All employee capabilities",
      "Client channels and accounts",
      "Team task visibility and reports",
      "Call and meeting history with notes",
    ],
  },
  {
    id: "telecaller",
    name: "Telecaller",
    blurb: "A focused sales workspace for leads, one-tap calls, outcomes, and recordings.",
    image: "/media/features/feature-telecaller.png",
    highlights: [
      "Lead pipeline — New through Won / Lost",
      "One-tap outbound calls via phone dialler",
      "Call logging, notes, and recording upload",
      "Chat and daily dashboard",
    ],
  },
  {
    id: "client",
    name: "Client",
    blurb: "A simple seat for external partners — stay in the conversation without internal clutter.",
    image: "/media/features/feature-profile.png",
    highlights: [
      "Client channel chat",
      "Settings and profile",
      "Dashboard overview",
      "Clear separation from internal company tools",
    ],
  },
  {
    id: "org-admin",
    name: "Org Admin",
    blurb: "Full workspace control — people, recordings, AI review, activity, and company settings.",
    image: "/media/features/feature-admin.png",
    highlights: [
      "Add and manage employees and roles",
      "Call recordings and AI Review",
      "Work Activity and login activity",
      "Analytics, announcements, and emergency buzzer",
    ],
  },
  {
    id: "super-admin",
    name: "Platform Super Admin",
    blurb: "Everything above — plus create, approve, brand, and oversee every organisation.",
    image: "/media/features/feature-orgs.png",
    highlights: [
      "View and manage all organisations",
      "Approve, activate, or suspend companies",
      "Organisation branding and admin accounts",
      "Cross-organisation recordings and AI Review",
    ],
  },
];
