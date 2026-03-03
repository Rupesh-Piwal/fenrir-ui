import { NavLink } from "react-router-dom";
import Logo from "./ui/logo";
import { navItemsBottom, navItemsTop } from "../data/sidebar/nav-links";
import { ChevronRight } from "lucide-react";

interface SidebarProps {
  closeSidebar?: () => void;
}

export default function Sidebar({ closeSidebar }: SidebarProps) {
  return (
    <aside className="w-64 h-full bg-surface flex flex-col" aria-label="Main navigation">
      <div className="flex-1 overflow-y-auto">
        <div className="pl-6 pt-6">
          <Logo textColor="text-accent" />
        </div>

        <nav className="pr-4 mt-10 space-y-1" aria-label="Primary">
          {navItemsTop.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-8 pr-4 py-3 text-sm font-medium transition-all rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${isActive
                    ? "bg-[#0CC8A8]/20 text-accent"
                    : "text-text-secondary hover:bg-background"
                  }`
                }
              >
                <Icon size={18} aria-hidden="true" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="my-6 border-t border-border/50" />

        <nav className="pr-4 space-y-1" aria-label="Secondary">
          {navItemsBottom.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-8 pr-4 py-3 text-sm font-medium transition-all rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${isActive
                    ? "bg-[#0CC8A8]/20 text-accent"
                    : "text-text-secondary hover:bg-background"
                  }`
                }
              >
                <Icon size={18} aria-hidden="true" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between cursor-pointer group">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-xs text-text-secondary/70">admin@edu.com</p>
              <p className="text-sm font-semibold text-text-primary">
                Security Lead
              </p>
            </div>
          </div>
          <ChevronRight size={16} aria-hidden="true" />
        </div>
      </div>
    </aside>
  );
}
