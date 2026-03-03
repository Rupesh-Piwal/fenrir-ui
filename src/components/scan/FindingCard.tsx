import type { Finding } from "../../data/active-scan-detail/scanData";
import SeverityBadge from "../ui/SeverityBadge";

interface FindingCardProps {
  finding: Finding;
}

export const FindingCard: React.FC<FindingCardProps> = ({ finding }) => {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 shadow-sm mb-4">
      <div className="flex justify-between items-start mb-3">
        <SeverityBadge severity={finding.severity} />
        <span className="text-xs text-text-secondary">{finding.time}</span>
      </div>

      <h4 className="text-sm font-bold text-text-primary mb-1">
        {finding.title}
      </h4>

      <p className="text-xs font-mono text-accent mb-3">{finding.endpoint}</p>

      <p className="text-sm leading-relaxed text-text-secondary">
        {finding.description}
      </p>
    </div>
  );
};

export default FindingCard;
