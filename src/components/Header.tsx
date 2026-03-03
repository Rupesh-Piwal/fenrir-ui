import { Home, Menu, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

interface HeaderProps {
  toggleSidebar: () => void;
  isScanRunning?: boolean;
  toggleScan?: () => void;
}

export default function Header({
  toggleSidebar,
  isScanRunning = true,
  toggleScan,
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-surface border-b border-border/50">
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-text-secondary hover:text-text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>

          <nav aria-label="Breadcrumb" className="min-w-0">
            <ol className="flex items-center gap-2 text-sm truncate">
              <li className="flex items-center gap-2 shrink-0">
                <span className="font-semibold text-text-primary">Scan</span>
                <Home size={14} className="text-text-secondary/70" aria-hidden="true" />
              </li>

              <li className="hidden sm:inline text-text-secondary/70" aria-hidden="true">/</li>

              <li className="hidden sm:inline">
                <Link
                  to="/private-assets"
                  className="text-text-secondary hover:text-text-primary font-medium transition"
                >
                  Private Assets
                </Link>
              </li>

              <li className="hidden sm:inline text-text-secondary/70" aria-hidden="true">/</li>

              <li className="truncate">
                <span className="text-accent font-medium">New Scan</span>
              </li>
            </ol>
          </nav>
        </div>

        <section
          aria-label="Scan actions"
          className="flex items-center gap-2 sm:gap-4 shrink-0"
        >
          <button
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-text-primary transition rounded-lg hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            type="button"
            aria-label="Export scan data"
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium border border-border rounded-lg text-text-primary bg-surface hover:bg-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Export
          </button>

          <button
            type="button"
            onClick={toggleScan}
            aria-label={isScanRunning ? "Stop scan" : "Start scan"}
            className={`
              px-3 sm:px-4
              py-2
              text-xs sm:text-sm
              font-medium
              rounded-lg
              transition
              border
              whitespace-nowrap
              cursor-pointer
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50
              ${isScanRunning
                ? "bg-[#FF4D4F]/5 text-[#FF4D4F] border-[#FF4D4F] hover:bg-[#FF4D4F]/10"
                : "bg-[#F0FFF4]/5 text-[#52C41A] border-[#52C41A] hover:bg-[#52C41A]/10"
              }
            `}
          >
            {isScanRunning ? "Stop" : "Start"}
            <span className="hidden sm:inline"> Scan</span>
          </button>
        </section>
      </div>
    </header>
  );
}
