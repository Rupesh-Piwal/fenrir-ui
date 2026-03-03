export interface OrgMeta {
  orgName: string;
  owner: string;
  totalScans: number;
  scheduled: number;
  rescans: number;
  failedScans: number;
  lastUpdated: string;
}

export interface SeverityStat {
  level: "critical" | "high" | "medium" | "low";
  label: string;
  count: number;
  change: number; 
}

export interface DashboardStats {
  meta: OrgMeta;
  severities: SeverityStat[];
}

export const dashboardStats: DashboardStats = {
  meta: {
    orgName: "Project X",
    owner: "Nammagiri",
    totalScans: 100,
    scheduled: 1000,
    rescans: 100,
    failedScans: 100,
    lastUpdated: "10 mins ago",
  },
  severities: [
    {
      level: "critical",
      label: "Critical Severity",
      count: 86,
      change: 2.0,
    },
    {
      level: "high",
      label: "High Severity",
      count: 16,
      change: 0.9,
    },
    {
      level: "medium",
      label: "Medium Severity",
      count: 26,
      change: -0.9,
    },
    {
      level: "low",
      label: "Low Severity",
      count: 16,
      change: 0.9,
    },
  ],
};
