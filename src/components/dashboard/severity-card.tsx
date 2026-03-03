import { ArrowUp, ArrowDown } from "lucide-react";

export type SeverityLevel = "critical" | "high" | "medium" | "low";

interface SeverityCardProps {
  level: SeverityLevel;
  label: string;
  count: number;
  change: number;
}

const severityStyles: Record<
  SeverityLevel,
  { iconBg: string; iconColor: string; icon: React.ReactNode }
> = {
  critical: {
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m4.9 4.9 14.2 14.2" />
      </svg>
    ),
  },
  high: {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" x2="12" y1="9" y2="13" />
        <line x1="12" x2="12.01" y1="17" y2="17" />
      </svg>
    ),
  },
  medium: {
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-500",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" x2="12" y1="9" y2="13" />
        <line x1="12" x2="12.01" y1="17" y2="17" />
      </svg>
    ),
  },
  low: {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
};

export default function SeverityCard({
  level,
  label,
  count,
  change,
}: SeverityCardProps) {
  const styles = severityStyles[level];
  const isIncrease = change > 0;

  return (
    <article
      className="
        bg-surface
        border border-border
        rounded-xl
        p-4 sm:p-5
        transition
        flex flex-col
        gap-4
      "
    >
      <header className="flex items-center justify-between">
        <h3 className="text-text-secondary text-xs sm:text-sm font-semibold tracking-wide">
          {label}
        </h3>

        <div className={`p-2 rounded-lg ${styles.iconBg} ${styles.iconColor}`}>
          {styles.icon}
        </div>
      </header>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <span className="text-2xl sm:text-[28px] font-bold text-text-primary">
          {count}
        </span>

        <div
          className={`flex items-center text-xs font-semibold ${
            isIncrease ? "text-[#E63946]" : "text-accent"
          }`}
        >
          {isIncrease ? (
            <ArrowUp size={14} strokeWidth={3} />
          ) : (
            <ArrowDown size={14} strokeWidth={3} />
          )}

          <span className="ml-1 hidden sm:inline">
            {isIncrease ? "+" : "-"}
            {Math.abs(change)}% {isIncrease ? "increase" : "decrease"} than
            yesterday
          </span>
          <span className="ml-1 sm:hidden">
            {isIncrease ? "+" : "-"}
            {Math.abs(change)}%
          </span>
        </div>
      </div>
    </article>
  );
}
