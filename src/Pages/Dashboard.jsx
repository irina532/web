import Sidebar from "../components/Common/Sidebar";
import Topbar from '../components/Common/Topbar';
import StatCard from '../components/Common/statcard';
import RecentActivity from "../components/Admin/RecentActivity";
import { FaFileAlt, FaClock, FaCheckCircle, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" isOpen={true} /> {/* always open for admin */}
      <div className="flex-1 overflow-y-auto">
        <Topbar title="Admin Dashboard" />
        <div className="p-6 space-y-6">
          <p className="text-gray-600">Manage conference papers and review teams</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <StatCard title="Total Papers" value="248" icon={<FaFileAlt className="text-xl" />} />
            <StatCard title="Pending Review" value="42" icon={<FaClock className="text-xl" />} />
            <StatCard title="Accepted" value="156" icon={<FaCheckCircle className="text-xl" />} />
            <StatCard title="Review Team" value="18" icon={<FaUsers className="text-xl" />} />
          </div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
