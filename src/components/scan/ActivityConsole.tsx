import { useEffect, useRef, useState } from "react";
import {
  scanLogs as defaultScanLogs,
  type ScanLog,
} from "../../data/active-scan-detail/scanData";
import { ChevronDown, X, Timer, RotateCw, CheckCircle2, Shield } from "lucide-react";

interface ActivityConsoleProps {
  logs?: ScanLog[];
  isScanRunning?: boolean;
}

export const ActivityConsole = ({
  logs = defaultScanLogs,
  isScanRunning = true,
}: ActivityConsoleProps) => {
  const [activeTab, setActiveTab] = useState<"logs" | "verification">("logs");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new logs are added
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-surface border border-border rounded-xl shadow-sm flex flex-col h-full overflow-hidden">
      {/* Console Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-3">
          <div
            className={`w-2 h-2 rounded-full ${isScanRunning ? "bg-accent animate-pulse" : "bg-text-secondary"}`}
          ></div>
          <h3 className="text-sm font-semibold text-text-primary">
            Live Scan Console
          </h3>
          <div className="flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-full text-xs text-text-secondary ml-2">
            <Timer className="w-3.5 h-3.5" />

            <span>{isScanRunning ? "Running..." : "Paused"}</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 text-text-secondary">
          <ChevronDown className="w-4 h-4 cursor-pointer hover:text-text-primary transition-colors" />
          <X className="w-4 h-4 cursor-pointer hover:text-text-primary transition-colors" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b border-border px-4 text-sm">
        <div
          onClick={() => setActiveTab("logs")}
          className={`px-6 py-3 border-b-2 transition-all cursor-pointer ${activeTab === "logs"
            ? "border-accent text-accent font-medium"
            : "border-transparent text-text-secondary hover:text-text-primary"
            }`}
        >
          Activity Log
        </div>
        <div
          onClick={() => setActiveTab("verification")}
          className={`px-6 py-3 border-b-2 transition-all cursor-pointer ${activeTab === "verification"
            ? "border-accent text-accent font-medium"
            : "border-transparent text-text-secondary hover:text-text-primary"
            }`}
        >
          Verification Loops
        </div>
      </div>

      {/* Content Scroll Area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 bg-white dark:bg-[#0a0c10] font-mono text-sm scroll-smooth"
      >
        {activeTab === "logs" ? (
          <div className="space-y-4 text-text-secondary">
            {logs.map((log, index) => {
              let formattedMessage = log.message;
              if (typeof formattedMessage === "string") {
                let msg = formattedMessage as string;
                msg = msg.replace(
                  /helpdesk\.democorp\.com/g,
                  '<span class="text-accent">helpdesk.democorp.com</span>',
                );

                msg = msg.replace(
                  /"TODO: Delete the testing account \((.*)\)"/g,
                  '"TODO: Delete the testing account (<span class="text-accent">$1</span>)"',
                );
                msg = msg.replace(
                  /\/password\/test/g,
                  '<span class="px-1 bg-surface text-text-primary rounded">/password/test</span>',
                );
                msg = msg.replace(
                  /test:test/g,
                  '<span class="text-accent">test:test</span>',
                );
                msg = msg.replace(
                  /'X-UserId: 10032'/g,
                  "<span class=\"px-1 bg-[#0b2824] text-accent rounded\">'X-UserId: 10032'</span>",
                );
                formattedMessage = msg.replace(
                  /\*\*IDOR vulnerability\*\*/g,
                  '<span class="text-danger font-bold">**IDOR vulnerability**</span>',
                );
              }

              return (
                <div
                  key={index}
                  className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <span className="text-text-secondary shrink-0">
                    [{log.timestamp}]
                  </span>
                  {typeof formattedMessage === "string" ? (
                    <span
                      dangerouslySetInnerHTML={{ __html: formattedMessage }}
                      className="text-[#181818] dark:text-white leading-relaxed whitespace-pre-wrap flex-1 font-mono"
                    />
                  ) : (
                    <span className="text-[#c0c6d4] leading-relaxed whitespace-pre-wrap flex-1">
                      {formattedMessage}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Mock Verification Loops Content */}
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-lg bg-surface border border-border flex items-start gap-4">
                <div className="p-2 rounded-full bg-accent/10">
                  <RotateCw className="w-5 h-5 text-accent animate-spin" />
                </div>
                <div className="flex-1">
                  <h4 className="text-text-primary font-semibold mb-1">Payload Fuzzing in Progress</h4>
                  <p className="text-text-secondary text-xs mb-3">Testing SQL injection patterns on /api/auth/login</p>
                  <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-[65%] rounded-full animate-pulse transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border flex items-start gap-4 opacity-80">
                <div className="p-2 rounded-full bg-green-500/10">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-text-primary font-semibold mb-1">Auth Header Bypass Verified</h4>
                  <p className="text-text-secondary text-xs">Loop completed: 12 payloads tested. 1 vulnerability confirmed.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border flex items-start gap-4">
                <div className="p-2 rounded-full bg-blue-500/10">
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-text-primary font-semibold mb-1">CORS Policy Analysis</h4>
                  <p className="text-text-secondary text-xs mb-3">Running verification loop for domain origin whitelist.</p>
                  <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[30%] rounded-full animate-pulse transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityConsole;
