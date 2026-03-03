import { Home, Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="h-13 bg-white border-b flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-600"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[13px] text-gray-500">
            <li className="flex items-center gap-2">
              <span className="font-bold text-gray-700">Scan</span>
              <Home size={12} />
            </li>

            <li className="text-gray-400">/</li>

            <li>
              <Link
                to="/private-assets"
                className="hover:text-gray-700 transition"
              >
                Private Assets
              </Link>
            </li>

            <li className="text-gray-400">/</li>

            <li aria-current="page">
              <span className="text-teal-600 font-medium">New Scan</span>
            </li>
          </ol>
        </nav>
      </div>

      <section aria-label="Scan actions" className="flex items-center gap-3">
        <button
          type="button"
          className="hidden sm:inline-flex px-4 py-2 text-sm font-medium border rounded-lg text-gray-700 hover:bg-gray-50 transition"
        >
          Export Report
        </button>

        <button
          type="button"
          className="px-4 py-2 text-sm font-medium rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
        >
          Stop Scan
        </button>
      </section>
    </header>
  );
}
