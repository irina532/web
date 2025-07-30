import Sidebar from '../components/Reviewersidebar';
import Topbar from '../components/Topbar';
import DashboardStats from '../components/DashboardStats';
import AssignedPapersTable from '../components/AssignedPapersTable';

const ReviewerDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6">
        <Topbar />
        <DashboardStats />
        <AssignedPapersTable />
      </div>
    </div>
  );
};

export default ReviewerDashboard;
