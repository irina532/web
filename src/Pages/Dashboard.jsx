import React from 'react';
import Sidebar from "../components/sidebar";
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import { FaFileAlt, FaClock, FaCheckCircle, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-50">
        <Header />
        <div className="p-6 space-y-6">
          <p className="text-gray-600">Manage conference papers and review teams</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <StatCard title="Total Papers" value="248" icon={<FaFileAlt className="text-xl" />} />
            <StatCard title="Pending Review" value="42" icon={<FaClock className="text-xl" />} />
            <StatCard title="Accepted" value="156" icon={<FaCheckCircle className="text-xl" />} />
            <StatCard title="Review Team" value="18" icon={<FaUsers className="text-xl" />} />
          </div>
          <div className="flex justify-center items-center space-x-6 mt-10">
            <button className="px-4 py-2 bg-white border rounded">&lt;</button>
            <span className="text-gray-600">7 / 9</span>
            <button className="px-4 py-2 bg-white border rounded">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
