export interface ScanMeta {
    progress: number;
    currentStage: string;
    stages: string[];
    scanType: string;
    target: string;
    startedAt: string;
    credentials: string; // The UI shows "2 Active"
    files: string;
    checklists: string; // "40/350"
}

export type Severity = "Critical" | "High" | "Medium" | "Low";

export interface ScanLog {
    timestamp: string;
    message: string | React.ReactNode;
    type?: "info" | "success" | "warning";
}

export interface Finding {
    id: string;
    severity: Severity;
    title: string;
    endpoint: string;
    description: string;
    time: string;
}

export const scanMeta: ScanMeta = {
    progress: 0,
    currentStage: "Spidering",
    stages: ["Spidering", "Mapping", "Testing", "Validating", "Reporting"],
    scanType: "Grey Box",
    target: "google.com",
    startedAt: "Nov 22, 09:00AM",
    credentials: "2 Active",
    files: "Control.pdf",
    checklists: "40/350",
};

export const scanLogs: ScanLog[] = [
    {
        timestamp: "09:00:00",
        message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.",
    },
    {
        timestamp: "09:01:00",
        message: "Good! target is online. Now let me perform port scanning to identify running services.",
    },
    {
        timestamp: "09:02:00",
        message: "Excellent reconnaissance results:\n  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.",
    },
    {
        timestamp: "09:03:00",
        message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.",
    },
    {
        timestamp: "09:04:00",
        message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.",
    },
    {
        timestamp: "09:05:00",
        message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.",
    },
    {
        timestamp: "09:06:00",
        message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...",
    }
];

export const findings: Finding[] = [
    {
        id: "f1",
        severity: "Critical",
        title: "SQL Injection in Authentication Endpoint",
        endpoint: "/api/users/profile",
        description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
        time: "10:45:23",
    },
    {
        id: "f2",
        severity: "High",
        title: "Unauthorized Access to User Metadata",
        endpoint: "/api/auth/login",
        description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
        time: "10:45:23",
    },
    {
        id: "f3",
        severity: "Medium",
        title: "Broken Authentication Rate Limiting",
        endpoint: "/api/search",
        description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
        time: "10:45:23",
    }
];

export const scanStats = {
    subAgents: 0,
    parallelExecutions: 2,
    operations: 1,
    counts: {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0,
    }
};
