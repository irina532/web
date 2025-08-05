// reviewerDashboard.jsx
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Reviewersidebar from '../components/Reviewersidebar';
import Topbar from '../components/Topbar';

const ReviewerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const location = useLocation();
  const showTopbar = location.pathname === '/reviewer';

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {isSidebarOpen && (
        <Reviewersidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      )}

      <div className="flex-1 p-6 overflow-y-auto">
        {showTopbar && <Topbar onMenuClick={toggleSidebar} />}
        {/* ✅ Pass toggleSidebar into context */}
        <Outlet context={{ toggleSidebar }} />
      </div>
    </div>
  );
};

export default ReviewerDashboard;
