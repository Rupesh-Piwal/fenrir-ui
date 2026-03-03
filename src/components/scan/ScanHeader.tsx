import { scanMeta } from "../../data/active-scan-detail/scanData";
import {
  Search,
  Network,
  FlaskConical,
  ClipboardCheck,
  FileText,
} from "lucide-react";

export const ScanHeader = () => {
  const getStageIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-accent" />;
      case 1:
        return <Network className="w-5 h-5 text-text-secondary" />;
      case 2:
        return <FlaskConical className="w-5 h-5 text-text-secondary" />;
      case 3:
        return <ClipboardCheck className="w-5 h-5 text-text-secondary" />;
      case 4:
        return <FileText className="w-5 h-5 text-text-secondary" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 flex flex-col md:flex-row shadow-sm">
      {/* Left Progress Section */}
      <div className="flex-shrink-0 flex items-center justify-center md:border-r border-border pr-8 mb-6 md:mb-0">
        <div className="relative w-32 h-32 flex flex-col items-center justify-center rounded-full bg-[#11161d]">
          {/* Circular Progress (Static 0% as per design) */}
          <div className="absolute inset-0 rounded-full border-[6px] border-[#1e2532]"></div>
          {/* Mock progress arc could go here, but since it's 0% we just leave it dark */}
          <span className="text-3xl font-bold text-accent">0%</span>
          <span className="text-xs text-text-secondary mt-1">In Progress</span>
        </div>
      </div>

      <div className="flex-1 md:pl-8 flex flex-col justify-between">
        {/* Stages Timeline */}
        <div className="mb-6 w-full max-w-4xl pt-4">
          <div className="relative flex justify-between items-center w-full">
            {/* Background line */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-border z-0"></div>

            {scanMeta.stages.map((stage, index) => {
              const isActive = index === 0;
              return (
                <div
                  key={stage}
                  className="relative z-10 flex flex-col items-center group"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex justify-center items-center mb-3 transition-colors ${
                      isActive
                        ? "bg-[#0b2824] border border-accent/20"
                        : "bg-surface border border-border text-text-secondary"
                    }`}
                  >
                    {getStageIcon(index)}
                  </div>
                  <span
                    className={`text-sm font-medium ${isActive ? "text-text-primary" : "text-text-secondary"}`}
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
              {scanMeta.checklists}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanHeader;
