import ScanHeader from "../components/scan/ScanHeader";
import ActivityConsole from "../components/scan/ActivityConsole";
import FindingsPanel from "../components/scan/FindingsPanel";
import StatsBar from "../components/scan/StatsBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">

      {/* Main app content area: scrollable if needed */}
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8 space-y-6">

        {/* Top Header Card */}
        <div className="max-w-7xl mx-auto w-full">
          <ScanHeader />
        </div>

        {/* Main Grid Section */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
          {/* Live Scan Console (col-span-2) */}
          <div className="lg:col-span-2 h-full">
            <ActivityConsole />
          </div>

          {/* Findings Panel */}
          <div className="h-full">
            <FindingsPanel />
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar - Fixed at bottom */}
      <div className="w-full shrink-0">
        <StatsBar />
      </div>

    </div>
  );
};

export default Dashboard;