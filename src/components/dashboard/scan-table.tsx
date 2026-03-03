import { useState } from "react";
import { Columns2, ListFilter, Search, Plus } from "lucide-react";
import { scans } from "../../data/dashboard/scan";
import { ProgressBar } from "../ui/progress-bar";
import StatusBadge from "../ui/status-badge";
import { VulnerabilityBadges } from "../ui/vulnerability-badge";

export default function ScanTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredScans = scans.filter(
    (scan) =>
      scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scan.type.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="px-4 sm:px-6 pb-10 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div className="relative w-full lg:max-w-200">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70"
            aria-hidden="true"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search scans by name or type..."
            aria-label="Search scans by name or type"
            className="
              w-full
              h-10
              pl-9 pr-4
              text-sm
              rounded-lg
              border border-border
              bg-background
              placeholder:text-text-secondary/70
              focus:outline-none
              focus:ring-2
              focus:ring-accent/30
              focus:border-accent
              transition
            "
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            aria-label="Filter scans"
            className="h-10 px-4 flex items-center gap-2 text-sm font-medium border border-border bg-surface rounded-lg text-text-secondary hover:bg-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <ListFilter size={16} aria-hidden="true" />
            Filter
          </button>

          <button
            aria-label="Toggle columns"
            className="h-10 px-4 flex items-center gap-2 text-sm font-medium border border-border bg-surface rounded-lg text-text-secondary hover:bg-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <Columns2 size={16} aria-hidden="true" />
            Column
          </button>

          <button
            aria-label="Create new scan"
            className="h-10 px-4 flex items-center gap-2 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent/90 transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <Plus size={16} aria-hidden="true" />
            New scan
          </button>
        </div>
      </div>

      {filteredScans.length > 0 ? (
        <>
          <div className="hidden md:block bg-surface border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-225 text-sm" role="table">
                <thead className="bg-background text-text-secondary uppercase text-xs tracking-wide">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium">
                      Scan Name
                    </th>
                    <th className="px-6 py-4 text-left font-medium">Type</th>
                    <th className="px-6 py-4 text-left font-medium">Status</th>
                    <th className="px-6 py-4 text-left font-medium">
                      Progress
                    </th>
                    <th className="px-6 py-4 text-left font-medium">
                      Vulnerability
                    </th>
                    <th className="px-6 py-4 text-left font-medium">
                      Last Scan
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredScans.map((scan) => (
                    <tr
                      key={scan.id}
                      className="hover:bg-background/20 transition"
                    >
                      <td className="px-6 py-5 font-medium text-text-primary">
                        {scan.name}
                      </td>
                      <td className="px-6 py-5 text-text-secondary">
                        {scan.type}
                      </td>
                      <td className="px-6 py-5">
                        <StatusBadge status={scan.status} />
                      </td>
                      <td className="px-6 py-5 w-50">
                        <ProgressBar value={scan.progress} />
                      </td>
                      <td className="px-6 py-5">
                        <VulnerabilityBadges
                          vulnerabilities={scan.vulnerabilities}
                        />
                      </td>
                      <td className="px-6 py-5 text-text-secondary">
                        {scan.lastScan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {filteredScans.map((scan) => (
              <div
                key={scan.id}
                className="bg-surface border border-border rounded-xl p-4 shadow-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-text-primary text-sm">
                    {scan.name}
                  </h3>
                  <StatusBadge status={scan.status} />
                </div>

                <div className="text-xs text-text-secondary mb-2">
                  Type:{" "}
                  <span className="text-text-primary">{scan.type}</span>
                </div>

                <div className="mb-3">
                  <ProgressBar value={scan.progress} />
                </div>

                <div className="mb-3">
                  <VulnerabilityBadges
                    vulnerabilities={scan.vulnerabilities}
                  />
                </div>

                <div className="text-xs text-text-secondary/70">
                  Last Scan: {scan.lastScan}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-surface border border-border border-dashed rounded-xl">
          <div className="p-4 rounded-full bg-background mb-4">
            <Search size={32} className="text-text-secondary/50" aria-hidden="true" />
          </div>
          <h3 className="text-text-primary font-semibold text-lg mb-1">
            No scans found
          </h3>
          <p className="text-text-secondary text-sm max-w-xs text-center">
            No results match your search query "{searchQuery}". Try using
            different keywords.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-6 text-accent font-medium hover:underline text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded"
          >
            Clear all searches
          </button>
        </div>
      )}
    </section>
  );
}
