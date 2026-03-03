export type ScanStatus = "completed" | "scheduled" | "failed";

export interface ScanItem {
  id: string;
  name: string;
  type: "Greybox" | "Blackbox";
  status: ScanStatus;
  progress: number;
  vulnerabilities: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  lastScan: string;
}

export const scans: ScanItem[] = [
  {
    id: "1",
    name: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 18,
    },
    lastScan: "4d ago",
  },
  {
    id: "2",
    name: "Web App Servers",
    type: "Greybox",
    status: "scheduled",
    progress: 40,
    vulnerabilities: {
      critical: 5,
      high: 12,
      medium: 0,
      low: 0,
    },
    lastScan: "4d ago",
  },
  {
    id: "3",
    name: "IoT Devices",
    type: "Blackbox",
    status: "failed",
    progress: 10,
    vulnerabilities: {
      critical: 2,
      high: 4,
      medium: 8,
      low: 1,
    },
    lastScan: "3d ago",
  },
  {
    id: "4",
    name: "Temp Data",
    type: "Blackbox",
    status: "failed",
    progress: 10,
    vulnerabilities: {
      critical: 2,
      high: 4,
      medium: 8,
      low: 1,
    },
    lastScan: "3d ago",
  },
];
