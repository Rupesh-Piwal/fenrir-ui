import {
  LayoutDashboard,
  FileChartColumn,
  Calendar,
  Bell,
  Settings,
  ClipboardCheck,
  Info,
} from "lucide-react";

export const navItemsTop = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", path: "/projects", icon: ClipboardCheck },
  { name: "Scans", path: "/scans", icon: FileChartColumn },
  { name: "Schedule", path: "/schedule", icon: Calendar },
];

export const navItemsBottom = [
  { name: "Notifications", path: "/notifications", icon: Bell },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Support", path: "/support", icon: Info },
];
