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
    blurb: "Everything employees get — plus clients and team oversight.",
  },
  {
    id: "telecaller",
    name: "Telecaller",
    blurb: "Leads, outbound calls, outcomes, and recordings.",
  },
  {
    id: "client",
    name: "Client",
    blurb: "Assigned channels, files, dashboard, and settings.",
  },
  {
    id: "org-admin",
    name: "Org Admin",
    blurb: "Full workspace, recordings, AI review, activity, and billing.",
  },
  {
    id: "sales-head",
    name: "Sales Head",
    blurb: "Onboard companies, review KYC, approve or reject — no chat.",
  },
  {
    id: "super-admin",
    name: "Platform Super Admin",
    blurb: "All organisations, plans, create and delete companies.",
  },
];
