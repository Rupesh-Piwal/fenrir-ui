import { scanLogs } from "../../data/scanData";
import { ChevronDown, X, Timer } from "lucide-react";

export const ActivityConsole = () => {
    return (
        <div className="bg-surface border border-border rounded-xl shadow-sm flex flex-col h-full overflow-hidden">
            {/* Console Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <h3 className="text-sm font-semibold text-text-primary">Live Scan Console</h3>
                    <div className="flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-full text-xs text-text-secondary ml-2">
                        <Timer className="w-3.5 h-3.5" />
                        <span>Running...</span>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2 text-text-secondary">
                    <ChevronDown className="w-4 h-4 cursor-pointer hover:text-text-primary transition-colors" />
                    <X className="w-4 h-4 cursor-pointer hover:text-text-primary transition-colors" />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center border-b border-border px-4 text-sm">
                <div className="px-6 py-3 border-b-2 border-accent text-accent font-medium cursor-pointer">
                    Activity Log
                </div>
                <div className="px-6 py-3 border-b-2 border-transparent text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                    Verification Loops
                </div>
            </div>

            {/* Logs Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#0a0c10] font-mono text-sm">
                <div className="space-y-4 text-text-secondary">
                    {scanLogs.map((log, index) => {
                        // Check if the log message contains specific highlights to colour them
                        let formattedMessage = log.message;
                        if (typeof formattedMessage === 'string') {
                            let msg = formattedMessage as string;
                            // Highlight target URLs in accent color
                            msg = msg.replace(/helpdesk\.democorp\.com/g, '<span class="text-accent">helpdesk.democorp.com</span>');
                            // Highlight specific passwords/headers
                            msg = msg.replace(/"TODO: Delete the testing account \((.*)\)"/g, '"TODO: Delete the testing account (<span class="text-accent">$1</span>)"');
                            msg = msg.replace(/\/password\/test/g, '<span class="px-1 bg-surface text-text-primary rounded">/password/test</span>');
                            msg = msg.replace(/test:test/g, '<span class="text-accent">test:test</span>');
                            msg = msg.replace(/'X-UserId: 10032'/g, '<span class="px-1 bg-[#0b2824] text-accent rounded">\'X-UserId: 10032\'</span>');
                            formattedMessage = msg.replace(/\*\*IDOR vulnerability\*\*/g, '<span class="text-danger font-bold">**IDOR vulnerability**</span>');
                        }

                        return (
                            <div key={index} className="flex gap-4">
                                <span className="text-text-secondary opacity-50 shrink-0">[{log.timestamp}]</span>
                                {typeof formattedMessage === 'string' ? (
                                    <span dangerouslySetInnerHTML={{ __html: formattedMessage }} className="text-[#c0c6d4] leading-relaxed whitespace-pre-wrap flex-1" />
                                ) : (
                                    <span className="text-[#c0c6d4] leading-relaxed whitespace-pre-wrap flex-1">{formattedMessage}</span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ActivityConsole;
