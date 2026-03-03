import { Home, Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-500 hover:text-gray-700"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">Scan</span>
              <Home size={14} className="text-gray-400 ml-1" />
            </li>

            <li className="text-gray-300">/</li>

            <li>
              <Link
                to="/private-assets"
                className="text-gray-400 hover:text-gray-600 font-medium transition"
              >
                Private Assets
              </Link>
            </li>

            <li className="text-gray-300">/</li>

            <li aria-current="page">
              <span className="text-[#0CC8A8] font-medium">New Scan</span>
            </li>
          </ol>
        </nav>
      </div>

      <section aria-label="Scan actions" className="flex items-center gap-4">
        <button
          type="button"
          className="hidden sm:inline-flex px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition drop-shadow-sm"
        >
          Export Report
        </button>

        <button
          type="button"
          className="px-4 py-2 text-sm font-medium rounded-lg bg-[#FFF0F0] text-[#FF4D4F] hover:bg-[#FFE0E0] transition"
        >
          Stop Scan
        </button>
      </section>
    </header>
  );
}
