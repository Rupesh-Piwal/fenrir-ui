import DashboardStats from "../components/dashboard/dashboard-stats";
import ScanTable from "../components/dashboard/scan-table";


const Dashboard = () => {
  return (
    <section className="flex flex-col gap-8"> 
      <DashboardStats />
      <ScanTable />
    </section>
  );
};

export default Dashboard;