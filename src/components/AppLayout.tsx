import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScanRunning, setIsScanRunning] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed z-50 inset-y-0 left-0 w-64 bg-surface border-r transform
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex
        `}
      >
        <Sidebar closeSidebar={() => setIsOpen(false)} />
      </div>

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        <Header
          toggleSidebar={() => setIsOpen(true)}
          isScanRunning={isScanRunning}
          toggleScan={() => setIsScanRunning(!isScanRunning)}
        />

        <main className="flex-1 overflow-y-auto no-scrollbar bg-background p-4">
          <Outlet context={{ isScanRunning }} />
        </main>
      </div>
    </div>
  );
}
