import type { ScanStatus } from "../../data/dashboard/scan";

const statusStyles: Record<ScanStatus, { bg: string; dot: string }> = {
  completed: { bg: "bg-green-500/10 text-green-700", dot: "bg-green-500" },
  scheduled: { bg: "bg-gray-300/10 text-gray-500", dot: "bg-gray-400" },
  failed: { bg: "bg-red-500/10 text-red-700", dot: "bg-red-500" },
};

export default function StatusBadge({ status }: { status: ScanStatus }) {
  const { bg } = statusStyles[status];

  return (
    <span
      role="status"
      aria-label={`Status: ${status}`}
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded capitalize border border-${bg} ${bg}`}
    >
      {status}
    </span>
  );
}
