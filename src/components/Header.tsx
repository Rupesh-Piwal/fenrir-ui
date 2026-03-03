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
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-text-secondary hover:text-text-primary transition"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="min-w-0">
            <ol className="flex items-center gap-2 text-sm truncate">
              {/* Always visible */}
              <li className="flex items-center gap-2 shrink-0">
                <span className="font-semibold text-text-primary">Scan</span>
                <Home size={14} className="text-text-secondary/70" />
              </li>

              {/* Hide middle part on mobile */}
              <li className="hidden sm:inline text-text-secondary/70">/</li>

              <li className="hidden sm:inline">
                <Link
                  to="/private-assets"
                  className="text-text-secondary hover:text-text-primary font-medium transition"
                >
                  Private Assets
                </Link>
              </li>

              <li className="hidden sm:inline text-text-secondary/70">/</li>

              {/* Always visible current page */}
              <li className="truncate">
                <span className="text-accent font-medium">New Scan</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <section
          aria-label="Scan actions"
          className="flex items-center gap-2 sm:gap-4 shrink-0"
        >
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-text-primary transition rounded-lg hover:bg-background"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Export - hide on very small screens */}
          <button
            type="button"
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium border border-border rounded-lg text-text-primary bg-surface hover:bg-background transition"
          >
            Export
          </button>

          {/* Scan Toggle */}
          <button
            type="button"
            onClick={toggleScan}
            className={`
              px-3 sm:px-4
              py-2
              text-xs sm:text-sm
              font-medium
              rounded-lg
              transition
              border
              whitespace-nowrap
              ${
                isScanRunning
                  ? "bg-[#FFF0F0] text-[#FF4D4F] border-[#FF4D4F] hover:bg-[#FF4D4F]/10"
                  : "bg-[#F0FFF4] text-[#52C41A] border-[#52C41A] hover:bg-[#52C41A]/10"
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
