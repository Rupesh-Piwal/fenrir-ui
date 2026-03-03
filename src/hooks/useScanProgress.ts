import { useEffect, useState } from "react";

export function useScanProgress(isScanRunning: boolean) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isScanRunning) return;

    const duration = 15000;
    const updateInterval = 100;
    const increment = 100 / (duration / updateInterval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, updateInterval);

    return () => clearInterval(timer);
  }, [isScanRunning]);

  return progress;
}