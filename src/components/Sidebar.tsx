import { NavLink } from "react-router-dom";
import Logo from "./ui/logo";
import {
  navItemsBottom,
  navItemsTop,
} from "../data/sidebar/nav-links";

interface SidebarProps {
  closeSidebar?: () => void;
}

export default function Sidebar({ closeSidebar }: SidebarProps) {
  return (
    <aside className="w-64 h-full bg-white border-r flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div>
          <Logo textColor="text-[#0CC8A8]" />
        </div>

        <nav className="px-3 space-y-1 mt-12">
          {navItemsTop.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-3xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-teal-300/40 text-teal-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="my-6 border-t" />

        <nav className="px-3 space-y-1">
          {navItemsBottom.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-teal-100 text-teal-700"
                      : "text-gray-600 hover:bg-gray-100"
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


      <div className="border-t p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">admin@edu.com</p>
              <p className="text-xs text-gray-500">Security Lead</p>
            </div>
          </div>
          <span className="text-gray-400">›</span>
        </div>
      </div>
    </aside>
  );
}
