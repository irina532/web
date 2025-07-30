import React from 'react';
import { FaFileAlt, FaClock, FaUserCheck, FaHourglassHalf, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r px-6 py-8">
      <div className="text-xl font-bold mb-6">Conference Portal</div>
      <div className="flex items-center mb-6">
        <img src="https://i.ibb.co/3CrmQd9/user-icon.png" alt="User" className="w-12 h-12 rounded-full mr-3" />
        <div>
          <div className="font-semibold">John Smith</div>
          <div className="text-sm text-gray-500">Admin/Chairman</div>
        </div>
      </div>
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-3 text-gray-700 font-semibold">
          <FaFileAlt /> <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FaFileAlt /> <span>All Papers</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FaClock /> <span>Pending Review</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FaUserCheck /> <span>Assigned Papers</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FaHourglassHalf /> <span>Waiting Assignment</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FaCheckCircle /> <span>Accepted Papers</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FaTimesCircle /> <span>Rejected Papers</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
