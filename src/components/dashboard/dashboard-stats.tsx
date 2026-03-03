import { dashboardStats } from "../../data/dashboard/dashboardStats";
import SeverityCard from "./severity-card";

export default function DashboardStats() {
  const { meta, severities } = dashboardStats;

  return (
    <section className="w-full bg-white rounded-2xl">
      {/* META BAR */}
      <div className=" px-6 py-4 text-sm text-gray-600">
        <div className="flex flex-wrap items-center gap-6">
          <span className="flex gap-3">
            Org:<strong>{meta.orgName}</strong>
            <div className="bg-gray-300 dark:bg-white w-px h-4 ml-8"></div>
          </span>
          <span className="flex gap-3">
            Owner:<strong>{meta.owner}</strong>
            <div className="bg-gray-300 dark:bg-white w-px h-4 ml-8"></div>
          </span>
          <span className="flex gap-3">
            Total Scans:<strong>{meta.totalScans}</strong>
            <div className="bg-gray-300 dark:bg-white w-px h-4 ml-8"></div>
          </span>
          <span className="flex gap-3">
            Scheduled:<strong>{meta.scheduled}</strong>
            <div className="bg-gray-300 dark:bg-white w-px h-4 ml-8"></div>
          </span>
          <span className="flex gap-3">
            Rescans:<strong>{meta.rescans}</strong>
            <div className="bg-gray-300 dark:bg-white w-px h-4 ml-8"></div>
          </span>
          <span className="flex gap-3">
            Failed Scans:<strong>{meta.failedScans}</strong>
            <div className="bg-gray-300 dark:bg-white w-px h-4 ml-8"></div>
          </span>
          <span className="text-teal-600">{meta.lastUpdated}</span>
        </div>
      </div>

      {/* SEVERITY GRID */}
      <div className="px-6 py-6">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {severities.map((item) => (
            <SeverityCard key={item.level} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
