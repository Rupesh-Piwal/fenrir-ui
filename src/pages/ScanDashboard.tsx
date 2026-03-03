import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ScanHeader } from "../components/scan/ScanHeader";
import { ActivityConsole } from "../components/scan/ActivityConsole";
import { FindingsPanel } from "../components/scan/FindingsPanel";
import { StatsBar } from "../components/scan/StatsBar";
import { scanLogs } from "../data/active-scan-detail/scanData";

const ScanDashboard = () => {
    const { isScanRunning } = useOutletContext<{ isScanRunning: boolean }>();
    const [progress, setProgress] = useState(0);

    // Animate progress from 0 to 100
    useEffect(() => {
        if (!isScanRunning) return;

        const duration = 15000; // 15 seconds to complete
        const updateInterval = 100; // Update every 100ms
        const increment = 100 / (duration / updateInterval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                const nextProgress = prev + increment;
                if (nextProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return nextProgress;
            });
        }, updateInterval);

        return () => clearInterval(timer);
    }, [isScanRunning]);

    // Calculate how many logs to show based on progress
    // Logs appear evenly distributed across the scan duration
    const logsToShow = Math.max(
        1,
        Math.floor((progress / 100) * scanLogs.length)
    );
    const visibleLogs = scanLogs.slice(0, logsToShow);

    // Calculate current active stage based on progress
    const activeStageIndex = progress === 100 ? 4 : Math.floor(progress / 25);

    return (
        <div className="h-full flex flex-col bg-background overflow-hidden relative min-h-screen">

            {/* Main App Content - with top spacing for header and bottom padding for statsbar area if needed */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 md:p-6 lg:p-8 space-y-6 pb-20">

                {/* Top Header Card */}
                <div className="max-w-7xl mx-auto w-full">
                    <ScanHeader progress={progress} activeStageIndex={activeStageIndex} />
                </div>

                {/* Main Grid Section */}
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
                    {/* Live Scan Console (col-span-2) */}
                    <div className="lg:col-span-2 h-full">
                        <ActivityConsole logs={visibleLogs} isScanRunning={isScanRunning} />
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
