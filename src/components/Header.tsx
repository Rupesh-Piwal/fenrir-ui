import { Home, Menu, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-surface border-b border-border/50 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-text-secondary hover:text-gray-700"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="font-semibold text-text-primary">Scan</span>
              <Home size={14} className="text-text-secondary/70 ml-1" />
            </li>

            <li className="text-text-secondary/70">/</li>

            <li>
              <Link
                to="/private-assets"
                className="text-text-secondary/70 hover:text-text-secondary font-medium transition"
              >
                Private Assets
              </Link>
            </li>

            <li className="text-text-secondary/70">/</li>

            <li aria-current="page">
              <span className="text-accent font-medium">New Scan</span>
            </li>
          </ol>
        </nav>
      </div>

      <section aria-label="Scan actions" className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 text-text-secondary hover:text-text-primary transition rounded-lg hover:bg-background"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button
          type="button"
          className="hidden sm:inline-flex px-4 py-2 text-sm font-medium border border-border rounded-lg text-gray-700 bg-surface hover:bg-background transition drop-shadow-sm"
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
