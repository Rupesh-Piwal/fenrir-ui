type Severity = "Critical" | "High" | "Medium" | "Low";

interface SeverityBadgeProps {
    severity: Severity;
    count?: number;
    className?: string;
}

const severityStyles: Record<Severity, string> = {
    Critical: "bg-danger text-white",
    High: "bg-orange-500 text-white",
    Medium: "bg-amber-500 text-white",
    Low: "bg-green-500 text-white",
};

export default function SeverityBadge({
    severity,
    count,
    className = "",
}: SeverityBadgeProps) {
    return (
        <span
            role="status"
            aria-label={`${severity} severity${count !== undefined ? `: ${count}` : ""}`}
            className={`inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-md ${severityStyles[severity]} ${className}`}
        >
            {count !== undefined ? count : severity}
        </span>
    );
}
