import { useState, useEffect } from "react";
import DashboardStats from "../components/dashboard/dashboard-stats";
import ScanTable from "../components/dashboard/scan-table";
import DashboardStatsSkeleton from "../components/dashboard/DashboardStatsSkeleton";
import ScanTableSkeleton from "../components/dashboard/ScanTableSkeleton";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="flex flex-col gap-8" aria-label="Loading dashboard">
        <DashboardStatsSkeleton />
        <ScanTableSkeleton />
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-8 animate-fade-in">
      <DashboardStats />
      <ScanTable />
    </section>
  );
};

export default Dashboard;
