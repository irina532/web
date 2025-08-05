import { useState } from 'react';
import Reviewersidebar from '../components/Reviewersidebar';
import Topbar from '../components/Topbar';
import DashboardStats from '../components/DashboardStats';
import AssignedPapersTable from '../components/AssignedPapersTable';

const ReviewerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Reviewersidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 p-6">
        <Topbar onMenuClick={toggleSidebar} />
        <DashboardStats />
        <AssignedPapersTable />
      </div>
    </div>
  );
};

export default ReviewerDashboard;
