import type { Finding, Severity } from "../../data/scanData";

interface FindingCardProps {
    finding: Finding;
}

const severityConfig: Record<Severity, { bg: string; text: string }> = {
    Critical: { bg: "bg-danger", text: "text-white" },
    High: { bg: "bg-orange-500", text: "text-white" },
    Medium: { bg: "bg-amber-500", text: "text-white" },
    Low: { bg: "bg-green-500", text: "text-white" },
};

export const FindingCard: React.FC<FindingCardProps> = ({ finding }) => {
    const { bg, text } = severityConfig[finding.severity];

    return (
        <div className="bg-surface border border-border rounded-xl p-5 shadow-sm mb-4">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <span className={`${bg} ${text} text-xs font-semibold px-2 py-0.5 rounded-sm`}>
                    {finding.severity}
                </span>
                <span className="text-xs text-text-secondary">{finding.time}</span>
            </div>

            {/* Title */}
            <h4 className="text-sm font-bold text-text-primary mb-1">{finding.title}</h4>

            {/* Endpoint */}
            <p className="text-xs font-mono text-accent mb-3">{finding.endpoint}</p>

            {/* Description */}
            <p className="text-sm leading-relaxed text-text-secondary">
                {finding.description}
            </p>
        </div>
    );
};

export default FindingCard;
