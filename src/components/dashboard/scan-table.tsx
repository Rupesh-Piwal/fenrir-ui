import { Columns2, ListFilter, Search, Plus } from "lucide-react";
import { scans } from "../../data/dashboard/scan";
import { ProgressBar } from "../ui/progress-bar";
import StatusBadge from "../ui/status-badge";
import { VulnerabilityBadges } from "../ui/vulnerability-badge";

export default function ScanTable() {
  return (
    <section className="px-4 sm:px-6 pb-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div className="relative w-full lg:max-w-200">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            className="
              w-full
              h-10
              pl-9 pr-4
              text-sm
              rounded-lg
              border border-gray-200
              bg-gray-50
              placeholder:text-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#0CC8A8]/30
              focus:border-[#0CC8A8]
              transition
            "
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="h-10 px-4 flex items-center gap-2 text-sm font-medium border border-gray-200 bg-white rounded-lg text-gray-600 hover:bg-gray-50 transition">
            <ListFilter size={16} />
            Filter
          </button>

          <button className="h-10 px-4 flex items-center gap-2 text-sm font-medium border border-gray-200 bg-white rounded-lg text-gray-600 hover:bg-gray-50 transition">
            <Columns2 size={16} />
            Column
          </button>

          <button className="h-10 px-4 flex items-center gap-2 text-sm font-medium rounded-lg bg-[#0CC8A8] text-white hover:bg-[#0BB89A] transition shadow-sm">
            <Plus size={16} />
            New scan
          </button>
        </div>
      </div>

      <div className="hidden md:block bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-225 text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wide">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Scan Name</th>
                <th className="px-6 py-4 text-left font-medium">Type</th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
                <th className="px-6 py-4 text-left font-medium">Progress</th>
                <th className="px-6 py-4 text-left font-medium">
                  Vulnerability
                </th>
                <th className="px-6 py-4 text-left font-medium">Last Scan</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {scans.map((scan) => (
                <tr key={scan.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5 font-medium text-gray-800">
                    {scan.name}
                  </td>
                  <td className="px-6 py-5 text-gray-600">{scan.type}</td>
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
                  <td className="px-6 py-5 text-gray-500">{scan.lastScan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {scans.map((scan) => (
          <div
            key={scan.id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-gray-800 text-sm">
                {scan.name}
              </h3>
              <StatusBadge status={scan.status} />
            </div>

            <div className="text-xs text-gray-500 mb-2">
              Type: <span className="text-gray-700">{scan.type}</span>
            </div>

            <div className="mb-3">
              <ProgressBar value={scan.progress} />
            </div>

            <div className="mb-3">
              <VulnerabilityBadges vulnerabilities={scan.vulnerabilities} />
            </div>

            <div className="text-xs text-gray-400">
              Last Scan: {scan.lastScan}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
