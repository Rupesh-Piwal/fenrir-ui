import type { ScanStatus } from "../../data/dashboard/scan";


const statusStyles: Record<
    ScanStatus,
    string
> = {
    completed: "bg-green-100 text-green-700",
    scheduled: "bg-gray-200 text-gray-700",
    failed: "bg-red-100 text-red-700",
};

export default function StatusBadge({ status }: { status: ScanStatus }) {
    return (
        <span
            className={`px-3 py-1 text-xs font-medium rounded-md capitalize ${statusStyles[status]}`}
        >
            {status}
        </span>
    );
}