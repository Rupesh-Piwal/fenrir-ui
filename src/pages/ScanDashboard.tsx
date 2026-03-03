import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ScanHeader } from "../components/scan/ScanHeader";
import { ActivityConsole } from "../components/scan/ActivityConsole";
import { FindingsPanel } from "../components/scan/FindingsPanel";
import { StatsBar } from "../components/scan/StatsBar";
import { scanLogs } from "../data/active-scan-detail/scanData";
import Skeleton from "../components/ui/Skeleton";

const ScanDashboard = () => {
    const { isScanRunning } = useOutletContext<{ isScanRunning: boolean }>();
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isScanRunning) return;

        const duration = 15000;
        const updateInterval = 100;
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

    const logsToShow = Math.max(
        1,
        Math.floor((progress / 100) * scanLogs.length),
    );
    const visibleLogs = scanLogs.slice(0, logsToShow);
    const activeStageIndex = progress === 100 ? 4 : Math.floor(progress / 25);

    if (loading) {
        return (
            <div
                className="h-full flex flex-col bg-background overflow-hidden relative min-h-screen animate-fade-in"
                aria-label="Loading scan dashboard"
                aria-busy="true"
            >
                <div className="flex-1 overflow-y-auto no-scrollbar p-4 md:p-6 lg:p-8 space-y-6 pb-20">
                    <div className="max-w-7xl mx-auto w-full">
                        <Skeleton className="w-full h-64" rounded="xl" />
                    </div>
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 h-125">
                        <div className="lg:col-span-2 h-full">
                            <Skeleton className="w-full h-full" rounded="xl" />
                        </div>
                        <div className="h-full">
                            <Skeleton className="w-full h-full" rounded="xl" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-background overflow-hidden relative min-h-screen animate-fade-in">
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 md:p-6 lg:p-8 space-y-6 pb-20">
                <div className="max-w-7xl mx-auto w-full animate-slide-up">
                    <ScanHeader
                        progress={progress}
                        activeStageIndex={activeStageIndex}
                    />
                </div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 h-125 animate-slide-up stagger-2">
                    <div className="lg:col-span-2 h-full">
                        <ActivityConsole
                            logs={visibleLogs}
                            isScanRunning={isScanRunning}
                        />
                    </div>

                    <div className="h-full">
                        <FindingsPanel />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <StatsBar />
            </div>
        </div>
    );
};

export default ScanDashboard;
