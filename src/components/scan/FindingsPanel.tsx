import { findings } from "../../data/scanData";
import { FindingCard } from "./FindingCard";

export const FindingsPanel = () => {
    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* Panel Header */}
            <div className="px-4 py-3 border-b border-border bg-surface rounded-t-xl shrink-0">
                <h3 className="text-sm font-semibold text-text-primary">Finding Log</h3>
            </div>

            {/* Findings List */}
            <div className="flex-1 overflow-y-auto pt-4 bg-background">
                {findings.map((finding) => (
                    <FindingCard key={finding.id} finding={finding} />
                ))}
            </div>
        </div>
    );
};

export default FindingsPanel;
