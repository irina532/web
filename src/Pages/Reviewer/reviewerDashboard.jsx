import { useState } from 'react';
import {
  FaFileAlt
} from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';

import Topbar from '../../components/Common/Topbar';
import Sidebar from '../../components/Common/Sidebar';

const ReviewerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} role="reviewer">
        <Link
          to="/ReviewerDashboard"
          onClick={() => setIsSidebarOpen(false)}
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700"
        >
          <FaFileAlt /> Dashboard
        </Link>
        <Link
          to="/ReviewerDashboard/assignedpapers"
          onClick={() => setIsSidebarOpen(false)}
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700"
        >
          <FaFileAlt /> Assigned Papers
        </Link>
        <Link
          to="/ReviewerDashboard/assigned-proposals"
          onClick={() => setIsSidebarOpen(false)}
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700"
        >
          <FaFileAlt /> Assigned Proposals
        </Link>
        <Link
          to="/"
          onClick={() => setIsSidebarOpen(false)}
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700"
        >
          <FaFileAlt /> Review History
        </Link>
      </Sidebar>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="p-4">
  <Outlet context={{ toggleSidebar: () => setIsSidebarOpen(true) }} />
</main>

      </div>
    </div>
  );
};

export default ReviewerDashboard;
