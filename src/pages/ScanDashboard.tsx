import { ScanHeader } from "../components/scan/ScanHeader";
import { ActivityConsole } from "../components/scan/ActivityConsole";
import { FindingsPanel } from "../components/scan/FindingsPanel";
import { StatsBar } from "../components/scan/StatsBar";

const ScanDashboard = () => {
    return (
        <div className="h-full flex flex-col bg-background overflow-hidden relative min-h-screen">

            {/* Main App Content - with top spacing for header and bottom padding for statsbar area if needed */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-6 pb-20">

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
            <div className="absolute bottom-0 left-0 right-0">
                <StatsBar />
            </div>

        </div>
    );
};

export default ScanDashboard;
