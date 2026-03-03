import { dashboardStats } from "../../data/dashboard/dashboardStats";
import SeverityCard from "./severity-card";

export default function DashboardStats() {
  const { meta, severities } = dashboardStats;

  return (
    <section className="w-full bg-white bg-opacity-0">
      <div className="hidden md:block pt-2 pb-6 text-xs text-gray-500 font-medium px-2">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2">
              Org: <strong className="text-gray-800">{meta.orgName}</strong>
            </span>
            <div className="bg-gray-200 w-px h-4"></div>

            <span className="flex items-center gap-2">
              Owner: <strong className="text-gray-800">{meta.owner}</strong>
            </span>
            <div className="bg-gray-200 w-px h-4"></div>

            <span className="flex items-center gap-2">
              Total Scans:{" "}
              <strong className="text-gray-800">{meta.totalScans}</strong>
            </span>
            <div className="bg-gray-200 w-px h-4"></div>

            <span className="flex items-center gap-2">
              Scheduled:{" "}
              <strong className="text-gray-800">{meta.scheduled}</strong>
            </span>
            <div className="bg-gray-200 w-px h-4"></div>

            <span className="flex items-center gap-2">
              Rescans: <strong className="text-gray-800">{meta.rescans}</strong>
            </span>
            <div className="bg-gray-200 w-px h-4"></div>

            <span className="flex items-center gap-2">
              Failed Scans:{" "}
              <strong className="text-gray-800">{meta.failedScans}</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#0CC8A8] font-semibold">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M12 7v5l4 2" />
            </svg>
            {meta.lastUpdated}
          </div>
        </div>
      </div>

      <div className="py-6 border-b border-gray-100">
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 px-2">
          {severities.map((item) => (
            <SeverityCard key={item.level} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
