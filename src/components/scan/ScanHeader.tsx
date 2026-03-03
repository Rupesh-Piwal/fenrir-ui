import { scanMeta } from "../../data/active-scan-detail/scanData";
import {
  Search,
  Network,
  FlaskConical,
  ClipboardCheck,
  FileText,
} from "lucide-react";

interface ScanHeaderProps {
  progress?: number;
  activeStageIndex?: number;
}

export const ScanHeader = ({ progress = 0, activeStageIndex = 0 }: ScanHeaderProps) => {
  const getStageIcon = (index: number, isActive: boolean, isCompleted: boolean) => {
    const colorClass = isActive ? "text-accent" : (isCompleted ? "text-accent" : "text-text-secondary");
    switch (index) {
      case 0:
        return <Search className={`w-5 h-5 ${colorClass}`} />;
      case 1:
        return <Network className={`w-5 h-5 ${colorClass}`} />;
      case 2:
        return <FlaskConical className={`w-5 h-5 ${colorClass}`} />;
      case 3:
        return <ClipboardCheck className={`w-5 h-5 ${colorClass}`} />;
      case 4:
        return <FileText className={`w-5 h-5 ${colorClass}`} />;
      default:
        return null;
    }
  };

  // Calculate SVG stroke-dashoffset for the animated ring
  const radius = 56; // 3.5rem radius approx
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-surface border border-border rounded-xl p-6 flex flex-col md:flex-row shadow-sm">
      {/* Left Progress Section */}
      <div className="flex-shrink-0 flex items-center justify-center md:border-r border-border pr-8 mb-6 md:mb-0">
        <div className="relative w-32 h-32 flex flex-col items-center justify-center rounded-full bg-[#11161d]">
          {/* SVG Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            {/* Background ring */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-[#1e2532]"
            />
            {/* Dynamic animated ring */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-accent transition-all duration-300 ease-linear"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <span className="text-3xl font-bold text-accent z-10">{Math.round(progress)}%</span>
          <span className="text-xs text-text-secondary mt-1 z-10">{progress === 100 ? "Completed" : "In Progress"}</span>
        </div>
      </div>

      <div className="flex-1 md:pl-8 flex flex-col justify-between">
        {/* Stages Timeline */}
        <div className="mb-6 w-full max-w-4xl pt-4">
          <div className="relative flex justify-between items-center w-full">
            {/* Background line */}
            <div className="absolute top-[24px] left-0 right-0 h-[2px] bg-border z-0"></div>
            {/* Animated dynamic line filling up based on progress */}
            <div
              className="absolute top-[24px] left-0 h-[2px] bg-accent z-0 transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>

            {scanMeta.stages.map((stage, index) => {
              const isActive = index === activeStageIndex;
              const isCompleted = index <= activeStageIndex;

              return (
                <div
                  key={stage}
                  className="relative z-10 flex flex-col items-center group"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex justify-center items-center mb-3 transition-colors ${isActive
                      ? "bg-[#0b2824] border border-accent/20"
                      : isCompleted
                        ? "bg-surface border-2 border-accent text-accent"
                        : "bg-surface border border-border text-text-secondary"
                      }`}
                  >
                    {getStageIcon(index, isActive, isCompleted)}
                  </div>
                  <span
                    className={`text-sm font-medium ${isActive || isCompleted ? "text-text-primary" : "text-text-secondary"}`}
                  >
                    {stage}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div>
            <p className="text-xs text-text-secondary mb-1">Scan Type</p>
            <p className="text-sm font-semibold text-text-primary">
              {scanMeta.scanType}
            </p>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Targets</p>
            <p className="text-sm font-semibold text-text-primary">
              {scanMeta.target}
            </p>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Started At</p>
            <p className="text-sm font-semibold text-text-primary">
              {scanMeta.startedAt}
            </p>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Credentials</p>
            <p className="text-sm font-semibold text-text-primary">
              {scanMeta.credentials}
            </p>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Files</p>
            <p className="text-sm font-semibold text-text-primary">
              {scanMeta.files}
            </p>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Checklists</p>
            <p className="text-sm font-semibold text-accent">
              {Math.round((progress / 100) * 350)}/350
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanHeader;
