import { NavLink } from "react-router-dom";
import Logo from "./ui/logo";
import { navItemsBottom, navItemsTop } from "../data/sidebar/nav-links";
import { ChevronRight } from "lucide-react";

interface SidebarProps {
  closeSidebar?: () => void;
}

export default function Sidebar({ closeSidebar }: SidebarProps) {
  return (
    <aside className="w-64 h-full bg-white border-r border-gray-100 flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="pl-6 pt-6">
          <Logo textColor="text-[#0CC8A8]" />
        </div>

        <nav className="pr-4 mt-10 space-y-1">
          {navItemsTop.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-8 pr-4 py-3 text-sm font-medium transition-all rounded-r-full ${
                    isActive
                      ? "bg-[#E6F9F6] text-[#0CC8A8]"
                      : "text-gray-500 hover:bg-gray-50"
                  }`
                }
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="my-6 border-t border-gray-100" />

        <nav className="pr-4 space-y-1">
          {navItemsBottom.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-8 pr-4 py-3 text-sm font-medium transition-all rounded-r-full ${
                    isActive
                      ? "bg-[#E6F9F6] text-[#0CC8A8]"
                      : "text-gray-500 hover:bg-gray-50"
                  }`
                }
              >
                <Icon size={18} />
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
              alt="avatar"
              className="w-10 h-10 rounded-full bg-yellow-400 mix-blend-multiply"
            />
            <div>
              <p className="text-xs text-gray-400">admin@edu.com</p>
              <p className="text-sm font-semibold text-gray-800">
                Security Lead
              </p>
            </div>
          </div>
          <ChevronRight size={16} />
        </div>
      </div>
    </aside>
  );
}
