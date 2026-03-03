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
  { iconBg: string; iconColor: string }
> = {
  critical: {
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  high: {
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  medium: {
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  low: {
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
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
    <article className="rounded-xl flex flex-col gap-4">
      {/* Header */}
      <header className="flex items-center gap-19">
        <h3 className="text-gray-500 text-[16px] font-medium">{label}</h3>

        <div className={`p-2 rounded-lg ${styles.iconBg}`}>
          <span className={`${styles.iconColor}`}>⚠</span>
        </div>
      </header>

      {/* Stats */}
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold text-gray-800">{count}</span>

        <div
          className={`flex items-center text-xs font-medium ${
            isIncrease ? "text-red-600" : "text-green-600"
          }`}
        >
          {isIncrease ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          <span className="ml-1">
            {Math.abs(change)}% {isIncrease ? "increase" : "decrease"} than
            yesterday
          </span>
        </div>
      </div>
    </article>
  );
}
