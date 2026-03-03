import { scanStats } from "../../data/active-scan-detail/scanData";

export const StatsBar = () => {
  return (
    <div className="bg-surface border-t border-border flex items-center px-6 py-3 text-xs text-text-secondary w-full justify-between">
      {/* Metrics Section */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-text-secondary"></div>
          <span>Sub-Agents: {scanStats.subAgents}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-text-secondary"></div>
          <span>Parallel Executions: {scanStats.parallelExecutions}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-text-secondary"></div>
          <span>Operations: {scanStats.operations}</span>
        </div>
      </div>

      {/* Severities Section */}
      <div className="flex items-center gap-6">
        <span className="text-danger font-semibold">
          Critical: {scanStats.counts.critical}
        </span>
        <span className="text-orange-500 font-semibold">
          High: {scanStats.counts.high}
        </span>
        <span className="text-yellow-600 font-semibold">
          Medium: {scanStats.counts.medium}
        </span>
        <span className="text-green-500 font-semibold">
          Low: {scanStats.counts.low}
        </span>
      </div>
    </div>
  );
};

export default StatsBar;
