export type Role = {
  id: string;
  name: string;
  blurb: string;
};

export const roles: Role[] = [
  {
    id: "employee",
    name: "Employee",
    blurb: "Chat, tasks, workday, meetings, and calendar.",
  },
  {
    id: "manager",
    name: "Manager",
    blurb: "Everything employees get — plus clients and team management.",
  },
  {
    id: "telecaller",
    name: "Telecaller",
    blurb: "Chat, leads, calls, and dashboard.",
  },
  {
    id: "client",
    name: "Client",
    blurb: "Chat, settings, and dashboard.",
  },
  {
    id: "org-admin",
    name: "Org Admin",
    blurb: "Full workspace plus recordings, AI review, activity, and settings.",
  },
  {
    id: "super-admin",
    name: "Platform Super Admin",
    blurb: "Everything above — plus all organisations across the platform.",
  },
];
